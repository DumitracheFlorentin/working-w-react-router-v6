import { Row, Col, Container } from "react-bootstrap"

// Import Components
import Navigation from "../components/Navigation"

const Main = () => {
  return (
    <>
      <Navigation />

      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-5">
            <h2 style={{ textTransform: "uppercase" }}>Main Page</h2>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Main
