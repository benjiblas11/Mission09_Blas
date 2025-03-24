import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)

//The StrictMode tag enforces rules that react has
// The app tag is referring to app.tsx