import React, { Component } from 'react'
import data from '../data'
export default class Detail extends Component {
  render() {
    return (
      <div className="container">
          {
            data.map((val, key) => {
              if (val.id == this.props.match.params.id) {
                return (
                  <div className="row">
                  <div className="col-4">
                    <img className="img-fluid" src={`https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/0${key+1}-thumbnail.jpg`} alt="abc" />
                  </div>
                    <div className="col-8">
                      <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{val.heading}</div>
                        <div class="portfolio-caption-subheading text-muted">{val.subheading}</div>
                        <div><p>{val.description}</p></div>
                      </div>
                    </div>
                    </div>

                    )
                }
            })
          }
        </div>
    )
  }
}
