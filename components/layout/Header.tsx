import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center">
          <Image
            src="/images/softkyte-logo.jpg"
            alt="Softkyte Technologies"
            width={190}
            height={55}
            priority
            className="h-auto w-[170px] md:w-[190px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Services
          </Link>

          <Link
            href="/solutions"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Solutions
          </Link>

          <Link
            href="/industries"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-[#0B2A56] px-5 py-3 font-semibold text-white transition hover:bg-[#123A72] lg:inline-flex"
        >
          Talk to an Expert
        </Link>

      </div>
    </header>
  );
}