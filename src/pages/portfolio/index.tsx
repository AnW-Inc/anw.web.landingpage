import {
  categoryKeys,
  DEFAULT_CATEGORY_QUERY,
  DEFAULT_PORTFOLIO_LIST_QUERY,
  fetchCategoryList,
  fetchPortfolioList,
  portfolioKeys,
} from 'hooks/cms'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import PortfolioList from 'views/Portfolio/PortfolioList'

interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
  return <PortfolioList />
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [
      {
        key: portfolioKeys.list(DEFAULT_PORTFOLIO_LIST_QUERY),
        func: () => fetchPortfolioList(DEFAULT_PORTFOLIO_LIST_QUERY),
      },
      { key: categoryKeys.list(DEFAULT_CATEGORY_QUERY), func: () => fetchCategoryList(DEFAULT_CATEGORY_QUERY) },
    ],
  })

  return {
    ...result,
  }
}

export default BlogPage
