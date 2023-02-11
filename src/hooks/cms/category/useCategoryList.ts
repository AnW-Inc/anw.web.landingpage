import * as category from '../../../apis/cms/categoryApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { categoryKeys } from './categoryKeys'

export const fetchCategoryList = async (props: any) => {
  const response = await category.getCategoryList(props)
  const { data } = response
  return data
}

export const DEFAULT_CATEGORY_QUERY = {
  // populate: 'articles',
}

export const useCategoryList = (props: any = DEFAULT_CATEGORY_QUERY) => {
  const categoryListData = useCustomQuery(categoryKeys.list(props), () => fetchCategoryList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return categoryListData
}
