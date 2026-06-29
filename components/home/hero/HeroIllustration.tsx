import {
  Cloud,
  ShieldCheck,
  Database,
  Server,
} from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-900 to-sky-700 text-white shadow-2xl">

      <Cloud size={70} className="absolute top-10 left-10" />

      <ShieldCheck size={70} className="absolute top-10 right-10" />

      <Database size={70} className="absolute bottom-10 left-10" />

      <Server size={70} className="absolute bottom-10 right-10" />

      <div className="text-center">

        <h2 className="text-5xl font-bold">

          Softkyte

        </h2>

        <p className="mt-4 text-blue-100">

          Enterprise Solutions

        </p>

      </div>

    </div>
  );
}