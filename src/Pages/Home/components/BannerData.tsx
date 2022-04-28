import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import Colors from '../../../components/Constants/Colors'
import '../home.css'

interface Props {
  heading: string
  text: string
  imageUrl: string
}

const BannerData = (props: Props) => {
  const { heading, text, imageUrl } = props
  return (
    <HStack px={{ sm: 3, md: 5, lg: 8 }} py={7} pb='85px'>
      <VStack
        color={Colors.white}
        textAlign='start'
        alignItems='start'
        width='55%'
      >
        <Heading fontSize='48px' lineHeight='72px' width='80%'>
          {heading}
        </Heading>
        <Text fontFamily='dm sans' width='full' padding='10px 0 40px'>
          {text}
        </Text>
        <HStack width='full'>
          <Button
            color={Colors.blueSecondary}
            bg={Colors.white}
            lineHeight='24px'
            fontSize='16px'
            marginRight='25px'
            py={3}
            height='56px'
            width='260px'
          >
            Let's Start Your Project
          </Button>
          <Button
            bg={Colors.bluePrimary}
            color={Colors.white}
            lineHeight='24px'
            fontSize='16px'
            variant='outline'
            _hover={{
              bg: Colors.bluePrimary,
            }}
            py={3}
            height='56px'
            width='130px'
          >
            Talk to us
          </Button>
        </HStack>
      </VStack>
      <Box mr='40px' display={{ sm: 'none', md: 'flex' }} width='45%'>
        <Image
          src={imageUrl}
          height='506px'
          width='603px'
          className='banner-image'
        />
      </Box>
    </HStack>
  )
}

export default BannerData
