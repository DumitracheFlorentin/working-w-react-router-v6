import { Container, Row, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

// Import Components
import Navigation from "../../components/Navigation"

const SpecificProduct = () => {
  const { id } = useParams()

  return (
    <div>
      <Navigation />

      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center mt-5">
            <h2>This is product with id {id} </h2>
            <Link to="/products">Go Back To Products</Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecificProduct
