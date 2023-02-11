import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import CareerCard, { CareerProps } from 'components/Career/CareerCard'
import Pagination from 'components/Common/Pagination'
import EmptyText from 'components/EmptyText'
import { ArrowIcon } from 'constants/icons'
import { CareerBannerImg, CareerPatternImg } from 'constants/images'
import { careerKeys, DEFAULT_CAREER_LIST_QUERY, fetchCareerList, useCareerList } from 'hooks/cms/career'
import usePagination from 'hooks/usePagination'
import Image from 'next/image'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { getStaticPropsWithQueryClient } from 'utils/ssr'

interface ICareersProps {
  careers: CareerProps[]
}

const Careers: React.FunctionComponent<ICareersProps> = (props) => {
  const { pagination, onPageChange } = usePagination()
  const careerList = useCareerList({
    ...DEFAULT_CAREER_LIST_QUERY,
    'pagination[page]': pagination.page,
    'pagination[pageSize]': pagination.limit,
  })
  const { isLoading: isCareerListLoading, data: careerListData } = careerList

  return (
    <Box as="section" pb={'80px'} minH={'calc(100vh)'}>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        pt={'104px'}
        py={'64px'}
        bgImage={CareerBannerImg.src}
        bgSize={'cover'}
        textAlign={'center'}
        px={'24px'}
      >
        <Text fontFamily={'primary'} fontWeight={'600'} lineHeight={'60px'} fontSize={'60px'}>
          Careers
        </Text>
        <Text fontSize={'20px'} lineHeight={'28px'} color={'#6B6B6B'} maxW={'720px'} mt={'16px'} mb={'40px'}>
          Become a 9385 Studio Member <br/> We have plenty of opportunities available. From game design & production to
          marketing & administration, there’s bound to be a job position for you. <br/>Your dream job at Game Studio is just
          a few clicks away!
        </Text>
        <ScrollLink to={'#career-list'} spy={true} smooth={true} duration={500}>
          <HStack
            transition={'all 0.2s'}
            color={'#6B6B6B'}
            _hover={{
              cursor: 'pointer',
              transform: 'scale(1.02)',
              color: 'white',
            }}
            spacing={'8px'}
          >
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              w={'40px'}
              h={'40px'}
              borderRadius={'full'}
              bg={'#272727'}
            >
              <Image width={24} height={24} src={ArrowIcon.src} alt={'arrow icon'} />
            </Flex>
            <Text>Join Our Team</Text>
          </HStack>
        </ScrollLink>
      </Flex>
      <Box overflow={'hidden'} id="#career-list" position={'relative'}>
        <Box pos={'absolute'} top={'-100px'} zIndex={'-99'} right={'-24px'}>
          <Image src={CareerPatternImg} alt={'pattern img'} />
        </Box>
        <Box
          fontWeight={'600'}
          fontSize={'18px'}
          lineHeight={'24px'}
          color={'#6B6B6B'}
          pt={'44px'}
          maxW={'1248px'}
          px={'24px'}
          mx={'auto'}
        >
          <Flex justifyContent={'space-between'}>
            <Text>Role</Text>
            <Text>Search result found: {careerListData?.meta.pagination.total}</Text>
          </Flex>
          <VStack mt={'28px'} spacing={'20px'}>
            {careerListData &&
              careerListData.data.map(({ attributes: career }: { attributes: CareerProps }, key: number) => (
                <CareerCard career={career} key={key} />
              ))}

            {careerListData.data.length === 0 && <EmptyText mt={'48px'} />}
          </VStack>
        </Box>
        <Pagination
          onPageChange={onPageChange}
          onLimitPerPageChange={onPageChange}
          total={careerListData?.meta.pagination.total}
          pagination={pagination}
        />
      </Box>
    </Box>
  )
}

export const getStaticProps = async () => {
  const result = await getStaticPropsWithQueryClient({
    queries: [
      { key: careerKeys.list(DEFAULT_CAREER_LIST_QUERY), func: () => fetchCareerList(DEFAULT_CAREER_LIST_QUERY) },
    ],
  })

  return {
    ...result,
  }
}
export default Careers
