
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
 /* A React Router. */
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<div>Dashbord</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
