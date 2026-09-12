import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/hero/Hero";
import Image from "next/image";
import { ShieldCheck, Award, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* About Softkyte */}
        <section id="about" className="relative overflow-hidden bg-white py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section intro */}
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                  About Softkyte Technologies Pvt Ltd
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Partnered with Enterprise Software Solutions.
                </h2>
              </div>

              <div className="lg:pb-1">
                <p className="text-lg leading-8 text-slate-600">
                  We empower enterprise growth by aligning core infrastructure,
                  security, and compliance solutions with specialized enterprise
                  software solutions.
                </p>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Our integrated model helps eliminate vendor fragmentation,
                  maintain continuous compliance, and accelerate mission-critical
                  workloads.
                </p>
              </div>

            </div>

            {/* Capability area */}
            <div className="mt-20 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">

              <div className="grid md:grid-cols-3">

                {/* Core Enterprise Solutions */}
                <div className="group relative p-8 md:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-sky-600">
                      01
                    </span>

                    <div className="h-2 w-2 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-150" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    Core Enterprise Solutions
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    Governance, Risk & Compliance, Hyper-Converged Infrastructure,
                    and Cybersecurity solutions designed for enterprise
                    environments.
                  </p>

                  <div className="mt-8 h-px w-12 bg-sky-500 transition-all duration-300 group-hover:w-20" />
                </div>

                {/* Oracle Database */}
                <div className="group relative border-t border-slate-200 p-8 md:border-l md:border-t-0 md:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-sky-600">
                      02
                    </span>

                    <div className="h-2 w-2 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-150" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    Enterprise Database Practice
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    Database administration, high availability, disaster recovery,
                    performance optimization, cloud migration, and modernization.
                  </p>

                  <div className="mt-8 h-px w-12 bg-sky-500 transition-all duration-300 group-hover:w-20" />
                </div>

                {/* Professional Services */}
                <div className="group relative border-t border-slate-200 p-8 md:border-l md:border-t-0 md:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-sky-600">
                      03
                    </span>

                    <div className="h-2 w-2 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-150" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    Professional Services
                  </h3>

                  <p className="mt-5 leading-7 text-slate-600">
                    Strategic consulting, architecture and cloud integration,
                    enterprise security, compliance, and technology roadmapping by aligning with OEM professional services.
                  </p>

                  <div className="mt-8 h-px w-12 bg-sky-500 transition-all duration-300 group-hover:w-20" />
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Credentials */}
        <section
          id="credentials"
          className="relative overflow-hidden bg-slate-50 py-28"
        >
          <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section heading */}
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                  Quality & Information Security
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Committed to Quality. Focused on Security.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
                Our management systems reflect Softkyte&apos;s commitment to quality
                and information security across our business and technology
                operations.
              </p>

            </div>

            {/* Credentials */}
            <div className="mt-16 grid gap-6 lg:grid-cols-2">

              {/* ISO 9001 */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50">
                    <Award
                      size={28}
                      strokeWidth={1.7}
                      className="text-[#0B2A56]"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    01
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                    Quality Management
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    ISO 9001:2015
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-slate-600">
                    Demonstrating our commitment to structured quality management
                    and consistent business practices.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />
              </div>

              {/* ISO 27001 */}
              <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    <ShieldCheck
                      size={28}
                      strokeWidth={1.7}
                      className="text-[#0B2A56]"
                    />
                  </div>

                  <span className="text-sm font-semibold text-slate-400">
                    02
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                    Information Security
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    ISO/IEC 27001:2022
                  </h3>

                  <p className="mt-5 max-w-xl leading-7 text-slate-600">
                    Reflecting our commitment to information security and
                    responsible protection of business and technology assets.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />
              </div>

            </div>

            {/* IAF Accreditation Forum */}
            <div className="mt-14 flex flex-col items-center justify-center text-center">
              <Image
                src="/images/iaf-logo.png"
                alt="International Accreditation Forum (IAF)"
                width={220}
                height={150}
                className="h-auto w-[170px] md:w-[210px]"
              />
              <p className="mt-3 text-sm font-medium text-slate-500">
                International Accreditation Forum
              </p>
            </div>
          </div>
        </section>

        {/* Focused Industries */}
        <section
          id="industries"
          className="bg-[#F8FAFC] py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Section Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Focused Industries
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Technology solutions built around your industry.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We bring specialized technology expertise to organizations across
                industries where security, reliability, compliance, and operational
                excellence matter most.
              </p>
            </div>

            {/* Industries */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

              {/* BFSI */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-[#0B2A56]">
                  01
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  BFSI
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Secure, resilient technology solutions for banking, financial
                  services, and insurance organizations.
                </p>
              </div>

              {/* Manufacturing */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-[#0B2A56]">
                  02
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Manufacturing
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Scalable infrastructure and intelligent technology solutions that
                  support modern manufacturing operations.
                </p>
              </div>

              {/* IT/ITES */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-[#0B2A56]">
                  03
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  IT / ITES
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Modern digital infrastructure, cybersecurity, cloud, and database
                  expertise for technology-driven organizations.
                </p>
              </div>

              {/* Education & Research */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-[#0B2A56]">
                  04
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Education & Research
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Reliable and secure technology environments supporting education,
                  research, collaboration, and data-intensive workloads.
                </p>
              </div>

              {/* Healthcare & Pharma */}
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-[#0B2A56]">
                  05
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  Healthcare & Pharma
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Secure, compliant, and highly available technology solutions for
                  pharmaceutical and life sciences organizations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative overflow-hidden bg-[#0B2A56] py-28"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            {/* Heading */}
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                Contact Us
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Let&apos;s Talk About Your Technology Needs
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/80">
                Connect with Softkyte Technologies to discuss your enterprise
                infrastructure, security, compliance, database, and technology
                requirements.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">

              {/* Email & Phone */}
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15">
                  <Mail
                    size={27}
                    strokeWidth={1.7}
                    className="text-sky-300"
                  />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-sky-300">
                  Email
                </p>

                <a
                  href="mailto:info@softkyte.com"
                  className="mt-3 block text-2xl font-bold text-white transition hover:text-sky-300"
                >
                  info@softkyte.com
                </a>

                <p className="mt-3 text-blue-100/70">
                  Connect with our team to start a conversation.
                </p>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-sky-300">
                    <Phone size={17} />
                    Contact No
                  </p>

                  <a
                    href="tel:+919498005856"
                    className="mt-3 block text-xl font-bold text-white transition hover:text-sky-300"
                  >
                    +91 - 9498005856
                  </a>
                </div>

              </div>

              {/* Office & Coverage */}
              <div className="grid gap-6">

                {/* Registered Office */}
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-10">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/15">
                    <MapPin
                      size={27}
                      strokeWidth={1.7}
                      className="text-sky-300"
                    />
                  </div>

                  <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-sky-300">
                    Registered Office
                  </p>

                  <p className="mt-3 text-xl font-bold leading-8 text-white">
                    No: 25, Ground Floor, 15th Main Road,
                    <br />
                    H - Block, Anna Nagar - West,
                    <br />
                    Chennai – 600040, Tamil Nadu, India
                  </p>

                </div>

                {/* Client Coverage Geography */}
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-10">

                  

                  <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-sky-300">
                    Enterprise clients Coverage across:
                  </p>

                  <p className="mt-3 text-xl font-bold leading-8 text-white">
                    India, Middle East & Asia Pacific. 
                  </p>

                </div>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-5">

              <a
                href="mailto:info@softkyte.com"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#0B2A56] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-sky-50"
              >
                Email Softkyte
                <ArrowUpRight size={18} />
              </a>

              <p className="text-sm text-blue-100/60">
                Enterprise technology. Trusted expertise.
              </p>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}