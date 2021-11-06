import { Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

// Import Components
import Navigation from "../../components/Navigation"

const Products = () => {
  const products = [
    {
      id: 1,
      name: "product 1",
    },
    {
      id: 2,
      name: "product 2",
    },
    {
      id: 3,
      name: "product 3",
    },
  ]

  return (
    <>
      <Navigation />

      <Container>
        <>
          <Row>
            <Col md={12} className="d-flex justify-content-center mt-5">
              <h2 style={{ textTransform: "uppercase" }}>Products Page</h2>
            </Col>
          </Row>

          <Row className="d-flex flex-column mt-5">
            {products.map((product) => {
              return (
                <Col
                  key={product.id}
                  className="d-flex justify-content-center mb-3"
                >
                  <Link to={`${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                </Col>
              )
            })}

            <Col className="d-flex justify-content-center mb-3">
              <Link to="/products/addItem">
                <h3>Add Item</h3>
              </Link>
            </Col>
          </Row>
        </>
      </Container>
    </>
  )
}

export default Products
