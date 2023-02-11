import { Text, TextProps } from '@chakra-ui/react'
import * as React from 'react'

interface IEmptyTextProps extends TextProps {}

const EmptyText: React.FunctionComponent<IEmptyTextProps> = (props) => {
  return (
    <Text textAlign={'center'} {...props}>
      It&lsquo;s Empty
    </Text>
  )
}

export default EmptyText
