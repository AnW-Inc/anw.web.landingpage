import { FormControl, FormControlProps, FormErrorMessage, Select } from '@chakra-ui/react'
import Error from 'next/error'
import React from 'react'
import { FieldErrors } from 'react-hook-form'

interface ICustomSelectProps {
  name: string
  id?: string
  label?: string
  placeholder?: string
  type?: string
  options: any[]
  // errors?: FieldErrors
  errors?: Error | FieldErrors | any
  disabled?: boolean
  register?: any
  leftElement?: JSX.Element
  rightElement?: JSX.Element
  fieldRequired?: boolean
}

const CustomSelect: React.FunctionComponent<ICustomSelectProps & FormControlProps> = (props) => {
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
    options,
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

      <Select
        disabled={disabled}
        _invalid={{ borderColor: '#FF4B32 !important' }}
        id={name}
        name={name}
        color={'theme.color-6'}
        border={'none'}
        borderRadius={'0'}
        borderBottom={'1px solid #8C8C8C !important'}
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
        {...register(name)}
      >
        {options?.map((option, key) => (
          <option key={key} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </Select>
      {error && <FormErrorMessage color="#FF4B32">{error?.message}</FormErrorMessage>}
    </FormControl>
  )
}

export default CustomSelect
