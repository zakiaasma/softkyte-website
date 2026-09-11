import Link from "next/link";
import HeroBadge from "./HeroBadge";

export default function HeroContent() {
  return (
    <div>
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
        Technology Solutions
        <span className="block text-[#0B2A56]">
          Built for Business
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
        Softkyte Technologies helps organizations build, modernize, and
        secure their digital environments through innovative technology
        solutions and engineering expertise.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/#contact"
          className="rounded-xl bg-[#0B2A56] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#123A72]"
        >
          Talk to an Expert
        </Link>

        <Link
          href="/#about"
          className="rounded-xl border border-[#0B2A56] px-8 py-4 font-semibold text-[#0B2A56] transition hover:bg-blue-50"
        >
          About Softkyte
        </Link>
      </div>
    </div>
  );
}