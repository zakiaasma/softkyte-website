import Header from "@/components/layout/Header";
import Hero from "@/components/home/hero/Hero";
import Footer from "@/components/layout/Footer";
import Services from "@/components/home//services/Services";
import WhySoftkyte from "@/components/home/why-softkyte/WhySoftkyte";
import Technology from "@/components/home/technology/Technology";
import Process from "@/components/home/process/Process";
import Industries from "@/components/home/Industries";
import Trust from "@/components/home/Trust";
import TechnologiesStrip from "@/components/home/TechnologiesStrip";
import BusinessOutcomes from "@/components/home/business-outcomes/BusinessOutcomes";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TechnologiesStrip />
      <BusinessOutcomes />
      <Services />
      <WhySoftkyte />
      <Technology />
      <Process />
      <Industries />
      <Trust />
      <Footer />
    </>
  );
}