import { dehydrate, QueryCache, QueryClient } from 'react-query'

interface QueryType {
  key: any
  func: (any?: any) => void
}

interface FuncProps {
  queries?: QueryType[]
  props?: {}
  isCallWithMetaData?: boolean
}

/**
 *
 * @param queries: Array Query {key: string, func: function}
 * @param props: Props will be returned with the return value of the function
 * @param isCallWithMetaData: param queries will call and map with metadata
 * @returns GetStaticProps
 */
export const getStaticPropsWithQueryClient = async ({ queries = [], props = {} }: FuncProps) => {
  let statusCode = 200

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: async (error: any, _query) => {
        const { status } = error
        if (status >= 400) {
          statusCode = status
        } else if (status >= 500) {
          statusCode = status
        }
      },
    }),
  })

  const queryList = queries.map((item) => queryClient.prefetchQuery(item.key, async () => item.func()))

  await Promise.all(queryList)

  switch (statusCode) {
    case 404:
      return {
        revalidate: 1,
        notFound: true,
      }

    case 500:
      return {
        revalidate: 1,
        redirect: {
          destination: '/500',
          permanent: false,
        },
      }

    default:
      return {
        props: {
          dehydratedState: dehydrate(queryClient || null),
          ...props,
        },
        revalidate: 10,
      }
  }
}
