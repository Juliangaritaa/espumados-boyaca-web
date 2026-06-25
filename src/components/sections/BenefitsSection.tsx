import { benefitsData } from "@/data/benefits";
import { Reveal } from "@/components/animations/Reveal";
import { BenefitCard } from "@/components/cards/BenefitCard";

export function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="
        py-20
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <Reveal>
          <div
            className="
              mx-auto
              mb-14
              max-w-2xl
              text-center
            "
          >
            <h2
              className="
                text-3xl
                font-bold

                md:text-4xl
              "
            >
              Descanso diseñado para ti
            </h2>

            <p
              className="
                mt-4
                text-muted-foreground
              "
            >
              Cada colchón está fabricado para ofrecer
              comodidad, soporte y durabilidad durante años.
            </p>
          </div>
        </Reveal>

        {/* Grid */}

        <div
          className="
            grid
            gap-6

            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {benefitsData.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={index * 0.1}
            >
              <BenefitCard {...benefit} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}