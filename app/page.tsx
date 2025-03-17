import Navbar from "@/components/navbar"
import HeroNEW from "@/components/heroNEW"
import FeaturedProjects from "@/components/featured-projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroNEW />
      <FeaturedProjects />
    </main>
  )
}

