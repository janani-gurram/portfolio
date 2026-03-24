import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'

// this is the entry point of the React application, it
  // imports React and my components
  // creates the root React component (<App />)
  // mounts it to the #root div in the HTML (index.html)
// the entire app is rendered inside of the <div id="root"></div> in index.html

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
