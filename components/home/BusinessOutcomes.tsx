import OutcomeCard from "./OutcomeCard";

const outcomes = [
  {
    title: "Reduce Operational Costs",
    description:
      "Optimize infrastructure, automate repetitive work, and improve operational efficiency.",
  },
  {
    title: "Strengthen Cybersecurity",
    description:
      "Protect critical business systems with modern security architecture and governance.",
  },
  {
    title: "Accelerate Cloud Adoption",
    description:
      "Modernize applications and infrastructure for greater agility and scalability.",
  },
  {
    title: "Improve Business Agility",
    description:
      "Deliver faster releases using DevOps, automation, and cloud-native engineering.",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Business Outcomes
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Technology That Delivers Measurable Results
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every engagement is designed to improve efficiency,
            reduce risk, and create long-term business value.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {outcomes.map((item) => (
            <OutcomeCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}