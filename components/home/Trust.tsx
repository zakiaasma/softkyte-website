import StatCard from "./StatCard";

const stats = [
  {
    value: "100+",
    title: "Enterprise Projects",
  },
  {
    value: "24×7",
    title: "Support",
  },
  {
    value: "99.9%",
    title: "Availability",
  },
  {
    value: "15+",
    title: "Technology Domains",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why Enterprises Trust Softkyte
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Delivering Reliable Technology Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We focus on security, scalability, operational excellence,
            and long-term partnerships to help enterprises succeed.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              value={stat.value}
              title={stat.title}
            />
          ))}

        </div>

      </div>

    </section>
  );
}