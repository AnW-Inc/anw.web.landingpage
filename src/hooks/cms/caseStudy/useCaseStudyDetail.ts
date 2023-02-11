import * as caseStudyApi from '../../../apis/cms/caseStudyApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { DEFAULT_PAGINATION } from '../../usePagination'
import { caseStudyKeys } from './caseStudyKeys'

export const fetchCaseStudyDetail = async (props: any) => {
  const response = await caseStudyApi.getCaseStudyList(props)
  const { data } = response
  if (data?.[0]) {
    return data?.[0]
  }
  return null
}

export const DEFAULT_CASE_STUDY_DETAIL_QUERY = {
  // populate: 'category, coverImage',
  populate: 'coverImage',
  'pagination[page]': DEFAULT_PAGINATION.page,
  'pagination[pageSize]': 1,
}

export const useCaseStudyDetail = (props: any = DEFAULT_CASE_STUDY_DETAIL_QUERY) => {
  const caseStudyListData = useCustomQuery(caseStudyKeys.detail(props), () => fetchCaseStudyDetail(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return caseStudyListData
}
