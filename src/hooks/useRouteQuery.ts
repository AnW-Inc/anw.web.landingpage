import { useRouter } from 'next/router'

export const useRouteQuery: any = (field = null) => {
  const router = useRouter()
  const { query } = router
  if (field) {
    return query[field]
  }
  return query
}
