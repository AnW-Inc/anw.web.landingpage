import colors from './foundations/colors'
import { fonts } from './foundations/fonts'

export const globalStyles = {
  styles: {
    global: () => ({
      body: {
        bg: colors.theme['color-3'],
        // color: 'black',
        fontFamily: fonts.default,
        color: colors.theme['color-5'],
        fontSize: { base: '17px', md: '18px' },
        lineHeight: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        overflowX: 'hidden',
      },
      html: {
        fontFamily: fonts.default,
        bg: colors.theme['color-3'],
      },
    }),
  },
}
