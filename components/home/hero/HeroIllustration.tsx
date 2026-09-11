import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <Image
        src="/images/hero-enterprise-visual.png"
        alt="Softkyte enterprise technology solutions"
        width={1400}
        height={1060}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}