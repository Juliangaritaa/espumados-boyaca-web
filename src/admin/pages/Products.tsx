import { Plus, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { mockProducts } from "@/data/mockProducts";

export default function Products() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Productos</CardTitle>

          <CardDescription>Administra el catálogo del sitio.</CardDescription>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo producto
        </Button>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagen</TableHead>

              <TableHead>Nombre</TableHead>

              <TableHead>Descripcion</TableHead>

              <TableHead>Precio</TableHead>

              <TableHead>Descuento</TableHead>

              <TableHead>Creado</TableHead>

              <TableHead>Editado</TableHead>

              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {mockProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                </TableCell>

                <TableCell>{product.name}</TableCell>

                <TableCell>{product.description}</TableCell>

                <TableCell>
                  {product.price.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                  })}
                </TableCell>

                <TableCell>
                  {product.discount}
                </TableCell>

                <TableCell>
                  {product.created_at}
                </TableCell>

                <TableCell>
                  {product.updated_at}
                </TableCell>

                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>

                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
