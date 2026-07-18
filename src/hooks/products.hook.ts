import { useState, useEffect } from "react";
import { getProducts } from "@/services/product.service";
import type { Products } from "@/types/product.type";

export function useProducts() {
    const [products, setProducts] = useState<Products>([]);
    const [loading, setLoading] = useState(true);

    async function loadProducts() {
        try {
            const data = await getProducts();
            setProducts(data);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return {
        products,
        loading,
        reload: loadProducts
    }
}