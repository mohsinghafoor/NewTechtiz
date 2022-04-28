import { Text, TextProps, Box } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import Colors from '../Constants/Colors'

const NavItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blogs', path: '/careers' },
  { name: 'About Us', path: '/careers' },
]

const TopNav = () => {
  const location = useLocation()
  let currentPage = location.pathname.split('/')[1]
  currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1)

  const textStyles: TextProps = {
    marginRight: { base: '56px', md: '30px' },
    fontSize: '16px',
  }

  return (
    <>
      {NavItems.map((item, index) => (
        <Link to={item.path} key={index}>
          <Text {...textStyles}> {item.name}</Text>

          {(currentPage === item.name ||
            (currentPage === '' && item.name === 'Home')) && (
            <Box bgColor={Colors.white} w='33%' h='2px'></Box>
          )}
        </Link>
      ))}
    </>
  )
}

export default TopNav
