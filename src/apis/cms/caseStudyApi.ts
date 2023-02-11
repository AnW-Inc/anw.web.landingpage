import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getCaseStudyList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/case-studies', {
    params,
  })
}
