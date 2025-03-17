"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl mx-auto pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind or just want to say hello? Fill out the form below or send me an email directly at{" "}
            <a href="mailto:hello@example.com" className="text-primary hover:underline">
              hello@example.com
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          <div className="mt-16 pt-8 border-t">
            <div className="flex items-center text-muted-foreground">
              <Mail className="mr-2 h-5 w-5" />
              <span>
                Prefer email? Reach me at{" "}
                <a href="mailto:hello@example.com" className="text-primary hover:underline">
                  hello@example.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

