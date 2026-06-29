import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Secure, compliant, and scalable digital solutions for financial institutions.",
  },
  {
    title: "Healthcare",
    description:
      "Technology platforms that improve patient care, security, and operational efficiency.",
  },
  {
    title: "Manufacturing",
    description:
      "Smart manufacturing through automation, analytics, and cloud technologies.",
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Delivering personalized customer experiences with scalable digital platforms.",
  },
  {
    title: "Education",
    description:
      "Modern digital learning environments and secure educational platforms.",
  },
  {
    title: "Government & Public Sector",
    description:
      "Reliable, secure, and compliant technology solutions for public services.",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Industries We Serve
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Driving Digital Transformation Across Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our expertise spans multiple industries, delivering secure,
            scalable, and innovative technology solutions tailored to each sector.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}