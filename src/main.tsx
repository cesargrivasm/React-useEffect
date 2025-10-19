import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseEffect from './UseEffect'
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseEffect/>
  </StrictMode>,
)
