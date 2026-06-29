import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-100">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">

        <HeroContent />

        <div className="flex justify-center">
          <HeroIllustration />
        </div>

      </div>
    </section>
  );
}