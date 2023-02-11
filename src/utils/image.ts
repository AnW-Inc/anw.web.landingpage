import { NEXT_PUBLIC_CMS_API_URL } from 'configs'

export interface ImageCMSProps {
  attributes: {
    url: string
  }
}

export const getCMSImageUrl = (url: string) => {
  if(!url){
    return ''
  }
  if (url.startsWith('/')) {
    return `${NEXT_PUBLIC_CMS_API_URL}${url}`
  }

  return url
}
