import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
// import { sentryLogger } from '../../utils/logger/sentry'

export function useCustomQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>,
): UseQueryResult<TData, TError> {
  const customOptions = {
    ...options,
    onError: (error: TError) => {
      if (options?.onError) {
        options?.onError(error)
      }
      // sentryLogger(error)
    },
  }
  const query = useQuery(queryKey, queryFn, customOptions)

  return query
}
