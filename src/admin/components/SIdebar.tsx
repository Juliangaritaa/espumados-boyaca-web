import { LayoutDashboard, Package, Settings, LogOut } from "lucide-react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const links = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Productos",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Configuración",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {

  const navigate = useNavigate();

const handleLogout = async () => {
  await supabase.auth.signOut();

  navigate("/admin/login", {
    replace: true,
  });
};

  return (
    <aside
      className="
        flex
        h-screen
        w-72
        flex-col
        border-r
        bg-background
      "
    >
      <div className="p-6">
        <h2 className="text-xl font-bold">Espumados Boyacá</h2>

        <p className="text-sm text-muted-foreground">Panel Administrativo</p>
      </div>

      <Separator />

      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink key={link.href} to={link.href}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <Icon className="mr-2 h-4 w-4" />

                  {link.title}
                </Button>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4">
        <Separator className="mb-4" />

        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </aside>
  );
}
