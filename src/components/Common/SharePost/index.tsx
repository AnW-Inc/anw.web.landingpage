import { Box, Center, Flex, Stack, Text, Tooltip } from '@chakra-ui/react'
import * as React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import { copyText } from 'utils'
import { getPostUrl } from 'utils/cms'

export enum POST_TYPE {
  NEW = 'news',
  PORTFOLIO = 'portfolio',
}

interface ISharePostProps {
  slug: string
  type?: POST_TYPE
}

const SharePost: React.FunctionComponent<ISharePostProps> = (props) => {
  const { slug, type = POST_TYPE.NEW } = props
  return (
    <Center dir="column" mt={{ base: '24px', md: '56px' }}>
      <Text color={'#D4D4D4'} mr={'24px'}>
        Share
      </Text>
      <Stack direction={'row'} alignItems={'center'} spacing={'24px'}>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <TelegramShareButton url={getPostUrl(slug,type)}>
            <TelegramIcon size={36} round={true} />
          </TelegramShareButton>
        </Box>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <FacebookShareButton url={getPostUrl(slug,type)}>
            <FacebookIcon size={36} round={true} />
          </FacebookShareButton>
        </Box>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <TwitterShareButton url={getPostUrl(slug,type)}>
            <TwitterIcon size={36} round={true} />
          </TwitterShareButton>
        </Box>
        <Tooltip label={'Copy url'} hasArrow={true}>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            transition={'all 0.2s'}
            _hover={{
              transform: 'scale(1.2)',
            }}
            cursor={'pointer'}
            rounded={'full'}
            bg={'#272727'}
            width={'36px'}
            height={'36px'}
            onClick={() => copyText(getPostUrl(slug,type))}
          >
            <AiOutlineLink size={25} />
          </Flex>
        </Tooltip>
      </Stack>
    </Center>
  )
}

export default SharePost
