// const withPWA = require('next-pwa')

const getImageDomain = (url) => {
  return url.replace('https://', '').replace('http://', '').split(':')[0]
}

/** @type {import('next').NextConfig} */
// module.exports = withPWA({
//   pwa: {
//     disable:
//       process.env.NODE_ENV === 'development' ||
//       process.env.NODE_ENV === 'preview' ||
//       process.env.NODE_ENV === 'production',

//     // delete two lines above to enable PWA in production deployment
//     // add your own icons to public/manifest.json
//     // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
//     dest: 'public',
//     register: true,
//   },
//   reactStrictMode: true,
//   eslint: {
//     dirs: ['src'],
//   },
//   images: {
//     domains: [getImageDomain(process.env.NEXT_PUBLIC_CMS_API_URL), getImageDomain(process.env.NEXT_PUBLIC_CDN_URL)],
//   },
//   // webpack: (config) => {
//   //   // config.module.rules.push({
//   //   //   test: /\.pdf$/,
//   //   //   use: {
//   //   //     loader: 'file-loader',
//   //   //     options: {
//   //   //       // name: '[path][name].[ext]',
//   //   //       outputPath: 'static/media/pdf',
//   //   //       name: () => {
//   //   //         if (process.env.NODE_ENV === 'development') {
//   //   //           return '[path][name].[ext]'
//   //   //         }

//   //   //         return '[contenthash].[ext]'
//   //   //       },
//   //   //     },
//   //   //   },
//   //   // })
//   //   return config
//   // },
// })

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: [getImageDomain(process.env.NEXT_PUBLIC_CMS_API_URL), getImageDomain(process.env.NEXT_PUBLIC_CDN_URL)],
  },
}
