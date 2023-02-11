import * as caseStudyApi from '../../../apis/cms/caseStudyApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { caseStudyKeys } from './caseStudyKeys'

export const fetchCaseStudyList = async (props: any) => {
  if (props?.category !== 'all' && props?.category) {
    props['filters[category][slug]'] = props?.category
  }
  delete props?.category

  const response = await caseStudyApi.getCaseStudyList(props)
  return response
}

export const DEFAULT_CASE_STUDY_LIST_QUERY = {
  sort: 'updatedAt:desc',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': DEFAULT_PAGINATION.limit,
  populate: 'coverImage',
}

export const useCaseStudyList = (props: any = DEFAULT_CASE_STUDY_LIST_QUERY) => {
  const caseStudyListData = useCustomQuery(caseStudyKeys.list(props), () => fetchCaseStudyList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return caseStudyListData
}
