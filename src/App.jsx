import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login';
import { Registro } from'./pages/Registro';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
