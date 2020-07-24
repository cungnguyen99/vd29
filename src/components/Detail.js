import React, { Component } from 'react'
import data from '../data'
import Header from './Header'
import NewsRelated from './NewsRelated'
export default class Detail extends Component {
  render() {
    let count=0;
    return (
      <>
      <Header/>
      <div className="container">
          {
            data.map((val, key) => {
              console.log(this.props)
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
        <hr/>
        <div className="container">
          <h2 className="text-center">New Related</h2>
          <div className="row">
            {
              data.map((item,index)=>{
                if(count<=4){
                  count++;
                  if(item.id!=this.props.match.params.id){
                    return(
                      <div className="col-3">
                        <NewsRelated  
                            key={index}
                            idPortfolio={item.id}
                            count={index + 1} 
                            heading={item.heading} 
                            description={item.description}></NewsRelated>
                      </div>
                    )
                  }
                }
              })
            }
          </div>
        </div>

        </>
    )
  }
}
