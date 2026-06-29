import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🏢",
    title: "Enterprise Expertise",
    description:
      "Delivering scalable technology solutions designed for enterprise environments.",
  },
  {
    icon: "🔒",
    title: "Security First",
    description:
      "Every solution is built with cybersecurity and compliance as a core principle.",
  },
  {
    icon: "⚡",
    title: "Modern Technologies",
    description:
      "Cloud, DevOps, AI, Automation, and next-generation software engineering.",
  },
  {
    icon: "🤝",
    title: "Customer Partnership",
    description:
      "We work as a long-term technology partner focused on measurable business outcomes.",
  },
];

export default function WhySoftkyte() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why Softkyte
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Building Secure, Scalable & Future-Ready Enterprises
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine deep technical expertise with business understanding
            to help organizations accelerate innovation while reducing risk.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}