import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessCard from "./ProcessCard";
import { processSteps } from "./process.data";

export default function Process() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="How We Work"
          title="From Strategy to Transformation"
          description="Our structured delivery approach connects business objectives with technology strategy, engineering excellence, and measurable outcomes."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}