import "./App.css"
import { Navigate, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin'
import Signup from "./pages/Signup";
import Hero from './pages/Hero'
import Post from './pages/Post'
import Search from './pages/search'
import Profile from './pages/Profile'
function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
      {user && <Route path="/" exact element={<Hero />} />}
      <Route path="/" element={<Navigate replace to="/signin" />} />
      <Route path="/post" exact element={<Post />} />
      <Route path="/search" exact element={<Search />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
