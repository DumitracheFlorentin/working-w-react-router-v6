import { Navbar, Nav, Container } from "react-bootstrap"

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>

        <Nav>
          <Nav.Link>Products</Nav.Link>
          <Nav.Link>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
