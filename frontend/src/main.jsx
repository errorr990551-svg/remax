import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuotePopupProvider } from './assets/context/QuotePopupContext'
import { ProductMenuProvider } from './assets/context/ProductMenuContext'
import emailjs from '@emailjs/browser';

emailjs.init('L6kSSqLl5HJakWtm5');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    

      <QuotePopupProvider>
        <ProductMenuProvider>
          <App />
        </ProductMenuProvider>
      </QuotePopupProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)