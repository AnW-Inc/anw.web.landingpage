import { Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { HomeBg2Img, HomeServiceImg } from 'constants/images'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface IOurServicesProps {}
const OurServices: React.FunctionComponent<IOurServicesProps> = (props) => {
  const router = useRouter()

  return (
    <Flex pt={{ base: '48px', md: '104px' }} justifyContent={'flex-end'} as={'section'}>
      <Flex
        maxW={{ base: '1248px', md: 'calc((100vw - 1248px) /2 + 1248px) ' }}
        pl={'24px'}
        pr={{ base: '24px', md: '0' }}
        gap={'32px'}
        justifyContent={'space-between'}
        w={'full'}
        flexWrap={'wrap'}
      >
        <Box color={'theme.color-5'}>
          <HStack>
            <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
            <Text mb={'8px'} fontWeight={'600'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
              Services
            </Text>
          </HStack>
          <Heading variant={'primary'} size={'h2'} color={'theme.color-5'} maxW={'664px'}>
            We are passionate about everything we do – about our company and our industry.
          </Heading>
          <Text mt={'16px'} color={'theme.color-6'} maxW={'562px'} fontSize={'18px'} lineHeight={'24px'}>
            At our company, we are deeply committed to everything we do - from the games we create, to the work we do as
            a company, and our place in the industry. Our passion drives us to constantly strive for excellence in all
            that we do.
          </Text>
          <Button
            fontSize={'16px'}
            lineHeight={'24px'}
            fontWeight={'500'}
            mt={'32px'}
            height={'56px'}
            w={'151px'}
            bg={'transparent'}
            color={'white'}
            border={'1.5px solid rgba(255, 255, 255, 0.5)'}
            _hover={{
              bg: 'transparent',
              filter: '#333',
            }}
            onClick={() => router.push('/services')}
          >
            Learn More
          </Button>
          <HStack
            mt={'56px'}
            maxW={'488px'}
            spacing={'24px'}
            textAlign={'center'}
            p={{ base: '12px', md: '24px 36px' }}
            bg={'primary'}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
          >
            <Box>
              <Text
                fontFamily={'primary'}
                fontWeight={{ base: '600', md: '700' }}
                fontSize={{ base: '24px', md: '56px' }}
                lineHeight={{ base: '24px', md: '56px' }}
                color={'theme.color-5'}
              >
                250+
              </Text>
              <Text fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '16px', md: '24px' }} color={'#000000'}>
                Million Download
              </Text>
            </Box>
            <Box>
              <Text
                fontFamily={'primary'}
                fontWeight={{ base: '600', md: '700' }}
                fontSize={{ base: '24px', md: '56px' }}
                lineHeight={{ base: '24px', md: '56px' }}
                color={'theme.color-5'}
              >
                10
              </Text>
              <Text fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '16px', md: '24px' }} color={'#000000'}>
                Game Published
              </Text>
            </Box>
            <Box>
              <Text
                fontFamily={'primary'}
                fontWeight={{ base: '600', md: '700' }}
                fontSize={{ base: '24px', md: '56px' }}
                lineHeight={{ base: '24px', md: '56px' }}
                color={'theme.color-5'}
              >
                300+
              </Text>
              <Text fontSize={{ base: '14px', md: '16px' }} lineHeight={{ base: '16px', md: '24px' }} color={'#000000'}>
                Partners
              </Text>
            </Box>
          </HStack>
        </Box>

        <Box
          p={{ base: '24px', md: '53px 60px' }}
          bgImg={HomeBg2Img.src}
          bgRepeat={'no-repeat'}
          bgSize={'cover'}
          bgPos={'center'}
        >
          <Box pos={'relative'} w={'full'}>
            <Box
              display={{ base: 'none', md: 'block' }}
              width={{ base: '100vw', md: '457px' }}
              height={'550px'}
              border={'2px solid #FFFFFF'}
              transform={'translate(28px,-28px)'}
            />

            <Box position={{ base: 'static', md: 'absolute' }} top={'0'} bg={'primary'} p={'12px'} pb={'0'}>
              <Image width={457} height={502} src={HomeServiceImg} alt={'serivce img'} />
              <Box textAlign={'center'}>
                <CustomNavLink to="/about">
                  <HStack fontSize={'18px'} lineHeight={'24px'} spacing={'8px'} my={'29px'}>
                    <Text
                      color={'theme.color-5'}
                      fontWeight={'600'}
                      fontSize={'20px'}
                      lineHeight={'22px'}
                      fontFamily={'primary'}
                      textDecor="underline"
                    >
                      See Our Team
                    </Text>
                    <AiOutlineArrowRight color="theme.color-5" fontWeight={'bold'} size={24} />
                  </HStack>
                </CustomNavLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}

export default OurServices
