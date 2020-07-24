import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsRelated extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top"  src={`https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/0${this.props.idPortfolio+1}-thumbnail.jpg`} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{this.props.heading}</h5>
            <p className="card-text">{this.props.description}</p>
            <Link class="portfolio-link" to={`/portfolio/${this.props.subheading}.${this.props.idPortfolio}.html`}>View detail</Link>
          </div>
        </div>
      </div>
    )
  }
}
