import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function TechnologyCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

      <Icon
        size={40}
        className="text-blue-900 transition group-hover:scale-110"
      />

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}