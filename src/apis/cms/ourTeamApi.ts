import axiosService from 'apis/axiosService'
import { APIResponseProps } from '../types'

export async function getOurTeamList(params: any): Promise<APIResponseProps> {
  return axiosService.get('/our-teams', {
    params,
  })
}
