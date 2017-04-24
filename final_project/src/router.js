import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import App from './components/App'

export default(
  <BrowserRouter>
  <div className="main">
  <Navbar />
  <Route exact path='/' component = {App} />
  <Footer />
  </div>
  </BrowserRouter>

  )
