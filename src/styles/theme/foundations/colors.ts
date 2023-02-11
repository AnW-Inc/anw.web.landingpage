import type { DeepPartial, Theme } from '@chakra-ui/react'

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['blackAlpha']>> = {
  brand: {
    100: '',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },
}

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {}

/** custom colors here */
const customColors = {
  primary: '#F2A100',
}

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
  ...customColors,
}

export default colors
