import React, { Component } from 'react'
import SinglePortfolio from './SinglePortfolio'
import data from '../data'
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section class="page-section bg-light" id="portfolio">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
              <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div class="row">
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
