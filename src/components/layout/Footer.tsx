import { Box, Button, Center, Flex, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GrFacebookOption, GrTwitter, GrYoutube } from 'react-icons/gr'

const Footer = () => {
  return (
    <Box pt={{ base: '48px', md: '104px' }} as="footer">
      <Box px={'24px'} maxW={'1248px'} mx={'auto'}>
        <Flex pb={'40px'} gap={'64px'} justifyContent={'space-between'} wrap={'wrap'} alignItems={'flex-start'}>
          <Box w={'full'} maxW={'388px'}>
            <CustomNavLink to="/">
              <HStack spacing={'5px'} fontFamily={'primary'} fontWeight={'700'} lineHeight={'30px'} fontSize={'25px'}>
                {/* <Text color={'primary'}>9385</Text>
                <Text
                  fontSize={'15px'}
                  transform={'translateY(-25%)'}
                  display={'inline-block'}
                  color={'rgba(191, 191, 191, 1)'}
                >
                  Studio
                </Text> */}
                <Center p={2} bg={'theme.color-1'} w={'150px'}>
                  <Image src="/logo.png" height={'50px'} alt={'logo'} />
                </Center>
              </HStack>
            </CustomNavLink>
            <Text mt={'8px'} color={'theme.color-6'}>
              Since our establishment, we have put our heart and soul into what we enjoy the most, Video Games.
            </Text>
            <HStack mt={'32px'} spacing={'32px'}>
              <CustomNavLink to={'/#fb'}>
                <Flex
                  w={'32px'}
                  h={'32px'}
                  rounded={'full'}
                  bg={'primary'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <GrFacebookOption size={22} color="#272727" />
                </Flex>
              </CustomNavLink>
              <CustomNavLink to={'/#tw'}>
                <Flex
                  w={'32px'}
                  h={'32px'}
                  rounded={'full'}
                  bg={'primary'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <GrTwitter color="#272727" />
                </Flex>
              </CustomNavLink>
              <CustomNavLink to={'/#ins'}>
                <Flex
                  w={'32px'}
                  h={'32px'}
                  rounded={'full'}
                  bg={'primary'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <AiFillInstagram size={22} color="#272727" />
                </Flex>
              </CustomNavLink>
              <CustomNavLink to={'/#linkedin'}>
                <Flex
                  w={'32px'}
                  h={'32px'}
                  rounded={'full'}
                  bg={'primary'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <AiFillLinkedin size={22} color="#272727" />
                </Flex>
              </CustomNavLink>
              <CustomNavLink to={'/#fb'}>
                <Flex
                  w={'32px'}
                  h={'32px'}
                  rounded={'full'}
                  bg={'primary'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <GrYoutube size={22} color="#272727" />
                </Flex>
              </CustomNavLink>
            </HStack>
          </Box>
          <Box minW={'184px'}>
            <Text color="theme.color-5" mb="16px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              Page
            </Text>
            <VStack spacing={'12px'} color={'theme.color-6'} alignItems={'flex-start'}>
              <CustomNavLink to="/">
                <Text as="a">Home</Text>
              </CustomNavLink>
              <CustomNavLink to="/portfolios">
                <Text as="a">Portfolios</Text>
              </CustomNavLink>
              <CustomNavLink to="/services">
                <Text as="a">Services</Text>
              </CustomNavLink>
              <CustomNavLink to="/about">
                <Text as="a">About</Text>
              </CustomNavLink>
            </VStack>
          </Box>
          <Box minW={'184px'}>
            <Text color="theme.color-5" mb="16px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              Company
            </Text>
            <VStack spacing={'12px'} color={'theme.color-6'} alignItems={'flex-start'}>
              <CustomNavLink to="/#Terms-Conditions">
                <Text as="a">Terms Conditions</Text>
              </CustomNavLink>
              <CustomNavLink to="/#Privacy-Policy">
                <Text as="a">Privacy Policy</Text>
              </CustomNavLink>
              <CustomNavLink to="/#Cookies">
                <Text as="a">Cookies</Text>
              </CustomNavLink>
              <CustomNavLink to="/careers">
                <Text as="a">Careers</Text>
              </CustomNavLink>
            </VStack>
          </Box>
          <Box minW={'184px'}>
            <Text color="theme.color-5" mb="16px" fontWeight={'600'} fontSize={'20px'} lineHeight={'30px'}>
              Community
            </Text>
            <VStack spacing={'12px'} color={'theme.color-6'} alignItems={'flex-start'}>
              <CustomNavLink to="/#Help-Center">
                <Text as="a">Help Center</Text>
              </CustomNavLink>
              <CustomNavLink to="/#Forum">
                <Text as="a">Forum</Text>
              </CustomNavLink>
              <CustomNavLink to="/#Webinars">
                <Text as="a">Webinars</Text>
              </CustomNavLink>
              <CustomNavLink to="/#Professionals">
                <Text as="a">Professionals</Text>
              </CustomNavLink>
            </VStack>
          </Box>
        </Flex>
        <Flex
          flexWrap={'wrap'}
          borderTop={'1px solid rgba(107, 107, 107, .5)'}
          borderBottom={'1px solid rgba(107, 107, 107, .5)'}
          py={'40px'}
          gap={'24px'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box maxW={'500px'} color={'theme.color-6'}>
            <Text fontWeight={600} fontSize={'20px'} lineHeight={'26px'}>
              Keep up with the A&W realm!
            </Text>
            <Text fontSize={'16px'}>
              Sign up for our newsletter to receive the latest news, special events & other exciting news from us at
              A&W.
            </Text>
          </Box>
          <Flex h={'60px'} align={'stretch'}>
            <Input
              placeholder={'Enter Your Email'}
              _placeholder={{ color: '#8C8C8C' }}
              h={'full'}
              bg={'white'}
              color={'#000'}
              border={'none'}
              outline={'none'}
              rounded={'0'}
            />
            <Button
              _hover={{
                bg: 'primary',
                filter: 'brightness(0.9)',
              }}
              w={'159px'}
              color={'#000'}
              bg={'primary'}
              h={'full'}
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
        <Box py={'40px'} textAlign={'center'} color={'#8C8C8C'}>
          ©A&W. All rights reserved.
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
