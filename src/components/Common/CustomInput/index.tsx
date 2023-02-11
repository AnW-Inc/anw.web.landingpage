import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import Error from 'next/error'
import React from 'react'
import { FieldErrors } from 'react-hook-form'

interface ICustomInputProps {
  name: string
  id?: string
  label?: string
  placeholder?: string
  type?: string
  // errors?: FieldErrors
  errors?: Error | FieldErrors | any
  disabled?: boolean
  register?: any
  leftElement?: JSX.Element
  rightElement?: JSX.Element
  fieldRequired?: boolean
}

const CustomInput: React.FunctionComponent<ICustomInputProps & FormControlProps> = (props) => {
  const {
    register,
    errors,
    label,
    id,
    name,
    type = 'text',
    placeholder,
    leftElement,
    rightElement,
    disabled = false,
    fieldRequired = false,
    ...rest
  } = props
  const error = errors[name]

  return (
    <FormControl isInvalid={!!error} px={'2px'} {...rest}>
      {/* <FormLabel
        display={'flex'}
        htmlFor={name}
        mb="8px"
        // color={'#FFBD13'}
        style={{ gap: '4px' }}
        fontWeight={600}
      >
        {label} {fieldRequired && <Text color={'red.500'}>*</Text>}
      </FormLabel> */}
      <InputGroup>
        {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          {...register(name)}
          border={'none'}
          borderRadius={'none'}
          borderBottom={'1px solid #8C8C8C !important'}
          // color="white"
          _focus={{
            borderColor: 'var(--chakra-colors-primary) !important',
          }}
          fontWeight="400"
          lineHeight="22px"
          fontSize="14px"
          _placeholder={{
            color: '#8C8C8C',
            fontWeight: '400',
            lineHeight: '22px',
            fontSize: '14px',
          }}
          p="16px 0"
          h="54px"
          disabled={disabled}
          _invalid={{ borderColor: '#FF4B32 !important' }}
        />
        {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
      </InputGroup>
      {error && <FormErrorMessage color="#FF4B32">{error?.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default CustomInput
