import "@aws-amplify/ui-react/styles.css";
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import TestTop from './views/test-top'
import TestContact from './views/test-contact'
import TestRecruit from './views/test-recruit'
import ContactSent from './views/contact-sent'
import Home from './views/home'
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <ThemeProvider theme={studioTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Contact />} exact path="/contact" />
          <Route element={<TestTop />} exact path="/test-top" />
          <Route element={<TestContact />} exact path="/test-contact" />
          <Route element={<TestRecruit />} exact path="/test-recruit" />
          <Route element={<ContactSent />} exact path="/contact-sent" />
          <Route element={<Home />} exact path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
