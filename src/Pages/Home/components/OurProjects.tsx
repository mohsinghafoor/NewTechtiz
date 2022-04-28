import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { images } from '../../../assets/images'
import Colors from '../../../components/Constants/Colors'
import '../home.css'

const OurProjects = () => {
  return (
    <VStack mb='100px' marginTop='120px'>
      <Flex w={'100%'}>
        <Box
          background={Colors.bluePrimary}
          w='48%'
          paddingRight='10px'
          pos='relative'
          // h='96vh'
        >
          <Image
            src={images.bgCircle}
            className='img-white'
            display='inline-block'
          />
          <Image
            src={images.bgCircleSmall}
            className='img-white-sec'
            display='inline-block'
          />
          <Flex
            w='full'
            justifyContent='end'
            pos='absolute'
            bottom='30px'
            paddingRight='30px'
          >
            <VStack
              color={Colors.white}
              alignItems='center'
              justifyContent='flex-end'
              padding='10px 50px 40px 0px'
              width='80%'
            >
              <Heading
                textAlign={'start'}
                w='full'
                fontWeight={700}
                fontSize='60px'
                lineHeight='30px'
              >
                Quartt
              </Heading>
              <Text
                fontSize='18px'
                lineHeight=' 32px'
                margin='50px 0 30px 0px !important'
              >
                Qartt is a UK-based app that connects businesses and delivery
                partners. In reality, for businesses managing delivery teams and
                tracking their productivity is a big task. Qartt enables
                companies to keep a track of their orders, provide riders with
                optimized delivery routes and allows them to manage their
                products seamlessly.
              </Text>
              <Text
                alignSelf='end'
                cursor='pointer'
                fontSize='24px'
                lineHeight='30px'
              >
                Skip
              </Text>
            </VStack>
          </Flex>
        </Box>
        <Flex
          background={'#E6EDFE'}
          margin='0 !important'
          alignItems='center'
          justifyContent='center'
          flex='1'
          paddingTop='100px'
          paddingBottom='180px'
        >
          <Image src={images.quart1} width='560px' height='600px' />
        </Flex>
      </Flex>
    </VStack>
  )
}

export default OurProjects
