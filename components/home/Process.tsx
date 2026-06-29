import ProcessCard from "./ProcessCard";

const process = [
  {
    number: "01",
    title: "Discover",
    description: "Understand business goals and challenges."
  },
  {
    number: "02",
    title: "Assess",
    description: "Evaluate existing systems and architecture."
  },
  {
    number: "03",
    title: "Design",
    description: "Create a secure and scalable solution blueprint."
  },
  {
    number: "04",
    title: "Build",
    description: "Implement modern enterprise technology solutions."
  },
  {
    number: "05",
    title: "Deploy",
    description: "Release through automated DevOps pipelines."
  },
  {
    number: "06",
    title: "Optimize",
    description: "Continuously monitor and improve performance."
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Process
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Digital Transformation Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From strategy to implementation, we guide every step of your
            digital transformation journey.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {process.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}