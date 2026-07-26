import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import WhyCard from "./WhyCard";
import { reasons } from "./whySoftkyte.data";

export default function WhySoftkyte() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Why Softkyte"
          title="A Technology Partner Built for Transformation"
          description="We combine enterprise thinking, modern engineering, security, and a partnership-driven approach to help organizations turn technology investments into meaningful business outcomes."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => (
            <WhyCard
              key={reason.title}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}