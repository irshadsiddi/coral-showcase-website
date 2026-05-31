import { Hero } from "@/components/hero_new"
import { Problem } from "@/components/problem_new"
import { Philosophy } from "@/components/philosophy_new"
import { FeaturesBento } from "@/components/features-bento_new"
import { Demo } from "@/components/demo_new"
import { Footer } from "@/components/footer_new"

export default function Page() {
  return (
    // <main className="min-h-screen bg-base-bg">
    //   <LandingNav />
    //   <Hero />
    //   <TrustBar />
    //   <Problem />
    //   <FeaturesBento />
    //   <IntegrationsSection />
    //   <HowItWorks />
    //   <Testimonials />
    //   <Footer />
    // </main>
    <main className="min-h-screen bg-base-bg">
      <Hero />
      <Problem />
      <Philosophy />
      <FeaturesBento />
      <Demo />
      <Footer />
    </main>
  )
}
