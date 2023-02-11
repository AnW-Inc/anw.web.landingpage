import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getServiceList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/services', {
    params,
  })
}
