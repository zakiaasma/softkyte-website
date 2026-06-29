import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Footer from "@/components/layout/Footer";
import Services from "@/components/home/Services";
import WhySoftkyte from "@/components/home/WhySoftkyte";
import Technology from "@/components/home/Technology";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhySoftkyte />
      <Technology />
      <Process />
      <Footer />
    </>
  );
}