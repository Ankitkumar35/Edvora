import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
export const NavBar = ({user}) => {
  return (
<>
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Edvora</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link ><img
      style={{borderRadius: '100%'}}
        src={user ? user.url : 'data:image/png;base64,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'}
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Nav.Link>
      <Nav.Link >{user ? user.name : 'loading...'} (station code: {user ? user.station_code : 'loading...'})</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
</> 
  )
}
