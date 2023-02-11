import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getCareerList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/careers', {
    params,
  })
}
