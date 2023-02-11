import { Box, Flex } from '@chakra-ui/react'
import Pagination from 'components/Common/Pagination'
import EmptyText from 'components/EmptyText'
import { PortfolioBgImg } from 'constants/images'
import { DEFAULT_PORTFOLIO_LIST_QUERY, useCategoryList, usePortfolioList } from 'hooks/cms'
import usePagination from 'hooks/usePagination'
import { useRouter } from 'next/router'
import * as React from 'react'
import { BlogItemProps } from 'utils/cms'
import LastedPortfolio from './components/LastedPortfolio'
import PortfolioCard from './components/PortfolioCard'

interface IPortfolioListProps {}

const PortfolioList: React.FunctionComponent<IPortfolioListProps> = (props) => {
  const router = useRouter()
  const { query } = router

  const { pagination, onPageChange } = usePagination()
  const portfolioList = usePortfolioList({
    ...DEFAULT_PORTFOLIO_LIST_QUERY,
    'pagination[page]': pagination.page,
    'pagination[pageSize]': pagination.limit,
    // 'pagination[page]': query?.page || DEFAULT_PORTFOLIO_LIST_QUERY['pagination[page]'],
    // 'pagination[pageSize]': query?.limit || DEFAULT_PORTFOLIO_LIST_QUERY['pagination[pageSize]'],
    category: query?.category || DEFAULT_PORTFOLIO_LIST_QUERY.category,
  })

  const lastedPortfolioList = usePortfolioList({
    ...DEFAULT_PORTFOLIO_LIST_QUERY,
  })

  const categoryList = useCategoryList()

  const { isLoading: isLastedPortfolioListLoading, data: lastedPortfolioListData } = lastedPortfolioList
  const { isLoading: isPortfolioListLoading, data: portfolioListData } = portfolioList
  const { isLoading: isCategoryListLoading, data: categoryListData } = categoryList

  return (
    <Box bgImage={PortfolioBgImg.src} bgRepeat={'no-repeat'} bgSize={'auto'} as="section" bgPos={'center'}>
      <Box pt={'60px'} pb={'40px'} maxW={'1248px'} px={'24px'} mx={'auto'}>
        <Flex
          fontSize={'16px'}
          fontWeight={'600'}
          lineHeight={'24px'}
          flexWrap={'wrap'}
          gap={'12px'}
          justifyContent={{ base: 'flex-start', md: 'flex-end' }}
          borderBottom={'1px solid rgba(107, 107, 107, .5)'}
          pb={'48px'}
        >
          <Box
            onClick={() => {
              router.push(`/portfolio?category=all`)
            }}
            cursor={'pointer'}
            p={'8px 24px'}
            _hover={{ bg: 'primary' }}
            bg={query?.category === 'all' || !query?.category ? 'primary' : '#5A5A5A'}
            color={query?.category === 'all' ? '#272727' : '#000000'}
            textAlign={'center'}
            textTransform={'uppercase'}
          >
            ALL
          </Box>
          {categoryListData?.map((ctg: any) => (
            <Box
              key={ctg.id}
              _hover={{ bg: 'primary' }}
              cursor={'pointer'}
              p={'8px 24px'}
              bg={query?.category === ctg.attributes.slug ? 'primary' : '#5A5A5A'}
              color={query?.category === ctg.attributes.slug ? '#272727' : '#000000'}
              onClick={() => {
                router.push(`/portfolio?category=${ctg.attributes.slug}`)
              }}
              textAlign={'center'}
              textTransform={'uppercase'}
            >
              {ctg.attributes.name}
            </Box>
          ))}
        </Flex>

        <LastedPortfolio isLoading={isLastedPortfolioListLoading} data={lastedPortfolioListData} />

        <Flex
          mt={'48px'}
          flexWrap={'wrap'}
          justifyContent={{ base: 'center', lg: 'space-between' }}
          w={'full'}
          gap={'48px'}
        >
          {portfolioListData?.data?.map((blogData: BlogItemProps, key: number) => (
            <Box key={key} maxW={'566px'} w={{ base: 'full', md: 'full' }}>
              <PortfolioCard data={blogData} />
            </Box>
          ))}
        </Flex>
        <Pagination
          onPageChange={onPageChange}
          onLimitPerPageChange={onPageChange}
          total={portfolioListData?.meta.pagination.total}
          pagination={pagination}
        />
        {portfolioListData?.data.length === 0 && <EmptyText mt={'24px'} />}
      </Box>
    </Box>
  )
}

export default PortfolioList
