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

  return (
    <div className="min-h-screen bg-background">
      <HideV0Badge />

      <div className="relative min-h-screen flex flex-col">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/kitchen-cleaning.jpg"
            alt="Professional kitchen cleaning services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/35 backdrop-blur-sm" />
        </div>

        <main className="relative z-10 flex-1 flex items-center justify-center px-4 animate-in fade-in duration-1000">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/zims-logo.png"
                alt="Zims Cleaning Services Ltd Logo"
                width={320}
                height={128}
                className="h-auto max-w-[320px]"
                priority
              />
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Professional Cleaning Services – Website Coming Soon
              </h1>

              <p className="text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                We're already open for bookings. Contact us today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold min-w-[200px] rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                onClick={() => window.open("https://wa.me/447886670530", "_blank")}
                aria-label="Contact us via WhatsApp"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-slate-200 text-slate-900 hover:bg-slate-50 px-10 py-4 text-lg font-semibold min-w-[200px] bg-white/80 backdrop-blur-sm rounded-[14px] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                onClick={() => (window.location.href = "mailto:bookings@zimsclean.com")}
                aria-label="Contact us via email"
              >
                <Mail className="mr-3 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </main>
      </div>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border border-gray-200 p-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <Shield className="h-6 w-6 text-slate-700" />
                <span className="font-medium text-slate-900 text-sm tracking-wide">Licensed & Insured</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="h-6 w-6 text-slate-700" />
                <span className="font-medium text-slate-900 text-sm tracking-wide">DBS-Checked Staff</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <Clock className="h-6 w-6 text-slate-700" />
                <span className="font-medium text-slate-900 text-sm tracking-wide">On-Time, Every Time</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/60 backdrop-blur-sm border border-gray-200 p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleNotifySubmit} className="flex gap-3">
              {/* Honeypot (hidden) */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="Zims: Notify-me signup" />

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email to get launch updates"
                autoComplete="email"
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-900 bg-white placeholder:text-slate-500"
                aria-label="Email address"
                disabled={status === "loading" || status === "success"}
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                disabled={status === "loading" || status === "success"}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "All Set ✅" : "Notify Me"}
              </Button>
            </form>

            {/* Inline feedback */}
            <p
              className={`mt-4 text-sm text-center ${status === "success" ? "text-green-600" : status === "error" ? "text-amber-600" : "text-slate-500"}`}
              aria-live="polite"
            >
              {status === "idle" ? "We'll only use your email for this launch update." : msg}
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm">© {currentYear} Zims Cleaning Services Ltd</p>
        </div>
      </footer>
    </div>
  )
}
