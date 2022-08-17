import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Omar Tech</Navbar.Brand>
          </Link>

          <Nav className="ml-auto">
            <Link to="/about">
              {/* <Nav.Link>About us</Nav.Link> */}
              <Nav.Item className="nav-link">About us</Nav.Item>
            </Link>

            <Link to="Cart">
              <Nav.Item className="nav-link">Cart</Nav.Item>
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
