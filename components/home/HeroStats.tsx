export default function HeroStats() {
  const stats = [
    { value: "50+", label: "Enterprise Solutions" },
    { value: "24x7", label: "Support" },
    { value: "99.9%", label: "Availability" },
  ];

  return (
    <div className="mt-16 grid grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold text-blue-900">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}