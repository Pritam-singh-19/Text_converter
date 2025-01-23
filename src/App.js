import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; // Import the About page
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components

function App() {
  const [mode, setMode] = useState('light'); // Default mode is light

  // Function to toggle dark mode
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <Router>
      <Navbar title="Text converter" aboutText="About Us" mode={mode} toggleMode={toggleMode} backgroundColor="#0dcaf0" />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Your Text to Analyze" />} />
          <Route path="/about" element={<About />} /> {/* Add route for About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
