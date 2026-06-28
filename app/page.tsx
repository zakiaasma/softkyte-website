import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex h-[80vh] items-center justify-center bg-slate-100">
        <h1 className="text-6xl font-bold text-slate-800">
          Homepage Coming Next →
        </h1>
      </main>
    </>
  );
}