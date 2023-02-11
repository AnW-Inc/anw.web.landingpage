import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import CustomNavLink from 'components/Common/CustomNavLink'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function WithSubNavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    if (position !== 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Flex
      as="header"
      flexDir={'column'}
      justify={'center'}
      align={{ base: 'start', md: 'center' }}
      // position={{ base: 'sticky', md: 'fixed' }}
      zIndex={9}
      top={0}
      w={'full'}
      // {...(isScrolled
      //   ? {
      //       bg: 'primary',
      //     }
      //   : {})}
      // bg={{ base: 'black', md: 'linear-gradient(180deg, #ff7e40 0%, rgba(0, 0, 0, 0) 100%);' }}
    >
      <Flex px={'24px'} w={'100%'} maxW={'1248px'} color={'white'} minH={'78px'} py={{ base: 2 }} align={'center'}>
        <Flex flex={{ base: 1, md: 'auto' }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={3} h={3} />}
            variant={'ghost'}
            _hover={{
              bg: '',
              filter: 'brightness(2)',
            }}
            _active={{
              bg: '',
              filter: 'brightness(2)',
            }}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex w={'full'} justify={{ base: 'center', md: 'space-between' }} align={'center'}>
          <CustomNavLink to="/">
            {/* <HStack spacing={'5px'} fontFamily={'primary'} fontWeight={'700'} lineHeight={'30px'} fontSize={'30px'}>
              <Text color={'primary'}>9385</Text>
              <Text
                fontSize={'20px'}
                transform={'translateY(-25%)'}
                display={'inline-block'}
                color={'rgba(191, 191, 191, 1)'}
              >
                Studio
              </Text>
            </HStack> */}
            <Center p={2} bg={'theme.color-1'} w={'150px'}>
              <Image src="/logo.png" height={'50px'} alt={'logo'} />
            </Center>
          </CustomNavLink>
          <Box display={{ base: 'none', md: 'block' }}>
            <DesktopNav />
          </Box>
          <ScrollLink to={'#contact'} spy={true} smooth={true} duration={500}>
            <Button
              bg={'primary'}
              color={'white'}
              w={'136px'}
              h={'46px'}
              ml={'36px'}
              display={{ base: 'none', md: 'flex' }}
              fontWeight={'500'}
              fontSize={'16px'}
              lineHeight={'24px'}
              transition={'all 0.3s'}
              _hover={{
                filter: 'brightness(1.2)',
                transition: 'all 0.3s',
              }}
            >
              Let’s Talk
            </Button>
          </ScrollLink>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('theme.color-6', 'gray.200')
  const linkHoverColor = useColorModeValue('theme.color-5', 'white')
  const popoverContentBgColor = useColorModeValue('rgb(31,36,41)', 'red.400')
  const router = useRouter()

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {/* <Popover trigger={'hover'} placement={'bottom'}> */}
          {/* <PopoverTrigger> */}
          {/* <Link
                p={2}
                href={navItem.href ?? '/'}
                fontSize={'16px'}
                fontWeight={700}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
                {navItem.children && <Icon color={'white'} w={5} h={5} as={ChevronDownIcon} />}
              </Link> */}
          {/* <CustomNavLink to={navItem.href ?? '/'}>
                <Flex alignItems={'center'}>
                  <Text>{navItem.label}</Text>
                  {navItem.children && <Icon color={'white'} w={5} h={5} as={ChevronDownIcon} />}
                </Flex>
              </CustomNavLink> */}
          {navItem.children ? (
            <Box
              _hover={{
                '& > *': {
                  textDecoration: 'none',
                  color: linkHoverColor,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                },
              }}
            >
              <Flex p={2} fontSize={'16px'} fontWeight={700} color={linkColor} alignItems={'center'}>
                <Text>{navItem.label}</Text>
                <Icon w={5} h={5} as={ChevronDownIcon} />
              </Flex>
            </Box>
          ) : (
            <CustomNavLink to={navItem.href ?? '/'}>
              <Flex
                p={2}
                fontSize={'16px'}
                fontWeight={700}
                color={router.asPath.startsWith(`${navItem.href}`) ? linkHoverColor : linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                alignItems={'center'}
              >
                <Text>{navItem.label}</Text>
                {navItem.children && <Icon color={'white'} w={5} h={5} as={ChevronDownIcon} />}
              </Flex>
            </CustomNavLink>
          )}
          {/* </PopoverTrigger> */}

          {navItem.children && (
            <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'1140px'}>
              <Stack justifyContent={'space-between'} direction="row" flexWrap={'wrap'} w={'full'}>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
          {/* </Popover> */}
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel, icon }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#FFF7EC' }}
      w={'300px'}
      minH={'135px'}
      transition={'all 0.5s'}
    >
      <Flex gap={'16px'}>
        {icon && <Image width={50} height={50} alt={'menu icon'} src={icon} />}
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text transition={'all 0.5s'} _groupHover={{ color: 'black' }} fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'} transition={'all 0.5s'} _groupHover={{ color: 'black' }}>
              {subLabel}
            </Text>
          </Box>
          {/* <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex> */}
        </Stack>
      </Flex>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack px={'24px'} pb={'24px'} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      <ScrollLink to={'#contact'} spy={true} smooth={true} duration={500}>
        <Button
          bg={'#fff'}
          w={'136px'}
          mt={2}
          h={'46px'}
          display={{ base: 'flex', md: 'none' }}
          fontWeight={'500'}
          fontSize={'16px'}
          lineHeight={'24px'}
          transition={'all 0.3s'}
          _hover={{
            filter: 'brightness(1.2)',
            transition: 'all 0.3s',
          }}
        >
          Let’s Talk
        </Button>
      </ScrollLink>
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
            color={'white'}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                <Text color={'white'}>{child.label}</Text>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
  icon?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'News',
    href: '/news',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Careers',
    href: '/careers',
  },
]
