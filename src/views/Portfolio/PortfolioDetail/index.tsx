import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import CustomSeo from 'components/Common/CustomSeo'
import Loading from 'components/Common/Loading'
import SharePost, { POST_TYPE } from 'components/Common/SharePost'
import { PortfolioDetailBgImg } from 'constants/images'
// import MarkdownWrapper from 'components/Common/MarkdownWrapper'
const MarkdownWrapper = dynamic(() => import('components/Common/MarkdownWrapper'), { ssr: false })

import dayjs from 'dayjs'
import { DEFAULT_PORTFOLIO_DETAIL_QUERY, usePortfolioDetail } from 'hooks/cms'
import { useRouteQuery } from 'hooks/useRouteQuery'
import { capitalize } from 'lodash'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { getCMSImageUrl } from 'utils/cms'

interface IPortfolioDetailProps {}

const PortfolioDetail: React.FunctionComponent<IPortfolioDetailProps> = (props) => {
  const { slug } = useRouteQuery()

  const portfolioDetail = usePortfolioDetail({
    ...DEFAULT_PORTFOLIO_DETAIL_QUERY,
    'filters[slug][$eq]': slug,
  })

  const { data: portfolioDetailData, isLoading: isPortfolioDetailLoading } = portfolioDetail as UseQueryResult<any>

  if (isPortfolioDetailLoading && !portfolioDetailData) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} minH={'100vh'}>
        <Loading />
      </Flex>
    )
  }

  const {
    attributes: { category, content, coverImage, publishedAt, readingTime, title, seo },
  } = portfolioDetailData

  return (
    <>
      <NextSeo title={`${capitalize(title)} - Portfolio`} />
      <CustomSeo seo={seo} />
      <Box bgPos={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} bgImage={PortfolioDetailBgImg.src}>
        <Box
          pt={{ base: '48px', md: '104px' }}
          pb={{ base: '24px', md: '80px' }}
          maxW={'1248px'}
          px={'24px'}
          mx={'auto'}
        >
          {/* <VStack spacing={'12px'} alignItems={'flex-start'} as={'article'}>
        <HStack fontSize={'0.9rem'} color={'gray.400'}>
          <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
          <Text>-</Text>
          <Text>{readingTime}</Text>
        </HStack>
        <HStack>
          <CustomNavLink key={category?.data?.id} to={`/blog?category=${category?.data?.attributes?.slug}`}>
            <Text textTransform={'uppercase'} color={'primary'}>
              {category?.data?.attributes?.name}
            </Text>
          </CustomNavLink>
        </HStack>
        <Heading>{title}</Heading>

      </VStack> */}

          <HStack justifyContent={'center'} fontSize={'20px'} lineHeight={'26px'} color={'theme.color-5'}>
            <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
            <Text>-</Text>
            <Text textTransform={'capitalize'}>{category?.data?.attributes?.name}</Text>
          </HStack>
          <Text
            mb={'40px'}
            mt={'8px'}
            fontFamily={'primary'}
            fontWeight={600}
            fontSize={{ base: '35px', md: '60px' }}
            lineHeight={{ base: '35px', md: '60px' }}
            textAlign={'center'}
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

          <SharePost type={POST_TYPE.PORTFOLIO} slug={slug} />
        </Box>
      </Box>
    </>
  )
}

export default PortfolioDetail
