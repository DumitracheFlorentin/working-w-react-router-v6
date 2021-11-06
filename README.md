# The New React Router ( Version 6.0.1 )

## Description

The new version of React-Router-Dom is here and it brings interesting features. In this repository I tried to implement and understand them as much as possible. Below I will create tags from each one.

### Configuring Routes

In the new version of React Router you do not need to order your routes in a certain way to get the correct URL for all cases. Now, the algorithm is much better than the previous one and it knows how to ordonate your routes, so everytime you will get the correct one!

```
<Route path="products/:id" element={<SpecificProduct />} />
<Route path="products/addItem" element={<AddItems />} />
```

### useParams

Use this feature to get the id from URL, this way you can fetch your data more easily than before.

```
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

const SpecificProduct = () => {
  const { id } = useParams()

  return (
    <Container>
      <Row>
        <Col>
          <h2>This is product with id {id} </h2>
        </Col>
      </Row>
    </Container>
  )
}
```

### Nested Routes 

Probably the most powerful feature from React Router because now, you can choose to write all routes like the example from below

```
<Route path="products" element={<Products />} />
<Route path="products/:id" element={<SpecificProduct />} />
<Route path="products/addItem" element={<AddItems />} />
```

Or you can nested routes inside one another, of course that their paths will nest too (the children will copy the path from the parent). You can see in this example:

```
<Route path="dashboard" element={<DashboardMain />}>
    <Route path="users" element={<DashboardUsers />} />
    <Route path="products" element={<DashboardProducts />} />
</Route>
```

This feature is really usefull when it comes to create for example a dashboard who needs to show you users, team, products, orders, invoces etc. Also, it is very easy to implement, you have to wrap the children in a parent route, after that you have to create the components (usersDashboard, productsDashboard etc) and in the final import Outlet from React Router Package and put in in the parent section as JSX Code. With "Outlet" the engine will know where to render the code from children components.

```
const Main = () => {
  return (
    <>
      <Navigation />

      <Container>
        <Row className="my-5">
          <h1>Dashboard</h1>
        </Row>
        <Row>
          <Col md={6}>
            <h4>
              <Link to="/dashboard/users">Users</Link>
            </h4>
          </Col>
          <Col md={6}>
            <h4>
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
```

## License
The MIT License

Copyright (c) 2021 Dumitrache Florentin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
