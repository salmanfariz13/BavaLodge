import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import photo1 from "./assets/Image2.jpeg";
import photo2 from "./assets/logo1.png"
import photo3 from "./assets/Preview.png";

const slides=[{
  url:"http://localhost:3000/image2.jpeg",title:"pic1"},
  {url:"http://localhost:3000/logo1.png",title:"pic2"},
  {url:"http://localhost:3000/image2.jpeg",title:"pic3"}
];


function App() {
  return (
    <Router>
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </main>
    </Router>
    
  );
}

export default App;
