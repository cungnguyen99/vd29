import React, { Component } from 'react'
import SingleAbout from './SingleAbout'
export default class About extends Component {
  state = {
    services: [
      {
        date: '2009-2011',
        subheading: 'Our Humble Beginnings',
        inverted: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
      },
      {
        date: 'March 2011',
        subheading: 'An Agency is Born',
        inverted: 'timeline-inverted',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
      },
      {
        date: 'December 2012',
        subheading: 'Transition to Full Service',
        inverted: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
      },
      {
        date: 'July 2014',
        subheading: 'Phase Two Expansion',
        inverted: 'timeline-inverted',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
      }
    ]
  }
  render() {
    return (
      <div>
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
              {
                this.state.services.map((item, index) => {
                  return (
                    <SingleAbout count={index + 1} date={item.date}
                      subheading={item.subheading} inverted={item.inverted} text={item.text} />
                  )
                })
              }
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
