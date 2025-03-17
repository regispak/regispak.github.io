"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  // Function to scroll to the projects section when clicked
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />
      
      {/* Animated background elements - decorative circles */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10" // Circular shape with primary color at 10% opacity
            style={{
              // Random size between 50px and 350px
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              // Random position
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              // Animation sequence for opacity and scale
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.2, 1],
              // Slight random movement
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{ 
              // Long duration for subtle movement
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Greeting with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-lg md:text-2xl text-primary">Hello!</span>
            </motion.div>
            
            {/* Main heading with animation */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm <span className="text-primary">Regis Pak</span>, a game designer
            </motion.h1>
            
            {/* Subheading with animation */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I create beautiful, responsive websites and applications with modern technologies.
            </motion.p>
            
            {/* Call to action button with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start" // Center on mobile, left-aligned on desktop
            >
              <button 
                onClick={scrollToProjects}
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                View my work <ArrowDown className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          </div>
          
          {/* Right column - profile image */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Circular profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image 
                src="/images/RegisSuitPic.png" 
                alt="Profile" 
                width={320}
                height={320}
                className="absolute top-[-80px] left-0 scale-110"
                priority
              />
            </div>
            
            {/* Decorative elements - pulsing circles */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator at bottom of screen */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
