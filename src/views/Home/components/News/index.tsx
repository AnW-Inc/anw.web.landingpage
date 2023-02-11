import { Box, Flex, Grid, GridItem, Heading, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import dayjs from 'dayjs'
import { DEFAULT_BLOG_LIST_QUERY, useBlogList } from 'hooks/cms'
import Image from 'next/image'
import React from 'react'
import { getCMSImageUrl } from 'utils'
import { BlogItemProps } from 'utils/cms'

interface INewsProps {}

const News: React.FunctionComponent<INewsProps> = (props) => {
  const blogList = useBlogList({
    ...DEFAULT_BLOG_LIST_QUERY,
    'pagination[pageSize]': 4,
  })
  const { isLoading: isBlogListLoading, data: blogListData } = blogList

  return (
    <Box as="section" pt={{ base: '48px', md: '104px' }} maxW={'1248px'} mx={'auto'} px={'24px'}>
      <Flex
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        maxW={'1248px'}
        mx={'auto'}
        flexDir={{ base: 'column', md: 'row' }}
        gap={'24px'}
        flexWrap={'wrap'}
      >
        <Box>
          <HStack>
            <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
            <Text mb={'8px'} fontWeight={'600'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
              News
            </Text>
          </HStack>
          <Heading color={'theme.color-5'} variant={'primary'} size={'h2'} maxW={'647px'}>
            Check out what’s new at A&W!
          </Heading>
        </Box>
        <Text maxW={'440px'} color={'theme.color-6'} fontSize={'18px'} lineHeight={'24px'}>
          Deep dive into the latest news on your favorite games, as well as stories from 9385 all over the world.
        </Text>
      </Flex>
      <Flex justifyContent={'flex-end'} mb={'64px'}>
        <CustomNavLink to="/news">
          <Text color={'primary'} textDecor={'underline'}>
            View More
          </Text>
        </CustomNavLink>
      </Flex>
      <Grid
        templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(3, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(12, 1fr)' }}
        gap={{ base: '32px', lg: '32px' }}
      >
        {blogListData?.data?.map((blogData: BlogItemProps, key: number) => {
          const {
            attributes: { title, slug, content, readingTime, publishedAt, category },
          } = blogData
          const coverImage = blogData?.attributes?.coverImage?.data?.attributes?.url

          return (
            <GridItem
              key={key}
              rowSpan={key === 0 ? { base: 1, lg: 3 } : { base: 1, lg: 1 }}
              colSpan={{ base: 1, lg: key === 0 ? 7 : 5 }}
            >
              <Flex gap={'16px'} flexDir={{ base: 'column', lg: key === 0 ? 'column' : 'row' }}>
                <Box
                  position={'relative'}
                  w={{ base: 'full', lg: key === 0 ? '672px' : '174px' }}
                  h={{ base: '330px', lg: key === 0 ? '330px' : '142px' }}
                >
                  <Image
                    objectFit={'cover'}
                    layout={'fill'}
                    alt={`${title} img cover`}
                    src={getCMSImageUrl(coverImage)}
                  />
                </Box>
                <Flex flexDir={'column'} flex={1}>
                  <HStack
                    order={{ base: 4, lg: key === 0 ? 1 : 1 }}
                    mt={'8px'}
                    fontSize={'14px'}
                    lineHeight={'22px'}
                    color={'#8C8C8C'}
                  >
                    <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
                    <Text>-</Text>
                    <Text>{readingTime}</Text>
                  </HStack>
                  <CustomNavLink to={`/news/${slug}`}>
                    <Text
                      order={2}
                      mt={{ base: 0, lg: key === 0 ? '16px' : '0px' }}
                      fontFamily={'primary'}
                      fontSize={{ base: '28px', lg: key === 0 ? '32px' : '18px' }}
                      lineHeight={'34px'}
                      fontWeight={600}
                      textTransform={'capitalize'}
                      _hover={{ color: 'primary' }}
                    >
                      {title}
                    </Text>
                  </CustomNavLink>
                  {/* <Box
                    order={3}
                    color={'theme.color-5'}
                    fontSize={'16px'}
                    lineHeight={'24px'}
                    mt={'8px'}
                    noOfLines={{ base: 3, lg: key === 0 ? 3 : 2 }}
                    dangerouslySetInnerHTML={{ __html: `${content}` }}
                  /> */}
                </Flex>
              </Flex>
            </GridItem>
          )
        })}
      </Grid>
    </Box>
  )
}

export default News
