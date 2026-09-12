import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071D3A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Softkyte Technologies Pvt Ltd
            </Link>

            <p className="mt-5 max-w-md leading-7 text-blue-100/60">
              Modernizing Businesses. Delivering Excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-blue-100/60 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/#about"
                className="text-sm text-blue-100/60 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#credentials"
                className="text-sm text-blue-100/60 transition hover:text-white"
              >
                Credentials
              </Link>

              <Link
                href="/#industries"
                className="text-sm text-blue-100/60 transition hover:text-white"
              >
                Focused Industries
              </Link>

              <Link
                href="/#contact"
                className="text-sm text-blue-100/60 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Connect
            </p>

            <a
              href="mailto:info@softkyte.com"
              className="mt-5 inline-block text-sm text-blue-100/60 transition hover:text-white"
            >
              info@softkyte.com
            </a>

            <a
              href="tel:+919498005856"
              className="mt-3 block text-sm text-blue-100/60 transition hover:text-white"
            >
              +91 - 9498005856
            </a>

            <p className="mt-4 text-sm leading-6 text-blue-100/50">
              Chennai, India
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-blue-100/40">
            © 2026 Softkyte Technologies Pvt Ltd. All Rights Reserved.
          </p>

          <p className="text-sm text-blue-100/40">
            Enterprise Technology • Trusted Expertise
          </p>
        </div>

      </div>
    </footer>
  );
}