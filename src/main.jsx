import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'
import {CookiesProvider} from 'react-cookie'
import {Provider} from 'react-redux'
import store from "./redux/configureStore.js"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </ChakraProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
