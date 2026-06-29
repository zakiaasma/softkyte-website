export default function Hero() {
  return (
    <section className="flex h-[80vh] items-center bg-slate-50">
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-6 font-semibold uppercase tracking-[0.3em] text-blue-700">
          Enterprise Technology Partner
        </p>

        <h1 className="max-w-4xl text-6xl font-extrabold leading-tight text-slate-900">
          Accelerating Enterprise Transformation Through Secure &
          Intelligent Technology
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
          Helping enterprises modernize infrastructure, strengthen cybersecurity,
          embrace cloud transformation, automate business processes,
          and build scalable digital platforms.
        </p>

        <div className="mt-12 flex gap-5">
          <button className="rounded-xl bg-blue-900 px-8 py-4 text-white hover:bg-blue-800">
            Talk to an Expert
          </button>

          <button className="rounded-xl border border-blue-900 px-8 py-4 text-blue-900 hover:bg-blue-50">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
}