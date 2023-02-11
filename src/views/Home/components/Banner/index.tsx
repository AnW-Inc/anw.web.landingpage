import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { DEFAULT_HOME_PAGE_QUERY, useHomePage } from 'hooks/cms/home-page'
import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { getCMSImageUrl } from 'utils/cms'

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  const homePage = useHomePage({
    ...DEFAULT_HOME_PAGE_QUERY,
  })
  const { isLoading: isHomePageLoading, data: homePageData } = homePage

  const settings = {
    className: 'home-banner-slider',
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: homePageData?.data?.attributes?.blocks?.find((item) => item.__component === 'blocks.slider')?.itemPerSlide || 1,
    slidesToScroll: homePageData?.data?.attributes?.blocks?.find((item) => item.__component === 'blocks.slider')?.itemPerSlide || 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    adaptiveHeight: true,
  }

  return (
    <Box as={'section'}>
      <Slider {...settings}>
        {homePageData?.data?.attributes?.blocks
          ?.find((item) => item.__component === 'blocks.slider')
          ?.slideItems?.map((slide, key) => (
            <Box key={key} w={{ base: 'full', md: 'full' }}>
              <Image
                height={762}
                width={1440}
                objectFit={'cover'}
                alt={'next img'}
                quality={100}
                src={getCMSImageUrl(slide?.image?.data?.attributes?.url)}
              />
            </Box>
          ))}
      </Slider>
      <Box bg={'primary'}>
        <Flex
          justifyContent={'space-between'}
          py={'40px'}
          px={'24px'}
          maxW={'1248px'}
          mx={'auto'}
          color={'#272727'}
          fontWeight={600}
          gap={'24px'}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Text fontSize={'24px'} lineHeight={'26px'} fontFamily={'primary'}>
            The #1 Gaming fast-growing companies 2022
          </Text>
          <CustomNavLink to="/portfolio">
            <HStack
              _hover={{
                textDecor: 'underline',
              }}
              fontSize={'18px'}
              lineHeight={'24px'}
              spacing={'8px'}
            >
              <Text>Explore More</Text>
              <AiOutlineArrowRight fontWeight={'bold'} size={24} />
            </HStack>
          </CustomNavLink>
        </Flex>
      </Box>
    </Box>
  )
}

export default Banner
