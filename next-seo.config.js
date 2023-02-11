import { NEXT_PUBLIC_SITE_NAME, NEXT_PUBLIC_SITE_URL } from 'configs/index'

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: '',
  titleTemplate: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  defaultTitle: NEXT_PUBLIC_SITE_NAME,
  description:
    'We are a leading game development company help you build your game idea into reality. check our Game design and development services/portfolios.',
  canonical: NEXT_PUBLIC_SITE_URL,
  openGraph: {
    url: NEXT_PUBLIC_SITE_URL,
    title: NEXT_PUBLIC_SITE_NAME,
    description:
      'We are a leading game development company help you build your game idea into reality. check our Game design and development services/portfolios.',
    images: [
      {
        url: 'https://static-cdn.novabase.io/images/nova-studio/thumnail_786baf3fa6.png',
        alt: `${NEXT_PUBLIC_SITE_URL} og-image`,
      },
    ],
    site_name: NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@9385.games',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
