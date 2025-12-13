"use client"

import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Sliding horizontal lines */}
        <div className="absolute top-1/4 left-0 w-full h-px overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[slideRight_8s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-1/3 left-0 w-full h-px overflow-hidden">
          <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-[slideRight_12s_ease-in-out_infinite_2s]" />
        </div>
        <div className="absolute top-1/2 left-0 w-full h-px overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[slideRight_10s_ease-in-out_infinite_4s]" />
        </div>
        <div className="absolute top-2/3 left-0 w-full h-px overflow-hidden">
          <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[slideRight_9s_ease-in-out_infinite_1s]" />
        </div>
        <div className="absolute top-3/4 left-0 w-full h-px overflow-hidden">
          <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/25 to-transparent animate-[slideRight_11s_ease-in-out_infinite_3s]" />
        </div>

        {/* Sliding vertical lines */}
        <div className="absolute left-1/4 top-0 w-px h-full overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-primary/25 to-transparent animate-[slideDown_10s_ease-in-out_infinite_1s]" />
        </div>
        <div className="absolute left-1/2 top-0 w-px h-full overflow-hidden">
          <div className="w-full h-1/4 bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-[slideDown_12s_ease-in-out_infinite_3s]" />
        </div>
        <div className="absolute left-3/4 top-0 w-px h-full overflow-hidden">
          <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-[slideDown_8s_ease-in-out_infinite_5s]" />
        </div>

        {/* Animated gradient orbs with glow effect */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/8 animate-[float_20s_ease-in-out_infinite] animate-[glowPulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/6 animate-[floatReverse_25s_ease-in-out_infinite] animate-[glowPulse_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-secondary/4 blur-3xl animate-[pulse_15s_ease-in-out_infinite]" />

        {/* Accent particles */}
        <div className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-primary/40 blur-sm animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 rounded-full bg-accent/50 blur-sm animate-[floatReverse_15s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-[25%] right-[35%] w-1 h-1 rounded-full bg-primary/60 blur-sm animate-[float_18s_ease-in-out_infinite_3s]" />
        <div className="absolute top-[40%] left-[70%] w-2 h-2 rounded-full bg-accent/35 blur-sm animate-[floatReverse_14s_ease-in-out_infinite_2s]" />
      </div>

      <div className="hidden sm:block absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-6 py-20 lg:py-0">
        <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full border border-accent/20">
          <p className="text-xs sm:text-sm font-medium text-primary">Fresh Graduate & System Engineer</p>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
          Hi, I'm <span className="text-primary">Ukasyah Dewastoro</span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-6 sm:mb-8 text-balance leading-relaxed px-2">
          System Engineer specializing in virtualization, cloud infrastructure, and DevOps. I deploy and maintain
          enterprise ICT infrastructure with best-practices and compliance standards.
        </p>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
        >
          Explore My Work
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>

      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-foreground/40" />
      </div>
    </section>
  )
}
