import * as ourTeamApi from '../../../apis/cms/ourTeamApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { ourTeamKeys } from './ourTeamsKeys'

export const fetchOurTeamList = async (props: any) => {
  const response = await ourTeamApi.getOurTeamList(props)
  return response
}

export const DEFAULT_OUR_TEAM_LIST_QUERY = {
  sort: 'updatedAt:desc',
  populate: '*',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': 100,
}

export const useOurTeamList = (props: any = DEFAULT_OUR_TEAM_LIST_QUERY) => {
  const ourTeamListData = useCustomQuery(ourTeamKeys.list(props), () => fetchOurTeamList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return ourTeamListData
}
