import { useRouter } from 'next/router'
import queryString from 'query-string'
import { useCallback, useMemo } from 'react'
import { useRouteQuery } from './useRouteQuery'

export const DEFAULT_PAGINATION = {
  limit: 10,
  page: 1,
  skip: 0,
}

const usePagination = (initialState = DEFAULT_PAGINATION) => {
  const query = useRouteQuery()
  const router = useRouter()
  const { page: defaultPage, limit: defaultLimit } = initialState

  const { page = defaultPage, limit = defaultLimit } = query
  const pagination = useMemo(() => {
    let pageNumber = parseInt(page.toString(), 10)
    pageNumber = isNaN(pageNumber) ? defaultPage : pageNumber

    let limitNumber = parseInt(limit.toString(), 10)
    limitNumber = isNaN(limitNumber) ? defaultLimit : limitNumber

    return { page: pageNumber, limit: limitNumber }
  }, [page, limit, defaultPage, defaultLimit])

  const onPageChange = useCallback(
    (newPage, newLimit = limit) => {
      const { pathname = '' } = router

      const newQuery = queryString.stringify({ ...query, page: newPage, limit: newLimit })
      router.push(`${pathname}?${newQuery}`)
    },
    [limit, query, router],
  )

  return {
    pagination,
    onPageChange,
  }
}

export default usePagination
