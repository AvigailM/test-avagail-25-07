import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog'
import './css/app.css';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  return (
    <div className="main">
       <Router>
      <h1 className="header-main" >TV information </h1>
      <Header/>
     
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
