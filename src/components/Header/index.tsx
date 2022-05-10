import { Box, Flex, Button, useDisclosure, Stack } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import TopNav from '../TopNav'
import TechtizLogo from '../../assets/svgs/TechtizLogo'
import Colors from '../Constants/Colors'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

const Header = () => {
  const [offset, setOffset] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())
  const [isLargerThan840] = useMediaQuery('(min-width: 840px)')

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      color={Colors.white}
      bg={offset > 80 ? '#041447' : 'transparent'}
      pos='fixed'
      top='0'
      width='100%'
      zIndex={3}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        as='nav'
        align='center'
        wrap='wrap'
        padding={6}
        pt={{ sm: '30px', md: 6 }}
        maxWidth='1440px'
        flex='1 0 auto'
        justify={{ base: 'space-between', md: 'unset' }}
        bg={isOpen ? Colors.white : 'transparent'}
      >
        <Flex align='center' mr={5}>
          <TechtizLogo color={isOpen ? Colors.bluePrimary : Colors.white} />
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          {isOpen ? <CloseIcon color={'black'} /> : <HamburgerIcon />}
        </Box>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          justifyContent={{ md: 'center', lg: 'end' }}
          paddingRight={{ base: '0px', md: '10px', lg: '50px' }}
          flexGrow={1}
          mt={{ base: 6, md: 0 }}
          color={{ base: Colors.blueSecondary, md: Colors.white }}
        >
          <TopNav />
        </Stack>
        <Box
          display={{ base: isOpen ? 'flex' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
          justifyContent={isOpen ? 'center' : 'unset'}
          w={{ base: 'full', md: 'unset' }}
        >
          <Button
            variant='outline'
            bg={isOpen ? Colors.blueSecondary : Colors.white}
            color={isOpen ? Colors.white : Colors.blueSecondary}
            alignSelf='center'
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
    </Box>
  )
}

export default Header
