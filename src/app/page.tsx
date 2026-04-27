import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        {/* <Reviews /> */}
        {/* <Pricing /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
