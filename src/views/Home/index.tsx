import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { HomeBg1Img, HomeBg3Img } from 'constants/images'
import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import OurServices from 'views/Home/components/OurServices'
import Testimonials from 'views/Home/components/Testimonials'
// import Banner from './components/Banner'
import Banner2 from './components/Banner2'
// import CaseStudy from './components/CaseStudy'
import FeaturedGame from './components/FeaturedGame'
import News from './components/News'
import PartnerForm from './components/PartnerForm'
import PortfolioSlider from './components/PortfolioSlider'

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [changeEmailFunc, setChangeEmailFunc] = useState(() => {
    return (e: any) => {}
  })

  return (
    <Box mt={{ base: '', md: '-78px' }} display={{ md: 'flex' }} flexDir={'column'} w="full">
      <Banner2 />
      {/* <Box bgSize={'cover'} bgPos={'center'} bgRepeat={'no-repeat'} bgImage={HomeBg1Img.src} as={'section'}>
        <Box pt={'80px'} maxW={'calc(1017px + 48px)'} px={'24px'} textAlign={'center'} mx={'auto'}>
          <Heading size={'h1Big'} variant={'primary'}>
            Let’s work together.
          </Heading>
          <Text mt={'16px'} mb={'40px'}>
            Build your own Game world with trusted experts. We will drive your ideas to life at a high professional
            level.
          </Text>
          <Flex maxW={'580px'} mx={'auto'} h={'60px'} align={'stretch'}>
            <Input
              placeholder={'Enter Your Email'}
              _placeholder={{ color: '#8C8C8C', fontWeight: '400' }}
              h={'full'}
              bg={'white'}
              color={'#000'}
              border={'none'}
              outline={'none'}
              rounded={'0'}
              onInput={(e) => changeEmailFunc(e)}
              type={'email'}
            />
            <ScrollLink to={'#contact'} spy={true} smooth={true} duration={500}>
              <Button
                _hover={{
                  bg: 'primary',
                  filter: 'brightness(0.9)',
                }}
                w={{ base: '110px', md: '172px' }}
                color={'#fff'}
                bg={'#272727'}
                h={'full'}
                fontWeight={500}
              >
                Get Started
              </Button>
            </ScrollLink>
          </Flex>
        </Box>
      </Box> */}
      <OurServices />
      <PortfolioSlider />
      <FeaturedGame />
      {/* <CaseStudy /> */}
      <Testimonials />
      <News />
      <PartnerForm setChangeEmailFunc={setChangeEmailFunc} />
      {/* <Box bgSize={'cover'} bgPos={'center'} bgRepeat={'no-repeat'} bgImage={HomeBg3Img.src} as={'section'}>
        <Box
          py={{ base: '48px', md: '104px' }}
          maxW={'calc(1017px + 48px)'}
          px={'24px'}
          textAlign={'center'}
          mx={'auto'}
        >
          <Heading size={'h2'} variant={'primary'}>
            Ready to{' '}
            <Text px={'12px'} as={'span'} bg={'#272727'} color={'primary'}>
              get started
            </Text>
          </Heading>
          <Text color={'theme.color-5'} maxW={'584px'} mx={'auto'} mt={'16px'} mb={'40px'}>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
            incididunt aliquip .
          </Text>
          <Flex maxW={'580px'} mx={'auto'} h={'60px'} align={'stretch'}>
            <Input
              placeholder={'Enter Your Email'}
              _placeholder={{ color: '#8C8C8C', fontWeight: '400' }}
              h={'full'}
              bg={'white'}
              color={'#000'}
              border={'none'}
              outline={'none'}
              rounded={'0'}
              onInput={(e) => changeEmailFunc(e)}
              type={'email'}
            />

            <ScrollLink to={'#contact'} spy={true} smooth={true} duration={500}>
              <Button
                _hover={{
                  bg: 'primary',
                  filter: 'brightness(0.9)',
                }}
                w={{ base: '110px', md: '172px' }}
                color={'#fff'}
                bg={'#272727'}
                h={'full'}
                fontWeight={500}
              >
                Get Started
              </Button>
            </ScrollLink>
          </Flex>
        </Box>
      </Box> */}
    </Box>
  )
}

export default Home
