import { heroData } from "@/data/hero";
import { Reveal } from "@/components/animations/Reveal";
import { Navbar } from '../layout/Navbar';

export function HeroSection() {
  return (
    <section id="hero" className="w-full">
      <div className="relative overflow-hidden">
        {/* Imagen */}
        <img
          src={heroData.image}
          alt={heroData.title}
          className="
            h-[750px]
            w-full
            h-full
            object-cover
          "
        />
        

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Contenido */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl px-8 md:px-16">
            <Reveal delay={0.1}>
              <h1
                className="
                  text-5xl
                  font-black
                  leading-none
                  text-white

                  md:text-7xl
                  lg:text-8xl
                "
              >
                {heroData.title}
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  text-white/80
                "
              >
                {heroData.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4
                "
              ></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
