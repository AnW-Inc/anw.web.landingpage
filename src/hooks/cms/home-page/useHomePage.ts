import * as homePageApi from '../../../apis/cms/homePageApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { homePageKeys } from './homePageKeys'

export const fetchHomePage = async (props: any) => {
  const response = await homePageApi.getHomePage(props)
  return response
}

export const DEFAULT_HOME_PAGE_QUERY = {
  // sort: 'updatedAt:desc',
  'populate[blocks][populate][slideItems][populate]': '*',
  // 'pagination[page]': DEFAULT_PAGINATION.page,
  // 'pagination[pageSize]': DEFAULT_PAGINATION.limit,
}

export const useHomePage = (props: any = DEFAULT_HOME_PAGE_QUERY) => {
  const homePageData = useCustomQuery(homePageKeys.detail(props), () => fetchHomePage(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return homePageData
}
