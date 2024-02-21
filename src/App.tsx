import { useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin/Signin";
import CharacterDetailed from "./pages/CharacterDetailed";
import Signup from "./pages/Signup/Signup";
import { useAppDispatch } from "./hooks/hooks";
import { checkAuth } from "./store/actions/authActionCreators";
import RequireAuth from "./hoc/RequireAuth";
import "./App.css";
import RequireNoAuth from "./hoc/RequireNoAuth";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/signup"
          element={
            <RequireNoAuth>
              <Signup />
            </RequireNoAuth>
          }
        />
        <Route
          path="/signin"
          element={
            <RequireNoAuth>
              <Signin />
            </RequireNoAuth>
          }
        />
        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route path="/characters/:id" element={<CharacterDetailed />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
