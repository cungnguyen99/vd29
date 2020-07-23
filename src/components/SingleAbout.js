import React from 'react'

export default function SingleAbout({count, date, subheading, text, inverted}) {
  return (
      <li className={inverted}>
        <div className="timeline-image"><img className="rounded-circle img-fluid" src={`https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/${count}.jpg`} alt="" /></div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{date}</h4>
            <h4 className="subheading">{subheading}</h4>
          </div>
          <div className="timeline-body"><p className="text-muted">{text}</p></div>
        </div>
      </li>
  )
} 
