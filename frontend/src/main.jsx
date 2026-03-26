import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuotePopupProvider } from './assets/context/QuotePopupContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    

      <QuotePopupProvider>
        <App />
      </QuotePopupProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)