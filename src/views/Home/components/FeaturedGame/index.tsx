import { Box, Divider, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { HomeFeaturedImg } from 'constants/images'
import Image from 'next/image'
import * as React from 'react'

interface IFeaturedGameProps {}

const FeaturedGame: React.FunctionComponent<IFeaturedGameProps> = (props) => {
  const [activeStep, setActiveStep] = React.useState(1)

  return (
    <Box pt={{ base: '48px', md: '132px' }} maxW={'905px'} mx={'auto'} px={'24px'} textAlign={'center'} as="section">
      <HStack justifyContent={'center'}>
        <Box width={'36px'} h={'2px'} bg={'theme.color-5'} />
        <Text mb={'8px'} fontWeight={'600'} color={'theme.color-5'} fontSize={'16px'} lineHeight={'24px'}>
          Featured Game
        </Text>
      </HStack>
      <Heading variant={'primary'} size={'h2'} maxW={'780px'} color={'theme.color-5'}>
        A new version has just arrived. Get in on the action now.
      </Heading>
      <Text color={'theme.color-6'} mt={{ base: '24px', md: '48px' }}>
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
        incididunt aliquip deserunt reprehenderit elit laborum.{' '}
      </Text>

      <Flex mt={{ base: '32px', md: '64px' }} maxW={'664px'} mx={'auto'} alignItems={'center'} gap={'20px'}>
        <Flex
          color={activeStep === 1 ? '#272727' : 'primary'}
          fontWeight={'600'}
          fontSize={{ base: '22px', md: '32px' }}
          cursor={'pointer'}
          _hover={{
            filter: 'brightness(0.9)',
          }}
          lineHeight={'33px'}
          justify={'center'}
          align={'center'}
          rounded={'full'}
          w={{ base: '32px', md: '56px' }}
          h={{ base: '32px', md: '56px' }}
          bg={activeStep === 1 ? 'primary' : '#272727'}
          onClick={() => setActiveStep(1)}
        >
          1
        </Flex>
        <Box
          flex={1}
          h={{ base: '2px', md: '4px' }}
          border={{ base: '1px dashed #D4D4D4', md: '2px dashed #D4D4D4' }}
        />
        <Flex
          color={activeStep === 2 ? '#272727' : 'primary'}
          fontWeight={'600'}
          fontSize={{ base: '22px', md: '32px' }}
          cursor={'pointer'}
          _hover={{
            filter: 'brightness(0.9)',
          }}
          lineHeight={'33px'}
          justify={'center'}
          align={'center'}
          rounded={'full'}
          w={{ base: '32px', md: '56px' }}
          h={{ base: '32px', md: '56px' }}
          bg={activeStep === 2 ? 'primary' : '#272727'}
          onClick={() => setActiveStep(2)}
        >
          2
        </Flex>
        <Box
          flex={1}
          h={{ base: '2px', md: '4px' }}
          border={{ base: '1px dashed #D4D4D4', md: '2px dashed #D4D4D4' }}
        />
        <Flex
          color={activeStep === 3 ? '#272727' : 'primary'}
          fontWeight={'600'}
          fontSize={{ base: '22px', md: '32px' }}
          cursor={'pointer'}
          _hover={{
            filter: 'brightness(0.9)',
          }}
          lineHeight={'33px'}
          justify={'center'}
          align={'center'}
          rounded={'full'}
          w={{ base: '32px', md: '56px' }}
          h={{ base: '32px', md: '56px' }}
          bg={activeStep === 3 ? 'primary' : '#272727'}
          onClick={() => setActiveStep(3)}
        >
          3
        </Flex>
      </Flex>
      <Box mt={{ base: '24px', md: '40px' }} bg={'primary'} p={'24px'}>
        <Text fontFamily={'primary'} fontSize={{ base: '24px', md: '32px' }} color={'#272727'} fontWeight={'600'}>
          Featured
        </Text>
        <Divider my={'16px'} borderColor={'#000'} />
        <Text color={'#000000'} fontSize={'16px'} lineHeight={'24px'}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Nulla Lorem mollit
          cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Nulla Lorem mollit cupidatat irure. Laborum
          Nulla Lorem mollit cupidatat Nulla Lorem mollit cupidatat cupidatat.
        </Text>
        <Box position={'relative'} mt={{ base: '24px', md: '40px' }}>
          <Box left={'12px'} top={'12px'} pos={'absolute'} w={'full'} h={'full'} border={'3px solid #272727'} />
          <Image width={797} height={406} alt={'featured img'} src={HomeFeaturedImg.src} />
        </Box>
      </Box>
    </Box>
  )
}

export default FeaturedGame
