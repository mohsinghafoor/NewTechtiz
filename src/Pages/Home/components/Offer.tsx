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
import Colors from '../../../components/Constants/Colors'
import OfferDetail from './OfferDetail'
import { Carousel } from 'react-responsive-carousel'
import { IconsData, offerData } from './PageData'
import { SetStateAction, useState } from 'react'

const Offer = () => {
  const [active, setActive] = useState(0)

  const ShowOffer = (index: SetStateAction<number>) => {
    setActive(index)
  }
  return (
    <Container w='full' maxW={'100%'} mb='30px' p={0}>
      <Box pl='60px'>
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
      <Box pl='62px' my='55px'>
        <HStack
          alignItems='center'
          flexWrap='wrap'
          // justifyContent='center'
          shouldWrapChildren
        >
          {IconsData.map((item, index) => (
            <Flex
              key={index}
              onClick={() => ShowOffer(index)}
              cursor='pointer'
              margin='20px 0px'
            >
              <Circle
                size='70px'
                bg={index === active ? Colors.purple : Colors.white}
                shadow='0px 3px 14px rgba(0, 0, 0, 0.25)'
              >
                <Image
                  src={item.icon}
                  alt='icon'
                  filter={
                    index === 0
                      ? 'invert(30%) sepia(30%) saturate(6238%) hue-rotate(344deg) brightness(108%) contrast(98%)'
                      : 'auto'
                  }
                />
              </Circle>
              <Text
                fontWeight={index === active ? 600 : 400}
                fontSize='20px'
                lineHeight='30px'
                marginLeft='16px'
                w='139px'
                mt='10px'
              >
                {item.text}
              </Text>
            </Flex>
          ))}
        </HStack>
      </Box>
      <Carousel
        showArrows={false}
        showStatus={false}
        selectedItem={active}
        infiniteLoop={true}
        showThumbs={false}
        onChange={(e) => setActive(e)}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            margin: '0 4px',
            background: Colors.lightBlue,
            cursor: 'pointer',
            bottom: '-15px',
            left: '-100px',
          }
          const style = isSelected
            ? { ...defStyle, background: Colors.blueSecondary }
            : { ...defStyle }
          return (
            <Box
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role='button'
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
              display='inline-block'
              height='16px'
              width='16px'
              borderRadius='50%'
              position='relative'
            ></Box>
          )
        }}
      >
        {offerData.map((item, index) => (
          <OfferDetail
            heading={item.heading}
            text={item.text}
            imageUrl={item.imageUrl}
            key={index}
          />
        ))}
      </Carousel>
    </Container>
  )
}

export default Offer
