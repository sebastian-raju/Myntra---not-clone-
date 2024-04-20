import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row , Col }from 'react-bootstrap';
import './Style/Hero.css'

function Hero() {
  return (
    <>
      <div className='main-home-container mb-lg-5 mb-1'>
     <Container className='hero-section-container'>
          <Row className='hero-section row-gap-5 p-4'>
            <Col lg = {6} className="left-section-container">
            <img className='w-100' src="https://i.postimg.cc/FK4z4tDT/homepage.png" alt="" />
            </Col>
            <Col lg = {6} className="right-section-container d-flex justify-content-center align-items-center ps-lg-5">
            <div className="text-lg-start text-center welcome-paragraph p-lg-5">Enjoy your online shopping with 
              <span className='company'> Myntra <img
                alt=""
                src="https://i.postimg.cc/RqrZFcC7/myntra-Main.png"
                width="50"
                height="30"
                className="d-inline-block align-center me-2" 
              /></span>
            </div>
            </Col>
          </Row>
     </Container>
    </div>
    </>
  )
}

export default Hero
