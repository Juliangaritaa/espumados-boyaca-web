import { supabase } from "@/lib/supabase";
import type { Products } from "@/types/products.type";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as Products[];
}

export async function createProduct(product: Products) {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function uploadProductImage(file: File) {
  const extension = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage
    .from("products")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage.from("products").getPublicUrl(fileName);

  return data.publicUrl;
}

export async function updateProduct(id: string, product: Partial<Products>) {
  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deleteProduct(product: Products) {
  if (product.image_url) {
    const path = product.image_url.split("/products/")[1];
    if (path) {
      const { error: storageError } = await supabase.storage
        .from("products")
        .remove([path]);

      if (storageError) {
        console.warn(storageError);
      }
    }
  }
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", product.id);

  if (error) throw error;
}