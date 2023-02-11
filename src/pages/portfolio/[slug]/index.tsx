import { DEFAULT_PORTFOLIO_DETAIL_QUERY, fetchPortfolioDetail, portfolioKeys } from 'hooks/cms'
import { GetStaticPaths } from 'next'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import PortfolioDetail from 'views/Portfolio/PortfolioDetail'

interface IPortfolioDetailPageProps {}

const PortfolioDetailPage: React.FunctionComponent<IPortfolioDetailPageProps> = (props) => {
  return <PortfolioDetail />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { slug = '' } = params
  const portfolioDetailProps = { ...DEFAULT_PORTFOLIO_DETAIL_QUERY, 'filters[slug][$eq]': slug }

  const result: any = await getStaticPropsWithQueryClient({
    queries: [
      {
        key: portfolioKeys.detail(portfolioDetailProps),
        func: () => fetchPortfolioDetail(portfolioDetailProps),
      },
    ],
  })

  const portfolioDetailData = result?.props.dehydratedState.queries.find(
    (item: any) => JSON.stringify(item.queryKey) === JSON.stringify(portfolioKeys.detail(portfolioDetailProps)),
  ).state.data

  if (!portfolioDetailData) {
    return {
      revalidate: 1,
      notFound: true,
    }
  }

  return {
    ...result,
  }
}

export default PortfolioDetailPage
