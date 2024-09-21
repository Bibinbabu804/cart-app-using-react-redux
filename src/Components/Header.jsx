import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {

  const [wishlistCount,setWishlistCount]= useState(0)
  const [cartCount,setCartCount]= useState(0)

  const wishlist =useSelector(state=> state.wishlistslice.wishlist)
  const cart= useSelector(state=>state.cartSlice)
  


  useEffect(()=>{

    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)

  },[wishlist,cart])


  return (
    <div>
      <Navbar expand="lg" className="bg-info navbar-dark position-fixed top-0 w-100" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
             E-Cart <FaCartArrowDown className='fs-2' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav ">
            <Nav className="ms-auto">

              <Nav.Link className='btn btn-outline-dark'>
                <Link to="/wishlist" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                  <i className="fa-solid fa-heart text-danger "></i> Wishlist
                  <Badge bg="success rounded ms-2">{wishlistCount}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link  className='btn btn-outline-dark' >
                <Link to="/cart" style={{ color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>
                  <i className="fa-solid fa-cart-shopping text-warning"></i> Cart
                  <Badge bg="success rounded ms-2">{cartCount}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


export default Header