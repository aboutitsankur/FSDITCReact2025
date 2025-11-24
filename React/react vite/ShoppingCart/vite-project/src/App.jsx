import './App.css'
import Dashboard from './component/Dashboard.jsx'
import Login from './component/Login.jsx'
import Mainlayout from './component/Mainlayout.jsx'
import Signup from './component/Registration.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>  
      <div>
        <BrowserRouter> 
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/" element={<Mainlayout />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;