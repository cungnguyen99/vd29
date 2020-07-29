import React, { Component } from 'react'
import SingleTeam from './SingleTeam'

export default class Team extends Component {
  state = {
    services: [
      {
        heading: 'Lead Designer',
        name: 'Kay Garland'
      },
      {
        heading: 'Lead Marketer',
        name: 'Larry Parker'
      },
      {
        heading: 'Lead Developer',
        name: 'Diana Petersen'
      }
    ]
  }
  render() {
    return (
      <div>
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              {
                this.state.services.map((item, index)=>{
                  return(
                    <div className="col-lg-4" key={index}>
                      <SingleTeam name={item.name} heading={item.heading} count={index+1}/>
                    </div>
                  )
                })
              }
             </div> 
            <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
