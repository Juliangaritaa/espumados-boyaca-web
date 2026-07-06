import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import AdminRoutes from "./admin/routes/AdminRoutes";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin//*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
