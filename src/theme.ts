import { extendTheme } from '@chakra-ui/react'

const CustomTheme = extendTheme({
  fonts: {
    body: 'DM Sans ',
    heading: 'DM Sans ',
  },
  breakpoints: {
    md: '840px',
  },
})

export default CustomTheme
