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
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { images } from '../../../assets/images'
import Colors from '../../../components/Constants/Colors'
import { GrowBusinessData } from './PageData'

const GrowBusiness = () => {
  return (
    <VStack>
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize='40px'
        lineHeight='64px'
        marginTop='50px'
      >
        How TechTiz Helps Your Business Grow
      </Heading>

      <HStack w='full'>
        <Box w='54%'>
          <Accordion allowMultiple>
            {GrowBusinessData.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {item.heading}
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
                    <List>
                      <Image src={images.listBullet} />
                      <ListItem>{listItem}</ListItem>
                    </List>
                  </AccordionPanel>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        <Box w='46%'>
          <Image src='https://techtiz.co/wp-content/uploads/2022/02/Group-2.png' />
        </Box>
      </HStack>
    </VStack>
  )
}

export default GrowBusiness
