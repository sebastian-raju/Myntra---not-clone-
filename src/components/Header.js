import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style/Header.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <Navbar expand="lg" className="mainNav shadow-sm py-md-3 py-2" fixed="top" >
      <Container className='px-4'>
        <Link to={'/'}>
          <Navbar.Brand href="#"><img
                  alt=""
                  src="https://i.postimg.cc/RqrZFcC7/myntra-Main.png"
                  width="50"
                  height="30"
                  className="d-inline-block align-center me-2" 
                /></Navbar.Brand>
        </Link>
        <Navbar.Toggle className="border-0 shadow-none" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex flex-column flex-lg-row column-gap-4 ps-lg-5">
            <Nav.Link className='left-menu text-black fw-semibold' href="#action1">MEN</Nav.Link>
            <Nav.Link className='left-menu text-black fw-semibold' href="#action2">WOMEN</Nav.Link>
            <Nav.Link className='left-menu text-black fw-semibold' href="#action3">KIDS</Nav.Link>
            <Nav.Link className='left-menu text-black fw-semibold' href="#action4">HOME & LIVING</Nav.Link>
            <Nav.Link className='left-menu text-black fw-semibold' href="#action5">BEAUTY</Nav.Link>
          </Nav>
          <Nav className="d-flex flex-lg-row flex-row align-items-center justify-content-lg-between justify-content-start column-gap-4">
            <Nav.Link className='right-menu text-black fw-semibold' href="#home"><div className='text-center'>
            <i className="fa-solid fa-user"></i>
              </div>
              <div>
                Profile
              </div>
            </Nav.Link>
            <Nav.Link className='right-menu text-black fw-semibold' href="#home"><div className='text-center'>
            <i className="fa-solid fa-heart"></i>
              </div>
              <div>
                Wishlist
              </div>
            </Nav.Link>
            <Nav.Link className='right-menu text-black fw-semibold' href="#home"><div className='text-center'>
            <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div>
                Bag
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
