import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/news";
import SingleNews from "./pages/singleNews";
import Products from "./pages/products";

const App = () => {
  return (
    <Router>
      <div>
        <h1>This is the Page Header</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <hr />
        <h1>This is the Page footer</h1>
      </div>
    </Router>
  );
};

export default App;
