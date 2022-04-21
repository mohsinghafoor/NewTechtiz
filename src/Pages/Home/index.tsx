import { Heading } from '@chakra-ui/react'
import Colors from '../../components/Constants/Colors'
import Banner from './components/Banner'
import Offer from './components/Offer'
import './home.css'

const Home = () => {
  return (
    <>
      <Banner />
      <Heading
        color={Colors.blueSecondary}
        fontWeight='bold'
        fontSize='40px'
        lineHeight='64px'
        textAlign='center'
        my='100px'
        px={9}
      >
        A full stack app development company working with the most reliable
        tech-driven digital solutions
      </Heading>
      <Offer />
    </>
  )
}

export default Home
