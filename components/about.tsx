"use client"

import { Server, Award, Briefcase, GraduationCap } from "lucide-react"

export default function About() {
  const stats = [
    { number: "10+", label: "Certifications", icon: Award },
    { number: "2+", label: "Work Experience", icon: Briefcase },
    { number: "3.60", label: "GPA", icon: GraduationCap },
    { number: "5+", label: "Projects", icon: Server },
  ]

  return (
    <section
      id="about"
      className="min-h-screen lg:h-screen px-4 sm:px-6 lg:px-8 bg-background flex items-center py-16 lg:py-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left content */}
          <div>
            <div className="inline-block mb-4 lg:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-xs sm:text-sm text-primary font-medium">
              • About Me
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              System Engineer{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                & Fresh Graduate
              </span>
            </h2>

            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                Bachelor of Applied Computer Science from{" "}
                <span className="font-semibold text-primary">Jakarta State Polytechnic</span> with expertise in
                deploying and maintaining enterprise ICT infrastructure.
              </p>
              <p className="hidden sm:block text-sm lg:text-base text-foreground/70 leading-relaxed">
                Currently working as a <span className="text-primary font-medium">System Engineer</span> at Nusa Network
                Prakarsa, leading development of internal resources management and ensuring reliable operations with{" "}
                <span className="text-accent font-medium">best-practices and compliance standards</span>.
              </p>
              <p className="hidden md:block text-sm lg:text-base text-foreground/70 leading-relaxed">
                Certified in <span className="text-primary font-medium">Nutanix</span>,{" "}
                <span className="text-accent font-medium">Huawei</span>,{" "}
                <span className="text-primary font-medium">Oracle Cloud</span>, and more.
              </p>
            </div>

            <div className="flex gap-3 flex-col sm:flex-row">
              <a
                href="#projects"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm text-center"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-primary/30 text-foreground rounded-full font-semibold hover:bg-accent/5 transition-all duration-300 text-sm text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-accent/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-all duration-300 mb-2 sm:mb-3 lg:mb-4">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <p className="text-xs sm:text-sm text-foreground/60 font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
