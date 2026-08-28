import { LayoutDashboard, Package, Settings, LogOut, Store, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const mainLinks = [
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
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="flex h-full w-full flex-col justify-between bg-background px-3 py-4">
      <div className="space-y-6">
        {/* Cabecera estilo selector de proyecto de la imagen */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center">
              <Store className="h-4 w-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold truncate leading-none">
                Espumados Boyacá
              </span>
              <span className="text-[11px] text-muted-foreground mt-1 truncate">
                Panel Admin
              </span>
            </div>
          </div>
        </div>

        {/* Grupo de Navegación Principal */}
        <div className="space-y-1">
          <p className="px-3 text-[11px] font-medium tracking-wider text-muted-foreground/70 uppercase">
            Menú Principal
          </p>

          <nav className="mt-2 space-y-1">
            {mainLinks.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink key={link.href} to={link.href} end={link.href === "/admin"}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-card text-foreground shadow-xs border border-border/40 font-semibold"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span>{link.title}</span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Pie con botón de cierre de sesión */}
      <div className="space-y-3 pt-4">
        <Separator className="bg-border/50" />
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span className="text-sm font-medium">Cerrar sesión</span>
        </Button>
      </div>
    </aside>
  );
}