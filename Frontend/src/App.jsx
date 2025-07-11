import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Header from './Component/Header';
import './App.css'

function App() {

  return (
    <Router>
      <Header />
    </Router>
  )
}

export default App
