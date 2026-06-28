export default function Header() {
  const menu = [
    "Services",
    "Solutions",
    "Industries",
    "Resources",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <div>
          <h1 className="text-2xl font-bold text-blue-900">
            Softkyte
          </h1>

          <p className="text-xs tracking-[0.25em] text-gray-500 uppercase">
            Technologies
          </p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium text-gray-700 transition hover:text-blue-800"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="rounded-xl bg-blue-900 px-6 py-3 font-medium text-white transition hover:bg-blue-800">
          Talk to an Expert
        </button>

      </div>
    </header>
  );
}