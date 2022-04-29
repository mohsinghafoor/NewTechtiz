import { Box } from '@chakra-ui/react'
import Footer from '../Footer'
import Banner from './components/Banner'
import Form from './components/Form'
import MediaCard from './components/MediaCard'
import './styles.css'

const ContactUs = () => {
  return (
    <Box>
      <Banner />
      <Form />
      <MediaCard />
      <Footer />
    </Box>
  )
}

export default ContactUs
