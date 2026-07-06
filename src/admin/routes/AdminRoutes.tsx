import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import AdminLayout from "../layouts/AdminLayout";

export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="login" element={<Login />} />

            <Route element={<AdminLayout />} >
                <Route index element={<Dashboard />} />
                
                <Route path="produts" element={<Products />} />
                <Route path="settings" element={<Settings />} />
            </ Route>
        </Routes>
    );
}