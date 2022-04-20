import React from 'react'
import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import TopNav from '../TopNav'
import TechtizLogo from '../../assets/svgs/TechtizLogo'
import Colors from '../Constants/Colors'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => (isOpen ? onClose() : onOpen())

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={6}
      color={Colors.white}
      bg='blue'
    >
      <Flex align='center' mr={5}>
        <Box>
          <TechtizLogo />
        </Box>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Box>
        <TopNav isOpen={isOpen} />
      </Box>
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant='outline'
          _hover={{ bg: 'teal.700', borderColor: 'teal.700' }}
        >
          Get a quote
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
