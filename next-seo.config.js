import { NEXT_PUBLIC_SITE_NAME, NEXT_PUBLIC_SITE_URL } from 'configs/index'

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: '',
  titleTemplate: `%s | ${NEXT_PUBLIC_SITE_NAME}`,
  defaultTitle: NEXT_PUBLIC_SITE_NAME,
  description:
    'Providing technology solutions, services related to nft, marketplace, landing page, cms, ... for blockchain projects.',
  canonical: NEXT_PUBLIC_SITE_URL,
  openGraph: {
    url: NEXT_PUBLIC_SITE_URL,
    title: NEXT_PUBLIC_SITE_NAME,
    description:
      'Providing technology solutions, services related to nft, marketplace, landing page, cms, ... for blockchain projects.',
    images: [
      {
        url: 'https://cdn.anw.world/images/cms/anw_thumbnail_f6fb0289fc.PNG',
        alt: `${NEXT_PUBLIC_SITE_URL} og-image`,
      },
    ],
    site_name: NEXT_PUBLIC_SITE_NAME,
  },
  twitter: {
    handle: '@anw.world',
    cardType: 'summary_large_image',
  },
}

export default defaultSEOConfig
