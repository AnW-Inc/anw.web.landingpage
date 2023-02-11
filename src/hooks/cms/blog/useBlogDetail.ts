import * as blogApi from '../../../apis/cms/blogApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { blogKeys } from './blogKeys'

export const fetchBlogDetail = async (props: any) => {
  const response = await blogApi.getBlogList(props)
  const { data } = response
  if (data?.[0]) {
    return data?.[0]
  }
  return null
}

export const DEFAULT_BLOG_DETAIL_QUERY = {
  // populate: '*',
  'populate[coverImage]': '*',
  'populate[seo][populate][metaImage][populate]': '*',
  'populate[seo][populate][metaSocial][populate]': '*',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': 1,
}

export const useBlogDetail = (props: any = DEFAULT_BLOG_DETAIL_QUERY) => {
  const blogDetailData = useCustomQuery(blogKeys.detail(props), () => fetchBlogDetail(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return blogDetailData
}
