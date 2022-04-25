import {
  Heading,
  Text,
  VStack,
  HStack,
  Box,
  Image,
  Flex,
} from '@chakra-ui/react'
import Colors from '../../../components/Constants/Colors'
import { EngagementModels } from './PageData'

const EngagementModel = () => {
  return (
    <VStack w={'full'} padding='0 40px'>
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize='40px'
        lineHeight='64px'
        marginTop='50px'
      >
        Engagement Models
      </Heading>

      <HStack cursor='pointer' justifyContent='center'>
        {EngagementModels.map((item, index) => (
          <VStack
            alignItems='center'
            key={index}
            padding='50px 25px 25px 25px'
            border='1px solid transparent'
            width='33%'
            margin='50px 2%'
            borderBottom='10px solid transparent'
            _hover={{
              border: ' 1px solid #B4C9FD',
              boxShadow: ' 0px 0px 15px rgba(0, 0, 0, 0.13)',
              borderBottom: '10px solid  #032E9B',
            }}
          >
            <Image src={item.icon} alt='icon' width='206ox' height='160px' />
            <Text>{item.heading}</Text>

            <Text
              fontSize='20px'
              lineHeight='28px'
              color={Colors.RegularText}
              marginTop='34px'
              textAlign='center'
            >
              {item.text}
            </Text>
            <Text
              fontWeight={500}
              fontSize='24px'
              lineHeight='64px'
              color={Colors.bluePrimary}
            >
              Get Started
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  )
}

export default EngagementModel
