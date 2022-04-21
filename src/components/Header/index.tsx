import { Box, Flex, Button, useDisclosure, Stack } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import TopNav from '../TopNav'
import TechtizLogo from '../../assets/svgs/TechtizLogo'
import Colors from '../Constants/Colors'
import { useEffect, useState } from 'react'

const Header = () => {
  const [offset, setOffset] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      color={Colors.white}
      bg={offset > 80 ? '#041447' : 'transparent'}
      pos='fixed'
      top='0'
      width='100%'
      zIndex={3}
    >
      <Flex align='center' mr={5}>
        <Box>
          <TechtizLogo />
        </Box>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        justifyContent='end'
        paddingRight='50px'
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <TopNav />
      </Stack>
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant='outline'
          bg={Colors.white}
          color={Colors.blueSecondary}
          _hover={{
            bg: Colors.blueSecondary,
            borderColor: 'teal.700',
            color: Colors.white,
          }}
        >
          Get a quote
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
