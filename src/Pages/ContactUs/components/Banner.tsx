import { Heading, Text, Box, Center, VStack } from '@chakra-ui/react'
import Colors from '../../../components/Constants/Colors'
import '../styles.css'

const Banner = () => {
  return (
    <Box className='banner' color={Colors.white}>
      <Center>
        <VStack marginBottom={{ base: ' 30px ', md: '0px' }} px={'20px'}>
          <Heading
            color='#fff'
            fontSize={{ base: '28', sm: '38', md: '48px' }}
            lineHeight={{ base: '40px', sm: '46px', md: '52px', lg: '56px' }}
            // lineHeight='56px'
            fontWeight={700}
            textAlign='center'
            padding='0 0 10px'
          >
            Contact our sales team
          </Heading>
          <Text
            textAlign='center'
            fontSize={{ base: '14px', md: '18px', lg: '20px' }}
            lineHeight={{ base: '22px', md: '28px', lg: '30px' }}
          >
            If you need our help, have questions about how to use the platform
            or are <br />
            experiencing technical difficulties, please do not hesitate to
            contact us.
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}

export default Banner
