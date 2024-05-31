import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cadastro from './Register'
import Login from './Login'

export function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
      </Routes>
    </Router>
  )
}