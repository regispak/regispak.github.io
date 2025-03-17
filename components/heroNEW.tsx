"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useRouter } from "next/navigation" // Import useRouter
import { Button } from "@/components/ui/button" // Import your Button component

export default function HeroNEW() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter() // Initialize the router

  const navigateToContact = () => {
    router.push("/contact") // Navigate to the contact page
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background image with adjusted position */}
      <Image 
        src="/images/RegisFuji.jpg"
        alt="Hero Background"
        fill
        className="object-cover scale-100" // Adjusts to show the top part
        priority
      />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl md:text-4xl font-raleway font-bold text-primary ">Hey There!</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-outline font-lato"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm <span className="text-primary">Regis Pak</span>, <span className="text-white">a Game Designer</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-2xl font-bold text-white text-shadow-outline font-raleway"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I create, design, program, and develop games.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <Button 
                onClick={navigateToContact} // Use the Button component
                variant="default" // Use the default variant (or any other variant you prefer)
                size="lg" // Use the large size (or any other size you prefer)
                className="text-lg md:text-2xl font-lato font-bold flex items-center gap-2" // Add custom styles
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="h-8 w-8 text-primary"
          strokeWidth={3}
        />
      </div>
    </section>
  )
}