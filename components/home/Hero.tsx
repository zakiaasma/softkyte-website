import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-8 py-20 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Enterprise Technology Partner
          </p>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">

            Accelerating Enterprise Transformation Through Secure &
            Intelligent Technology

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

            Helping organizations modernize infrastructure,
            strengthen cybersecurity,
            accelerate cloud adoption,
            automate operations,
            and build scalable enterprise software.

          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-xl bg-blue-900 px-8 py-4 text-white hover:bg-blue-800">

              Talk to an Expert

            </button>

            <button className="rounded-xl border border-blue-900 px-8 py-4 text-blue-900 hover:bg-blue-50">

              Explore Services

            </button>

          </div>

          <HeroStats />

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="flex h-[520px] w-[520px] items-center justify-center rounded-3xl border border-blue-100 bg-white shadow-2xl">

            <div className="space-y-6 text-center">

              <div className="text-8xl">
                ☁️
              </div>

              <h2 className="text-3xl font-bold text-slate-800">
                Enterprise Cloud
              </h2>

              <p className="mx-auto max-w-xs text-slate-500">

                Future illustration will be placed here.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}