import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { AboutMissionImg } from 'constants/images'
import Image from 'next/image'
import * as React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface IOurMissionProps {}

const OurMission: React.FunctionComponent<IOurMissionProps> = (props) => {
  return (
    <Flex
      w={'full'}
      maxW={'1248px'}
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      justifyContent={'space-between'}
      mx={'auto'}
      px={'24px'}
      flexWrap={'wrap'}
      gap={{ base: '32px', md: '32px' }}
      py={{ base: '48px', md: '104px' }}
    >
      <Box pos={'relative'}>
        <Box
          display={{ base: 'none', md: 'block' }}
          width={{ base: '100vw', md: '481px' }}
          minHeight={'600px'}
          border={'2px solid #272727'}
          transform={'translate(28px,-28px)'}
        />
        <Box position={{ base: 'static', md: 'absolute' }} top={'0'} bg={'primary'} p={'12px'} pb={'0'}>
          <Image width={457} height={502} src={AboutMissionImg} objectFit={'cover'} alt={'serivce img'} />
          <Box textAlign={'center'}>
            <CustomNavLink to="/portfolio">
              <HStack fontSize={'18px'} lineHeight={'24px'} spacing={'8px'} my={'29px'}>
                <Text
                  color={'#272727'}
                  fontWeight={'600'}
                  fontSize={'20px'}
                  lineHeight={'22px'}
                  fontFamily={'primary'}
                  textDecor="underline"
                >
                  See Our Portfolio
                </Text>
                <AiOutlineArrowRight color="#272727" fontWeight={'bold'} size={24} />
              </HStack>
            </CustomNavLink>
          </Box>
        </Box>
      </Box>
      <Box>
        <HStack>
          <Box width={'36px'} h={'2px'} bg={'#6B6B6B'} />
          <Text mb={'8px'} fontWeight={'600'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            Our Mission
          </Text>
        </HStack>
        <Heading variant={'primary'} size={'h2'} maxW={'593px'}>
          Bringing Joy to the World Through Our Passion for Gaming
        </Heading>
        <Text mt={'16px'} color={'#6B6B6B'} maxW={'562px'} fontSize={'18px'} lineHeight={'24px'}>
          In order for everyone to experience a little moment of joy, it is our goal to astound the global community. We
          put our hearts and souls into making games, and the result is multiplatform experiences that set the bar for
          the industry and are downloaded by millions of gamers every day.
        </Text>
      </Box>
    </Flex>
  )
}

export default OurMission
