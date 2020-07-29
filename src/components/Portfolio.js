import React, { Component } from 'react'
import SinglePortfolio from './SinglePortfolio'
import data from '../data'
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              {
                data.map((item, index) => {
                  return (
                      <SinglePortfolio 
                        key={index}
                        idPortfolio={item.id}
                        count={index + 1} 
                        heading={item.heading} 
                        subheading={item.subheading} />
                    )
                })
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}
