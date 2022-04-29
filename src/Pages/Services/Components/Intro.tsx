import { Stack, Heading, Text, Image, HStack } from '@chakra-ui/react'
import Button from '../../../components/Button'
import WhiteButton from '../../../components/ButtonWhite'
export default function Intro({ introData }: any) {
  return (
    <Stack align={'center'} pb={'100px'}>
      <Heading
        maxW='835px'
        textAlign='center'
        fontSize={{ base: '32px', md: '48px' }}
        color='#032e9b'
        fontWeight={'700'}
        fontFamily='DM Sans'
      >
        {introData.heading}
      </Heading>
      <Text
        maxW='600px'
        textAlign='center'
        fontSize={{ base: '18px', md: '24px' }}
        color='#032e9b'
        fontWeight={'400'}
        fontFamily='DM Sans'
        py='30px'
      >
        {introData.text}
      </Text>

      <HStack spacing={'25px'}>
        <Button>Discuss Your Project</Button>
        <WhiteButton display={{ base: 'none', md: 'block' }}>
          See Preicing Plans
        </WhiteButton>
      </HStack>
      <Image
        src={introData.img}
        py='40px'
        display={{ base: 'none', md: 'block' }}
      />
    </Stack>
  )
}
