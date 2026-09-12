"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/softkyte-logo.jpg"
            alt="Softkyte Technologies"
            width={240}
            height={70}
            priority
            className="h-auto w-[160px] md:w-[190px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            About Us
          </Link>

          <Link
            href="/#credentials"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Credentials
          </Link>

          <Link
            href="/#industries"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Focused Industries
          </Link>

          <Link
            href="/#contact"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Contact
          </Link>

          <Link
            href="/#contact"
            className="font-medium text-slate-700 transition hover:text-sky-600"
          >
            Careers
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/#contact"
          className="hidden rounded-xl bg-[#0B2A56] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#123A72] lg:inline-flex"
        >
          Talk to an Expert
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#0B2A56] transition hover:bg-slate-50 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              About Us
            </Link>

            <Link
              href="/#credentials"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Credentials
            </Link>

            <Link
              href="/#industries"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Focused Industries
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 font-medium text-slate-700 transition hover:text-sky-600"
            >
              Careers
            </Link>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-5 inline-flex justify-center rounded-xl bg-[#0B2A56] px-5 py-3.5 font-semibold text-white transition hover:bg-[#123A72]"
            >
              Talk to an Expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}