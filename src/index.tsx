import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import CustomTheme from './theme'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={CustomTheme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
