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
    <HStack
      px={{ sm: 3, md: 5, lg: 8 }}
      py={7}
      pb='85px'
      maxWidth='100%'
      flexDirection={{ sm: 'column', md: 'row' }}
    >
      <VStack
        color={Colors.white}
        textAlign='start'
        alignItems='start'
        width={{ sm: ' 90%', md: '50%' }}
        mt={{ sm: '50px', md: 'none' }}
      >
        <Heading
          fontSize={{ base: '34px', sm: '38px', md: '42px', lg: '48px' }}
          lineHeight={{ base: '42px', sm: '52px', md: '62px', lg: '72px' }}
        >
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
      <Box
        mr='40px'
        height={'506px'}
        width={{ base: '403', md: '603px' }}
        mt={{ base: '70px !important', md: 'none' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Image
          src={imageUrl}
          className='banner-image'
          minH={'100%'}
          maxW='100%'
        />
      </Box>
    </HStack>
  )
}

export default BannerData
