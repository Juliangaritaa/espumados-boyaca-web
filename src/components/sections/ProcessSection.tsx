import { processData } from "@/data/process";
import { Reveal } from "@/components/animations/Reveal";
import { Card, CardContent, } from "@/components/ui/card";

export function ProcessSection() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Comprar es muy fácil
            </h2>

            <p className="mt-4 text-muted-foreground">
              Te acompañamos durante todo el proceso.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {processData.map((item, index) => (
            <Reveal
              key={item.step}
              delay={index * 0.1}
            >
              <Card className="h-full">
                <CardContent className="p-8">

                  <span
                    className="
                      text-5xl
                      font-black
                      text-primary
                    "
                  >
                    {item.step}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {item.description}
                  </p>

                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}