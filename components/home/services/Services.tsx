import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "☁️",
    title: "Cloud Transformation",
    description:
      "Modernize infrastructure and accelerate cloud adoption using Oracle Cloud, AWS, and Azure.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Protect enterprise systems with identity management, Zero Trust architecture, and security best practices.",
  },
  {
    icon: "⚙️",
    title: "DevOps & Automation",
    description:
      "Accelerate software delivery using CI/CD pipelines, Docker, Kubernetes, and Infrastructure as Code.",
  },
  {
    icon: "🤖",
    title: "AI & Intelligent Automation",
    description:
      "Leverage Generative AI, automation, and analytics to improve business productivity and decision making.",
  },
  {
    icon: "💻",
    title: "Enterprise Application Development",
    description:
      "Build secure, scalable, and modern applications using Java, Python, React, and Next.js.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Unlock business insights through data engineering, reporting, and enterprise analytics platforms.",
  },
];

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