import { Box, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import { DEFAULT_OUR_TEAM_LIST_QUERY, useOurTeamList } from 'hooks/cms/ourTeam'
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { getCMSImageUrl } from 'utils'

interface IOurTeamProps {}

const OurTeam: React.FunctionComponent<IOurTeamProps> = (props) => {
  const sliderRef = React.useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const ourTeamList = useOurTeamList({
    ...DEFAULT_OUR_TEAM_LIST_QUERY,
  })
  const { isLoading: ourTeamListListLoading, data: ourTeamListData } = ourTeamList
  const [isBase] = useMediaQuery('(max-width: 30em)') // sm

  const numberItemPerSlide = React.useMemo(() => {
    if (isBase) {
      return 1
    }
    return 3
  }, [isBase])

  const settings = {
    className: 'home-testimonial-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
          <Flex gap={{ base: '0', md: '24px' }}>{dots}</Flex>
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
    <Box py={{ base: '40px', md: '80px' }} mx={'auto'} px={'24px'} maxW={'1248px'} w={'full'} as={'section'}>
      <Heading textAlign={'center'} mx={'auto'} variant={'primary'} size={'h2'} maxW={'578px'}>
        The amazing team behind 9385 Studio
      </Heading>

      <Box mt={{ base: '32px', md: '64px' }}>
        <Slider ref={sliderRef} {...settings}>
          {ourTeamListData?.data?.map((ourTeamData: any, key: number) => {
            return (
              <Box key={key} px={'16px'}>
                <Box width={'316px'} height={'544px'} position={'relative'}>
                  <Box
                    bottom={'40px'}
                    left={'50%'}
                    transform={'translateX(-50%)'}
                    w={'252px'}
                    zIndex={1}
                    pos={'absolute'}
                    bg={'white'}
                    p={'16px'}
                    textAlign={'center'}
                  >
                    <Text
                      textTransform={'capitalize'}
                      color={'#272727'}
                      fontWeight={600}
                      fontFamily={'primary'}
                      fontSize={'24px'}
                      lineHeight={'26px'}
                    >
                      {ourTeamData.attributes.name}
                    </Text>
                    <Text mt={'4px'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
                      {ourTeamData.attributes.title}
                    </Text>
                  </Box>
                  <Image
                    objectFit="cover"
                    layout="fill"
                    alt={'our team avatar'}
                    src={getCMSImageUrl(ourTeamData.attributes?.avatar?.data?.attributes?.url)}
                  />
                </Box>
              </Box>
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}

export default OurTeam
