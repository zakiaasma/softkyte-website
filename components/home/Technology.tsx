import {
  Cloud,
  ShieldCheck,
  Server,
  Database,
  Workflow,
  Code2,
} from "lucide-react";

import TechnologyCard from "./TechnologyCard";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "AWS, Azure, Oracle Cloud Infrastructure and hybrid cloud transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Zero Trust, IAM, PAM, DLP, XDR and enterprise security architecture.",
  },
  {
    icon: Server,
    title: "DevOps",
    description:
      "CI/CD pipelines, Docker, Kubernetes, Terraform and Infrastructure as Code.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    description:
      "Database modernization, PostgreSQL, Snowflake and analytics platforms.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "RPA, workload automation and business process optimization.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Modern enterprise applications built with Java, Python and Node.js.",
  },
];

export default function Technology() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-700">
            Technology Expertise
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Enterprise Technologies We Deliver
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We combine cloud, cybersecurity, DevOps, automation,
            software engineering and data platforms to deliver
            scalable enterprise solutions.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.title}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}