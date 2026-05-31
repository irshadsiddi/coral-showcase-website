import { LandingNav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { TrustBar } from "@/components/landing/trust-bar"
import { Problem } from "@/components/landing/problem"
import { Philosophy } from "@/components/philosophy_new"
import { FeaturesBento } from "@/components/landing/features-bento"
import { IntegrationsSection } from "@/components/landing/integrations-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { Footer as Footer2 } from "@/components/landing/footer"
import { Footer } from "@/components/footer_new"

export default function Page() {
  return (
    <main className="min-h-screen bg-base-bg">
      <LandingNav />
      <Hero />
      {/* <TrustBar /> */}
      <Problem />
      <Philosophy />
      <FeaturesBento />
      <IntegrationsSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
      <Footer2 />
    </main>
  )
}
