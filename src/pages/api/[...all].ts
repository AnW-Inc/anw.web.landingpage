import { NEXT_PUBLIC_CMS_API_URL } from 'configs'
import { NextApiRequest, NextApiResponse } from 'next'
import httpProxyMiddleware from 'next-http-proxy-middleware'

const apiProxy = (req: NextApiRequest, res: NextApiResponse) => {
  const proxyOptions = [
    // CMS: blog, wiki
    {
      target: NEXT_PUBLIC_CMS_API_URL,
      pathRewrite: [
        {
          patternStr: '^/api',
          replaceStr: '/api',
        },
      ],
    },
    // {
    //   // dapp api
    //   target: NEXT_PUBLIC_API_URL,
    //   pathRewrite: [
    //     {
    //       patternStr: '^/api',
    //       replaceStr: '/api',
    //     },
    //   ],
    // },
  ]

  const url = req?.url || ''
  const proxyOption = proxyOptions.find(({ pathRewrite }) => {
    return pathRewrite.some(({ patternStr }) => RegExp(patternStr).test(url))
  })

  if (proxyOption) {
    return httpProxyMiddleware(req, res, proxyOption)
  } else {
    return res.status(404).send(null)
  }
}

export default apiProxy
