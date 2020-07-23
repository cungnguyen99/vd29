import React, { Component } from 'react'
import Contact from './Contact'
import Header from './Header'
export default class ContactPage extends Component {
  render() {
    return (
      <>
      <Header className="contactpage" title="Contact Page"/>
      <Contact/>
      </>
    )
  }
}
