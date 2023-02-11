import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Flex, HStack, Input, Text } from '@chakra-ui/react'
import { LIMIT_PAGE_OPTIONS, PAGE_CHANGE_TYPE } from 'constants/pagination'
import React, { useEffect, useRef, useState } from 'react'

interface IPaginationProps {
  onPageChange?: any
  total?: number
  pagination: any
  onLimitPerPageChange?: any
  isShowLimitList?: boolean
}

const getPageValue = (page: number, totalPage: number) => {
  if (page >= totalPage) {
    return totalPage
  }
  if (page <= 1) {
    return 1
  }
  return page
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const { total = 0, onPageChange = () => {}, pagination, onLimitPerPageChange, isShowLimitList = false } = props
  const { limit = 12, page: defaultCurrent = 1 } = pagination
  const [limitPerPage, setLimitPerPage] = useState(LIMIT_PAGE_OPTIONS[0])

  const totalPage = Math.ceil(total / limit)
  const page = getPageValue(defaultCurrent, totalPage)
  const inputRef = useRef<any>(null)

  const handleOnChangePage = (e: any) => {
    let value = inputRef?.current.value
    let key = e.keyCode

    if (!value) {
      return
    }

    if (value > totalPage) {
      value = totalPage
    }
    if (value < 1) {
      value = 1
    }
    if (key === 13) {
      onPageChange(value)
    }
  }

  const handleOnChangeListingsPerPage = (selectedOption: any) => {
    const { value: newLimit } = selectedOption
    const newTotalPage = Math.ceil(total / newLimit)
    const newPage = page > newTotalPage ? newTotalPage : page

    inputRef.current.value = newPage
    onLimitPerPageChange(newPage, newLimit)
    setLimitPerPage(selectedOption)
  }

  const handleOnClickChangePage = (direction: PAGE_CHANGE_TYPE) => {
    const newPage = getPageValue(page + direction, totalPage)
    onPageChange(newPage)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = page
    }
  }, [page])

  if (total === 0 || totalPage === 1) {
    return null
  }

  return (
    <HStack mt="42px" spacing={'32px'} justifyContent={'center'} w={'full'}>
      {/* {isShowLimitList && (
        <Box w={'160px'}>
          <CustomSelect
            options={LIMIT_PAGE_OPTIONS}
            closeMenuOnSelect={true}
            menuPlacement="top"
            value={limitPerPage}
            onChange={(selectedOption) => handleOnChangeListingsPerPage(selectedOption)}
          />
        </Box>
      )} */}
      <HStack spacing={'24px'} justifyContent={'center'} alignItems={'center'}>
        <Button
          onClick={() => handleOnClickChangePage(PAGE_CHANGE_TYPE.DESC)}
          variant="pagination"
          disabled={page <= 1}
        >
          <ChevronLeftIcon />
        </Button>
        <Flex
          mx="16px"
          fontFamily="default"
          fontWeight={'500'}
          fontSize="14px"
          lineHeight="32px"
          alignItems="center"
          style={{ gap: '10px' }}
          color={'#F3F3FF'}
        >
          <Text>Page</Text>
          <Input variant={'pagination'} ref={inputRef} defaultValue={pagination.page} onKeyDown={handleOnChangePage} />
          <Text>of {totalPage}</Text>
        </Flex>
        <Button
          disabled={page >= totalPage}
          onClick={() => handleOnClickChangePage(PAGE_CHANGE_TYPE.ASC)}
          variant="pagination"
        >
          <ChevronRightIcon />
        </Button>
      </HStack>
    </HStack>
  )
}

export default Pagination
