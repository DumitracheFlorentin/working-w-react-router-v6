import { Routes, Route } from "react-router-dom"

// Import Screens
import Main from "./screens/Main"
import Products from "./screens/Products/Products"
import SpecificProduct from "./screens/Products/SpecificProduct"
import AddItems from "./screens/Products/AddItems"
import NotFound from "./screens/NotFound"
import DashboardMain from "./screens/Dashboard/Main"
import DashboardUsers from "./screens/Dashboard/Users"
import DashboardProducts from "./screens/Dashboard/Products"

// Import Style
import "./style/style.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="products" element={<Products />} />
      <Route path="products/:id" element={<SpecificProduct />} />
      <Route path="products/addItem" element={<AddItems />} />

      <Route path="dashboard" element={<DashboardMain />}>
        <Route path="users" element={<DashboardUsers />} />
        <Route path="products" element={<DashboardProducts />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
