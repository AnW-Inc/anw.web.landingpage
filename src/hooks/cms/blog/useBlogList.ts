import * as blogApi from '../../../apis/cms/blogApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { blogKeys } from './blogKeys'

export const fetchBlogList = async (props: any) => {
  if (props?.category !== 'all' && props?.category) {
    props['filters[category][slug]'] = props?.category
  }
  delete props?.category

  const response = await blogApi.getBlogList(props)
  return response
}

export const DEFAULT_BLOG_LIST_QUERY = {
  sort: 'updatedAt:desc',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': DEFAULT_PAGINATION.limit,
  populate: 'coverImage',
  // populate: 'category, coverImage',
  // category: 'all',
}

export const useBlogList = (props: any = DEFAULT_BLOG_LIST_QUERY) => {
  const blogListData = useCustomQuery(blogKeys.list(props), () => fetchBlogList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return blogListData
}
