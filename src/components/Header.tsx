import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout } from "../store/actions/authActionCreators";
import "./Header.css";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const handleLogout = () => dispatch(logout());

  return (
    <header className="app__header">
      <div className="app__header-links">
        {!isAuth ? (
          <>
            <NavLink to="/signin" className="links">
              Signin
            </NavLink>
            <NavLink to="/signup" className="links">
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/history" className="links">
              History
            </NavLink>
            <NavLink to="/favorites" className="links">
              Favorites
            </NavLink>
          </>
        )}

        <NavLink to="/" className="links">
          Home
        </NavLink>
      </div>

      {isAuth && (
        <button onClick={handleLogout} className="app__header-button">
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
