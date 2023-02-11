import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { AccountabilityIcon, CommitmentIcon, EfficiencyIcon, TeamWorkIcon } from 'constants/icons'
import { AboutBg2Img } from 'constants/images'
import Image from 'next/image'
import * as React from 'react'

interface ICompanyValuesProps {}

const CompanyValues: React.FunctionComponent<ICompanyValuesProps> = (props) => {
  return (
    <Flex
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'24px'}
      as={'section'}
      maxW={'1248px'}
      mx={'auto'}
      px={'24px'}
      bgImage={AboutBg2Img.src}
      bgRepeat={'no-repeat'}
      bgPos={'center'}
      bgSize={'cover'}
      p={{ base: '24px', md: '48px 64px' }}
      mt={{ base: '40px', md: '80px' }}
    >
      <Box>
        <Heading variant={'primary'} size={'h2'} maxW={'514px'}>
          <Text color={'primary'} as={'span'}>
            Our company
          </Text>{' '}
          values cultures
        </Heading>
        <Text mt={'16px'} maxW={'550px'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
          What we believe in
        </Text>
        <VStack mt={'16px'} spacing={'5px'} alignItems={'flex-start'}>
          <Text maxW={'550px'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            - We believe in the power of entertainment. How its wonders can make you smile and widen your eyes.
          </Text>
          <Text maxW={'550px'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            - We believe games can let you do extraordinary things. They bring you this pure moment of escapism that
            just makes you happy.
          </Text>
          <Text maxW={'550px'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            - We believe that everyone should be able to enjoy games. Wherever you are, whenever you want, whatever you
            like.
          </Text>
          <Text maxW={'550px'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            - We are an entertainment company. Creating gaming experiences is what we do.
          </Text>
        </VStack>
      </Box>
      <Box w={'full'} maxW={{ base: 'full', md: '454px' }}>
        <Flex justifyContent={{ base: 'center', md: 'flex-end' }} flexWrap={'wrap'} gap={'12px'}>
          <Box
            transition={'all 0.2s'}
            _hover={{
              transform: 'scale(1.02)',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px 1px rgba(255,255,255,0.3)',
            }}
            minW={{ base: '150px', md: '161px' }}
            h={'84px'}
            bg={'#3F3F3F'}
            rounded={'7px'}
            p={'12px 24px'}
          >
            <Image width={25} height={24} alt={'values icon'} src={EfficiencyIcon.src} />
            <Text fontSize={'16px'} lineHeight={'24px'} mt={'8px'}>
              Efficiency
            </Text>
          </Box>
          <Box
            transition={'all 0.2s'}
            _hover={{
              transform: 'scale(1.02)',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px 1px rgba(255,255,255,0.3)',
            }}
            minW={{ base: '150px', md: '161px' }}
            h={'84px'}
            bg={'#3F3F3F'}
            rounded={'7px'}
            p={'12px 24px'}
          >
            <Image width={25} height={24} alt={'values icon'} src={AccountabilityIcon.src} />
            <Text fontSize={'16px'} lineHeight={'24px'} mt={'8px'}>
              Accountability
            </Text>
          </Box>
        </Flex>
        <Flex mt={'12px'} justifyContent={{ base: 'center', md: 'flex-start' }} flexWrap={'wrap'} gap={'12px'}>
          <Box
            transition={'all 0.2s'}
            _hover={{
              transform: 'scale(1.02)',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px 1px rgba(255,255,255,0.3)',
            }}
            minW={{ base: '150px', md: '161px' }}
            h={'84px'}
            bg={'#3F3F3F'}
            rounded={'7px'}
            p={'12px 24px'}
          >
            <Image width={25} height={24} alt={'values icon'} src={CommitmentIcon.src} />
            <Text fontSize={'16px'} lineHeight={'24px'} mt={'8px'}>
              Commitment
            </Text>
          </Box>
          <Box
            transition={'all 0.2s'}
            _hover={{
              transform: 'scale(1.02)',
              cursor: 'pointer',
              boxShadow: '1px 1px 5px 1px rgba(255,255,255,0.3)',
            }}
            minW={{ base: '150px', md: '161px' }}
            h={'84px'}
            bg={'#3F3F3F'}
            rounded={'7px'}
            p={'12px 24px'}
          >
            <Image width={25} height={24} alt={'values icon'} src={TeamWorkIcon.src} />
            <Text fontSize={'16px'} lineHeight={'24px'} mt={'8px'}>
              Team Work
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default CompanyValues
