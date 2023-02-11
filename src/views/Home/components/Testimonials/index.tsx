import { Box, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import { HomeFbImg, HomeTwImg } from 'constants/images'
import { DEFAULT_TESTIMONIAL_LIST_QUERY, useTestimonialList } from 'hooks/cms/testimonial'
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { getCMSImageUrl } from 'utils'

interface ITestimonialsProps {}

const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
  const sliderRef = React.useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const testimonialList = useTestimonialList({
    ...DEFAULT_TESTIMONIAL_LIST_QUERY,
  })
  const { isLoading: isTestimonialListListLoading, data: testimonialListData } = testimonialList
  const [isBase] = useMediaQuery('(max-width: 30em)') // sm

  const numberItemPerSlide = React.useMemo(() => {
    if (isBase) {
      return 1
    }
    return 2
  }, [isBase])

  const settings = {
    className: 'home-testimonial-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Box as="section" pt={{ base: '48px', md: '104px' }}>
      <Box maxW={'1248px'} mx={'auto'} px={'24px'}>
        <Flex
          alignItems={'flex-end'}
          justifyContent={'space-between'}
          mb={'64px'}
          maxW={'1248px'}
          mx={'auto'}
          flexDir={{ base: 'column', md: 'row' }}
          gap={'24px'}
          flexWrap={'wrap'}
        >
          <Box>
            <HStack>
              <Box width={'36px'} h={'2px'} bg={'#6B6B6B'} />
              <Text mb={'8px'} fontWeight={'600'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
                Testimonials
              </Text>
            </HStack>
            <Heading variant={'primary'} size={'h2'} maxW={'647px'}>
              Hear what our amazing customers say
            </Heading>
          </Box>
          <Text maxW={'440px'} color={'#6B6B6B'} fontSize={'18px'} lineHeight={'24px'}>
            Testimonials from Satisfied Customers of 9385 Studio
          </Text>
        </Flex>
      </Box>{' '}
      <Box mx={'auto'} maxW={'1248px'} px={'24px'}>
        <Slider ref={sliderRef} {...settings}>
          {testimonialListData?.data?.map((testimonialData: any, key: number) => {
            return (
              <Box p={'40px'} bg={key % 2 === 0 ? 'primary' : '#101010'} w={{ base: 'full', md: 'full' }} key={key}>
                <Image width={56} height={56} alt={'icon'} src={key % 2 === 0 ? HomeFbImg : HomeTwImg} />
                <Text
                  fontSize={'16px'}
                  lineHeight={'24px'}
                  color={key % 2 === 0 ? '#000' : 'white'}
                  py={'8px'}
                  my={'8px'}
                  w={'full'}
                  h={'120px'}
                  overflowY={'auto'}
                >
                  {testimonialData.attributes.content}
                </Text>
                <HStack>
                  <Image
                    height={46}
                    width={46}
                    objectFit={'cover'}
                    alt={'next img'}
                    quality={100}
                    src={getCMSImageUrl(testimonialData.attributes?.avatar?.data?.attributes?.url)}
                  />
                  <Box>
                    <Text fontSize={'16px'} lineHeight={'24px'} color={key % 2 === 0 ? '#272727' : 'white'}>
                      {testimonialData.attributes.name}
                    </Text>
                    <Text fontSize={'14px'} lineHeight={'22px'} color={key % 2 === 0 ? '#6B6B6B' : '#EAEAEA'}>
                      {testimonialData.attributes.title}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}

export default Testimonials
