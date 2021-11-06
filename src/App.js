import { Routes, Route } from "react-router-dom"

// Import Screens
import Main from "./screens/Main"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}

export default App
