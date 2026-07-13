import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import type { Products } from "@/types/products.type";

interface ProductFormProps {
  defaultValues?: Products;

  onSubmit: (values: Products) => void;

  loading?: boolean;
}

export function ProductForm({
  defaultValues,
  onSubmit,
  loading = false,
}: ProductFormProps) {
  const form = useForm<Products>({
    defaultValues: defaultValues ?? {
      name: "",
      description: "",
      image_url: "",
      price: 0,
      discount: 0,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>

              <FormControl>
                <Input
                  placeholder="Colchón Premium"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripcion</FormLabel>

              <FormControl>
                <Input
                  placeholder="Soporte firme para un descanso saludable."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Precio</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  placeholder="850000"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number(e.target.value))
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descuento</FormLabel>

              <FormControl>
                <Input
                  type="number"
                  placeholder="10%"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number(e.target.value))
                  }
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>

              <FormControl>
                <Input
                  placeholder="Selecciona una fotogaría"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          Guardar producto
        </Button>
      </form>
    </Form>
  );
}