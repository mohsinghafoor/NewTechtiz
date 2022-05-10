import { Flex, Heading } from '@chakra-ui/react'
import Colors from '../../components/Constants/Colors'
import Footer from '../Footer'
import Banner from './components/Banner'
import EngagementModel from './components/EngagementModel'
import Expertise from './components/Expertise'
import GrowBusiness from './components/GrowBusiness'
import Offer from './components/Offer'
import OurProjects from './components/OurProjects'
import Reviews from './components/Reviews'
import Technologies from './components/Technologies'
import './home.css'

const Home = () => {
  return (
    <>
      <Banner />
      <Flex w='100%' justify={'center'}>
        <Heading
          color={Colors.blueSecondary}
          fontWeight='bold'
          fontSize={{ base: '32px', md: '36px', lg: '40px' }}
          lineHeight={{ base: '36px', md: '46px', lg: '64px' }}
          textAlign='center'
          my='100px'
          px={9}
          maxWidth='1440px'
        >
          A full stack app development company working with the most reliable
          tech-driven digital solutions
        </Heading>
      </Flex>
      <Offer />
      <GrowBusiness />
      <Expertise />
      <OurProjects />
      <Technologies />
      <EngagementModel />
      <Reviews />

      <Footer />
    </>
  )
}

export default Home
