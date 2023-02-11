import { capitalize } from 'lodash'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import * as React from 'react'

interface ICustomSeoProps {
  seo: any
}

const CustomSeo: React.FunctionComponent<ICustomSeoProps> = (props) => {
  const { seo } = props
  if (!seo) return <></>

  const {
    metaTitle,
    metaDescription,
    keywords,
    metaRobots,
    structuredData,
    metaViewport,
    canonicalURL,
    metaImage: {
      data: {
        attributes: { url: metaImage },
      },
    },
    metaSocial,
  } = seo

  const _renderMetaSocial = () => {
    if (!metaSocial) {
      return null
    }

    const item = metaSocial.find((item) => item.socialNetwork == 'Twitter')
    if (!item) {
      return null
    }

    return (
      <>
        <meta data-hid="twitter:title" name="twitter:title" property="twitter:title" content={item.title} />
        <meta
          data-hid="twitter:description"
          name="twitter:description"
          property="twitter:description"
          content={item.description}
        />
        <meta
          data-hid="twitter:image"
          name="twitter:image"
          property="twitter:image"
          content={item.image.data.attributes.url}
        />
        <meta
          data-hid="twitter:image:alt"
          name="twitter:image:alt"
          property="twitter:image:alt"
          content={item.image.data.attributes.alternativeText}
        />
      </>
    )
  }

  return (
    <Head>
      <NextSeo
        openGraph={{
          images: [{ url: metaImage, alt: 'meta image' }],
        }}
        title={capitalize(metaTitle)}
        description={metaDescription}
        canonical={canonicalURL}
      />
      {_renderMetaSocial()}
      {metaRobots && <meta name="robots" content={metaRobots} />}
      {structuredData && <script type="application/ld+json">{structuredData}</script>}
      {keywords && <meta name="keywords" content={keywords} />}
      {metaViewport && <meta name="viewport" content={metaViewport} />}
    </Head>
  )
}

export default CustomSeo
