import Image from "next/image";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[760px] lg:-mr-10">
      <Image
        src="/images/hero-enterprise-visual.png"
        alt="Softkyte Enterprise Solutions"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}