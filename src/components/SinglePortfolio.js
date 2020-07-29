import React from 'react'
import {Link} from 'react-router-dom'

function to_slug(str){
    str = str.toLowerCase();     
 
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    str = str.replace(/(\s+)/g, '-');
 
    str = str.replace(/^-+/g, '');
 
    str = str.replace(/-+$/g, '');
 
    return str;
}
export default function SinglePortfolio( {heading, subheading, idPortfolio, count}) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <Link className="portfolio-link" to={`/portfolio/${to_slug(subheading)}.${idPortfolio}.html`}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
          </div>
          <img className="img-fluid" src={`https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/0${count}-thumbnail.jpg`} alt="abc" />
        </Link>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{heading}</div>
          <div className="portfolio-caption-subheading text-muted">{subheading}</div>
        </div>
      </div>
    </div>
  )
}

