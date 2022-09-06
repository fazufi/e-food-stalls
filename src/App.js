import "./App.css";
import Member from "./Member";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dapur from "./admin/Dapur";
import Rekap from "./admin/Rekap";

function App() {
  return (    
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Member />} />
          {/* <Route path="admin"> */}
            <Route path="rekap" element={<Rekap />} />
            <Route path="dapur" element={<Dapur />} />
            {/* <Route path="dapur" element={<Admin />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
