import { createStandaloneToast } from '@chakra-ui/react'

interface toastProps {
  message?: String
  title?: String
}

const toast = createStandaloneToast({ colorMode: 'dark' })

export const toastError = ({ title = 'Error', message = 'Something went wrong!' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'error',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}
export const toastSuccess = ({ title = '', message = 'Success' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'success',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}

export const toastInfo = ({ title = '', message = 'Info' }: toastProps) => {
  toast({
    title,
    description: message,
    status: 'info',
    duration: 3000,
    isClosable: true,
    position: 'top',
  })
}

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text)
  toastSuccess({ title: 'Copied' })
}
