"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Tacit() {
  const [selectedThumbnail, setSelectedThumbnail] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Gallery thumbnails
  const thumbnails = [
    "/images/DB.png",
    "/images/RegisFuji.jpg",
    "/images/DB.png",
    "/images/RegisFuji.jpg",
    "/images/DB.png",
    "/images/RegisFuji.jpg",
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/DB.png"
          alt="Hirika Village Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Navigation */}
        <header className="w-full py-4 px-6">
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col items-center px-4">
          {/* Hero section */}
          <section className="w-full flex flex-col items-center justify-center text-center py-16">
            {/* Hero title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#8FBCBB] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              TACIT
            </motion.h1>

            {/* Description */}
            <motion.div
              className="max-w-3xl mx-auto text-white/90 text-lg mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p>
                Tacit is a <span className="font-semibold">4 player PVP game</span> designed to fit the setting for
                Zelda BOTW where the player will experience combat, puzzle and exploration in a{" "}
                <span className="font-semibold">non-linear</span> gameplay setup.
              </p>
            </motion.div>

            {/* Video player */}
            <motion.div
              className="w-full max-w-4xl aspect-video relative mb-8 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {!isVideoPlaying ? (
                <div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              ) : null}
              <iframe
                src={
                  isVideoPlaying
                    ? "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    : "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* Thumbnails gallery */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {thumbnails.map((thumbnail, index) => (
                <div
                  key={index}
                  className={`relative w-24 h-24 md:w-32 md:h-32 cursor-pointer transition-all duration-300 ${
                    selectedThumbnail === index ? "ring-2 ring-[#8FBCBB]" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedThumbnail(index)}
                >
                  <Image
                    src={thumbnail || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </section>

          {/* Project info section */}
          <section className="w-full py-8 px-4 bg-[#1E2E2E]/80">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-white/80">
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-2">ROLE:</h3>
                <p>Level Designer</p>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-2">TEAM SIZE:</h3>
                <p>Solo Project</p>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-2">TOOLS USED:</h3>
                <p>Unreal Engine 4</p>
              </div>
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-2">DURATION:</h3>
                <p>3 Weeks</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-2">GENRE:</h3>
                <p>Open-world Action Adventure</p>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="w-full py-16 bg-[#0D1518]/90">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8FBCBB] text-center mb-12">DESIGN PROCESS</h2>

              {/* Pre-Production */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/DB.png"
                    alt="Pre-Production Concept"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-semibold text-[#8FBCBB] mb-4">Pre-Production</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                      I began my process by studying Zelda's environmental design and decided to create a village based
                      on the plains.
                    </li>
                    <li>
                      Key design principles:
                      <ul className="pl-5 mt-2 space-y-2">
                        <li>Village should be positioned on fairly flat ground</li>
                        <li>While the landscape around it can vary in height</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Initial Floor Plan */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/RegisFuji.jpg"
                    alt="Initial Floor Plan"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-semibold text-[#8FBCBB] mb-4">Initial Floor Plan</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                      I thought it would be a good idea to combine the combat and puzzle mechanics Zelda has to bring an
                      immersive and fitting experience to the player.
                    </li>
                    <li>
                      The floor plan was designed to highlight each of the different zone setups which also showcase the
                      flow and the goals of the level.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Level Goal */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/DB.png"
                    alt="Level Goal Map"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-semibold text-[#8FBCBB] mb-4">Level Goal</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                      The goal of the level is to save Hirika, the player will find her captured next to the mountain.
                    </li>
                    <li>
                      The mechanic setup will encourage the player to explore combat, puzzle, and narrative encounters
                      around the objective.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Choices Section */}
          <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8FBCBB] text-center mb-12">DESIGN CHOICES</h2>

              {/* Clear Landmarks */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 uppercase">CLEAR LANDMARKS</h3>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="w-full md:w-1/2 text-white">
                    <ul className="space-y-4 list-disc pl-5">
                      <li>The level should provide the player with a clear sense of direction and location.</li>
                      <li>
                        I made sure to create clear landmarks and visible pathways to help the players easily navigate
                        and understand their surroundings within the open field.
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/images/DB.png"
                      alt="Clear Landmarks Screenshot"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/images/RegisFuji.jpg"
                      alt="Shrine Screenshot"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-white">
                    <ul className="space-y-4 list-disc pl-5">
                      <li>
                        The shrine is a well-known landmark in the Zelda game series. I incorporated similar structures
                        that would be instantly recognized for players.
                      </li>
                      <li>
                        The tall Fire Shrine serves as the first waypoint point; the shrine's location is easily
                        accessible.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Combat Setups */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 uppercase">COMBAT SETUPS</h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 text-white">
                    <ul className="space-y-4 list-disc pl-5">
                      <li>
                        To create a rich and exploration-focused style experience, combat encounters are strategically
                        placed throughout the level.
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/images/DB.png"
                      alt="Combat Setup Screenshot"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 bg-[#1E2E2E] text-center text-white/60 text-sm">
          <p>© 2025 Regis Pak. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

