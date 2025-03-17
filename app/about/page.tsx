import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 pt-16 md:pt-0">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer who loves creating beautiful, functional websites and applications. With over 5
              years of experience in web development, I specialize in building modern, responsive interfaces using the
              latest technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              My journey in tech began when I built my first website at 15. Since then, I've worked with startups and
              established companies to bring their digital visions to life.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes in
              the kitchen.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools & Others</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

