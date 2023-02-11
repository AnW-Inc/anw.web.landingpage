import { ComponentStyleConfig } from '@chakra-ui/react'
import colors from '../foundations/colors'
import { fonts } from '../foundations/fonts'

export const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      fontFamily: fonts.default,
      fontWeight: '500',
      color: 'white',
      rounded: 'none',
      minH: '40px',
      padding: '11px 32px',
      bg: 'primary',
      fontSize: '16px',
      lineHeight: '24px',
      _hover: {
        transition: 'all 0.2s',
        // filter: 'brightness(.8)',
        bg: 'primary',
        // transform: { base: 'scale(1.1)', md: 'scale(1.2)' },
      },
    },
    secondary: {
      background: 'transparent',
      fontFamily: fonts.primary,
      fontWeight: '300',
      border: '1px solid',
      borderColor: 'orange.500',
      color: 'orange.500',
      rounded: 'none',
      minH: '40px',
    },
    pagination: {
      fontFamily: fonts.primary,
      color: '#F3F3FF',
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '24px',
      width: '40px',
      height: '40px',
      border: `2px solid`,
      borderColor: '#2A2A2A',
      bg: '#080A0D',
      borderRadius: '7px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      _hover: {
        bg: 'primary',
        filter: 'none',
      },
      _disabled: {
        bg: '#080A0D',
        opacity: '0.5',
        borderColor: '#2A2A2A',
      },
    },
    third: {
      border: `1px solid ${colors.primary}`,
      background: 'rgba(255, 189, 19, .1)',
      boxShadow: 'inset 0 0 30px rgb(255 189 19 / 80%)',
      backdropFilter: 'blur(10px)',
      color: '#fff',
      borderRadius: '2rem',
      minWidth: '88px',
      transition: 'all 0.25s',
      _focus: {
        filter: 'brightness(1.2)',
        transition: 'all 0.25s',
        background: 'rgba(255, 189, 19, .1)',
      },
      _active: {
        filter: 'brightness(1.2)',
        transition: 'all 0.25s',
        background: 'rgba(255, 189, 19, .1)',
      },
      _hover: {
        filter: 'brightness(1.2)',
        transition: 'all 0.25s',
        background: 'rgba(255, 189, 19, .1)',
      },
    },
  },
  sizes: {
    sm: {
      padding: '16px 24px',
      fontSize: '16px',
      lineHeight: '16px',
    },
    md: {
      padding: '16px 24px',
    },
    lg: {
      padding: '19px 40px',
      fontSize: '18px',
      lineHeight: '27px',
    },
  },
  baseStyle: {
    fontWeight: '700',
    fontFamily: fonts.default,
    borderRadius: 'none',
    color: '#080518',
    padding: '14px 40px',
    fontSize: '12px',
    lineHeight: '24px',
    background: '#1C1C1C',
    paddingInlineStart: '40px',
    transition: 'all 0.2s',
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      transition: 'all 0.2s',
      filter: 'brightness(1.2)',
      // transform: { base: 'scale(1.1)', md: 'scale(1.2)' },
    },
  },
}
