import { MutationFunction, useMutation, UseMutationOptions, UseMutationResult } from 'react-query'
// import { sentryLogger } from '../../utils/logger/sentry'

export function useCustomMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>,
): UseMutationResult<TData, TError, TVariables, TContext> {
  // const customOptions = {
  //   ...options,
  //   onError: (error: TError, variables: TVariables, context: TContext) => {
  //     if (options?.onError) {
  //       options?.onError(error, variables, context)
  //     }
  //     // sentryLogger(error)
  //   },
  // }

  const mutation = useMutation(mutationFn, options)

  return mutation
}
