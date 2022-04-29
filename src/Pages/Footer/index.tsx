import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import linkedin from '../../assets/linkedin.svg'
import fb from '../../assets/facebook.svg'
import twitter from '../../assets/twiter.svg'
import clutch from '../../assets/clutch.png'
import instagram from '../../assets/instagram.png'
import Company from './Company'
import ReachUs from './ReachUs'
import Resources from './Resources'
import Services from './Services'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <Stack bg='#032E9B' w='full' px={{ base: '10px', xl: '130px' }} py='50px'>
      <Grid templateColumns='repeat(12, 1fr)' gap={0} pb='50px'>
        <GridItem colSpan={{ base: 12, md: 4 }} px={{ base: '0', lg: '4' }}>
          <SocialMedia />
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          pt={{ base: '30px', md: '45px' }}
        >
          <Company />
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          pt={{ base: '30px', md: '45px' }}
        >
          <Services />
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          pt={{ base: '30px', md: '45px' }}
        >
          <Resources />
        </GridItem>
        <GridItem
          colSpan={{ base: 6, md: 2 }}
          pt={{ base: '30px', md: '45px' }}
        >
          <ReachUs />
        </GridItem>
      </Grid>
      <HStack
        spacing={3}
        w='full'
        justifyContent={'center'}
        pb='30px'
        pt='10px'
        display={{ base: 'flex', sm: 'none' }}
      >
        <Image src={linkedin} />
        <Image src={twitter} />
        <Image src={fb} />
        <Image src={instagram} />
        <Image src={clutch} />
      </HStack>
      <Box h='2px' bg='white' w='full' mt='3' />
      <Flex justify={'center'} pt='2' w='full'>
        <Text color='white'>©Techtiz 2022. All right reserved</Text>
      </Flex>
    </Stack>
  )
}
