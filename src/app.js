import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.scss";
import Archive from "./pages/archive";
import Single from "./pages/single";

const App = () => {
  return (
    <Router>
      <div className="header">This is the page Header</div>
      <div className="products">
        <Routes>
          <Route path="/" element={<Archive />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </div>
      <div className="footer">This is the page Footer</div>
    </Router>
  );
};

export default App;
