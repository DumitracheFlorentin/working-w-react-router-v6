import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="hoverBtn">
            LOGO
          </Link>
        </Navbar.Brand>

        <Nav>
          <Nav.Link>
            <Link to="/products" className="hoverBtn">
              Products
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/cart" className="hoverBtn">
              Cart
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/dashboard" className="hoverBtn">
              Dashboard
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
