"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import ValueProp from "@/components/home/ValueProp";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import TrustedBy from "@/components/home/TrustedBy";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProofStrip />
      <ValueProp />
      <Services />
      <HowItWorks />
      <TrustedBy />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
