import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Props {
  isOpen: boolean
}

const TopNav = (props: Props) => {
  const { isOpen } = props
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
      width={{ base: 'full', md: 'auto' }}
      alignItems='center'
      flexGrow={1}
      mt={{ base: 4, md: 0 }}
    >
      <Link to={'./home'}>Home</Link>
      <Link to={'./services'}>Services</Link>
      <Link to={'./porfolio'}>Porfolio</Link>
      <Link to={'./careers'}>Careers</Link>
    </Stack>
  )
}

export default TopNav
