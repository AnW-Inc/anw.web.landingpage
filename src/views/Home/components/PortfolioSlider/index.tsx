import { Box, Divider, Flex, Heading, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { DEFAULT_PORTFOLIO_LIST_QUERY, usePortfolioList } from 'hooks/cms'
import Image from 'next/image'
import * as React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Slider from 'react-slick'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface IPortfolioSliderProps {}

const PortfolioSlider: React.FunctionComponent<IPortfolioSliderProps> = (props) => {
  const sliderRef = React.useRef<any>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const portfolioList = usePortfolioList({
    ...DEFAULT_PORTFOLIO_LIST_QUERY,
  })
  const { isLoading: isPortfolioListLoading, data: portfolioListData } = portfolioList
  const [isBase] = useMediaQuery('(max-width: 30em)') // sm

  const numberItemPerSlide = React.useMemo(() => {
    if (isBase) {
      return 1
    }
    if (portfolioListData.data.length < 4) {
      return portfolioListData.data.length
    }
    return 4
  }, [isBase, portfolioListData.data.length])
  const settings = {
    className: 'home-portfolio-slider',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: numberItemPerSlide,
    slidesToScroll: numberItemPerSlide,
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
          slidesToShow: numberItemPerSlide,
          slidesToScroll: numberItemPerSlide,
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
          <Box>{dots}</Box>
          <HStack justifyContent={{ base: 'end' }} spacing={{ base: '12px', md: '30px' }}>
            <Flex
              onClick={() => sliderRef.current.slickPrev()}
              justifyContent={'center'}
              alignItems={'center'}
              w={'44px'}
              h={'44px'}
              bg={'theme.color-6'}
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
              bg={'theme.color-6'}
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
        bg: 'theme.color-1',
        w: { base: '15px', md: '45px' },
      }

      return (
        <Box
          w={{ base: '6px', md: '32px' }}
          h={{ base: '3px', md: '8px' }}
          bg={'theme.color-6'}
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
      >
        <Box color={'theme.color-5'}>
          <HStack>
            <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
            <Text mb={'8px'} fontWeight={'600'} fontSize={'16px'} lineHeight={'24px'}>
              Portfolio
            </Text>
          </HStack>
          <Heading variant={'primary'} color={'theme.color-5'} size={'h2'} maxW={'716px'}>
            Pioneers of fun and more to come!
          </Heading>
          <Text color={'theme.color-6'} mt={'16px'} maxW={'562px'} fontSize={'18px'} lineHeight={'24px'}>
            Pioneer in video games creation and NFT games, we are constantly innovating in order to create new game
            experiences! There&lsquo;s inevitably a game made for you!
          </Text>
        </Box>
        <CustomNavLink to="/portfolio">
          <Text color={'primary'} textDecor={'underline'}>
            View More
          </Text>
        </CustomNavLink>
      </Flex>

      <Slider ref={sliderRef} {...settings}>
        {portfolioListData?.data?.map((portfolioData: BlogItemProps, key: number) => {
          return (
            <Box maxW={'411px'} w={{ base: 'full', md: 'full' }} px={'16px'} key={key}>
              <Box bg={'theme.color-5'}>
                <Image
                  height={386}
                  width={379}
                  objectFit={'cover'}
                  alt={'next img'}
                  quality={100}
                  src={getCMSImageUrl(portfolioData.attributes?.coverImage?.data?.attributes?.url)}
                />
                <Box p={'32px 12px'} textAlign={'center'}>
                  <Text
                    fontFamily={'primary'}
                    fontWeight={'600'}
                    fontSize={'24px'}
                    lineHeight={'26px'}
                    color={'primary'}
                    textTransform={'capitalize'}
                  >
                    {portfolioData?.attributes.title}
                  </Text>
                  <Text textTransform={'capitalize'} mt={'8px'} color={'#D4D4D4'} fontSize={'16px'} lineHeight={'24px'}>
                    {portfolioData?.attributes.category.data?.attributes.name}
                  </Text>
                  <Divider borderColor={'theme.color-5'} my={'20px'} />
                  <CustomNavLink to={`/portfolio/${portfolioData?.attributes.slug}`}>
                    <HStack
                      _hover={{
                        textDecor: 'underline',
                      }}
                      as={'a'}
                      fontWeight={500}
                      fontSize={'16px'}
                      lineHeight={'24px'}
                      spacing={'8px'}
                    >
                      <Text color={'theme.color-6'}>Learn More</Text>
                      <AiOutlineArrowRight fontWeight={'bold'} size={24} color={'orange'} />
                    </HStack>
                  </CustomNavLink>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default PortfolioSlider
