import Card from "@/components/ui/Card";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <button className="mt-6 font-semibold text-sky-700 hover:text-sky-900">
        Learn More →
      </button>
    </Card>
  );
}