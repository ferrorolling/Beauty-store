import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ListProductProvider } from './context/ListProductProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ListProductProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ListProductProvider>
)
