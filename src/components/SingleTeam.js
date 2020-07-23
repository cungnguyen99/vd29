import React from 'react'

export default function SingleTeam({heading, count, name}) {
  return (
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={`https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/${count}.jpg`} alt="" />
      <h4>{name}</h4>
      <p className="text-muted">{heading}</p>
      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
    </div>
  )
}

