import * as serviceApi from '../../../apis/cms/serviceApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { serviceKeys } from './serviceKeys'

export const fetchServiceList = async (props: any) => {
  const response = await serviceApi.getServiceList(props)
  return response
}

export const DEFAULT_SERVICE_LIST_QUERY = {
  sort: 'updatedAt:desc',
  populate: '*',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': DEFAULT_PAGINATION.limit,
}

export const useServiceList = (props: any = DEFAULT_SERVICE_LIST_QUERY) => {
  const serviceListData = useCustomQuery(serviceKeys.list(props), () => fetchServiceList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return serviceListData
}
