import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import App from './components/App';
import License_Permits from './components/License_Permits';
import Loans_Grants from './components/Loans_Grants';

export default(
  <BrowserRouter>
  <div className="main">
  <Navbar />
  <Route exact path='/' component = {App} />
  <Route exact path='/License_Permits' component ={License_Permits} />
  <Route exact path='/Loans_Grants' component={Loans_Grants} />
  <Footer />
  </div>
  </BrowserRouter>

  )
