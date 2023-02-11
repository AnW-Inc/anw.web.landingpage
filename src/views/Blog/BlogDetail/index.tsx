import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import CustomSeo from 'components/Common/CustomSeo'
import MarkdownWrapper from 'components/Common/MarkdownWrapper'
import SharePost from 'components/Common/SharePost'
import EmptyText from 'components/EmptyText'
import { PortfolioDetailBgImg } from 'constants/images'

import dayjs from 'dayjs'
import { DEFAULT_BLOG_DETAIL_QUERY, DEFAULT_BLOG_LIST_QUERY, useBlogDetail, useBlogList } from 'hooks/cms'
import { useRouteQuery } from 'hooks/useRouteQuery'
import { capitalize } from 'lodash'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface IBlogDetailProps {}

const BlogDetail: React.FunctionComponent<IBlogDetailProps> = (props) => {
  const { slug } = useRouteQuery()

  const blogDetail = useBlogDetail({
    ...DEFAULT_BLOG_DETAIL_QUERY,
    'filters[slug][$eq]': slug,
  })

  const latestBlog = useBlogList({
    ...DEFAULT_BLOG_LIST_QUERY,
    'pagination[pageSize]': 4,
    'filters[slug][$ne]': slug,
  })

  const { data: blogDetailData, isLoading: isBlogDetailLoading } = blogDetail as UseQueryResult<any>
  const { data: latestBlogData, isLoading: isLatestBlogLoading } = latestBlog as UseQueryResult<{
    data: BlogItemProps[]
  }>

  const {
    attributes: { category, content, coverImage, publishedAt, readingTime, title, seo },
  } = blogDetailData

  return (
    <>
      <NextSeo title={`${capitalize(title)} - News`} />
      <CustomSeo seo={seo} />
      <Box
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        //  bgImage={PortfolioDetailBgImg.src}
      >
        <Box
          pt={{ base: '48px', md: '104px' }}
          pb={{ base: '24px', md: '80px' }}
          maxW={'1248px'}
          px={'24px'}
          mx={'auto'}
        >
          <HStack justifyContent={'center'} fontSize={'20px'} lineHeight={'26px'} color={'theme.color-5'}>
            <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
            <Text>-</Text>
            <Text>{readingTime}</Text>
          </HStack>
          <Text
            mb={'40px'}
            mt={'8px'}
            fontFamily={'primary'}
            fontWeight={600}
            fontSize={{ base: '35px', md: '60px' }}
            lineHeight={{ base: '35px', md: '60px' }}
            textAlign={'center'}
            textTransform={'capitalize'}
          >
            {title}
          </Text>
          <Image
            width={1200}
            height={682}
            quality={100}
            objectFit={'cover'}
            src={getCMSImageUrl(coverImage.data.attributes.url)}
            alt={'cover img'}
          />
          <Box maxW={'790px'} mt={'48px'} mx={'auto'}>
            <MarkdownWrapper dangerouslySetInnerHTML={{ __html: `${content}` }} />
          </Box>

          <SharePost slug={slug} />

          <Box mt={{ base: '32px', md: '100px' }}>
            <Flex gap={'24px'} justifyContent={'space-between'}>
              <HStack>
                <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
                <Text mb={'8px'} fontWeight={'600'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
                  Lasted News
                </Text>
              </HStack>
              <CustomNavLink to="/news">
                <Text color={'primary'} textDecor={'underline'}>
                  View More
                </Text>
              </CustomNavLink>
            </Flex>
            <Flex mt={'12px'} alignItems={'flex-start'} justifyContent={'space-between'} flexWrap={'wrap'} gap={'32px'}>
              {latestBlogData?.data?.map((blog) => (
                <Flex
                  py={'12px'}
                  key={blog.id}
                  borderBottom={'1px solid'}
                  borderColor={'whiteAlpha.400'}
                  gap={'12px'}
                  w={{ base: 'full', md: '500px' }}
                >
                  <Box>
                    <Image
                      width={85}
                      height={85}
                      objectFit={'cover'}
                      alt={'cover img'}
                      src={getCMSImageUrl(blog.attributes?.coverImage?.data?.attributes?.url)}
                    />
                  </Box>
                  <Box>
                    <CustomNavLink to={`/news/${blog.attributes.slug}`}>
                      <Text
                        textTransform={'capitalize'}
                        fontWeight={'700'}
                        color={'theme.color-5'}
                        _hover={{ color: 'primary' }}
                      >
                        {blog.attributes.title}
                      </Text>
                    </CustomNavLink>
                    <HStack color={'theme.color-6'} fontSize={'0.9rem'}>
                      <Text>{dayjs(blog.attributes.publishedAt).format('MMM DD, YYYY')}</Text>
                      <Text>-</Text>
                      <Text>{blog.attributes.readingTime}</Text>
                    </HStack>
                  </Box>
                </Flex>
              ))}
              {latestBlogData.data.length === 0 && <EmptyText mt={'48px'} />}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BlogDetail
