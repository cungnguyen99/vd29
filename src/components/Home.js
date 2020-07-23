import React, { Component } from 'react'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import Header from './Header'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Services/>
        <Portfolio/>
        <About/>
        <Team/>
        <Contact/>
      </div>
    )
  }
}
