import { Box, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import { DEFAULT_CASE_STUDY_LIST_QUERY, useCaseStudyList } from 'hooks/cms'
import Image from 'next/image'
import * as React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { getCMSImageUrl } from 'utils/cms'

interface ICaseStudyProps {}

const CaseStudy: React.FunctionComponent<ICaseStudyProps> = (props) => {
  const sliderRef = React.useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const caseStudyList = useCaseStudyList({
    ...DEFAULT_CASE_STUDY_LIST_QUERY,
  })
  const { isLoading: isCaseStudyListLoading, data: caseStudyListData } = caseStudyList
  const [isBase] = useMediaQuery('(max-width: 30em)') // sm

  const numberItemPerSlide = React.useMemo(() => {
    if (isBase) {
      return 1
    }
    return 4
  }, [isBase])
  const settings = {
    className: 'home-caseStudy-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    // draggable: false,
    // swipeToSlide: false,
    // swipe: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 955,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: any) => {
      return (
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'full'}
          position={'relative'}
          maxW={'1248px'}
          px={'24px'}
          mx={'auto'}
        >
          <Flex gap={'24px'}>{dots}</Flex>
          <HStack justifyContent={{ base: 'end' }} spacing={{ base: '12px', md: '30px' }}>
            <Flex
              onClick={() => sliderRef.current.slickPrev()}
              justifyContent={'center'}
              alignItems={'center'}
              w={'44px'}
              h={'44px'}
              bg={'#272727'}
              p={'6px'}
              cursor={'pointer'}
              _hover={{
                filter: 'brightness(1.2)',
              }}
            >
              <AiOutlineArrowLeft />
            </Flex>
            <Flex
              onClick={() => sliderRef.current.slickNext()}
              justifyContent={'center'}
              alignItems={'center'}
              w={'44px'}
              h={'44px'}
              bg={'#272727'}
              p={'6px'}
              cursor={'pointer'}
              _hover={{
                filter: 'brightness(1.2)',
              }}
            >
              <AiOutlineArrowRight />
            </Flex>
          </HStack>
        </Flex>
      )
    },
    beforeChange: (_prev: number, next: number) => {
      setCurrentSlideIndex(next)
    },
    customPaging: (index: number) => {
      const activeStyle = {
        bg: '#F6F9FC',
        w: { base: '15px', md: '45px' },
      }

      return (
        <Box
          w={{ base: '6px', md: '32px' }}
          h={{ base: '3px', md: '8px' }}
          bg={'#8C8C8C'}
          borderTopLeftRadius={'2px'}
          borderBottomLeftRadius={'4px'}
          borderBottomRightRadius={'2px'}
          borderTopRightRadius={'4px'}
          {...(index * numberItemPerSlide === currentSlideIndex && activeStyle)}
        />
      )
    },
  }

  return (
    <Box pt={{ base: '48px', md: '104px' }} pb={{ base: '48px', md: '122px' }} as={'section'}>
      <Flex
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        mb={'64px'}
        maxW={'1248px'}
        px={'24px'}
        mx={'auto'}
        flexDir={{ base: 'column', md: 'row' }}
        gap={'24px'}
        flexWrap={'wrap'}
      >
        <Box>
          <HStack>
            <Box width={'36px'} h={'2px'} bg={'#6B6B6B'} />
            <Text mb={'8px'} fontWeight={'600'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
              Case Studies
            </Text>
          </HStack>
          <Heading variant={'primary'} size={'h2'} maxW={'647px'}>
            Not convinced? Take a look at some of our case studies
          </Heading>
        </Box>
        <Text maxW={'440px'} color={'#6B6B6B'} fontSize={'18px'} lineHeight={'24px'}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum.{' '}
        </Text>
      </Flex>

      <Slider ref={sliderRef} {...settings}>
        {caseStudyListData?.data?.map((caseStudyData: any, key: number) => {
          return (
            <Box position={'relative'} maxW={'584px'} w={{ base: 'full', md: 'full' }} key={key}>
              <Box textAlign={'center'}>
                <Image
                  height={354}
                  width={584}
                  objectFit={'cover'}
                  alt={'next img'}
                  quality={100}
                  src={getCMSImageUrl(caseStudyData.attributes?.coverImage?.data?.attributes?.url)}
                />
                <Flex
                  flexDir={'column'}
                  justifyContent={'flex-end'}
                  bg={'rgba(0,0,0,.4)'}
                  p={'24px'}
                  bottom={'0'}
                  h={'full'}
                  w={'full'}
                  pos={'absolute'}
                >
                  <Text fontFamily={'primary'} fontSize={'24px'} lineHeight={'26px'} fontWeight={'600'}>
                    {caseStudyData.attributes.name}
                  </Text>
                  <Text color={'#EAEAEA'} fontSize={'16px'} lineHeight={'24px'}>
                    {caseStudyData.attributes.description}
                  </Text>
                </Flex>
              </Box>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default CaseStudy
