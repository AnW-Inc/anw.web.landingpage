import { Box, Flex, Grid, GridItem, Heading, HStack, Text } from '@chakra-ui/react'
import { AboutBg1Img } from 'constants/images'
import Image from 'next/image'
import * as React from 'react'
import { OUR_STORY } from './utils'

interface IOurStoryProps {}

const OurStory: React.FunctionComponent<IOurStoryProps> = (props) => {
  return (
    <Box
      py={{ base: '48px', md: '104px' }}
      bgImage={AboutBg1Img.src}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgPos={'center'}
    >
      <Flex
        alignItems={'flex-end'}
        justifyContent={'space-between'}
        mb={'64px'}
        maxW={'1248px'}
        px={'24px'}
        mx={'auto'}
        flexDir={{ base: 'column', md: 'row' }}
        gap={'24px'}
        flexWrap={'wrap'}
      >
        <Box>
          <HStack>
            <Box width={'36px'} h={'2px'} bg={'#6B6B6B'} />
            <Text mb={'8px'} fontWeight={'600'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
              Our Story
            </Text>
          </HStack>
          <Heading variant={'primary'} size={'h2'} maxW={'680px'}>
            The story behind our 9385 Studio
          </Heading>
        </Box>
        <Text maxW={'440px'} color={'#6B6B6B'} fontSize={'18px'} lineHeight={'24px'}>
          Exploring the Origins and Journey of 9385 Studio
        </Text>
      </Flex>
      <Box maxW={'1248px'} px={'24px'} mx={'auto'}>
        <Grid
          templateRows={{ base: 'repeat(3, 1fr)', lg: 'repeat(10, 1fr)' }}
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(12, 1fr)' }}
          gap={{ base: '32px', lg: '32px' }}
        >
          {OUR_STORY.map((ourStoryData, key: number) => {
            const { coverImage, description, title, year } = ourStoryData

            return (
              <GridItem
                key={key}
                rowSpan={key === 0 ? { base: 1, lg: 10 } : { base: 1, lg: key === 1 ? 3 : 7 }}
                colSpan={{ base: 1, lg: key === 0 ? 6 : 6 }}
                bg={'primary'}
                color={'#000000'}
              >
                <Flex gap={'16px'} flexDir={{ base: 'column', lg: key === 0 || key === 2 ? 'column' : 'row' }}>
                  <Box
                    position={'relative'}
                    w={{ base: 'full', lg: key === 0 ? '584px' : key === 1 ? '183px' : '584px' }}
                    h={{ base: '330px', lg: key === 0 ? '480px' : key === 1 ? '186px' : '262px' }}
                  >
                    <Box
                      right={0}
                      clipPath={'polygon(0 0, 100% 0, 100% 100%)'}
                      zIndex={1}
                      pos={'absolute'}
                      w={{ base: '122px', md: key === 1 ? '122px' : '216px' }}
                      h={{ base: '66px', md: key === 1 ? '66px' : '144px' }}
                      bg={'#272727'}
                      p={{ base: '8px', md: key === 1 ? '8px' : '20px' }}
                    >
                      <Text
                        fontFamily={'primary'}
                        fontSize={{ base: '20px', md: key === 1 ? '20px' : '32px' }}
                        lineHeight={{ base: '22px', md: key === 1 ? '22px' : '34pxx' }}
                        color={'#fff'}
                        textAlign={'end'}
                      >
                        {year}
                      </Text>
                    </Box>
                    <Image objectFit={'cover'} layout={'fill'} alt={`${title} img cover`} src={coverImage} />
                  </Box>
                  <Flex maxH={'186px'} overflowY={'auto'} p={'24px'} flexDir={'column'} flex={1}>
                    <Text
                      fontFamily={'primary'}
                      fontWeight={600}
                      fontSize={'32px'}
                      lineHeight={'33px'}
                      color={'#272727'}
                    >
                      {title}
                    </Text>
                    <Text mt={'8px'} fontSize={'16px'} lineHeight={'24px'}>
                      {description}
                    </Text>
                  </Flex>
                </Flex>
              </GridItem>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default OurStory
