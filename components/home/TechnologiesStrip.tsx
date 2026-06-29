const tech = [
  "Oracle Cloud",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub",
  "Jenkins",
  "PostgreSQL",
];

export default function TechnologiesStrip() {
  return (
    <section className="border-y bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Trusted Technologies
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-9">

          {tech.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 text-center font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}