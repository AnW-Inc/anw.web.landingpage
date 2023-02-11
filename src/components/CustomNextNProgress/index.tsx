import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
// import NextNProgress from 'nextjs-progressbar'

interface ICustomNextNProgressProps {}

const CustomNextNProgress: React.FunctionComponent<ICustomNextNProgressProps> = (props) => {
  const router = useRouter()

  React.useEffect(() => {
    const handleStart = (_url: any) => {
      // console.log(`Loading: ${_url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return <>{/* <NextNProgress color={`${colors.primary}`} /> */}</>
}

export default CustomNextNProgress
