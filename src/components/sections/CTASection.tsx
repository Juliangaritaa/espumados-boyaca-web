import { Phone } from "lucide-react";
import { ctaData } from "@/data/cta";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>

          <div
            className="
              overflow-hidden
              rounded-3xl
              bg-primary
              px-8
              py-16
              text-center
              text-primary-foreground

              md:px-16
            "
          >
            <h2
              className="
                text-3xl
                font-bold

                md:text-5xl
              "
            >
              {ctaData.title}
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                opacity-90
              "
            >
              {ctaData.description}
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
            >
              <Phone />

              {ctaData.buttonText}
            </Button>

          </div>

        </Reveal>

      </div>
    </section>
  );
}