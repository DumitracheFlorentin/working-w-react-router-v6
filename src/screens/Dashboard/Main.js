import { Container, Row, Col } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

// Import Components
import Navigation from "../../components/Navigation"

const Main = () => {
  return (
    <>
      <Navigation />

      <Container>
        <Row className="my-5">
          <h1 style={{ textAlign: "center" }}>Dashboard</h1>
        </Row>
        <Row>
          <Col md={6}>
            <h4 style={{ textAlign: "center" }}>
              <Link to="/dashboard/users">Users</Link>
            </h4>
          </Col>
          <Col md={6}>
            <h4 style={{ textAlign: "center" }}>
              <Link to="/dashboard/products">Products</Link>
            </h4>
          </Col>
        </Row>

        <Outlet />
      </Container>
    </>
  )
}

export default Main
