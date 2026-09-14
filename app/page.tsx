import { BeforeAfter } from "@/components/kutya-panzio/BeforeAfter";
import { ClosingCta } from "@/components/kutya-panzio/ClosingCta";
import { DemoModal } from "@/components/kutya-panzio/DemoModal";
import { DemoProvider } from "@/components/kutya-panzio/DemoProvider";
import { Faq } from "@/components/kutya-panzio/Faq";
import { Footer } from "@/components/kutya-panzio/Footer";
import { Header } from "@/components/kutya-panzio/Header";
import { Hero } from "@/components/kutya-panzio/Hero";
import { Offer } from "@/components/kutya-panzio/Offer";
import { Problems } from "@/components/kutya-panzio/Problems";
import { Process } from "@/components/kutya-panzio/Process";
import { Services } from "@/components/kutya-panzio/Services";
import { StickyCta } from "@/components/kutya-panzio/StickyCta";

export default function Home() {
  return (
    <DemoProvider>
      <Header />
      <main className="mx-auto max-w-3xl px-5 sm:px-8">
        <Hero />
        <Problems />
        <Process />
        <Services />
        <BeforeAfter />
        <Offer />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <StickyCta />
      <DemoModal />
    </DemoProvider>
  );
}
