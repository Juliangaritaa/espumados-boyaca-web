import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebar";

export function AdminLayout() {

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar fijo en escritorio, oculto en móviles por defecto */}
      <div className="hidden md:block md:w-64 lg:w-72 shrink-0 border-r">
        <AdminSidebar />
      </div>

      {/* Contenedor principal de vistas */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;