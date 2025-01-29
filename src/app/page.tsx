import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";

export default function Page() {
  return (
    <div className="min-h-screen">
        <div className="">
          <Hero/>
          <Features/>
          <Pricing/>
          <CTA/>
          <Footer/>
        </div>
    </div>
  )
}