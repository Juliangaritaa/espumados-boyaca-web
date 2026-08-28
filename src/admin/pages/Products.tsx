import { Plus, Pencil, Search, Tag } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/animations/Reveal";

export default function Products() {
  const { products, reload, loading } = useProducts();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (!products) {
    return (
      <div className="flex h-48 items-center justify-center">
        <p className="text-sm text-muted-foreground animate-pulse">Cargando Productos...</p>
      </div>
    );
  }

  // Filtrado de productos por búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (values: Products, image: File | null) => {
    try {
      let imageUrl = selectedProduct?.image_url ?? "";
      if (image) {
        imageUrl = await uploadProductImage(image);
      }

      const isEditing = Boolean(selectedProduct);

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

      toast.success(
        isEditing
          ? "Producto actualizado correctamente"
          : "Producto creado correctamente"
      );
      await reload();

      setOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error(error);
      toast.error(
        selectedProduct
          ? "No fue posible actualizar el producto"
          : "No fue posible crear el producto"
      );
    }
  };

  const handleDelete = async (product: Products) => {
    try {
      await deleteProduct(product);
      toast.success("Producto eliminado correctamente");
      await reload();
    } catch (error) {
      console.error(error);
      toast.error("No fue posible eliminar el producto");
    }
  };

  return (
    <div className="space-y-6 p-2 sm:p-6">
      <Reveal>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Productos</h1>
        <p className="text-sm text-muted-foreground">
          Administra la información general y los datos de tus productos.
        </p>
      </div>
      </Reveal>
      <Reveal>
      <Card className="border-border/40 shadow-sm">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardDescription>
              Explora tu catálogo de productos.
            </CardDescription>
          </div>

          <Button
            onClick={() => {
              setSelectedProduct(null);
              setOpen(true);
            }}
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuevo producto
          </Button>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Barra de búsqueda integrada estilo Notion/Clean UI */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Wrapper responsive para la tabla (soluciona el desbordamiento en móviles) */}
          <div className="relative w-full overflow-x-auto rounded-lg border">
            <Table className="w-full text-sm">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[80px]">Imagen</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead className="hidden md:table-cell">Descripción</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Descuento</TableHead>
                  <TableHead className="hidden lg:table-cell">Creado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredProducts.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                      No se encontraron productos.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredProducts.map((product) => {
                    const hasDiscount = product.discount > 0;
                    const finalPrice = hasDiscount
                      ? product.price * (1 - product.discount / 100)
                      : product.price;

                    return (
                      <TableRow key={product.id} className="hover:bg-muted/30">
                        <TableCell>
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="h-12 w-12 rounded-md object-cover border"
                          />
                        </TableCell>

                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>

                        <TableCell className="hidden md:table-cell max-w-xs truncate text-muted-foreground">
                          {product.description}
                        </TableCell>

                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>
                              {finalPrice.toLocaleString("es-CO", {
                                style: "currency",
                                currency: "COP",
                                maximumFractionDigits: 0,
                              })}
                            </span>
                            {hasDiscount && (
                              <span className="text-xs text-muted-foreground line-through">
                                {product.price.toLocaleString("es-CO", {
                                  style: "currency",
                                  currency: "COP",
                                  maximumFractionDigits: 0,
                                })}
                              </span>
                            )}
                          </div>
                        </TableCell>

                        <TableCell>
                          {hasDiscount ? (
                            <Badge variant="secondary" className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold border-0">
                              <Tag className="mr-1 h-3 w-3" />
                              {product.discount}% OFF
                            </Badge>
                          ) : (
                            <span className="text-xs text-muted-foreground">Sin desc.</span>
                          )}
                        </TableCell>

                        <TableCell className="hidden lg:table-cell text-muted-foreground text-xs">
                          {new Date(product.created_at).toLocaleDateString("es-CO")}
                        </TableCell>

                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setSelectedProduct(product);
                                setOpen(true);
                              }}
                            >
                              <Pencil className="h-4 w-4 text-muted-foreground" />
                            </Button>

                            <DeleteProductDialog
                              product={product}
                              onDelete={handleDelete}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      </Reveal>

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
    </div>
  );
}