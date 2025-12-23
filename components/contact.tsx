"use client"

import { Mail, Linkedin, Github, Globe } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Mail, href: "mailto:ukasyahnata@outlook.com", label: "ukasyahnata@outlook.com" },
    { icon: Linkedin, href: "https://linkedin.com/in/ukasyahnata", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Bananalem0n", label: "GitHub" },
    // { icon: Globe, href: "https://sodachi.dev", label: "sodachi.dev" }, // Disabled - blog not ready yet
  ]

  return (
    <section id="contact" className="min-h-screen lg:h-screen px-4 sm:px-6 bg-card/30 flex items-center py-16 lg:py-0">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-6 lg:mb-10">
          <div className="inline-block mb-3 sm:mb-4 px-3 py-1 bg-accent/10 rounded-full text-xs sm:text-sm text-primary font-medium">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Let's Work Together</h2>
          <p className="text-foreground/60 text-xs sm:text-sm max-w-md mx-auto">
            Have a project in mind? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-accent/10 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 sm:py-2.5 bg-card border border-accent/10 rounded-lg focus:outline-none focus:border-accent/40 transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 sm:py-2.5 bg-card border border-accent/10 rounded-lg focus:outline-none focus:border-accent/40 transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground">Message</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 sm:py-2.5 bg-card border border-accent/10 rounded-lg focus:outline-none focus:border-accent/40 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 text-sm"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Connect With Me</h3>
              <p className="text-foreground/60 mb-4 sm:mb-6 text-xs sm:text-sm">
                Feel free to reach out through any of these channels.
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 sm:gap-3 text-foreground/70 hover:text-primary transition-colors group text-xs sm:text-sm"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-accent/10 mt-4 sm:mt-6">
              <p className="text-xs text-foreground/50">© 2025 Ukasyah Dewastoro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
