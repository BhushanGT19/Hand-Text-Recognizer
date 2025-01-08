import React from "react";

import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            Hindi Handwritten Text Recognizer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
