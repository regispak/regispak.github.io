"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import FloatingShapes from "@/components/ui/floatingshapes"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/mpwpwlvn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setResponseMessage(response.ok ? 
        "Thanks for your message! I'll get back to you soon." : 
        "Something went wrong. Please try again later.")
        
      if (response.ok) setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setResponseMessage("Error submitting form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <FloatingShapes />
      <div className="max-w-2xl mx-auto p-8 mt-32 bg-secondary bg-opacity-100 rounded-3xl shadow-lg border border-secondary px-4 sm:px-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Need to contact me? Please fill out this form to send me a message, and I'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Name"
              required
              className="w-full p-3 border rounded-lg bg-background text-muted-foreground"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email"
              required
              className="w-full p-3 border rounded-lg bg-background text-muted-foreground"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Message"
              required
              rows={6}
              className="w-full p-3 border rounded-lg bg-background text-muted-foreground"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        {responseMessage && (
          <p className="mt-4 text-center text-muted-foreground">
            {responseMessage}
          </p>
        )}
      </div>
      <footer className="w-full py-6 bg-[#1E2E2E] text-center text-white/60 text-sm">
        <p>© 2025 Regis Pak. All rights reserved.</p>
      </footer>
    </main>
  )
}