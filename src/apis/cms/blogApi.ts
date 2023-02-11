import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getBlogList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/articles', {
    params,
  })
}
