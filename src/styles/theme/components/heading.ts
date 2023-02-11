import { ComponentStyleConfig } from '@chakra-ui/react'
import { fonts } from '../foundations/fonts'

export const Heading: ComponentStyleConfig = {
  variants: {
    primary: {
      color: '#fff',
      fontWeight: 600,
    },
  },
  sizes: {
    h1Big: {
      fontSize: { base: '30px', md: '80px' },
      lineHeight: { base: '45px', md: '80px' },
    },
    h1: {
      fontSize: { base: '32px', md: '60px' },
      lineHeight: { base: '32px', md: '60px' },
    },
    h2: {
      fontSize: { base: '28px', md: '48px' },
      lineHeight: { base: '32px', md: '50px' },
    },
  },
  baseStyle: {
    fontFamily: fonts.primary,
  },
}
