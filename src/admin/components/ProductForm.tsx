import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { useState, useEffect } from "react";
import type { Products } from "@/types/products.type";

interface ProductFormProps {
  defaultValues?: Products;
  onSubmit: (values: Products, image: File | null) => void;
  loading?: boolean;
}

export function ProductForm({ defaultValues, onSubmit, loading = false, }: ProductFormProps) {
  const form = useForm<Products>({
    defaultValues: defaultValues ?? {
      name: "",
      description: "",
      image_url: "",
      price: 0,
      discount: 0,
    },
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(
    defaultValues?.image_url ?? "",
  );
  useEffect(() => {
    if (!image) {
      setPreview(defaultValues?.image_url ?? "");
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image, defaultValues]);

  return (
    <form
      onSubmit={form.handleSubmit((values) => {
        onSubmit(values, image);
      })}
      className="space-y-6 max-h-[70vh] overflow-y-auto pr-2"
    >
      {/* CAMPO: NOMBRE */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Nombre</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Colchón Premium"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* CAMPO: DESCRIPCIÓN */}
      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Descripción</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Soporte firme para un descanso saludable."
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* CAMPO: PRECIO */}
      <Controller
        name="price"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Precio</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="number"
              aria-invalid={fieldState.invalid}
              placeholder="850000"
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* CAMPO: DESCUENTO */}
      <Controller
        name="discount"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Descuento</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="number"
              aria-invalid={fieldState.invalid}
              placeholder="10"
              onChange={(e) => field.onChange(Number(e.target.value))}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* CAMPO: IMAGEN */}
      {/* Reemplaza el <Controller> por el <Field> directo */}
      <Field>
        <FieldLabel htmlFor="product-image">Imagen del producto</FieldLabel>
        <div className="space-y-4">
          <div className="flex h-56 w-full items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/30 overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Vista previa"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-sm text-muted-foreground">
                No se ha seleccionado ninguna imagen
              </span>
            )}
          </div>
          <Input
            id="product-image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setImage(file);
            }}
          />
        </div>
      </Field>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Guardando..." : "Guardar producto"}
      </Button>
    </form>
  );
}
