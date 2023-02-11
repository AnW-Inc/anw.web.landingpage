import type { DeepPartial, Theme } from '@chakra-ui/react'

/** override chakra space here */
const overridenChakraSpace: DeepPartial<Theme['space']> = {}

/** custom space here */
const customSpace = {
  default: '24px',
}

const space = {
  ...overridenChakraSpace,
  ...customSpace,
}

export default space
