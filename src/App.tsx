import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import History from "./pages/History";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import CharacterDetailed from "./pages/CharacterDetailed";
import BookDetailed from "./pages/BookDetailed";
import Signup from "./pages/Signup/Signup";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { checkAuth } from "./store/actions/authActionCreators";
// import { fetchBooks } from "./store/reducers/FetchBooks";


function App() {
  // const storeDataOne = useAppSelector(state => state.booksReducer)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [])
  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [])
  // console.log(storeDataOne);
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
        <Route path="/books/:id" element={<BookDetailed />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
