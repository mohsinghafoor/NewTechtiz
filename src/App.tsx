import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Routes from './routes'

function App() {
  return (
    <Box overflow='hidden'>
      <Header />
      <Routes />
    </Box>
  )
}

export default App
