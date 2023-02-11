import { Box, Center, Divider, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface IBlogCardProps {
  data: BlogItemProps
}

const BlogCard: React.FunctionComponent<IBlogCardProps> = (props) => {
  const { data } = props
  const {
    attributes: {
      title,
      slug,
      content,
      readingTime,
      publishedAt,
      category,
    },
  } = data
  const coverImage = data?.attributes?.coverImage?.data?.attributes?.url
  const router = useRouter()

  useEffect(() => {
    router.prefetch(`/blog/${slug}`)
  }, [router, slug])

  return (
    <Box>
      <Box>
        <Center border={'1px solid'} borderColor={'border.primary'} borderRadius={'12px'} mb={'12px'}>
          <Image width={398} height={248} alt={`${title} img cover`} src={getCMSImageUrl(coverImage)} />
        </Center>

        <CustomNavLink to={`/blog/${slug}`}>
          <Text fontWeight={'700'} color={'primary'}>
            {title}
          </Text>
        </CustomNavLink>
        <HStack fontSize={'0.9rem'} color={'gray.400'}>
          <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
          <Text>-</Text>
          <Text>{readingTime}</Text>
        </HStack>
      </Box>
      <Divider borderColor={'white'} my={'6px'} />
    </Box>
  )
}

export default BlogCard
