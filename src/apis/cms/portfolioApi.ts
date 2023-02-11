import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getPortfolioList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/portfolios', {
    params,
  })
}
