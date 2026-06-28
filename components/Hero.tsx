export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="font-semibold uppercase tracking-widest text-blue-700">
          Enterprise Technology Partner
        </p>

        <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-tight text-slate-900">
          Accelerating Enterprise Transformation Through Secure &
          Intelligent Technology
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-gray-600">
          Helping enterprises modernize infrastructure, strengthen
          cybersecurity, embrace cloud transformation, automate business
          processes, and build scalable digital platforms.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="rounded-lg bg-blue-900 px-8 py-4 text-white hover:bg-blue-800">
            Talk to an Expert
          </button>

          <button className="rounded-lg border border-blue-900 px-8 py-4 text-blue-900 hover:bg-blue-50">
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
}