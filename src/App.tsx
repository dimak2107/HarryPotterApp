import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import CharacterDetailed from "./pages/CharacterDetailed";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/characters/:id" element={<CharacterDetailed />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
