import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getHomePage(params: any): Promise<APIResponseProps> {
  return axiosService.get('/home-page', {
    params,
  })
}
