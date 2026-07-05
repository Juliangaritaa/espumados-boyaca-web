import { Phone } from "lucide-react";
import { ctaData } from "@/data/cta";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/site";
import image from "@/assets/espumados-cta.png";
import type { SiteSettings } from "@/types/site.settings";

interface CTAProps{
  settings: SiteSettings;
}

export function CTASection({ settings }:CTAProps ) {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              text-center
              text-white
            "
          >
            {/* Imagen de fondo */}
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Contenido */}
            <div
              className="
                relative
                z-10
                px-8
                py-16
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
                  text-white/85
                "
              >
                {ctaData.description}
              </p>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  items-center
                  gap-3
                  sm:flex-row
                  sm:justify-center
                  sm:gap-4
                "
              >
                <Button asChild size="lg" variant="secondary">
                  <a href={`tel:${settings.phone_one}`}>
                    <Phone />
                    {ctaData.buttonText[0].btn1}
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                >
                  <a href={`https://wa.me/${settings.phone_two}`}>
                    <Phone />
                    {ctaData.buttonText[1].btn2}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}