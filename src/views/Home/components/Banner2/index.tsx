import { Box, Button, Flex, Heading, HStack, Icon, Image, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { HomeBanner2Img } from 'constants/images'
import * as React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GiNotebook } from 'react-icons/gi'

interface IBanner2Props {}

const Banner2: React.FunctionComponent<IBanner2Props> = (props) => {
  return (
    <Box as={'section'}>
      <Box bg={'primary'}>
        <Flex
          justifyContent={'space-between'}
          py={'40px'}
          px={'24px'}
          maxW={'1248px'}
          mx={'auto'}
          color={'theme.color-5'}
          fontWeight={600}
          gap={'24px'}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Text fontSize={'24px'} lineHeight={'26px'} fontFamily={'primary'}>
            The free{' '}
            <Text as={'span'} color={'white'}>
              A&W NFT
            </Text>{' '}
            collection event is happening...
          </Text>
          <CustomNavLink to="https://www.claim-nft.anw.world/">
            <HStack
              _hover={{
                textDecor: 'underline',
              }}
              fontSize={'18px'}
              lineHeight={'24px'}
              spacing={'8px'}
            >
              <Text
                color={'white'}
                fontFamily={'primary'}
                fontWeight={600}
                textDecor={'underline'}
                fontStyle={'italic'}
              >
                Claim now
              </Text>
              <AiOutlineArrowRight fontWeight={'bold'} size={24} />
            </HStack>
          </CustomNavLink>
        </Flex>
      </Box>

      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        mb={'64px'}
        maxW={'1248px'}
        p={'24px'}
        mx={'auto'}
        align={'center'}
        justify={'space-between'}
        gap={'20px'}
      >
        <Box maxW={'500px'}>
          <Heading as={'h1'} fontSize={{ base: '2xl', md: '6xl' }}>
            Create your success business.
          </Heading>
          <Text color={'theme.color-6'}>
            Providing technology solutions, services related to nft, marketplace, landing page, cms, ... for blockchain
            projects.
          </Text>
          <Flex gap={'20px'} mt={5}>
            {/* <Button variant={'primary'} fontFamily={'primary'} fontWeight={300}>
              Get free NFT
            </Button> */}
            <Button variant={'primary'} fontFamily={'primary'} fontWeight={300}>
              Connect Sales
            </Button>
          </Flex>
        </Box>
        <Box>
          <Image src={HomeBanner2Img.src} alt="banner" />
        </Box>
      </Flex>

      <Flex flexDir={'column'}>
        <Heading fontFamily={'default'} textAlign={'center'} fontSize={{ base: 'xl', md: '5xl' }}>
          Explore all Planning
        </Heading>

        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          my={'32px'}
          maxW={'1248px'}
          p={'24px'}
          mx={'auto'}
          align={'center'}
          justify={'space-between'}
          gap={'20px'}
        >
          <Flex flexDir={'column'} gap={'10px'}>
            <Icon as={GiNotebook} w={10} h={10} color={'primary'} />
            <Text fontSize={'xl'} fontWeight={600} fontFamily={'primary'}>
              Business Planning
            </Text>
            <Text color={'theme.color-6'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam illo quaerat voluptatibus
            </Text>
          </Flex>
          <Flex flexDir={'column'} gap={'10px'}>
            <Icon as={GiNotebook} w={10} h={10} color={'primary'} />
            <Text fontSize={'xl'} fontWeight={600} fontFamily={'primary'}>
              Financial Planning
            </Text>
            <Text color={'theme.color-6'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam illo quaerat voluptatibus
            </Text>
          </Flex>
          <Flex flexDir={'column'} gap={'10px'}>
            <Icon as={GiNotebook} w={10} h={10} color={'primary'} />
            <Text fontSize={'xl'} fontWeight={600} fontFamily={'primary'}>
              Market Analysis
            </Text>
            <Text color={'theme.color-6'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam illo quaerat voluptatibus
            </Text>
          </Flex>
        </Flex>
      </Flex>

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
            The #1 Technology solutions fast-growing companies 2022
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

export default Banner2
