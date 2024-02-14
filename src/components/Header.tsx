import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/signin">Signin</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/">Home</Link>
      <Link to="/Favorites">Favorites</Link>
    </header>
  );
};

export default Header;
