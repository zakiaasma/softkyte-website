import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "./ServiceCard";
import { services } from "./services.data";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Technology Solutions That Drive Business Growth"
          description="Softkyte Technologies delivers secure, scalable, and innovative technology solutions that help organizations accelerate their digital transformation."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}