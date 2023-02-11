import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CareerProps } from 'components/Career/CareerCard'
import Pagination from 'components/Common/Pagination'
import EmptyText from 'components/EmptyText'
import { ServiceBgImg } from 'constants/images'
import { DEFAULT_SERVICE_LIST_QUERY, fetchServiceList, serviceKeys, useServiceList } from 'hooks/cms/service'
import usePagination from 'hooks/usePagination'
import Image from 'next/image'
import React from 'react'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import Testimonials from 'views/Home/components/Testimonials'

interface IServiceProps {
  Service: CareerProps[]
}

const Service: React.FunctionComponent<IServiceProps> = (props) => {
  const { pagination, onPageChange } = usePagination()
  const serviceList = useServiceList({
    ...DEFAULT_SERVICE_LIST_QUERY,
    'pagination[page]': pagination.page,
    'pagination[pageSize]': pagination.limit,
  })
  const { isLoading: isServiceListLoading, data: serviceListData } = serviceList
  return (
    <Box
      pt={{ base: '48px', md: '104px' }}
      as="section"
      minH={'calc(100vh)'}
      bgImage={ServiceBgImg.src}
      bgSize={'cover'}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
    >
      <Box maxW={'1248px'} pb={'48px'} mx={'auto'} w={'full'} px={'24px'}>
        <Heading textAlign={'center'} variant={'primary'} size={'h1'}>
          Delivering entertainment to the globe
        </Heading>
        <Text
          mx={'auto'}
          maxW={'804px'}
          fontSize={'20px'}
          lineHeight={'26px'}
          color={'theme.color-5'}
          mt={'16px'}
          textAlign={'center'}
        >
          We are proud of our ability to adapt quickly and evolve, always staying true to our entrepreneurial spirit.
        </Text>
        <Flex justifyContent={'center'} flexWrap={'wrap'} gap={'48px'} mt={'64px'}>
          {serviceListData &&
            serviceListData.data.map(({ attributes: service }: any, key: number) => (
              <Box
                cursor={'pointer'}
                _hover={{ transform: 'scale(1.05)' }}
                transition={'all 0.2s'}
                pb={'32px'}
                bg={'#101010'}
                key={key}
              >
                <Image
                  objectFit="cover"
                  width={368}
                  height={386}
                  src={service?.coverImage?.data?.attributes?.url}
                  alt={'service img'}
                />
                <Text
                  fontFamily={'primary'}
                  fontSize={'24px'}
                  lineHeight={'26px'}
                  color={'primary'}
                  textAlign={'center'}
                  mt={'28px'}
                >
                  {service.name}
                </Text>
                <Text
                  mt={'8px'}
                  fontSize={'16px'}
                  lineHeight={'24px'}
                  color={'#D4D4D4'}
                  fontWeight={'400'}
                  textAlign={'center'}
                  maxW={'305px'}
                  mx={'auto'}
                >
                  {service.description}
                </Text>
              </Box>
            ))}
          <Pagination
            onPageChange={onPageChange}
            onLimitPerPageChange={onPageChange}
            total={serviceListData?.meta.pagination.total}
            pagination={pagination}
          />
          {serviceListData.data.length === 0 && <EmptyText mt={'48px'} />}
        </Flex>
      </Box>
      <Testimonials />
    </Box>
  )
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [
      { key: serviceKeys.list(DEFAULT_SERVICE_LIST_QUERY), func: () => fetchServiceList(DEFAULT_SERVICE_LIST_QUERY) },
    ],
  })

  return {
    ...result,
  }
}
export default Service
