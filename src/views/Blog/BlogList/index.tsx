import { Box, Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import Pagination from 'components/Common/Pagination'
import dayjs from 'dayjs'
import { DEFAULT_BLOG_LIST_QUERY, useBlogList } from 'hooks/cms'
import usePagination from 'hooks/usePagination'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface IBlogListProps {}

const BlogList: React.FunctionComponent<IBlogListProps> = (props) => {
  const router = useRouter()
  const { query } = router

  const { pagination, onPageChange } = usePagination()
  const blogList = useBlogList({
    ...DEFAULT_BLOG_LIST_QUERY,
    'pagination[page]': pagination.page,
    'pagination[pageSize]': pagination.limit,
    // category: query?.category || DEFAULT_BLOG_LIST_QUERY.category,
  })

  const { isLoading: isBlogListLoading, data: blogListData } = blogList

  return (
    <Box pt={'70px'} pb={'150px'} maxW={'1248px'} px={'24px'} mx={'auto'} as="main">
      <HStack>
        <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
        <Text mb={'8px'} fontWeight={'600'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
          News
        </Text>
      </HStack>

      <Grid
        mt={{ base: '24px', md: '32px' }}
        templateRows={{ base: 'repeat(4, 1fr)', lg: 'repeat(3, 1fr)' }}
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(12, 1fr)' }}
        gap={{ base: '32px', lg: '24px 32px' }}
      >
        {blogListData?.data?.map((blogData: BlogItemProps, key: number) => {
          const {
            attributes: {
              title,
              slug,
              content,
              readingTime,
              publishedAt,
              category,
              coverImage: {
                data: {
                  attributes: { url: coverImage },
                },
              },
            },
          } = blogData

          return (
            <GridItem
              mt={{ base: '', lg: key >= 4 ? '24px' : '' }}
              key={key}
              rowSpan={key === 0 ? { base: 1, lg: 3 } : { base: 1, lg: 1 }}
              colSpan={{ base: 1, lg: key === 0 ? 7 : key < 4 ? 5 : 6 }}
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
                    order={{ base: 4, lg: key === 0 ? 1 : 4 }}
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
                      fontSize={{ base: '28px', lg: key === 0 ? '32px' : '24px' }}
                      lineHeight={{ base: '28px', lg: key === 0 ? '34px' : '28px' }}
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
      <Pagination
        onPageChange={onPageChange}
        onLimitPerPageChange={onPageChange}
        total={blogListData?.meta.pagination.total}
        pagination={pagination}
      />
    </Box>
  )
}

export default BlogList
