// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools'
// 2. Update the breakpoints as key-value pairs
export const breakpointValues = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1440px',
}
export const breakpoints = createBreakpoints(breakpointValues)
