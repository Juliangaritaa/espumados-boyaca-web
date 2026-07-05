import { heroData } from "@/data/hero";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "../ui/button";
import type { SiteSettings } from "@/types/site.settings";

interface HeroProps{
  settings: SiteSettings;
}

export function HeroSection({ settings }: HeroProps) {
  return (
    <section id="hero" className="w-full">
      <div className="relative overflow-hidden">
        {/* Imagen */}
        <img
          src={heroData.image}
          alt={heroData.title}
          className="
            w-full
            h-[480px]
            sm:h-[580px]
            md:h-[680px]
            lg:h-[750px]
            object-cover
            object-center
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/20" />
        
        {/* Contenido */}
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="w-full max-w-3xl px-5 sm:px-8 md:px-16 pb-10 sm:pb-0">
            <Reveal delay={0.1}>
              <h1
                className="
                  text-4xl
                  font-black
                  leading-[1.05]
                  text-white
                  tracking-tight

                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                "
              >
                {settings.hero_title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  mt-4
                  max-w-sm
                  text-base
                  text-white/80
                  leading-relaxed

                  sm:mt-5
                  sm:max-w-md
                  sm:text-lg

                  md:mt-6
                  md:max-w-xl
                "
              >
                {settings.hero_description}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3

                  sm:mt-8
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-4
                "
              >
                <Button
                  asChild
                  size="lg"
                  className="border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                >
                  <a href="#beneficios">Iniciemos</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
