//Estructura del modulo de admin, bloque contenedor
import { AdminSidebar } from "../components/Sidebar"
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen">
            <AdminSidebar />
            <main className="flex-1 p-8" >
                <Outlet />
            </main>
        </div>
    );
}