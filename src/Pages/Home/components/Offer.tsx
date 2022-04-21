import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import Colors from '../../../components/Constants/Colors'
import { images } from '../../../assets/images/index'
import OfferDetail from './OfferDetail'
import { Carousel } from 'react-responsive-carousel'

const Data = [
  { icon: images.softwareDevIcon, text: 'Custom Software Development' },
  { icon: images.teamArgumentIcon, text: 'Team Augmentation' },
  { icon: images.designIcon, text: 'Product Designer' },
  { icon: images.supportIcon, text: 'Support & Maintenance' },
]

const Offer = () => {
  return (
    <Container w='full' maxW={'100%'} mb='30px'>
      <Box pl='89px'>
        <Heading
          color={Colors.bluePrimary}
          fontWeight={700}
          fontSize='40px'
          lineHeight='64px'
        >
          What we offer
        </Heading>
        <Text color={Colors.darkBlue} fontSize='20px' lineHeight='30px'>
          Customize Your Software from the start and establish your business in
          style
        </Text>
      </Box>
      <Box pl='79px' my='55px'>
        <HStack>
          {Data.map((item, index) => (
            <Flex key={index}>
              <Circle
                size='70px'
                bg={Colors.purple}
                shadow='0px 3px 14px rgba(0, 0, 0, 0.25)'
              >
                <Image src={item.icon} alt='icon' />
              </Circle>
              <Text fontSize='20px' Line-height='30px' marginLeft='16px'>
                {item.text}
              </Text>
            </Flex>
          ))}
        </HStack>
      </Box>
      <Carousel>
        <OfferDetail
          heading='Ideation & Discovery'
          text='We assist the establishment of new businesses, starting from the
          identification of their special requirements to designing and
          developing MVP software.'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/development-c.jpg'
        />
        <OfferDetail
          heading='Custom
Development'
          text='Our team of enthusiastic software engineers understand what’s ideal for your business and create pleasant user experiences for your customers./'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/custom-s.jpg'
        />
        <OfferDetail
          heading='Team
Augmentation'
          text='We assist the establishment of new businesses, starting from the identification of their special requirements to designing and developing MVP software.'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/enterprise-icon-2048x1367.jpg'
        />
        <OfferDetail
          heading='Product
          Design'
          text='Whether it is a design from scratch or redesigning a product we got you covered. We provide you with the best creative and advanced design services at one place.'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/design.jpg'
        />

        <OfferDetail
          heading='Support
          & Maintenance'
          text='We offer maintenance and support packages that help you manage and conduct occasional reviews for feature updates and new versions.'
          imageUrl='
          https://techtiz.co/wp-content/uploads/2022/02/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office-1.png'
        />
      </Carousel>
    </Container>
  )
}

export default Offer
