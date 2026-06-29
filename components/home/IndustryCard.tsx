type IndustryCardProps = {
  title: string;
  description: string;
};

export default function IndustryCard({
  title,
  description,
}: IndustryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}