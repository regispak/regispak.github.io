"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import FloatingShapes from "./ui/floatingshapes"
import { Button } from "@/components/ui/button" // Import the Button component

// Sample project data
const projects = [
  {
    id: 1,
    title: "Tacit",
    description:
      "A 4 player party PVP game about typing to cast spells to be the last one standing. Developed for CSGD & ARTG senior capstone course ",
    image: "/images/TacitBackground.png",
    tags: ["Unreal", "C++", "Leadership", "Blueprints", "Blender", "UI/UX", "Spreadsheets", ],
    page: "/projects/tacit", // Direct page URL
  },
  {
    id: 2,
    title: "Malisense",
    description:
      "2D top-down dungeon crawler where you collect sacred artfacts to thwart the Malignance. Developed for 2023-24 GDA's mock studio",
    image: "/images/Malisense.png",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    page: "/projects/malisense", // Direct page URL
  },
  {
    id: 3,
    title: "Chess and Tic Tac Toe",
    description: "Created a Chess and Tic Tac Toe Engine from scratch",
    image: "/images/CMPM123ChessImg1.png",
    tags: ["C++", "UI/UX", "Algorithms",],
    page: "/projects/cmpm123", // Direct page URL
  },
]

export default function FeaturedProjects() {
  const router = useRouter()

  const handleProjectClick = (page: string) => {
    // Navigate to the specific project page
    router.push(page)
  }

  // Navigate to Projects page
  const navigateToProjects = () => {
    router.push("/projects")
  }

  return (
    <section id="projects" className="py-12 md:py-146 relative overflow-hidden"> {/* Reduced padding */}
      {/* Animated background circles */}
      <FloatingShapes count={15} /> {/* Easily control the number of shapes */}
      
      {/* Projects content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8"> {/* Reduced bottom margin */}
          <h2 className="text-4xl md:text-5xl font-lato font-bold mb-4">Featured Projects</h2>
          <p className="text-lg font-raleway text-muted-foreground max-w-2xl mx-auto">
            Here are my latest projects that I've built using different engines 
            and practices. Please take a look at what I've made so far, and if you
            like what you see, you can check out more at my Projects Page. 
          </p>

          {/* Centered Button to navigate to the Projects Page */}
          <div className="flex justify-center mt-4"> {/* Reduced top margin */}
            <Button 
              onClick={navigateToProjects} // Navigate to Projects page
              variant="default" // Default button style
              size="lg" // Large button
              className="text-lg md:text-2xl font-lato font-bold flex items-center gap-2" // Custom styles
            >
              View All Projects
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-secondary rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg cursor-pointer"
              initial={{ opacity: 1, y: 0 }} // Set initial opacity and position to be visible without animation
              transition={{ duration: 0.5 }}
              onClick={() => handleProjectClick(project.page)}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3 relative h-72 md:h-96 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">View Project</span>
                  </div>
                </div>

                <div className="md:col-span-2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
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
  )
}