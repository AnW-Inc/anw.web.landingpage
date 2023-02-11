import { NEXT_PUBLIC_CMS_API_URL } from 'configs'
import { request } from 'graphql-request'

export const graphqlRequest = async (query: string) => {
  return await request(`${NEXT_PUBLIC_CMS_API_URL}/graphql`, query)
}
