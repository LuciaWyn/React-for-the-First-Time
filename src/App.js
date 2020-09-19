import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Components/Header'

import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'

function App() {
  return (
    <div class="relative pd-10 min-h-screen">
      
       <Router>
        <Header/>
          <div className="p-3">   
            <switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/products/:id">
                <Product></Product>
              </Route>
            </switch>
          </div>   
          <Footer/>
       </Router>
       
    </div>
  );
}

export default App;
