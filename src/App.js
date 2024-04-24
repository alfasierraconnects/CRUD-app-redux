import React from "react";
import UserForm from "./components/UserForm";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
