import { Plus, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Products } from "@/types/products.type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { ProductForm } from "../components/ProductForm";
import { DeleteProductDialog } from "../components/DeleteProductDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProducts } from "@/hooks/products.hook";
import { createProduct, uploadProductImage, updateProduct, deleteProduct } from "@/services/product.service";
import { toast } from 'react-toastify';

export default function Products() {
  const { products, reload, loading } = useProducts();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);

  const handleSubmit = async (values: Products, image: File | null) => {
    try {
      let imageUrl = selectedProduct?.image_url ?? "";
      if (image) {
        imageUrl = await uploadProductImage(image);
      }

      if (selectedProduct) {
        await updateProduct(selectedProduct.id, {
          ...values,
          image_url: imageUrl,
        });
      } else {
        await createProduct({
          ...values,
          image_url: imageUrl,
        });
      }
      toast.success("Producto creado correctamente");
      await reload();

      (setOpen(false), setSelectedProduct(null));
    } catch (error) {
      console.error(error);
      toast.error("No fué posible crear el producto");
    }
  };

  const handleDelete = async (product: Products) => {
    try {
      await deleteProduct(product);
      toast.success("Producto eliminado correctamente");
      await reload();
    } catch (error) {
      console.error(error);
      toast.error("No fué posible eliminar el producto");
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Productos</CardTitle>

            <CardDescription>Administra el catálogo del sitio.</CardDescription>
          </div>

          <Button
            onClick={() => {
              setSelectedProduct(null);
              setOpen(true);
            }}
          >
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
              {products.map((product) => (
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

                  <TableCell>{product.discount}</TableCell>

                  <TableCell>{product.created_at}</TableCell>

                  <TableCell>{product.updated_at}</TableCell>

                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedProduct(product);

                        setOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <DeleteProductDialog 
                      product={product} 
                      onDelete={handleDelete} 
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {selectedProduct ? "Editar producto" : "Nuevo producto"}
            </DialogTitle>
          </DialogHeader>

          <ProductForm
            defaultValues={selectedProduct ?? undefined}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
