/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from '@chakra-ui/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CustomNextNProgress from 'components/CustomNextNProgress'
import Layout from 'components/layout'
import { DefaultSeo, NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useMemo } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'styles/globals.scss'
import theme from 'styles/theme'
import defaultSEOConfig from '../../next-seo.config'
import { ReactQueryDevtools } from 'react-query/devtools'
import Fonts from 'styles/theme/foundations/fonts'
import { useRouter } from 'next/router'
import { getCustomMeta, getPathList } from 'constants/meta'

export const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps | any) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
      // once: true,
    })
  }, [])

  const { pathname } = useRouter()

  const pageMeta = useMemo(() => {
    return getCustomMeta(pathname, getPathList())
  }, [pathname])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Fonts />
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <CustomNextNProgress />
          <DefaultSeo {...defaultSEOConfig} />
          <Layout>
            <NextSeo {...pageMeta} />
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
