import { MinusIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { images } from '../../../assets/images'
import Colors from '../../../components/Constants/Colors'
import { GrowBusinessData, GrowBusinessImages } from './PageData'

const GrowBusiness = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  return (
    <VStack w='full' alignItems='center' justifyContent='center'>
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize='40px'
        lineHeight='64px'
        marginTop='100px'
      >
        How TechTiz Helps Your Business Grow
      </Heading>

      <HStack
        w='full'
        padding='20px'
        justifyContent='center'
        mt='50px !important'
      >
        <Box w='50%'>
          <Accordion allowMultiple w='100%'>
            {GrowBusinessData.map((item, index) => (
              <AccordionItem
                key={index}
                onClick={() => setSelectedImage(index)}
              >
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Text
                        color={Colors.blueSecondary}
                        fontSize='24px'
                        lineHeight='63.98px'
                      >
                        {item.heading}
                      </Text>
                    </Box>
                    <AccordionIcon
                      color={Colors.blueSecondary}
                      height='24px'
                      width='24px'
                    />
                  </AccordionButton>
                </h2>
                {item.list.map((listItem, index) => (
                  <AccordionPanel pb={4} key={index}>
                    <List display='flex' alignItems='flex-start'>
                      <Image
                        src={images.listBullet}
                        marginTop='6px'
                        marginRight='20px'
                      />
                      <ListItem>
                        <Text fontSize='16px' lineHeight='30px'>
                          {listItem}
                        </Text>
                      </ListItem>
                    </List>
                  </AccordionPanel>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Box
          // w='46%'

          paddingLeft='80px'
        >
          {GrowBusinessImages.map(
            (image, index) =>
              index === selectedImage && (
                <Image
                  src={image}
                  alt='image'
                  key={index}
                  height='350px'
                  width='400px'
                />
              )
          )}
        </Box>
      </HStack>
    </VStack>
  )
}

export default GrowBusiness
