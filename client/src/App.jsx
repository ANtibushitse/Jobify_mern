import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Landing, Register, Error } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
