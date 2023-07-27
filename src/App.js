// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login"; // Import the Login component

function App() {
  const [user, setUser] = useState(null); // Track the user's authentication state

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login onLogin={setUser} />} />
        <Route path="/courses/:id" element={user ? <SingleCourse /> : <Login onLogin={setUser} />} />
        <Route path="/category/:category" element={user ? <Courses /> : <Login onLogin={setUser} />} />
        <Route path="/cart" element={user ? <Cart /> : <Login onLogin={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
