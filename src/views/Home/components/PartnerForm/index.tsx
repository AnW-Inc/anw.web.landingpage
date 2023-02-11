import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import CustomForm from 'components/Common/CustomForm'
import CustomInput from 'components/Common/CustomInput'
import CustomSelect from 'components/Common/CustomSelect'
import CustomTextarea from 'components/Common/CustomTextarea'
import { NEXT_PUBLIC_CMS_API_URL } from 'configs'
import { HomeContactBgImg } from 'constants/images'
import { useServiceList } from 'hooks/cms'
import useGt4 from 'hooks/useGT4'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { toastError, toastSuccess } from 'utils'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .required('Phone is required')
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, 'Phone number is not valid'),
  companyName: Yup.string().required('Company name is required'),
  budget: Yup.string().required('Budget name is required'),
  description: Yup.string().required('Description name is required'),
})

type Props = {
  setChangeEmailFunc: any
}

const PartnerForm = (props: Props) => {
  const { setChangeEmailFunc } = props
  const serviceList = useServiceList({
    sort: 'updatedAt:desc',
    populate: '*',
  })
  const { isLoading: isServiceListLoading, data: serviceListData } = serviceList
  const { handleSubmit, register, formState, watch, setValue, getValues } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const { gt4Ref } = useGt4({
    captchaId: 'e38b682d3fb9d444b4a9ac5abf719d4d',
    callback: () => {
      submitBtn?.current?.click()
    },
  })
  const submitBtn = useRef(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setChangeEmailFunc(() => {
      return (e: any) => {
        setValue('email', e.target.value)
      }
    })
  }, [setChangeEmailFunc, setValue])

  const submitForm = async (values: any) => {
    setIsLoading(true)
    try {
      const axiosService = axios.create({
        baseURL: NEXT_PUBLIC_CMS_API_URL,
      })
      const bodyForm = values
      const partnerResponse = await axiosService.post('/api/partners', { data: bodyForm })
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
    <Box
      bgImage={HomeContactBgImg.src}
      bgSize={'cover'}
      bgPos={'center'}
      bgRepeat={'no-repeat'}
      pt={{ base: '100px', md: '200px' }}
      mt={{ base: '48px', md: '104px' }}
      as="section"
      minH={'calc(100vh)'}
      pb={{ base: '60px', md: '128px' }}
    >
      <Box
        p={{ base: '16px', md: '48px' }}
        boxShadow={'0 6px 100px 0 #0000001a'}
        maxW={'1248px'}
        mx={'auto'}
        id={'#contact'}
      >
        <Heading
          fontFamily={'primary'}
          fontSize={'46px'}
          fontWeight={'600'}
          lineHeight={'48px'}
          as={'h2'}
          textAlign={'center'}
          color={'primary'}
        >
          Get in touch{' '}
          <Text as={'span'} color={'white'}>
            {' '}
            with us today!
          </Text>
        </Heading>
        <CustomForm formState={formState} register={register} onSubmit={handleSubmit(submitForm)}>
          <CustomInput name="email" placeholder="Email" label="Email" mt="32px" w={'full'} />
          <CustomInput name="name" placeholder="Name" type="text" label="Name" mt="24px" borderColor={'#005252'} />
          <CustomInput
            name="phoneNumber"
            placeholder="Phone"
            type="phone"
            label="Phone"
            mt="24px"
            borderColor={'#005252'}
          />
          <CustomInput
            name="companyName"
            placeholder="Company Name"
            type="text"
            label="Company Name"
            mt="24px"
            borderColor={'#005252'}
          />
          <CustomInput
            name="budget"
            placeholder="Budget"
            type="text"
            label="Budget"
            mt="24px"
            borderColor={'#005252'}
          />
          {/* <Textarea mt="24px" placeholder="Enter your message" /> */}
          <CustomSelect
            options={serviceListData?.data?.map((item: any) => ({ label: item.attributes.name, value: item.id }))}
            name="service"
            label=""
            mt="24px"
          />
          <CustomTextarea name="description" placeholder="Describe your project" label="description" mt={'32px'} />
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
          <Text>Get in Touch</Text>
        </Button>
      </Box>
    </Box>
  )
}

export default React.memo(PartnerForm)
