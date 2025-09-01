"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Mail, Shield, Clock, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import HideV0Badge from "@/components/HideV0Badge"

export default function ComingSoonPage() {
  const currentYear = new Date().getFullYear()

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [msg, setMsg] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    {
      src: "/images/kitchen-cleaning.jpg",
      alt: "Professional kitchen cleaning services",
      title: "Kitchen Deep Clean",
    },
    {
      src: "/images/mirror-cleaning.jpg",
      alt: "Mirror and bathroom cleaning services",
      title: "Bathroom & Mirror Cleaning",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carouselImages.length])

  async function handleNotifySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = new FormData(form)

    // simple honeypot
    if ((data.get("website") as string)?.length) return

    try {
      const res = await fetch("https://formspree.io/f/myzdynpo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (res.ok) {
        setStatus("success")
        setMsg("Thanks! We'll email you when the full site is live.")
        form.reset()
      } else {
        setStatus("error")
        setMsg("Something went wrong. Please try again.")
      }
    } catch {
      setStatus("error")
      setMsg("Network error. Please try again.")
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HideV0Badge />

      <div className="relative min-h-screen flex flex-col">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Professional cleaning services"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Header with logo */}
        <header className="relative z-10 py-8 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center mb-2">
              <Image
                src="/images/zims-logo.png"
                alt="Zims Cleaning Services Ltd Logo"
                width={300}
                height={120}
                className="h-auto max-w-[300px] brightness-0 invert"
                priority
              />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 animate-in fade-in duration-1000">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Professional Cleaning Services
                </h2>
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">Website Coming Soon</div>
              </div>

              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                We're already open for bookings. Contact us today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold min-w-[200px] rounded-xl shadow-lg"
                onClick={() => window.open("https://wa.me/447886670530", "_blank")}
                aria-label="Contact us via WhatsApp"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-bold min-w-[200px] bg-transparent rounded-xl shadow-lg"
                onClick={() => (window.location.href = "mailto:bookings@zimsclean.com")}
                aria-label="Contact us via email"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </main>
      </div>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Professional Services</h3>
            <p className="text-lg text-muted-foreground">See the quality of our work</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={carouselImages[currentImageIndex].src || "/placeholder.svg"}
                alt={carouselImages[currentImageIndex].alt}
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold">{carouselImages[currentImageIndex].title}</h4>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Licensed & Insured</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">DBS-Checked Staff</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground">On-Time, Every Time</span>
              </div>
            </div>

            <p className="text-card-foreground text-center mt-6">
              Serving homeowners, landlords, offices, post-construction & Airbnb turns.
            </p>
          </Card>
        </div>
      </section>

      {/* Notify Me Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mt-12">
            <form
              onSubmit={handleNotifySubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
            >
              {/* Honeypot (hidden) */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Optional subject for your inbox */}
              <input type="hidden" name="_subject" value="Zims: Notify-me signup" />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email to get notified"
                autoComplete="email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background"
                aria-label="Email address"
                disabled={status === "loading" || status === "success"}
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-secondary text-primary-foreground font-bold px-6 py-3 rounded-lg"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "All Set ✅" : "Notify Me"}
              </Button>
            </form>

            {/* Inline feedback */}
            <p
              className={`mt-3 text-sm text-center ${status === "success" ? "text-green-600" : status === "error" ? "text-amber-600" : "text-muted-foreground"}`}
              aria-live="polite"
            >
              {status === "idle" ? "We'll only use your email for this launch update." : msg}
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Zims Cleaning Services Ltd</p>
        </div>
      </footer>
    </div>
  )
}
