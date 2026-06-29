import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Protect enterprise systems with modern security, governance and compliance.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Accelerate cloud migration and optimize enterprise workloads.",
  },
  {
    icon: "⚙️",
    title: "DevOps",
    description:
      "Automate CI/CD pipelines and modern software delivery practices.",
  },
  {
    icon: "💻",
    title: "Software Engineering",
    description:
      "Design and develop scalable enterprise applications.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Build intelligent workflows using AI and automation technologies.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Turn business data into meaningful insights and better decisions.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Services
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Technology Solutions That Drive Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Softkyte Technologies delivers secure, scalable, and innovative
            technology solutions that help organizations accelerate their
            digital transformation.
          </p>

        </div>

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

      </div>

    </section>
  );
}