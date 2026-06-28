import { benefitsData } from "@/data/benefits";
import { Reveal } from "@/components/animations/Reveal";
import { BenefitCard } from "@/components/cards/BenefitCard";
import logo from "@/assets/espumados-boyaca-web-logo.svg";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Descanso diseñado para ti
            </h2>

            <p className="mt-4 text-muted-foreground">
              Cada colchón está fabricado para ofrecer comodidad, soporte y
              durabilidad durante años.
            </p>
          </div>
        </Reveal>

        <div
          className="
        flex
        flex-col
        gap-8

        lg:flex-row
        lg:items-center
      "
        >
          {/* Cards */}

          <div className="grid flex-1 gap-6 md:grid-cols-3">
            {benefitsData.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.1}>
                <BenefitCard {...benefit} />
              </Reveal>
            ))}
          </div>

          {/* Logo */}

          <Reveal delay={0.4}>
            <div
              className="
            flex
            w-full
            justify-center

            lg:w-72
          "
            >
              <img
                src={logo}
                alt="Espumados Boyacá"
                className="
              h-56
              w-auto
              object-contain
              opacity-90
              transition-all
              duration-500
              hover:scale-105
            "
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
