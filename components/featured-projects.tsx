"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
    image: "/images/RegisFuji.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    slug: "task-management-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern, minimalist design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    slug: "portfolio-website",
  },
]

export default function FeaturedProjects() {
  const router = useRouter()

  const handleProjectClick = (slug: string) => {
    // Navigate to the project detail page
    // Since you renamed the folder to "tacit", we need to use that in the path
    router.push(`/projects/tacit?project=${slug}`)
  }

  return (
    <section id="projects" className="py-24 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-lato font-bold mb-4">Featured Projects</h2>
          <p className="text-lg font-raleway text-muted-foreground max-w-2xl mx-auto">
            Here are my latest projects that I've built using different engines 
            and practices. Please take a look at what i've made so far, and if you
            like what you see, you can check out more at my Projects Page. 
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              onClick={() => handleProjectClick(project.slug)}
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
                      <span key={tag} className="bg-secondary px-2 py-1 rounded-md text-xs font-medium">
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

