import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">

      <div className="w-72 shrink-0">
        <AdminSidebar />
      </div>

      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}