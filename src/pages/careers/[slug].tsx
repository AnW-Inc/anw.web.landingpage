import { Box, Button, Divider, Flex, Heading, HStack, Text, useToast, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { CareerProps } from 'components/Career/CareerCard'
import CustomForm from 'components/Common/CustomForm'
import CustomInput from 'components/Common/CustomInput'
import CustomTextarea from 'components/Common/CustomTextarea'
import CustomDropzone from 'components/Common/DropZone'
import MarkdownWrapper from 'components/Common/MarkdownWrapper'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link as ScrollLink } from 'react-scroll'

import CustomNavLink from 'components/Common/CustomNavLink'
import Loading from 'components/Common/Loading'
import { NEXT_PUBLIC_CMS_API_URL } from 'configs'
import { CareerBannerImg } from 'constants/images'
import {
  careerKeys,
  DEFAULT_CAREER_DETAIL_QUERY,
  DEFAULT_CAREER_LIST_QUERY,
  fetchCareerDetail,
  fetchCareerList,
  useCareerDetail,
  useCareerList,
} from 'hooks/cms/career'
import { useRouteQuery } from 'hooks/useRouteQuery'
import { capitalize } from 'lodash'
import { GetStaticPaths } from 'next'
import { NextSeo } from 'next-seo'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { UseQueryResult } from 'react-query'
import { toastError, toastSuccess } from 'utils'
import { getStaticPropsWithQueryClient } from 'utils/ssr'
import * as Yup from 'yup'
import useGt4 from 'hooks/useGT4'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Phone number is not valid'),
  cv: Yup.mixed().required('CV file is required'),
  message: Yup.string(),
})

type Props = {
  career: CareerProps
  relatedCareers: CareerProps[]
}

export default function CareerDetailPage({ career, relatedCareers }: Props) {
  const { slug } = useRouteQuery()

  const careerDetail = useCareerDetail({
    ...DEFAULT_CAREER_DETAIL_QUERY,
    'filters[slug][$eq]': slug,
  })

  const latestCareer = useCareerList({
    ...DEFAULT_CAREER_LIST_QUERY,
    'pagination[pageSize]': 4,
    'filters[slug][$ne]': slug,
  })

  const { data: careerDetailData, isLoading: isCarerDetailLoading } = careerDetail as UseQueryResult<any>
  const { data: latestCareerData, isLoading: isLatestCareerLoading } = latestCareer as UseQueryResult<any>

  const [cvFile, setCvFile] = useState<any>(null)
  const { handleSubmit, register, formState, watch, setValue, getValues } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const { gt4Ref } = useGt4({
    captchaId: 'b55a4ce8c3835e4e2027e7293a1d4123',
    callback: () => {
      submitBtn?.current?.click()
    },
  })
  const submitBtn = useRef(null)

  const [isLoading, setIsLoading] = useState(false)

  if ((isCarerDetailLoading && !careerDetailData) || (isLatestCareerLoading && !latestCareerData)) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} minH={'100vh'}>
        <Loading />
      </Flex>
    )
  }

  const { id, attributes } = careerDetailData
  const { title, content, type, salary, location, icon } = attributes
  const submitForm = async (values: any) => {
    setIsLoading(true)
    try {
      const axiosService = axios.create({
        baseURL: NEXT_PUBLIC_CMS_API_URL,
      })
      const bodyFormData = new FormData()
      bodyFormData.append('files', values.cv)
      const fileUploadedResponse = await axiosService.post('/api/upload', bodyFormData)
      const { data } = fileUploadedResponse

      const bodyForm: any = {}
      bodyForm['career'] = id
      for (let key in values) {
        if (key === 'cv') {
          bodyForm.cv = data?.[0]?.id
        } else {
          bodyForm[key] = values[key]
        }
      }

      const candidateResponse = await axiosService.post('/api/candidates', { data: bodyForm })
      toastSuccess({
        title: 'Success',
        message: 'The request has been sent successfully',
      })
    } catch (error: any) {
      toastError({
        title: 'Error!',
        message: error.message,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box as="section" minH={'calc(100vh)'}>
      <NextSeo title={`${capitalize(title)} - Careers`} />
      <Box pt={'45px'} px={'24px'} maxW={'1248px'} mx={'auto'}>
        <Flex
          flexDir={{ base: 'column', md: 'row' }}
          pb={'12px'}
          alignItems={{ base: 'flex-start', md: 'center' }}
          justifyContent={'space-between'}
        >
          <Box>
            {/* <Image width={55} height={55} alt={'Job icon'} src={getCMSImageUrl(icon.data.attributes.url)} /> */}
            <HStack alignItems={'center'}>
              <Heading fontSize={{ base: '2rem', md: '2.5rem' }}>{title}</Heading>
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
                {type}
              </Text>
            </HStack>
            <HStack color={'theme.color-6'} fontSize={'0.8em'}>
              <Text>{location}</Text> <Text>-</Text> <Text>{salary}</Text>
            </HStack>
            <Text mt={'12px'}>
              Contact via{' '}
              <Link href={'mailto:careers@a&w.games'} passHref>
                <Text
                  transition={'all 0.2s'}
                  _hover={{ textDecoration: 'underline', transform: 'scale(1.02)' }}
                  fontWeight={'600'}
                  color={'#F09000'}
                  as={'a'}
                  target={'_blank'}
                  display={'inline-block'}
                >
                  {' '}
                  careers@a&w.games
                </Text>
              </Link>
            </Text>
          </Box>
          <ScrollLink to={'#apply-now'} spy={true} smooth={true} duration={500}>
            <Button variant={'primary'} mt={{ base: '12px', md: 0 }} borderRadius={'none'}>
              Apply now
            </Button>
          </ScrollLink>
        </Flex>
        <Divider />
        <Flex color={'#EAEAEA'} flexDir={{ base: 'column', md: 'row' }} pb={'42px'} gap={'24px'}>
          <MarkdownWrapper color={'theme.color-5'} dangerouslySetInnerHTML={{ __html: `${content}` }} />
          <Box>
            <Text color={'theme.color-5'} mt={'1em'} fontWeight={'700'}>
              MOST POPULAR
            </Text>
            <VStack mt={'12px'} spacing={'24px'} alignItems={'flex-start'}>
              {latestCareerData.data.map(({ attributes: related }: { attributes: CareerProps }, key: number) => (
                <CustomNavLink key={key} to={`/careers/${related.slug}`}>
                  <Flex
                    gap={'12px'}
                    w={{ base: 'full', md: '370px' }}
                    p={'12px 16px'}
                    color={'white'}
                    fontFamily={'default'}
                    _hover={{
                      transform: 'scale(1.02)',
                      boxShadow: '1px 1px 5px 1px rgba(0,123,255,0.4)',
                    }}
                    transition={'all 0.2s'}
                    boxShadow={'1px 1px 5px 1px rgba(0,0,0,0.4)'}
                    cursor={'pointer'}
                    bg={'theme.color-5'}
                    alignItems={'center'}
                    fontSize={'16px'}
                  >
                    <Box w={'full'}>
                      <Flex gap={'12px'} alignItems={'flex-start'} justifyContent={'space-between'} w={'full'}>
                        <Text fontWeight={'700'}>{related.title}</Text>
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
                          {related.type}
                        </Text>
                      </Flex>
                      <Flex justifyContent={'space-between'} fontSize={'0.8em'}>
                        <Text>{related.location}</Text>
                        <Text>{related.salary}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </CustomNavLink>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>

      <Box
        py={'90px'}
        px={'24px'}
        // _before={{
        //   bg: '##101010',
        //   bgImage: CareerBannerImg.src,
        //   bgSize: 'cover',
        //   bgPos: 'center',
        //   textAlign: 'center',
        //   content: "''",
        //   position: 'absolute',
        //   width: '100%',
        //   height: '75%',
        //   left: '0',
        //   zIndex: '-1',
        //   transform: 'translateY(200px)',
        // }}
        position={'relative'}
      >
        <Box
          bg={'theme.color-5'}
          p={{ base: '16px', md: '48px' }}
          // border={'1px solid #ccc'}
          boxShadow={'0 6px 100px 0 #0000001a'}
          maxW={'1290px'}
          mx={'auto'}
          id={'#apply-now'}
        >
          <Heading fontFamily={'primary'} size={'h2'} textAlign={'center'}>
            Apply for this position here
          </Heading>
          <CustomForm formState={formState} register={register} onSubmit={handleSubmit(submitForm)}>
            <CustomInput name="email" placeholder="Email" label="Email" mt="32px" w={'full'} />
            <CustomInput name="name" placeholder="Name" type="name" label="Name" mt="24px" borderColor={'#005252'} />
            <CustomInput
              name="phone"
              placeholder="Phone"
              type="phone"
              label="Phone"
              mt="24px"
              borderColor={'#005252'}
            />
            <CustomDropzone
              fileName={cvFile?.name}
              dropText="Drag and drop cv file here, or click to select file"
              label={'CV file'}
              mt="32px"
              onFileAccepted={(file: any) => {
                setValue('cv', file)
                setCvFile(file)
              }}
              error={cvFile ? '' : formState.errors?.cv?.message}
            />
            {/* <Textarea mt="24px" placeholder="Enter your message" /> */}
            <CustomTextarea name="message" placeholder="Message" label="Message" mt={'32px'} />
            <Button ref={submitBtn} display={'none'} type="submit" />
          </CustomForm>
          <Button
            ref={gt4Ref}
            bg={'transparent'}
            p={isLoading ? '' : '0 !important'}
            m={'0'}
            justifyContent={'flex-start'}
            transition={'all 0.2s'}
            _hover={{ transform: 'scale(1.08)', color: 'primary' }}
            mt="32px"
            gap={'12px'}
            alignItems={'center'}
            type={'submit'}
            color={'white'}
            fontSize={'16px'}
            lineHeight={'24px'}
            isLoading={isLoading}
            border={'1px solid'}
            borderColor={isLoading ? 'primary' : 'transparent'}
            _active={{ bg: 'transparent' }}
          >
            <Flex justifyContent={'center'} alignItems={'center'} w={'40px'} h={'40px'} rounded={'full'} bg={'primary'}>
              <AiOutlineArrowRight color="#272727" size={24} />
            </Flex>
            <Text>Apply now</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const { slug = '' } = params
  const careerDetailProps = { ...DEFAULT_CAREER_DETAIL_QUERY, 'filters[slug][$eq]': slug }
  const latestCareerProps = {
    ...DEFAULT_CAREER_LIST_QUERY,
    'pagination[pageSize]': 4,
    'filters[slug][$ne]': slug,
  }

  const result: any = await getStaticPropsWithQueryClient({
    queries: [
      {
        key: careerKeys.detail(careerDetailProps),
        func: () => fetchCareerDetail(careerDetailProps),
      },
      {
        key: careerKeys.list(latestCareerProps),
        func: () => fetchCareerList(latestCareerProps),
      },
    ],
  })

  const careerDetailData = result?.props.dehydratedState.queries.find(
    (item: any) => JSON.stringify(item.queryKey) === JSON.stringify(careerKeys.detail(careerDetailProps)),
  ).state.data

  if (!careerDetailData) {
    return {
      revalidate: 1,
      notFound: true,
    }
  }

  return {
    ...result,
  }
}
