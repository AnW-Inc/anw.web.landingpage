import axios from 'axios'
import { IS_BROWSER, NEXT_PUBLIC_CMS_API_URL, NEXT_PUBLIC_SITE_URL } from 'configs'
import queryString from 'query-string'
// import { setupCache } from 'axios-cache-adapter'

// const cache = setupCache({ maxAge: 15 * 60 * 100, exclude: { query: false } })
// const noCache = setupCache({ maxAge: 0 })

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosService = axios.create({
  baseURL: `${IS_BROWSER ? NEXT_PUBLIC_SITE_URL : NEXT_PUBLIC_CMS_API_URL}/api`,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
  // adapter: cache.adapter,
})

axiosService.interceptors.request.use(async (config) => {
  // const userData = getUserData()
  // const token = 'accessToken' in userData ? userData.accessToken : ''
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`
  // }
  return config
})

axiosService.interceptors.response.use(
  (response) => {
    // check them is success
    if (response && response.data) {
      return response.data
    }

    return response
  },
  (error) => {
    // if (error.response.status === 401) {
    //   throw new CustomError('Login session has expired. Please login again!')
    // }
    // sentryLogger(error.response)
    throw error.response
  },
)

export default axiosService
