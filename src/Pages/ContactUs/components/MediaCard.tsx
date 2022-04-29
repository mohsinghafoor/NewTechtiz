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

const cardData = [
  {
    heading: 'Email Us',
    text: 'Email us for general queries, including \n marketing and partnership opportunities.',
    contact: 'contact@techtiz.co',
  },
  {
    heading: 'Call Us',
    text: 'Call us to speak to a member of our team.\n We are always happy to help.',
    contact: '+92 321 4641094',
  },
  {
    heading: 'Support',
    text: 'Check out helpful resources, FAQs and \n developer tools.',
    contact: 'Support Center',
  },
]

const MediaCard = () => {
  return (
    <Flex
      paddingBottom='100px'
      px='40px'
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems='center'
    >
      {cardData.map((card, index) => (
        <VStack
          w={{ base: '100%', md: '33.3%' }}
          key={index}
          justifyContent='center'
          marginBottom='40px'
          marginTop='-30px'
        >
          <Image src={images.contactIcon} alt='icon' marginBottom='15px' />
          <Heading
            color={Colors.bluePrimary}
            textAlign='center'
            fontSize='24px'
            marginBottom='15px !important'
            fontWeight={400}
          >
            {card.heading}
          </Heading>
          <Text
            color={Colors.greyDark}
            textAlign='center'
            fontSize='16px'
            lineHeight='24px'
            marginBottom='15px !important'
            whiteSpace='pre-line'
          >
            {card.text}
          </Text>
          <Text
            color={Colors.linkColor}
            fontSize='16px'
            fontWeight={600}
            cursor='pointer'
          >
            {card.contact}
          </Text>
        </VStack>
      ))}
    </Flex>
  )
}

export default MediaCard
