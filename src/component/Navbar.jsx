import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const App_Navbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ padding: "15px" }}
    >
      <Container>
        {/* <div className="" style={{ display: "flex ", gap: "20px" }}> */}
        <div className="logo">
          {" "}
          <Navbar.Brand href="#home">One Page</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
            <button
              className="mx-3"
              style={{
                backgroundColor: "#2385D1",
                color: "white",
                padding: "10px 30px",
                borderRadius: "10px",
                border: "none",
                fontSize: "1.1rem",
              }}
            >
              {" "}
              Get Started
            </button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App_Navbar;
