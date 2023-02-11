import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getCategoryList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/categories', {
    params,
  })
}
