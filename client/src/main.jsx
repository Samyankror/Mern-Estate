import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import {Provider} from 'react-redux'
import { persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <Provider store = {store} >
    <PersistGate loading = {<div>Loading...</div>} persistor = {persistor}>
    <App />
    </PersistGate>
  </Provider>
  
)
