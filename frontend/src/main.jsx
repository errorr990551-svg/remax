import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, createRoutesFromChildren, matchRoutes } from 'react-router-dom'
import { QuotePopupProvider } from './assets/context/QuotePopupContext'
import { ProductMenuProvider } from './assets/context/ProductMenuContext'
import { appRoutes } from './routes.jsx'

const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  // The pre-rendered HTML stays on screen until React commits, so the initial render can run as a
  // transition: React then works in small slices instead of one long main-thread block (better TBT/INP).
  React.startTransition(() => root.render(
    <React.StrictMode>
      <BrowserRouter>
        <QuotePopupProvider>
          <ProductMenuProvider>
            <App />
          </ProductMenuProvider>
        </QuotePopupProvider>
      </BrowserRouter>
    </React.StrictMode>,
  ))
}

// Load the current page's chunk before the first render. Otherwise React would replace the
// pre-rendered HTML with the Suspense fallback while the chunk downloads (blank flash + CLS).
const matches = matchRoutes(createRoutesFromChildren(appRoutes.props.children), window.location) || []
const preloads = matches
  .map((m) => m.route.element?.type?.preload?.())
  .filter(Boolean)

Promise.all(preloads).catch(() => {}).finally(render)
