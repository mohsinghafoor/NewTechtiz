import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Button from '../../../components/Button'

export default function WhatWeOffer({ whatWeOfferData }: any) {
  const data = whatWeOfferData
  return (
    <Box maxW='360px' px='3'>
      <Image src={data.logo} mb='30px' />
      <Heading fontSize='24px' fontWeight={'700'} color='#00164D' mb='30px'>
        {data.heading}
      </Heading>
      <Text fontSize='20px' fontWeight={'400'} color='#080330' mb='30px'>
        {data.text}
      </Text>
      <Button>{data.btnText}</Button>
    </Box>
  )
}
