import { Container, Row, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

// Import Components
import Navigation from "../../components/Navigation"

const AddItems = () => {
  return (
    <div>
      <Navigation />

      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center mt-5">
            <h2>A new item was added! </h2>
            <Link to="/products">Go Back To Products</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddItems
