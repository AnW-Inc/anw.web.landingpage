import { fonts } from './foundations/fonts'

export const globalStyles = {
  styles: {
    global: () => ({
      body: {
        bg: '#000000;',
        // color: 'black',
        fontFamily: fonts.default,
        color: 'white',
        fontSize: { base: '17px', md: '18px' },
        lineHeight: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        overflowX: 'hidden',
      },
      html: {
        fontFamily: fonts.default,
        bg: '#000000;',
      },
    }),
  },
}
