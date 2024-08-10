import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const location = useLocation();
  const cartProducts = useSelector(state => state.cart);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
       
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link}
              className={location.pathname === '/' ? 'text-primary' : ''}
            >
              Products
            </Nav.Link>
          </Nav>

          <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end'>
              <Navbar.Text>
                <Nav.Link to="/cart" as={Link}
                 className={location.pathname === '/cart' ? 'text-primary' : ''}
                >
                  My Bag {cartProducts.length}
                </Nav.Link>
              </Navbar.Text>
            </Navbar.Collapse>
          
      
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;
