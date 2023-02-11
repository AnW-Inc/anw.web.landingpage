import { AddIcon } from '@chakra-ui/icons'
import { Center, FormControl, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function CustomDropzone(props: any) {
  const { onFileAccepted, fileName = '', register, label = '', dropText = '', error, ...rest } = props

  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileAccepted(acceptedFiles[0])
    },
    [onFileAccepted],
  )

  const { getRootProps, getInputProps, isDragActive, isFileDialogActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
  })

  const activeBg = useColorModeValue('#171717', '#171717')

  const getBorderColor = () => {
    if (error) {
      return '#ff4b32'
    }
    if (fileName) {
      return 'white'
    }
    return '#8C8C8C'
  }

  return (
    <FormControl {...rest}>
      {/* <Text fontWeight={600} mb="8px">{label}</Text> */}
      <Center
        p={10}
        cursor="pointer"
        bg={isDragActive ? activeBg : 'transparent'}
        _hover={{ bg: activeBg }}
        transition="background-color 0.2s ease"
        border="1px dashed"
        borderColor={getBorderColor()}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Icon color={'#8C8C8C'} as={AddIcon} mr={2} />
        <Text color={'#8C8C8C'}>{dropText}</Text>
      </Center>
      <Text fontSize="14px" mt="5px" color="white">
        {fileName}
      </Text>

      {error && (
        <Text fontSize="14px" mt="5px" color="#ff4b32">
          {error}
        </Text>
      )}
    </FormControl>
  )
}
