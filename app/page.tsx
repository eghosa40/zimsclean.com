"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Mail, Shield, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import HideV0Badge from "@/components/HideV0Badge"

export default function ComingSoonPage() {
  const currentYear = new Date().getFullYear()

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [msg, setMsg] = useState("")

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
        setMsg("Thanks! We’ll email you when the full site is live.")
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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HideV0Badge />

      <header className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/images/zims-logo.png"
              alt="Zims Cleaning Services Ltd Logo"
              width={300}
              height={120}
              className="h-auto max-w-[300px]"
              priority
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Professional Cleaning Services
              </h2>
              <div className="text-lg md:text-xl font-bold text-primary">Website Coming Soon</div>
            </div>

            <p className="text-xl text-card-foreground max-w-2xl mx-auto leading-relaxed">
              We're already open for bookings. Contact us today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-lg font-bold min-w-[200px] rounded-xl"
              onClick={() => window.open("https://wa.me/447886670530", "_blank")}
              aria-label="Contact us via WhatsApp"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-bold min-w-[200px] bg-background rounded-xl"
              onClick={() => (window.location.href = "mailto:bookings@zimsclean.com")}
              aria-label="Contact us via email"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>

          <Card className="bg-card border-border p-8 max-w-3xl mx-auto rounded-xl shadow-sm">
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

          {/* Notify Me Form */}
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
              {status === "idle" ? "We’ll only use your email for this launch update." : msg}
            </p>
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Zims Cleaning Services Ltd</p>
        </div>
      </footer>
    </div>
  )
}
