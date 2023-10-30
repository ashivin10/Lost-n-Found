import "./App.css"
import {  Routes, Route } from "react-router-dom";
import Signin from './pages/Signin'
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signin" exact element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
