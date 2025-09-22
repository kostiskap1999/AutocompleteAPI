import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Form from './Form'
import Ads from './Ads'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Form</Link> | <Link to="/ads">Ads</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ads" element={<Ads />} />
      </Routes>
    </Router>
  )
}
