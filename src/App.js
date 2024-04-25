import React from "react";
import UserForm from "./pages/UserForm";
import Read from "./pages/Read";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route exact path="/read" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
