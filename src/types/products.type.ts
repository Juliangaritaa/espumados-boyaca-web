export interface Products {
    id: string;
    name: string;
    description: string;
    image_url: string;
    price: number;
    discount?: number;
    created_at: string;
    updated_at: string;
}