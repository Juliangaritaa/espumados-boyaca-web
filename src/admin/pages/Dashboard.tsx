import { Package, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Bienvenido al panel administrativo.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Productos
            </CardTitle>

          </CardHeader>

          <CardContent className="space-y-4">

            <p className="text-muted-foreground">
              Administra el catálogo de productos.
            </p>

            <Button asChild>

              <Link to="/admin/products">
                Ir a productos
              </Link>

            </Button>

          </CardContent>

        </Card>

        <Card>

          <CardHeader>

            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configuración
            </CardTitle>

          </CardHeader>

          <CardContent className="space-y-4">

            <p className="text-muted-foreground">
              Edita la información principal del sitio.
            </p>

            <Button asChild>

              <Link to="/admin/settings">
                Ir a configuración
              </Link>

            </Button>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}