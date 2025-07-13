import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './Component/Header/Header.jsx';
import SearchBar from './Component/SearchBar/SearchBar.jsx';
import HeadSlider from './Component/HeadSlider/HeadSlider.jsx';
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <HeadSlider />
    </Router>
  )
}

export default App
