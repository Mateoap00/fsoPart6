import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { counterStore } from './reducers/counterReducer.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App counterStore={counterStore} />
    </React.StrictMode>,
)