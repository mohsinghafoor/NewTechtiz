import { Box } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import BannerData from './BannerData'
import '../home.css'

const Banner = () => {
  return (
    <Box
      bg='radial-gradient(circle, rgba(9,33,131,1) 0%, rgba(9,9,121,0.8589810924369747) 87%, rgba(9,33,131,0.9066001400560224) 100%)'
      pt='120px'
      justifyContent={{ sm: 'start', xl: 'center' }}
    >
      <Carousel autoPlay showStatus={false} showArrows={false}>
        <BannerData
          heading='Digital Solutions to Get Your Business Up & Running'
          text='Result-driven software products to support your digital journey.'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/04/banner-imgc.png'
        />
        <BannerData
          heading='Converting Your Imagination into Innovation'
          text='Get the best web applications tailored to create the ideal user
          experience'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/INOVATION.svg'
        />
        <BannerData
          heading='Transform Your Digital Identity with TechTiz'
          text='Enabling businesses to unlock their maximum potential through
          enterprise-grade software'
          imageUrl='https://techtiz.co/wp-content/uploads/2022/03/digital-identity.svg'
        />
      </Carousel>
    </Box>
  )
}

export default Banner
