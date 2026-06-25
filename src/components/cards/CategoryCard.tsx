import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  variants?: string[];
}

export function CategoryCard({
  title,
  description,
  image,
  variants,
}: CategoryCardProps) {
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
          src={image}
          alt={title}
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
            {title}
          </h3>
        </div>
      </div>

      <CardContent className="space-y-4 p-6">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

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