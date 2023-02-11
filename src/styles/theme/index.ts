import { extendTheme, space } from '@chakra-ui/react'
import { Button } from './components/button'
import { Input } from './components/input'
import { Heading } from './components/heading'
import { linkStyles } from './components/link'
import colors from './foundations/colors'
import { fonts } from './foundations/fonts'
import { globalStyles } from './styles'
// import { mode } from "@chakra-ui/theme-tools";

export default extendTheme(
  {
    components: {
      Button,
      Input,
      Heading,
    },
    config: {
      initialColorMode: 'light',
    },
  }, // Breakpoints
  globalStyles, // Global styles
  space,
  { fonts, colors },
  linkStyles, // Link styles
)
