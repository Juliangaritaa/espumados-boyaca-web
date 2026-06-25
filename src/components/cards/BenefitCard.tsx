import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export function BenefitCard({
  icon: Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <Card
      className="
        h-full
        border-0
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <CardContent className="p-6">
        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
          "
        >
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mb-2 text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}