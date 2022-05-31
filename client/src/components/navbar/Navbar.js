import React, { useState } from 'react'
import{Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

export default function Navbars() {

    const [username,setUsername] = useState('');
  return (
    <div className="navbar">
        <Navbar className="w-100" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {username ? <Nav.Link href="#action1">Logout</Nav.Link> :<> <Nav.Link href="signup">Register</Nav.Link> <Nav.Link href="/login">Login</Nav.Link></> }
      
    </Navbar.Collapse>
  </Container>
</Navbar>


    </div>
  )
}
