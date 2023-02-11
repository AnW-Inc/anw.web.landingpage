import * as portfolioApi from '../../../apis/cms/portfolioApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { portfolioKeys } from './portfolioKeys'

export const fetchPortfolioList = async (props: any) => {
  if (props?.category !== 'all' && props?.category) {
    props['filters[category][slug]'] = props?.category
  }
  delete props?.category

  const response = await portfolioApi.getPortfolioList(props)
  return response
}

export const DEFAULT_PORTFOLIO_LIST_QUERY = {
  sort: 'updatedAt:desc',
  populate: 'category, coverImage',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': DEFAULT_PAGINATION.limit,
  category: undefined,
}

export const usePortfolioList = (props: any = DEFAULT_PORTFOLIO_LIST_QUERY) => {
  const portfolioListData = useCustomQuery(portfolioKeys.list(props), () => fetchPortfolioList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return portfolioListData
}
