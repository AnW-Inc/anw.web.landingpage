import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getTestimonialList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/testimonials', {
    params,
  })
}
