import Footer from "@/components/footer";
import AiProductivity from "@/components/landing/ai-productivity";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import NoMore from "@/components/landing/no-more";
import Pricing from "@/components/landing/pricing";
import WhatYouGet from "@/components/landing/what-you-get";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <main className="flex-1">
        <Hero />
        <AiProductivity/>
        <NoMore/>
        <WhatYouGet/>
        <Pricing/>
        <FAQ/>
        <Footer/>
      </main>
    </div>
  )
}