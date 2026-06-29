import navigation from "@/lib/constants/navigation";
export default function Header() { 
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div className="cursor-pointer">
          <h1 className="text-2xl font-bold tracking-tight text-blue-900">
            Softkyte
          </h1>

          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Technologies
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((menu) => (
            <a
              key={menu}
              href="#"
              className="font-medium text-slate-700 transition duration-200 hover:text-blue-800"
            >
              {menu}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <button className="rounded-xl bg-blue-900 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-800">
          Talk to an Expert
        </button>

      </div>
    </header>
  );
}