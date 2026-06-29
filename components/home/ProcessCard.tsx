type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessCard({
  number,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-xl font-bold text-white">
        {number}
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {description}
      </p>
    </div>
  );
}