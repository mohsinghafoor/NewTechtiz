import { Heading, Text, VStack, HStack, Image } from '@chakra-ui/react'
import { useState, SetStateAction } from 'react'
import Colors from '../../../components/Constants/Colors'
import { Technology, TechStacks } from './PageData'
import '../home.css'

const Technologies = () => {
  const [active, setActive] = useState(0)

  const handleTechStack = (e: SetStateAction<number>) => {
    setActive(e)
  }

  return (
    <VStack w={'full'} mb='30px' className='technologies'>
      <Heading
        color={Colors.bluePrimary}
        fontWeight={700}
        fontSize='40px'
        lineHeight='64px'
        marginTop='50px'
      >
        Technologies
      </Heading>
      <Text textAlign='center' margin='32px 0 60px !important'>
        We are a multi-platform app development company with <br /> modern
        technologies in our arsenal
      </Text>
      <VStack padding='0 80px' alignItems='center' w='full'>
        <HStack w='100%' justifyContent='space-around' mb='60px'>
          {Technology.map((item, index) => (
            <Text
              key={index}
              color={index === active ? Colors.blueSecondary : Colors.disabled}
              onClick={() => handleTechStack(index)}
              cursor='pointer'
              fontWeight={index === active ? 700 : 400}
              fontSize='24px'
              lineHeight='32px'
            >
              {item}
            </Text>
          ))}
        </HStack>
        {TechStacks.map((item, index) => (
          <HStack key={index} width='100%' alignItems='center'>
            {index === active &&
              Object.values(item)[0].map((tech: any) => (
                <VStack p='0' w='25%'>
                  <Image
                    src={tech.imageUrl}
                    alt='icon'
                    width='90px'
                    height='100px'
                    marginBottom='34px'
                  />
                  <Text
                    fontSize='24px'
                    lineHeight='32px'
                    color={Colors.subHeading}
                    fontWeight={500}
                  >
                    {tech.text}
                  </Text>
                </VStack>
              ))}
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default Technologies
