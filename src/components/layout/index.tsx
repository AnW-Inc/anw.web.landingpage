import { Box } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Box>
        <Header />
        <Box mt={{ base: '', md: '78px' }} as="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout
