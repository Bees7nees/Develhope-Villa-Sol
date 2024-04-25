import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/App.jsx'
import { GlobalProvider } from '../src/Components/GlobalVariable.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GlobalProvider>
    <App />
    </GlobalProvider>
  </React.StrictMode>,
)
