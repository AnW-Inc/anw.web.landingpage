import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface ICustomNavLinkProps {
  to: string
  children: React.ReactNode
  onClick?: (any?: any) => void
}

const CustomNavLink: React.FunctionComponent<ICustomNavLinkProps> = (props) => {
  const { to, children, onClick = () => {}, ...rest } = props
  if (to.startsWith('/')) {
    return (
      <Link href={to} passHref {...rest}>
        <Box
          display={'inline-block'}
          _hover={{
            textDecoration: 'none',
            transform: 'scale(1.05)',
            transition: 'all 0.3s',
          }}
          transition="all 0.3s"
          // as={'a'}
          cursor={'pointer'}
          onClick={onClick}
        >
          {children}
        </Box>
      </Link>
    )
  }
  return (
    <Link href={to} passHref {...rest}>
      <Box
        display={'inline-block'}
        _hover={{
          textDecoration: 'none',
          transform: 'scale(1.05)',
          transition: 'all 0.3s',
        }}
        transition="all 0.3s"
        as={'a'}
        target={to.includes('http') ? '_blank' : '_self'}
        rel="noopener noreferrer"
        cursor={'pointer'}
        onClick={onClick}
      >
        {children}
      </Box>
    </Link>
  )
}

export default CustomNavLink
