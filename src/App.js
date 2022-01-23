import "./App.css";
import Member from "./Member";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="member" element={<Member />}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
