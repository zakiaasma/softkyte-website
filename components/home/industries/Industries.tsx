import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IndustryCard from "./IndustryCard";
import { industries } from "./industries.data";

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Industries"
          title="Technology Expertise Across Industries"
          description="We help organizations modernize technology, strengthen security, automate operations, and build scalable digital platforms across diverse industries."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}