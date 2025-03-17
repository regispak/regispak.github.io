import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </main>
  )
}

