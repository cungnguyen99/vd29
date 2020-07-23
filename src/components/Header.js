import React from 'react'

function Header ({title, className}) {
    return (
      <div>
        <header className={className}>
        <div className="container">
          <div className="masthead-subheading">Welcome To {title}!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
      </header>
      </div>
    )
  }
  Header.defaultProps={
    title: 'Our Studio'
  }
  export default Header;
