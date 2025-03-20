"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import FloatingShapes from "@/components/ui/floatingshapes"; // Import the FloatingShapes component

export default function Malisense() {
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
                MALISENSE
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
                src="/images/Malisense.png"
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
                <p>Programming Lead| Designer</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">TEAM SIZE:</h3>
                <p>250+</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">TOOLS USED:</h3>
                <p>Unity</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">DURATION:</h3>
                <p>20 Weeks</p>
              </div>
              <div className="w-full md:w-auto">
                <h3 className="text-[#8FBCBB] text-lg font-medium mb-1">GENRE:</h3>
                <p>2D Top Down Dungeon Crawler</p>
              </div>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="w-full py-16 bg-[#0D1518]/90">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8FBCBB] text-center mb-12">TBD</h2>

              {/* Pre-Production */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/tacit/SlideExample.png"
                    alt="Pre-Production Concept"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Overview</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                    Tacit transforms traditional ability combat by replacing button presses with 
                    real-time typing. This design integrates FPS dynamics with the challenge 
                    of typing spells, requiring players to balance movement, casting, and evasion: 
                    here's how we did it
                    </p>
                  </ul>
                </div>
              </div>
              {/* Spell Initiation & Movement */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Spell Initation & Movement</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                    <span className="font-bold text-primary">Initiation:</span> Unlike typical button-cast systems, players must actively 
                    start typing (via left click or enter) to initiate a spell, reflecting 
                    the idea of wizards chanting while stationary.
                    </li>
                    <li>
                    <span className="font-bold text-primary">Movement Impact:</span> Typing locks the player in place, emphasizing tactical 
                    positioning and risk management during combat.
                    </li>
                    <p>
                  &emsp;
                  </p>
                  </ul>
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Typing Mechanics & Spell Naming</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p> 
                    <span className="font-bold text-primary">Key Layout Considerations:</span>
                    </p>
                    <li>
                    Spells like “FIREBALL” span across the keyboard, 
                    increasing vulnerability due to complex finger movements.
                    </li>
                    <li>
                    Conversely, spells designed for one-hand typing (e.g., “FAST”) 
                    are quicker and safer, reinforcing the need for thoughtful spell naming.
                    </li>
                    <li>
                    Casting Time: The act of typing simulates charging a shot,
                     requiring careful balance between spell length, damage, mana 
                     costs, and abilities
                    </li>
                    <p>
                  &emsp;
                  </p>
                  </ul>
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Casting & Balancing</h3>
                  <ul className="space-y-4 list-disc pl-5">
                   <li>
                    <span className="font-bold text-primary">Execution:</span> 
                    Once typed, spells are cast with a simple action (enter/left click).
                   </li>
                   <li>
                    <span className="font-bold text-primary">Balancing Typing Speed:</span> 
                    Recognizing the disparity between faster and slower typists, our system 
                    includes a holding period after typing a spell.
                   </li>
                    <li>
                    This delay allows players to position themselves before releasing 
                    the spell rewarding precision over speed.
                    </li>
                  </ul>
                  <p>
                  &emsp;
                  </p>
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Conclusion</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                    By merging FPS mechanics with a typing system, we introduced unique 
                    challenges in spell design and balance. The process required innovative 
                    approaches to spell initiation, keyboard layout optimization, and 
                    resource management to create a dynamic, skill-based combat experience.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Design Choices Section */}
          <section className="w-full py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8FBCBB] text-center mb-12">Multiplayer Replication</h2>
                {/* Pre-Production */}
                  <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                  <Image
                    src="/images/tacit/mutliplayer.png"
                    alt="Pre-Production Concept"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Overview</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                    Developing a smooth, connected multiplayer experience centers on 
                    linking players seamlessly. Unreal Engine 5’s built-in replication 
                    system handled the heavy lifting, but establishing client connections 
                    still required a robust approach.
                    </p>
                  </ul>
                </div>
              </div>
              {/* Spell Initiation & Movement */}
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <div className="w-full md:w-1/2">
                </div>
                <div className="w-full md:w-1/2 text-white">
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Establishing Connections</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <li>
                    <span className="font-bold text-primary">Client-Hosted Peer-to-Peer:</span>
                    With limited resources, we leveraged Steam’s client-hosted peer-to-peer system. 
                    This approach not only reduced infrastructure costs but also provided 
                    many benefits of a dedicated server setup.
                    </li>
                    <li>
                    <span className="font-bold text-primary">Action Synchronization:</span> Ensuring every
                     client’s action is validated without overwhelming the server was a
                      major design challenge. We meticulously documented each action, 
                      detailing its interaction with the server and the type of data
                       transmitted. This clear mapping prevented confusion between host-side
                        and client-side processes.
                    </li>
                    <p>
                  &emsp;
                  </p>
                  </ul>
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Evolving the System with Gameplay Abilities</h3>
                  <ul className="space-y-4 list-disc pl-5">
                   <li>
                    <span className="font-bold text-primary">Adaptation to Hurdles:</span> 
                    When issues arose with our initial spell-casting mechanics, 
                    we transitioned to Unreal Engine 5’s Gameplay Ability System.
                   </li>
                   <li>
                    <span className="font-bold text-primary">Built-In Netcode Advantages:</span> 
                    The system’s integrated rollback netcode and client-side prediction 
                    significantly enhanced gameplay smoothness, even for high-ping players, 
                    while streamlining our iteration process.
                   </li>
                   <p>
                  &emsp;
                  </p>
                  </ul>
                  <h3 className="text-xl font-bold text-[#8FBCBB] mb-4">Conclusion</h3>
                  <ul className="space-y-4 list-disc pl-5">
                    <p>&emsp;
                    By combining UE5’s replication framework with Steam’s peer-to-peer 
                    network and a strategic shift to the Gameplay Ability System, 
                    we achieved a responsive and efficient multiplayer environment. 
                    This methodical approach ensured that both connectivity and gameplay 
                    integrity were maintained throughout development.
                    </p>
                  </ul>
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