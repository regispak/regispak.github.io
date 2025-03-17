"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <>
      {/* Persistent Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-[10000] h-20 bg-card/95 backdrop-blur-sm shadow-sm transition-all duration-300"> */}
      <header className="fixed top-0 left-0 right-0 z-[10000] h-20 bg-gradient-to-r from-green-900 via-green-750 to-green-600 backdrop-blur-sm shadow-sm transition-all duration-300">
      {/* <header className="fixed top-0 left-0 right-0 z-[10000] h-20 bg-gradient-to-r from-green-900 via-green-700 to-green-400 animate-gradient-x backdrop-blur-sm shadow-sm transition-all duration-300"> */}
        <div className="container mx-auto h-full px-4">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-3xl font-bold font-lato pl-4 md:pl-0">
                Regis Pak
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className={cn(
                      "text-xl font-lato font-medium transition-colors hover:text-green-500 font-bold",
                      isActive(link.href)
                        ? "text-green-500 border-b-2 border-green-500"
                        : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[9990] md:hidden overflow-y-auto bg-black">
          <nav className="container mx-auto px-4 pt-4 pb-8">
            <ul className="space-y-6">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={cn(
                      "block text-2xl font-medium transition-colors hover:text-green-500 py-2 pl-4",
                      isActive(link.href)
                        ? "text-green-500 border-l-4 border-green-500 pl-2"
                        : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
