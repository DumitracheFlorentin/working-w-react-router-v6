import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

// Import React Router
import { BrowserRouter as Router } from "react-router-dom"

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)

reportWebVitals()
