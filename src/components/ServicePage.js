import React, { Component } from 'react'
import Services from './Services'
import Header from './Header'

export default class ServicePage extends Component {
  render() {
    return (
      <>
      <Header className='servicepage' title='Services Page'/>
      <Services/>
      </>
    )
  }
}
