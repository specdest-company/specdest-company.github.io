import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Test from './views/test'
import ContactSent from './views/contact-sent'
import Home from './views/home'
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <ThemeProvider theme={studioTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Contact />} exact path="/contact" />
          <Route element={<Test />} exact path="/test" />
          <Route element={<ContactSent />} exact path="/contact-sent" />
          <Route element={<Home />} exact path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
