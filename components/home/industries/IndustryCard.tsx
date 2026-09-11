import type { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function IndustryCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50">
        <Icon
          size={30}
          strokeWidth={1.8}
          className="text-[#0B2A56]"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Card>
  );
}