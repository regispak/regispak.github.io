"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import FloatingShapes from "@/components/ui/floatingshapes"
import { Button } from "@/components/ui/button"  // Import the Button component

// Sample project data for Main Projects
const mainProjects = [
  {
    id: 1,
    title: "Tacit",
    description:
      "A 4 player party PVP game about typing to cast spells to be the last one standing. Developed for CSGD & ARTG senior capstone course ",
    image: "/images/TacitBackground.png",
    tags: ["Unreal", "C++", "Leadership", "Blueprints", "Blender", "UI/UX", "Spreadsheets", ],
    slug: "tacit",
  },
  {
    id: 2,
    title: "Malisense",
    description:
      "2D top-down dungeon crawler where you collect sacred artfacts to thwart the Malignance. Developed for 2023-24 GDA's mock studio",
    image: "/images/Malisense.png",
    tags: ["Unity", "C#", "Leadership", "Algorithms"],
    slug: "malisense",
  },
  {
    id: 3,
    title: "CMPM 123 | Chess & Tic Tac Toe",
    description: "A Chess and Tic Tac Toe program alongside game AI. Developed for CMPM 123 Fall 2024",
    image: "/images/CMPM123ChessImg1.png",
    tags: ["C++", "UI/UX", "Algorithms",],
    slug: "cmpm123",
  },
]

// Sample project data for Side Projects
const sideProjects = [
  {
    id: 1,
    title: "MAL Scraper",
    description: "A simple program to scrape MAL for any anime season to retreive every single anime opening and ending",
    image: "/images/AMQ.png",
    tags: ["Python", "HTML"],
    slug: "chatbot",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />
      <section className="container mx-auto px-4 py-2 md:py-8"></section>
      <section id="main-projects" className="py-24 md:py-16 pt-24 relative overflow-hidden">
        {/* Animated background circles */}
        <FloatingShapes count={15} />

        {/* Main Projects content */}
        <div className="container mx-auto px-8 sm:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lato font-bold mb-4">Main Projects</h2>
            <div className="border-t-2 border-muted-foreground mt-2 mb-6"></div> {/* Line below the title */}
          </div>

          {/* Main Projects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {mainProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-secondary rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                // Apply transition on hover and remove it when not hovered
                whileHover={{ scale: 1.05 }} // Scale on hover
                // transition={{ duration: 0.3 }} // Smooth transition
              >
                {/* Entire content is wrapped inside this div */}
                <div className="flex flex-col">
                  {/* Project Title Above Image */}
                  <h3 className="text-2xl font-semibold mb-4 px-6 pt-6">{project.title}</h3>

                  {/* Project Image */}
                  <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative w-full aspect-video overflow-hidden"> {/* Use aspect-video for 16:9 ratio */}
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-200" // Use object-cover to fill the container
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">View Project</span>
                      </div>
                    </div>
                  </Link>

                  {/* Project Description and Tags Below Image */}
                  <div className="p-6 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-card px-2 py-1 rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="side-projects" className="py-24 md:py-16 pt-24 relative overflow-hidden">
        {/* Animated background circles */}

        {/* Side Projects content */}
        <div className="container mx-auto px-8 sm:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-lato font-bold mb-4">Side Projects</h2>
            <div className="border-t-2 border-muted-foreground mt-2 mb-6"></div> {/* Line below the title */}
          </div>

          {/* Side Projects List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {sideProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-secondary rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                // Apply transition on hover and remove it when not hovered
                whileHover={{ scale: 1.05 }} // Scale on hover
              >
                {/* Entire content is wrapped inside this div */}
                <div className="flex flex-col">
                  {/* Project Title Above Image */}
                  <h3 className="text-2xl font-semibold mb-4 px-6 pt-6">{project.title}</h3>

                  {/* Project Image */}
                  <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative w-full max-w-full aspect-w-16 aspect-h-9 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800} // Explicit width for the image
                        height={450} // Explicit height to maintain 16:9 ratio
                        objectFit="contain" // Ensuring the image fits within the container
                        className="transition-all duration-200"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">View Project</span>
                      </div>
                    </div>
                  </Link>

                  {/* Project Description and Tags Below Image */}
                  <div className="p-6 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-card px-2 py-1 rounded-md text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-[#1E2E2E] text-center text-white/60 text-sm">
        <p>© 2025 Regis Pak. All rights reserved.</p>
      </footer>
    </main>
  )
}
