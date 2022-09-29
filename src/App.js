import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Category/:category" element={<Category />} />
      </Routes>
      <footer
        className="d-flex justify-content-center"
        style={{ padding: "20px" }}
      >
        The Meal ©2022 Created by Fauzi Irham
      </footer>
    </BrowserRouter>
  );
}
