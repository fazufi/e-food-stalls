import "./App.css";
import Member from "./Member";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (    
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Member />} />
          {/* <Route path="admin"> */}
            {/* <Route path="rekap" element={<Rekap />} /> */}
            {/* <Route path="pembayaran" element={<Pembayaran />} /> */}
            {/* <Route path="dapur" element={<Admin />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
