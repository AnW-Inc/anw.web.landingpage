import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { getCMSImageUrl, ImageCMSProps } from 'utils'

export interface CareerProps {
  id: string
  title: string
  slug: string
  location: string
  salary: string
  type: string
  content: string
  icon: {
    data: ImageCMSProps
  }
}

interface ICareerCardProps {
  career: CareerProps
}

const CareerCard: React.FunctionComponent<ICareerCardProps> = (props) => {
  const { career } = props
  const router = useRouter()

  useEffect(() => {
    router.prefetch(`/careers/${career.slug}`)
  }, [career.slug, router])

  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      w={'full'}
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '1px 1px 5px 1px rgba(0,123,255,0.4)',
      }}
      onClick={() => {
        router.push(`/careers/${career.slug}`)
      }}
      transition={'all 0.2s'}
      boxShadow={'1px 1px 5px 1px rgba(0,0,0,0.4)'}
      cursor={'pointer'}
      p={'28px 32px'}
      bg={'#F3F5F8'}
      alignItems={{ base: 'flex-start', md: 'center' }}
      gap={'12px'}
    >
      {/* <Image width={55} height={55} alt={'Job icon'} src={getCMSImageUrl(career.icon.data.attributes.url)} /> */}
      <Box>
        <Flex gap={'8px'} flexWrap={'wrap'} alignItems={'center'}>
          <Text fontWeight={700} fontSize={'22px'} lineHeight={'42px'}>
            {career.title}
          </Text>
          <Text
            fontWeight={700}
            textTransform={'uppercase'}
            textAlign={'center'}
            lineHeight={'16px'}
            minW={'80px'}
            bg={'#FFF7EC'}
            color={'primary'}
            borderColor={'primary'}
            border={'1px solid'}
            fontSize={'0.6rem'}
          >
            {career.type}
          </Text>
        </Flex>
        <HStack fontSize={'0.8em'}>
          <Text>{career.location}</Text> <Text>-</Text> <Text>{career.salary}</Text>
        </HStack>
      </Box>

      <Button
        _hover={{
          bg: 'primary',
          color: 'white',
        }}
        bg={'#272727'}
        color={'white'}
        borderRadius={'none'}
        alignSelf={'flex-end'}
      >
        Apply Job <ArrowForwardIcon ml={'4px'} />
      </Button>
    </Flex>
  )
}

export default CareerCard
