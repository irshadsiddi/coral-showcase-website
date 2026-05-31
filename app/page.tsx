import { Hero } from "@/components/hero_new"
import { Problem } from "@/components/problem_new"
import { Philosophy } from "@/components/philosophy_new"

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
    </main>
  )
}
