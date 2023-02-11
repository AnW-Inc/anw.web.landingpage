import { Box, Center, Text } from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BlogItemProps, getCMSImageUrl } from 'utils/cms'

interface IPortfolioCardProps {
  data: BlogItemProps
}

const PortfolioCard: React.FunctionComponent<IPortfolioCardProps> = (props) => {
  const { data } = props
  const {
    attributes: {
      title,
      slug,
      content,
      readingTime,
      publishedAt,
      category,
    },
  } = data
  const coverImage = data?.attributes?.coverImage?.data?.attributes?.url

  const router = useRouter()

  useEffect(() => {
    router.prefetch(`/blog/${slug}`)
  }, [router, slug])

  return (
    <Box>
      <Box>
        <Center mb={'8px'}>
          <Image objectFit='cover' width={576} height={316} alt={`${title} img cover`} src={getCMSImageUrl(coverImage)} />
        </Center>

        <Text textTransform={'capitalize'} color={'#D4D4D4'} fontWeight={600} fontSize={'16px'} lineHeight={'24px'}>
          {category?.data?.attributes?.name}
        </Text>
        <CustomNavLink to={`/portfolio/${slug}`}>
          <Text
            _hover={{ color: 'primary' }}
            fontWeight={'600'}
            fontFamily={'primary'}
            fontSize={{ base: '22px', md: '32px' }}
            lineHeight={{ base: '26px', md: '34px' }}
            color={'#fff'}
            textTransform={'capitalize'}
          >
            {title}
          </Text>
        </CustomNavLink>
        {/* <HStack fontSize={'0.9rem'} color={'gray.400'}>
          <Text>{dayjs(publishedAt).format('MMM DD, YYYY')}</Text>
          <Text>-</Text>
          <Text>{readingTime}</Text>
        </HStack> */}
      </Box>
      {/* <Divider borderColor={'white'} my={'6px'} />
      <HStack mt={'6px'} spacing={'12px'}>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <TelegramShareButton url={getBlogUrl(slug)}>
            <TelegramIcon size={28} round={true} />
          </TelegramShareButton>
        </Box>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <FacebookShareButton url={getBlogUrl(slug)}>
            <FacebookIcon size={28} round={true} />
          </FacebookShareButton>
        </Box>
        <Box
          transition={'all 0.2s'}
          _hover={{
            transform: 'scale(1.2)',
          }}
        >
          <TwitterShareButton url={getBlogUrl(slug)}>
            <TwitterIcon size={28} round={true} />
          </TwitterShareButton>
        </Box>
      </HStack> */}
    </Box>
  )
}

export default PortfolioCard
