import { categoriesData } from "@/data/categories";
import { Reveal } from "@/components/animations/Reveal";
import { CategoryCard } from "@/components/cards/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CategoriesSection() {
  return (
    <section id="categorias">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div
            className="
              mb-12
              flex
              flex-col
              gap-4

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <h2 className="text-4xl font-bold">Nuestros Productos</h2>

              <p className="mt-2 text-muted-foreground">
                Todo lo que necesitas para un descanso cómodo y saludable.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4">
              {categoriesData.map((category) => (
                <CarouselItem
                  key={category.title}
                  className="
                    pl-4
          basis-full
          sm:basis-1/2
          lg:basis-1/3
          xl:basis-1/4
                  "
                >
                  <CategoryCard {...category} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex justify-end gap-3 pr-1">
              <CarouselPrevious className="static translate-y-0" />

              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
