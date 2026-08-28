import { Package, Settings, ArrowUpRight, Store, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <div className="space-y-8 p-2 sm:p-6">
      <Reveal>
        <div className="space-y-6">
          {/* Header del Dashboard estilo SaaS */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
                <Badge variant="outline" className="text-xs font-normal border-border/60">
                  Panel Principal
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Bienvenido al centro de administración de Espumados Boyacá.
              </p>
            </div>

            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto gap-2">
              <Link to="/" target="_blank">
                <Store className="h-4 w-4" />
                Ver tienda pública
              </Link>
            </Button>
          </div>

          {/* Grid de Accesos Directos estilo la imagen de referencia */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Tarjeta 1: Productos (Gradiente Púrpura/Azul) */}
            <Card className="relative overflow-hidden border-border/50 shadow-sm transition-all hover:shadow-md group">
              {/* Fondo con gradiente sutil calcado de la referencia */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-transparent pointer-events-none" />
              
              <CardHeader className="relative pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Package className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="bg-background/80 text-xs font-medium backdrop-blur">
                    Módulo
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold mt-4 group-hover:text-purple-600 transition-colors">
                  Productos
                </CardTitle>
                <CardDescription className="text-xs">
                  Catálogo, stock y descuentos
                </CardDescription>
              </CardHeader>

              <CardContent className="relative pt-2 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Gestiona precios, inventario disponible, imágenes y ofertas activas en la tienda.
                </p>

                <Button asChild className="w-full justify-between bg-foreground/90 hover:bg-foreground">
                  <Link to="/admin/products">
                    <span>Ir a productos</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tarjeta 2: Configuración (Gradiente Azul/Cian) */}
            <Card className="relative overflow-hidden border-border/50 shadow-sm transition-all hover:shadow-md group">
              {/* Fondo con gradiente sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-500/5 to-transparent pointer-events-none" />

              <CardHeader className="relative pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Settings className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="bg-background/80 text-xs font-medium backdrop-blur">
                    Módulo
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold mt-4 group-hover:text-blue-600 transition-colors">
                  Configuración
                </CardTitle>
                <CardDescription className="text-xs">
                  Información y branding
                </CardDescription>
              </CardHeader>

              <CardContent className="relative pt-2 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Edita los datos de la compañía, banners hero, números de contacto y correos.
                </p>

                <Button asChild className="w-full justify-between bg-foreground/90 hover:bg-foreground">
                  <Link to="/admin/settings">
                    <span>Ir a configuración</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tarjeta 3: Novedades / Tip de uso (Gradiente Naranja) */}
            <Card className="relative overflow-hidden border-border/50 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent pointer-events-none" />

              <CardHeader className="relative pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-amber-600 dark:text-amber-400 border-amber-500/20 text-xs">
                    Sugerencia
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold mt-4">
                  Estado de la Tienda
                </CardTitle>
                <CardDescription className="text-xs">
                  Optimización y presencia
                </CardDescription>
              </CardHeader>

              <CardContent className="relative pt-2 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Recuerda mantener actualizados los teléfonos de contacto para facilitar los pedidos directos por WhatsApp.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </Reveal>
    </div>
  );
}