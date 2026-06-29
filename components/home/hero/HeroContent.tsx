import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Accelerating Enterprise Transformation Through Secure &
        Intelligent Technology
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
        Softkyte Technologies helps organizations modernize infrastructure,
        strengthen cybersecurity, embrace cloud transformation,
        automate operations, and build scalable enterprise software.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1">
          Talk to an Expert
        </button>

        <button className="rounded-xl border border-blue-900 px-8 py-4 font-semibold text-blue-900 transition hover:bg-blue-50">
          Explore Services
        </button>
      </div>

      <HeroStats />
    </div>
  );
}