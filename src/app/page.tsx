import PublicRoute from "@/components/guards/public-route";
import CTA from "@/components/landing/cta";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";

//TODO: detect if user is logged in and redirect to dashboard


export default function Page() {
  return (
    <PublicRoute>
      <div className="min-h-screen">
        <div className="">
          <Hero />
          <Features />
          <Pricing />
          <CTA />
          <Footer />
        </div>
      </div>
    </PublicRoute>
  )
}