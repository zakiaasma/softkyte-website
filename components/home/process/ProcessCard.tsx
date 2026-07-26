import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

type Props = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ProcessCard({
  number,
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50">
          <Icon
            size={30}
            strokeWidth={1.8}
            className="text-[#0B2A56]"
          />
        </div>

        <span className="text-4xl font-bold text-slate-200">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Card>
  );
}