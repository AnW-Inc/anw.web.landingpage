import * as testimonialApi from 'apis/cms/testimonialApi'
import { useCustomQuery } from '../../customQuery/useCustomQuery'
import { testimonialKeys } from './testimonialKeys'

export const fetchTestimonialList = async (props: any) => {
  if (props?.category !== 'all' && props?.category) {
    props['filters[category][slug]'] = props?.category
  }
  delete props?.category

  const response = await testimonialApi.getTestimonialList(props)
  return response
}

export const DEFAULT_TESTIMONIAL_LIST_QUERY = {
  sort: 'updatedAt:desc',
  populate: 'avatar',
}

export const useTestimonialList = (props: any = DEFAULT_TESTIMONIAL_LIST_QUERY) => {
  const testimonialListData = useCustomQuery(testimonialKeys.list(props), () => fetchTestimonialList(props), {
    keepPreviousData: true,
    staleTime: 5000,
  })

  return testimonialListData
}
