import { Box, Flex } from '@chakra-ui/layout'
import { keyframes } from '@chakra-ui/system'
import React from 'react'

interface ILoadingProps {}

const spin = keyframes`
 50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 20px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 5px;
  }
`

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  return (
    <Flex justify="center" alignItems="center">
      <Box
        animation={`${spin} 2s ease infinite`}
        minW="50px"
        height="50px"
        border="5px solid transparent"
        borderTopColor="#ff8510"
        borderBottomColor="#ff8510"
        borderRadius="50%"
      />
    </Flex>
  )
}

export default Loading
