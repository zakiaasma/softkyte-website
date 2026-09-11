import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section className="bg-[#0B2A56] py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Let&apos;s Build What&apos;s Next
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Transform Your Technology?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Talk to Softkyte about your cloud, cybersecurity, automation,
            AI, application modernization, and digital transformation
            requirements.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#0B2A56] transition hover:bg-slate-100"
            >
              Talk to an Expert
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}