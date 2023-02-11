import { blogKeys, DEFAULT_BLOG_LIST_QUERY, fetchBlogList } from 'hooks/cms'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import BlogList from 'views/Blog/BlogList'

interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
  return <BlogList />
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [{ key: blogKeys.list(DEFAULT_BLOG_LIST_QUERY), func: () => fetchBlogList(DEFAULT_BLOG_LIST_QUERY) }],
  })

  return {
    ...result,
  }
}

export default BlogPage
