import { NEXT_PUBLIC_SITE_NAME } from 'configs'
import { memoize } from 'lodash'

export type PageMeta = {
  title: string
  description?: string
  image?: string
}

export interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string } }
  defaultTitleSuffix: string
}

export const getPathList = (): PathList => {
  return {
    paths: {
      '/': { title: 'Home' },
      '/about': { basePath: true, title: 'About' },
      '/portfolio': { basePath: true, title: 'Portfolio' },
      '/services': { basePath: true, title: 'Services' },
      '/news': { basePath: true, title: 'News' },
      '/careers': { basePath: true, title: 'Careers' },

      // '/auth/login': { title: 'Login', description: 'Login to HVerse to buy HVerse' },
      // '/auth/register': { title: 'Register' },
      // '/auth/forgot-password': { title: 'Forgot password' },

      // '/breeding': { basePath: true, title: 'Breeding' },
      // '/game-play': { basePath: true, title: 'Game Play' },

      // '/marketplace': { basePath: true, title: 'Marketplace' },
      // '/marketplace/horses': { basePath: true, title: 'Horse Marketplace' },
      // '/marketplace/horses/[id]': { basePath: true, title: 'Horse Marketplace Detail' },
      // '/renting': { basePath: true, title: 'Renting' },
    },
    defaultTitleSuffix: NEXT_PUBLIC_SITE_NAME,
  }
}

export const getCustomMeta = memoize(
  (path: string, pathList: PathList): PageMeta => {
    const index = Object.entries(pathList.paths)
      .sort(([url1], [url2]) => url2.length - url1.length)
      .find(([url, data]) => data.basePath && path.startsWith(url))?.[0]
    const pathMetadata = pathList.paths[path] ?? (index ? pathList.paths[index] : null)

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
      }
    }
    return null
  },
  (path) => `${path}`,
)
