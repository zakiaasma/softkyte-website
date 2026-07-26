import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import OutcomeCard from "./OutcomeCard";
import { outcomes } from "./outcomes.data";

export default function BusinessOutcomes() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Business Outcomes"
          title="Technology That Creates Business Value"
          description="We align technology transformation with business objectives to improve efficiency, strengthen security, increase agility, and support sustainable growth."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <OutcomeCard
              key={outcome.title}
              icon={outcome.icon}
              title={outcome.title}
              description={outcome.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}