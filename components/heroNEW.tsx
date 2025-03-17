"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function HeroNEW() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const navigateToAbout = () => {
    router.push("/about")
  }

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 z-20">
      {/* Background image with custom alignment */}
      <Image 
        src="/images/RegisFuji.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        style={{
          objectPosition: 'center 41%'
        }}
        priority
      />
      
      {/* Main content container */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className="space-y-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl md:text-4xl font-raleway font-bold text-primary block pt-6 md:pt-8">
                Hey There!
              </span>
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
              I create, design, program, and play games.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <Button 
                onClick={navigateToAbout}
                variant="default"
                size="lg"
                className="text-lg md:text-2xl font-lato font-bold flex items-center gap-2"
              >
                About Me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Adjusted arrow position with proper centering */}
      <div ref={scrollRef} className="absolute bottom-1 left-[calc(50%-1.5rem)] transform animate-bounce">
        <ArrowDown 
          className="h-8 w-8 text-primary"
          strokeWidth={3}
        />
      </div>
    </section>
  )
}
