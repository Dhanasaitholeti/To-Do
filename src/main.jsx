import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CookiesProvider>
      <App />
        </CookiesProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
