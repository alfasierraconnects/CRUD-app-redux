import React from "react";
import UserForm from "./pages/UserForm";
import Read from "./pages/Read";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/edit/:userId" element={<EditUser />} />{" "}
        {/* Corrected route */}
        <Route
          path="*"
          element={
            <p className="text-xl text-center mt-20">404 | Page not found</p>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
