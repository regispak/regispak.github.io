import Navbar from "@/components/navbar"
import HeroNEW from "@/components/heroNEW"
import FeaturedProjects from "@/components/featured-projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroNEW />
      <FeaturedProjects />
      <footer className="w-full py-6 bg-[#1E2E2E] text-center text-white/60 text-sm">
        <p>© 2025 Regis Pak. All rights reserved.</p>
      </footer>
    </main>
    
  )
}

