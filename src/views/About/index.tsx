import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import * as React from 'react'
import CompanyValues from './components/CompanyValues'
import OurMission from './components/OurMission'
import OurStory from './components/OurStory'
import OurTeam from './components/OurTeam'

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <Box pb={{ base: '24px', md: '80px' }} as={'section'}>
      <Box
        w={'full'}
        maxW={'1248px'}
        mx={'auto'}
        px={'24px'}
        pt={{ base: '48px', md: '104px' }}
      >
        <HStack>
          <Box width={'36px'} h={'2px'} bg={'#6B6B6B'} />
          <Text mb={'8px'} fontWeight={'600'} color={'#6B6B6B'} fontSize={'16px'} lineHeight={'24px'}>
            Our Vision
          </Text>
        </HStack>
        <Heading mt={'32px'} maxW={'1100px'} mx={'auto'} variant={'primary'} textAlign={'center'} size={'h2'}>
          9385 Studio is dedicated to being a market leader in Vietnam and across Southeast Asia in the video game
          industry.
        </Heading>
      </Box>
      <OurMission />
      <OurStory />
      <CompanyValues />
      <OurTeam />
    </Box>
  )
}

export default About
