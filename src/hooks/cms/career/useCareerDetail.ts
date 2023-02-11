import * as careerApi from '../../../apis/cms/careerApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { careerKeys } from './careerKeys'

export const fetchCareerDetail = async (props: any) => {
  const response = await careerApi.getCareerList(props)
  const { data } = response
  if (data?.[0]) {
    return data?.[0]
  }
  return null
}

export const DEFAULT_CAREER_DETAIL_QUERY = {
  populate: 'category, coverImage',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': 1,
}

export const useCareerDetail = (props: any = DEFAULT_CAREER_DETAIL_QUERY) => {
  const careerDetailData = useCustomQuery(careerKeys.detail(props), () => fetchCareerDetail(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return careerDetailData
}
