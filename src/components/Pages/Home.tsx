import {
  Box,
  Image,
  VStack,
  Text,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import Colors from '../Constants/Colors'

const Home = () => {
  return (
    <HStack bg='blue'>
      <VStack color={Colors.white}>
        <Heading>Digital Solutions to Get Your Business Up & Running</Heading>
        <Text fontFamily='dm sans'>
          Result-driven software products to support your digital journey.
        </Text>
        <HStack>
          <Button>Let's Start Your Project</Button>
          <Button>Talk to us</Button>
        </HStack>
      </VStack>

      <Box>
        <Image
          src='https://techtiz.co/wp-content/uploads/2022/04/banner-imgc.png'
          height='500px'
          width='600px'
        />
      </Box>
    </HStack>
  )
}

export default Home
