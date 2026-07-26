import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TechnologyCard from "./TechnologyCard";
import { technologies } from "./technology.data";

export default function Technology() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Technology Expertise"
          title="Enterprise Technologies We Deliver"
          description="We combine cloud, cybersecurity, DevOps, automation, software engineering, and data platforms to deliver secure and scalable enterprise solutions."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.title}
              icon={technology.icon}
              title={technology.title}
              description={technology.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}