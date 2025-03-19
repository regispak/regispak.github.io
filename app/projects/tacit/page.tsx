"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import FloatingShapes from "@/components/ui/floatingshapes"; // Import the FloatingShapes component

export default function Tacit() {
  const router = useRouter();

  const handleBackToProjects = () => {
    router.push("/projects");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Floating shapes background */}
      <div className="absolute inset-0 z-0">
        <FloatingShapes count={15} />
      </div>

      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header/Navigation */}
        <header className="w-full py-6 px-6">
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="flex-1 flex flex-col items-center px-4 relative">
          {/* Hero section */}
          <section className="w-full flex flex-col items-center text-center py-12">
            {/* Back to Projects & Title Section */}
            <motion.div
              className="w-full max-w-6xl px-4 flex items-center justify-center mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back to Projects Button - Left Aligned */}
              <button
                onClick={handleBackToProjects}
                className="absolute left-0 flex items-center text-white text-lg font-raleway font-bold hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Back to Projects
              </button>

              {/* Hero Title - Centered */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-lato font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                TACIT
              </motion.h1>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full max-w-3xl aspect-video relative mb-4 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Image
                src="/images/TacitBackground.png"
                alt="Tacit Project Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </section>

          {/* Project info section - Below the image */}
          <section className="w-full py-6 bg-[#1E2E2E]/80">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between text-white/80 gap-4">
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">ROLE:</h3>
                <p>Project Lead</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">TEAM SIZE:</h3>
                <p>12 Students</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">TOOLS USED:</h3>
                <p>Unreal Engine 5</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">DURATION:</h3>
                <p>10 Weeks</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">GENRE:</h3>
                <p>Multiplayer party PVP</p>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="w-full py-16 bg-[#0D1518]/90">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8FBCBB] text-center mb-12">Where to Start?</h2>

              {/* Pre-Production */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/tacit/requirements2.png"
                    alt="Pre-Production Concept"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Pre-Production</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                      Task: Create a 20 week project for UCSC's game design capstone course, we want to make something
                      interesting, something fun, but mainly something that I can put right here on my website.
                      Not only is it what you want to make, but what your professors NEED you to make, in the form
                      of requirements.
                    </p>
                    <p>&emsp;
                      So, there's a special balance with just that right sweespot in trying to find a game idea
                      that will not only work, be fun, be impressive, but also pass the class, cause you can't 
                      leave college without that diploma
                    </p>
                  </ul>
                </div>
              </div>

              {/* Initial Floor Plan */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/tacit/requirements.png"
                    alt="Initial Floor Plan"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">So What Do We Do?</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                      So obviously, you and your friends just spit out random ideas till something sticks. Eventually,
                      something does. Given these points, can you guess it?
                    </p>
                    <li>
                      Relatively fast game cycle, No longer than 15 minutes
                    </li>
                    <li>
                      Simplistic concept that can be iterated on
                    </li>
                    <li>
                      Mirrors some of the important aspects of AAA games
                    </li>
                    <li>
                      So what do we do?
                    </li>
                    <p>
                    &emsp;
                    </p>
                    <p> &emsp;
                      With a bucket of sticks stones, we decided on creating a multiplayer
                      pvp game thats based around typing out your spells. Simple yet complex
                    </p>
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
                <h3 className="text-2xl font-bold text-white mb-8 uppercase">SIMPLE GOALS</h3>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="w-full md:w-1/2 text-white">
                    <ul className="space-y-4 list-disc pl-5">
                      <p>&emsp;
                        With a simple concept, you can go one of many ways. For us, we started
                        with the idea of just casting out spells. You press enter, type out a spell,
                        then enter again and presto, you got your ability. With this, the gameplay
                        becomes more interactive, but more complex at the same time. As such, it 
                        brings in a couple of important questions at play.
                        </p>
                      <li>
                        How does physically moving your hand to type feel?
                      </li>
                      <li>
                        W
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/images/tacit/SlideExample.png"
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
  );
}