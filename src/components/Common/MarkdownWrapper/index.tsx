import { Box, BoxProps } from '@chakra-ui/react'
import * as React from 'react'
interface IMarkdownWrapperProps {
  children?: React.ReactNode
}

const MarkdownWrapper: React.FunctionComponent<IMarkdownWrapperProps & BoxProps> = (props) => {
  const { children, ...style } = props
  return (
    <Box className={`markdown`} {...style}>
      {children}
    </Box>
  )
}

export default MarkdownWrapper
