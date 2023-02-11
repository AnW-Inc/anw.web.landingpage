import { blogKeys, DEFAULT_BLOG_DETAIL_QUERY, DEFAULT_BLOG_LIST_QUERY, fetchBlogDetail, fetchBlogList } from 'hooks/cms'
import { GetStaticPaths } from 'next'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import BlogDetail from 'views/Blog/BlogDetail'

interface IBlogDetailPageProps {}

const BlogDetailPage: React.FunctionComponent<IBlogDetailPageProps> = (props) => {
  return <BlogDetail />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { slug = '' } = params
  const blogDetailProps = { ...DEFAULT_BLOG_DETAIL_QUERY, 'filters[slug][$eq]': slug }
  const latestBlogProps = {
    ...DEFAULT_BLOG_LIST_QUERY,
    'pagination[pageSize]': 4,
    'filters[slug][$ne]': slug,
  }

  const result: any = await getStaticPropsWithQueryClient({
    isCallWithMetaData: false,
    queries: [
      {
        key: blogKeys.detail(blogDetailProps),
        func: () => fetchBlogDetail(blogDetailProps),
      },
      {
        key: blogKeys.list(latestBlogProps),
        func: () => fetchBlogList(latestBlogProps),
      },
    ],
  })

  const blogDetailData = result?.props.dehydratedState.queries.find(
    (item: any) => JSON.stringify(item.queryKey) === JSON.stringify(blogKeys.detail(blogDetailProps)),
  ).state.data

  if (!blogDetailData) {
    return {
      revalidate: 1,
      notFound: true,
    }
  }

  return {
    ...result,
  }
}

export default BlogDetailPage
