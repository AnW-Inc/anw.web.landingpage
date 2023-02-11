import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import { ISeoBlogProps } from 'components/Common/SeoBlog'
import { NEXT_PUBLIC_CMS_API_URL } from 'configs'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { ImageCMSProps } from 'utils'

interface CategoryProps {
  attributes: {
    name: string
    slug: string
  }
}
export interface PortfolioProps {
  attributes: {
    title: string
    slug: string
    coverImage: {
      data: ImageCMSProps
    }
    images: {
      data: ImageCMSProps[]
    }
    categories: {
      data: CategoryProps[]
    }
    content: string
    customer: string
    description: string
    developmentModel: string
    platforms: string
    teamSize: string
    technologies: string
    seo: ISeoBlogProps
  }
}

interface IPortfolioCardProps {
  portfolio: PortfolioProps
}

const PortfolioCard: React.FunctionComponent<IPortfolioCardProps> = (props) => {
  const {
    portfolio: {
      attributes: {
        title,
        slug,
        coverImage: {
          data: {
            attributes: { url },
          },
        },
        categories,
      },
    },
  } = props
  const router = useRouter()

  useEffect(() => {
    router.prefetch(`/portfolio/${slug}`)
  }, [router, slug])

  return (
    <Box
      textAlign={'center'}
      onClick={() => {
        router.push(`/portfolio/${slug}`)
      }}
      cursor={'pointer'}
    >
      <Box
        h={'250px'}
        objectFit={'cover'}
        overflow={'hidden'}
        p={'4px'}
        borderRadius={'15px'}
        bg={'rgba(165,166,246,.12)'}
      >
        <Image width={398} height={248} alt={`${title} img cover`} src={`${NEXT_PUBLIC_CMS_API_URL}${url}`} />
      </Box>
      <HStack fontWeight={'500'} color={'#F09000'} mt={'12px'} justifyContent={'center'} spacing={'24px'}>
        {categories.data.map((category: CategoryProps, key: number) => (
          <Text key={key}>{category.attributes.name}</Text>
        ))}
      </HStack>
      <Text pt={'5px'} pb={'12px'} fontSize={'26px'} fontWeight={'700'}>
        {title}
      </Text>
    </Box>
  )
}

export default PortfolioCard
