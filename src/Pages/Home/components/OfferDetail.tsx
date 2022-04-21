import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Colors from '../../../components/Constants/Colors'

interface Props {
  heading: string
  text: string
  imageUrl: string
}

const OfferDetail = (props: Props) => {
  const { heading, text, imageUrl } = props
  return (
    <Flex pos='relative' justifyContent='flex-end'>
      <Box
        padding='53px 84px 53px 60px'
        border='1px solid'
        borderColor={Colors.lightPurple}
        pos='absolute'
        top='83px'
        left='80px'
        zIndex='1'
        bg={Colors.white}
        height='min-content'
        maxWidth='713px'
        borderRadius='8px'
      >
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
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
          Get Started
        </Button>
      </Box>
      <Box w='50%'>
        <Image src={imageUrl} height={'420px'} />
      </Box>
    </Flex>
  )
}

export default OfferDetail
