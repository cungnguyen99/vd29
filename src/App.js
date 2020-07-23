import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Switch, Route } from "react-router-dom";
import Contact from './components/ContactPage';
import Services from './components/ServicePage';
import Detail from './components/Detail';
function App() {
  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/services' component={Services}/>
      {/* Vì link có dạng như này portfolio/website-design.5.html: slug là website-design id là 5 cuối là .html */}
      <Route exact path='/portfolio/:slug.:id.html' component={Detail}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
