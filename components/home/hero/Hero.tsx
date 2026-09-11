import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div className="relative z-10">
          <HeroContent />
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-sky-100/50 blur-3xl" />

          <div className="relative z-10 w-full max-w-xl">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}