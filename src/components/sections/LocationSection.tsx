import { MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { locationData } from "@/data/location";
import { StoreMap } from "@/components/maps/StoreMap";
import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section
      id="ubicacion"
    >
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <div className="mb-14 text-center">

            <h2 className="text-4xl font-bold">
              {locationData.title}
            </h2>

            <p className="mt-4 text-muted-foreground">
              {locationData.description}
            </p>

          </div>

        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">

          <Reveal>

            <Card className="h-full">

              <CardContent className="space-y-8 p-8">

                <div className="flex gap-4">

                  <MapPin className="mt-1 text-primary" />

                  <div>

                    <h3 className="font-semibold">
                      Dirección
                    </h3>

                    <p className="text-muted-foreground">
                      {locationData.address}
                    </p>

                  </div>

                </div>

                <Button
                  className="w-full"
                  asChild
                >
                  <a
                    href={`https://www.google.com/maps?q=${locationData.coordinates.lat},${locationData.coordinates.lng}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cómo llegar
                  </a>
                </Button>

              </CardContent>

            </Card>

          </Reveal>

          <Reveal>

            <Card className="overflow-hidden p-0">

              <div className="h-[450px]">

                <StoreMap />

              </div>

            </Card>

          </Reveal>

        </div>

      </div>
    </section>
  );
}