import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({ logedInUser, setShow }) => {
  return (
    <Navbar expand="md" className="bg-primary shadow-lg">
      <Container>
        <Navbar.Brand href="/">Bucket List Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {logedInUser?._id ? (
              <>
                <Nav.Link
                  href="/add"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(true);
                  }}
                >
                  Add New
                </Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
