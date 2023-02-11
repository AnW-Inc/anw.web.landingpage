import { IS_BROWSER } from '../../configs'
import { ImageCMSItemProps } from './image'
export interface BlogCategoryProps {
  id: number
  attributes: {
    name: string
    slug: string
  }
}
export interface BlogItemProps {
  id: number
  attributes: {
    title: string
    slug: string
    content: string
    readingTime: string
    publishedAt: string
    coverImage: ImageCMSItemProps
    category: {
      data: BlogCategoryProps
    }
    seo?: any
  }
}

export const getPostUrl = (slug: string, prefix = 'news') => {
  if (IS_BROWSER) {
    const originUrl = window?.location?.origin
    return `${originUrl}/${prefix}/${slug}`
  }
  return '/'
}
