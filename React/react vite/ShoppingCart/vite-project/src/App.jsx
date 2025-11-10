

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./component/Login.jsx";
import Registration from "./component/Registration.jsx";
import Mainlayout from "./component/Mainlayout.jsx";
import Dashboard from "./component/Dashboard.jsx";


function App() {
  

  return (
    <>
      <h2>Welcome to Shopping Cart</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
