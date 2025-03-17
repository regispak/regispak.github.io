"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"

// Sample project data (in a real app, this would come from a database or API)
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
    fullDescription: `
      This e-commerce platform was built to provide a seamless shopping experience for users. 
      
      Key features include:
      - Responsive product listings with filtering and sorting
      - Shopping cart with persistent storage
      - Secure checkout process with Stripe integration
      - User accounts and order history
      - Admin dashboard for product management
      
      The application was built using Next.js for server-side rendering and optimal performance. 
      TypeScript was used throughout to ensure type safety and improve developer experience.
      Tailwind CSS provided a utility-first approach to styling, making the UI development process efficient and consistent.
      Stripe integration handles all payment processing securely.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    slug: "ecommerce-platform",
    demoUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
    fullDescription: `
      This task management application helps users organize their work and increase productivity.
      
      Key features include:
      - Kanban board with drag-and-drop functionality
      - Task creation, editing, and deletion
      - Project organization and categorization
      - Real-time updates using Firebase
      - Collaborative features for team projects
      
      The application was built using React for the frontend UI components.
      Firebase provides real-time database functionality and authentication.
      Framer Motion powers the smooth animations and transitions.
      The drag-and-drop functionality makes task management intuitive and efficient.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    slug: "task-management-app",
    demoUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern, minimalist design.",
    fullDescription: `
      This portfolio website was designed to showcase my work and skills in a clean, modern format.
      
      Key features include:
      - Responsive design that works on all devices
      - Project showcase with detailed project pages
      - Contact form for easy communication
      - Smooth animations and transitions
      - Fast loading times and optimal performance
      
      The website was built using Next.js for static site generation.
      TypeScript ensures type safety throughout the codebase.
      Tailwind CSS provides utility-first styling for consistent design.
      Framer Motion powers the smooth animations and transitions.
    `,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    slug: "portfolio-website",
    demoUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
]

export default function ProjectPage() {
  const searchParams = useSearchParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get the project slug from the URL query parameter
    const projectSlug = searchParams.get("project")

    if (projectSlug) {
      // Find the project with the matching slug
      const foundProject = projects.find((p) => p.slug === projectSlug)
      setProject(foundProject || null)
    }

    setLoading(false)
  }, [searchParams])

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="flex items-center justify-center h-[50vh]">
            <p>Loading...</p>
          </div>
        </div>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="flex flex-col items-center justify-center h-[50vh]">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 md:py-32">
        <Link
          href="/#projects"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="bg-secondary px-3 py-1 rounded-md text-sm font-medium">
                {tag}
              </span>
            ))}
            <span className="bg-muted px-3 py-1 rounded-md text-sm font-medium ml-auto">{project.year}</span>
          </div>

          <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mt-8 space-y-4 whitespace-pre-line text-muted-foreground">{project.fullDescription}</div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Links</h3>
                <div className="space-y-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                <ul className="space-y-1 text-muted-foreground">
                  {project.tags.map((tag: string) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

