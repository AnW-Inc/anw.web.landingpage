import { Box, Divider, Flex, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import Image from 'next/image'
import * as React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface ILastedPortfolioProps {
  data: any
  isLoading: boolean
}

const LastedPortfolio: React.FunctionComponent<ILastedPortfolioProps> = (props) => {
  const { data, isLoading } = props
  const sliderRef = React.useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    adaptiveHeight: true,
    beforeChange: (_prev: number, next: number) => {
      setCurrentSlideIndex(next)
    },
  }
  if(!data?.data?.length){
    return null
  }
  return (
    <Box py={'48px'}>
      <Slider ref={sliderRef} {...settings}>
        {data?.data?.map((blogData: BlogItemProps, key: number) => {
          return (
            <Box key={key} w={{ base: 'full', md: 'full' }}>
              <Image
                height={600}
                width={1200}
                alt={'next img'}
                quality={100}
                objectFit={'cover'}
                src={getCMSImageUrl(blogData.attributes?.coverImage?.data?.attributes?.url)}
              />
            </Box>
          )
        })}
      </Slider>
      <Flex
        border={'1px solid rgba(37, 37, 37, .5)'}
        px={{ base: '24px', md: '40px' }}
        bg={'rgba(0, 0, 0, 0.4)'}
        py={'32px'}
        gap={{ base: '12px', md: '24px' }}
        justifyContent={'space-between'}
        flexDir={{ base: 'column', md: 'row' }}
      >
        <Box>
          <CustomNavLink to={`/portfolio/${data?.data?.[currentSlideIndex]?.attributes?.slug}`}>
            <Text
              _hover={{
                color: 'primary',
              }}
              fontFamily={'primary'}
              fontSize={{ base: '22px', md: '32px' }}
              lineHeight={{ base: '26px', md: '34px' }}
              fontWeight={'600'}
              textTransform={'capitalize'}
            >
              {data?.data?.[currentSlideIndex]?.attributes?.title}
            </Text>
          </CustomNavLink>
          <Divider my={'8px'} borderColor={'rgba(255, 255, 255, 0.5)'} />
          <Text textTransform={'capitalize'}>{data?.data?.[currentSlideIndex]?.attributes?.category?.data?.attributes?.name}</Text>
        </Box>
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
    </Box>
  )
}

export default LastedPortfolio
