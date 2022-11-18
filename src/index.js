import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import ContactSent from './views/contact-sent'
import Home from './views/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Contact />} exact path="/contact" />
        <Route element={<ContactSent />} exact path="/contact-sent" />
        <Route element={<Home />} exact path="/" />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
