import { ComponentStyleConfig } from '@chakra-ui/react'

export const Input: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        border: '2px solid gray',
        // color: 'white',
        fontWeight: 'bold',
        h: '51px',
        _invalid: { border: 'none', boxShadow: '0 0 0 2px #FF4B32' },
        _placeholder: { color: '#7D9D9D' },
        _focus: {
          borderColor: '#c90fe6',
          boxShadow: 'none',
        },
      },
    },
    pagination: {
      field: {
        type: 'number',
        border: '2px solid',
        borderColor: '#2A2A2A',
        bg: '#080808',
        textAlign: 'center',
        w: '70px',
        h: '40px',
        fontSize: '14px',
        lineHeight: '32px',
        fontFamily: 'default',
        fontWeight: '500',
      },
    },
  },
  sizes: {
    lg: {
      field: {
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '24px',
      },
    },
  },
}
