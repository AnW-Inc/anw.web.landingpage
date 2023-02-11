import * as portfolioApi from '../../../apis/cms/portfolioApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { portfolioKeys } from './portfolioKeys'

export const fetchPortfolioDetail = async (props: any) => {
  const response = await portfolioApi.getPortfolioList(props)
  const { data } = response
  if (data?.[0]) {
    return data?.[0]
  }
  return null
}

export const DEFAULT_PORTFOLIO_DETAIL_QUERY = {
  // populate: 'category, coverImage',
  'populate[category]': '*',
  'populate[coverImage]': '*',
  'populate[seo][populate][metaImage][populate]': '*',
  'populate[seo][populate][metaSocial][populate]': '*',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': 1,
}

export const usePortfolioDetail = (props: any = DEFAULT_PORTFOLIO_DETAIL_QUERY) => {
  const portfolioListData = useCustomQuery(portfolioKeys.detail(props), () => fetchPortfolioDetail(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return portfolioListData
}
