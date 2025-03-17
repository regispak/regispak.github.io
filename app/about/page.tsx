"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import FloatingShapes from "@/components/ui/floatingshapes"
import { Code, Gamepad2, Wrench, FileText, Download, ExternalLink, Maximize2, Minimize2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const [resumeExpanded, setResumeExpanded] = useState(false)

  return (
    <main className="min-h-screen bg-background relative">
      {/* FloatingShapes with very low z-index to ensure it stays in the background */}
      <div className="absolute inset-0 z-10">
        <FloatingShapes />
      </div>

      {/* Solid background layer above FloatingShapes but below content */}

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />

        {/* Main container - more centered */}
        <div className="container mx-auto px-4 py-8 mt-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left column (3/4 width) */}
            <div className="lg:col-span-3">
              {/* Profile header with image on left */}
              <div className="bg-card rounded-md border border-border mb-6 p-6 shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-auto flex justify-center md:justify-start">
                    <div className="relative w-40 h-40 rounded-md overflow-hidden border-4 border-primary/30">
                      <Image
                        src="/images/RegisSuitPic.png"
                        alt="Profile"
                        width={160}
                        height={160}
                        className="object-cover absolute top-[-35px] transform scale-125"
                        />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary">Regis Pak</h1>
                        <p className="text-muted-foreground mt-1 flex items-center gap-1">
                            Regis Pak
                            <Image
                                src="/images/usaflagemoji.png" // Path to your downloaded flag image
                                alt="US Flag"
                                width={20} // Adjust size as needed
                                height={20}
                                className="inline-block" // Ensures it aligns with text
                            />
                            Santa Cruz, CA
                            </p>
                      </div>
                      <div className="bg-secondary p-2 rounded-md text-center shadow-sm">
                        <div className="text-secondary-foreground text-sm">Level</div>
                        <div className="text-primary text-2xl font-bold">21</div>
                      </div>
                    </div>
                    <div className="mt-4 text-muted-foreground flex items-center gap-2">
                        <p className="flex items-center gap-2">
                            <a
                            href="https://www.linkedin.com/in/regis-pak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:underline"
                            >
                            <Image
                                src="/images/IN.png" // Path to your LinkedIn logo
                                alt="LinkedIn"
                                width={16} // Adjust size as needed
                                height={16}
                                className="inline-block" // Ensures it aligns with text
                            />
                            LinkedIn
                            </a>
                            <span className="text-muted-foreground">|</span>
                            <a
                            href="https://github.com/soggytofu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:underline"
                            >
                            <Image
                                src="/images/GIT.png" // Path to your GitHub logo
                                alt="GitHub"
                                width={22} // Adjust size as needed
                                height={22}
                                className="inline-block transform scale-150" // Ensures it aligns with text
                            />
                            GitHub
                            </a>
                        </p>
                        </div>
                  </div>
                </div>
              </div>

              {/* About Me box */}
              <div className="bg-card rounded-md border border-border mb-6 overflow-hidden shadow-md">
                <div className="bg-secondary px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-primary">About Me</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground">
                    I'm Regis Pak, a senior at UCSC majoring in Computer Science with a focus on Game Design. From a
                    young age, video games have been a significant part of my life, ultimately shaping my academic and
                    professional journey. As luck would have it, my high school started offering a game design class my
                    senior year, and after taking it on a whim, it has led me to this path.
                  </p>
                  <p className="text-muted-foreground">
                    I thrive on the excitement of multiplayer gaming like Dota 2, League of Legends, CS2, Marvel Rivals,
                    or even co-op like Minecraft, Terraria, and Portal 2. I also enjoy solo gaming sessions paired with
                    fun chats with friends, where a good challenge and clever tactics keep me on my toes.
                  </p>
                  <p className="text-muted-foreground">
                    Outside of gaming, you'll often find me hanging out with friends, getting lost in a manhwa, or
                    embarking on spontaneous adventures. My recent study abroad to Japan, will forever be my greatest
                    time spent in school :P
                  </p>
                </div>
              </div>

              {/* Resume section with embedded PDF */}
              <div className="bg-card rounded-md border border-border overflow-hidden shadow-md">
                <div className="bg-secondary px-4 py-3 border-b border-border flex justify-between items-center">
                  <h3 className="font-medium text-primary">Resume</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setResumeExpanded(!resumeExpanded)}
                    >
                      {resumeExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                      {resumeExpanded ? "Collapse" : "Expand"}
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => {
                        // This will download the resume file from the public folder
                        const link = document.createElement("a")
                        link.href = "/resume.pdf"
                        link.download = "Regis_Pak_Resume.pdf"
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                    >
                      Download <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => {
                        window.open("/resume.pdf", "_blank")
                      }}
                    >
                      Open <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* PDF Viewer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    resumeExpanded ? "h-[800px]" : "h-32"
                  }`}
                >
                  {!resumeExpanded ? (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <FileText className="w-6 h-6 mr-2" /> Click "Expand" to view my resume
                    </div>
                  ) : (
                    <iframe
                      src="/resume.pdf#toolbar=0&navpanes=0"
                      className="w-full h-full border-none"
                      title="Resume"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right sidebar (1/4 width) */}
            <div className="lg:col-span-1 space-y-6">
              {/* Skills box */}
              <div className="bg-card rounded-md border border-border overflow-hidden shadow-md">
                <div className="bg-secondary px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-primary">Skills</h3>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <h4 className="text-foreground flex items-center gap-2 mb-2">
                      <Code size={16} className="text-primary" /> Languages
                    </h4>
                    <div className="space-y-2">
                      {["C++", "C#", "C", "Python", "Javascript", "HTML"].map((lang) => (
                        <div key={lang} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground text-sm">{lang}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-foreground flex items-center gap-2 mb-2">
                      <Gamepad2 size={16} className="text-primary" /> Engines
                    </h4>
                    <div className="space-y-2">
                      {["Unreal", "Unity", "Phaser",].map((engine) => (
                        <div key={engine} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground text-sm">{engine}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground flex items-center gap-2 mb-2">
                      <Wrench size={16} className="text-primary" /> Tools & Others
                    </h4>
                    <div className="space-y-2">
                      {["Git / GitHub", "Spreadsheets", "Perforce", "Blender", "OBS"].map((tool) => (
                        <div key={tool} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground text-sm">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-card rounded-md border border-border overflow-hidden shadow-md">
                <div className="bg-secondary px-4 py-3 border-b border-border">
                  <h3 className="font-medium text-primary">Achievements</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-secondary p-3 rounded-md flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">JP</span>
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">Japan Study Abroad</h4>
                      <p className="text-muted-foreground text-sm">Completed international studies</p>
                    </div>
                  </div>
                  <div className="bg-secondary p-3 rounded-md flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-medium">CEO NERF</h4>
                      <p className="text-muted-foreground text-sm">Create a game company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full py-6 bg-muted text-center text-muted-foreground text-sm mt-8">
          <p>© 2025 Regis Pak. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}

