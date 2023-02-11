import * as careerApi from '../../../apis/cms/careerApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { careerKeys } from './careerKeys'

export const fetchCareerList = async (props: any) => {
  const response = await careerApi.getCareerList(props)
  return response
}

export const DEFAULT_CAREER_LIST_QUERY = {
  sort: 'updatedAt:desc',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': DEFAULT_PAGINATION.limit,
}

export const useCareerList = (props: any = DEFAULT_CAREER_LIST_QUERY) => {
  const careerListData = useCustomQuery(careerKeys.list(props), () => fetchCareerList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return careerListData
}
