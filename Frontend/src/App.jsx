import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header.jsx';
import Home from './Pages/Home.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
