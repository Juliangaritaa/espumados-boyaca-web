import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image_url: string;
  price: number;
  discount: number;
  variants?: string[];
}

export function CategoryCard({ name, description, image_url, price, discount, variants }: CategoryCardProps) {
  const hasDiscount = discount > 0;
  
  // Cálculo del precio final con descuento aplicado
  const finalPrice = hasDiscount ? price * (1 - discount / 100) : price;

  return (
    <Card
      className="
        group
        overflow-hidden
        border-0
        py-0
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image_url}
          alt={name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            p-6
            text-white
          "
        >
          <h3 className="text-2xl font-bold">
            {name}
          </h3>
        </div>
      </div>

      <CardContent className="space-y-4 p-3">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            {/* Precio final (con o sin descuento) */}
            <p
              className={`text-sm ${
                hasDiscount ? "text-red-600 font-bold" : "text-muted-foreground"
              }`}
            >
              ${finalPrice.toLocaleString('es-CO')}
            </p>

            {/* Opcional: Mostrar precio original tachado si hay descuento */}
            {hasDiscount && (
              <span className="text-xs text-muted-foreground line-through">
                ${price.toLocaleString('es-CO')}
              </span>
            )}
          </div>

          <Badge
            className={`variant=secondary bg-emerald-500/15 text-sm ${
              hasDiscount ? "text-red-600 font-bold" : "text-muted-foreground"
            }`}
          >
            <Tag className="mr-1 h-3 w-3" />
            {hasDiscount ? `-${discount}% OFF` : `${discount}%`}
          </Badge>
        </div>

        {variants && (
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <span
                key={variant}
                className="
                  rounded-full
                  bg-muted
                  px-3
                  py-1
                  text-xs
                  font-medium
                "
              >
                {variant}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}