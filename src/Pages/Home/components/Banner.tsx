import { Box } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import BannerData from './BannerData'
import '../home.css'
import { BannersData } from './PageData'

const Banner = () => {
  return (
    <Box
      bg='radial-gradient(circle, rgba(9,33,131,1) 0%, rgba(9,9,121,0.8589810924369747) 87%, rgba(9,33,131,0.9066001400560224) 100%)'
      pt='85px'
      justifyContent={{ sm: 'start', xl: 'center' }}
    >
      <Carousel
        autoPlay
        showStatus={false}
        showArrows={false}
        infiniteLoop
        showThumbs={false}
      >
        {BannersData.map((item, index) => (
          <BannerData
            heading={item.heading}
            text={item.text}
            imageUrl={item.imageUrl}
            key={index}
          />
        ))}
      </Carousel>
    </Box>
  )
}

export default Banner
