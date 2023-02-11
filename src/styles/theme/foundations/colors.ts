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
  primary: '#ff7e40',
  theme: {
    ['color-1']: '#ff7e40',
    ['color-2']: '#ee725b',
    ['color-3']: '#f9faf4',
    ['color-4']: '#f7e7bd',
    ['color-5']: '#2a464c',
    ['color-6']: '#98a2a3',
  },
}

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
  ...customColors,
}

export default colors
