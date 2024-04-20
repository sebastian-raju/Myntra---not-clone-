import React from 'react'
import { Col }from 'react-bootstrap';
import './Style/Card.css'
import { Link } from 'react-router-dom';

function Card({prodObj}) {

  const { id,title, category, image, rating, price} = prodObj;

  return (
    <Col xl = {3} lg = {4} md = {6} sm = {6} className='d-flex justify-content-center'>
      <div className='card-container'>
        <Link to = {"/single-view/"+ id } style={{ textDecoration: "none"}}>
          <div className="image-container">
            <img className='image' src={image} alt="" />
          </div>
          <div className="card-content d-flex flex-column align-items-start justify-content-between flex-grow-1 text-black">
            <div className='main-content'>
              <div className="card-title">
                {title}
              </div>
              <div className="category">
                {category}
              </div>
              <div className={rating?.rate>4?"text-success":rating?.rate>3?"text-warning":"text-danger"}>
                {rating?.rate} <i className="fa-solid fa-star fa-2xs"></i>
              </div>
            </div>
            <div className='price'>
              {price} $
            </div>
          </div>
        </Link>
      </div>
    </Col>
    
  )
}

export default Card 
