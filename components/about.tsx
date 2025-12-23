"use client"

import { Server, Award, Briefcase, Monitor } from "lucide-react"

export default function About() {
  const stats = [
    {
      number: "15+",
      label: "Certifications",
      icon: Award,
      description: "Nutanix, Huawei, Oracle Cloud, — Qualified for enterprise deployments.",
    },
    {
      number: "3+",
      label: "Work Experience",
      icon: Briefcase,
      description: "Hands-on with cloud platform, servers, and client infrastructure.",
    },
    {
      number: "40+",
      label: "Servers Managed",
      icon: Monitor,
      description: "Manage production workloads on ESXi, Proxmox & AHV with centralized management.",
    },
    {
      number: "10+",
      label: "Projects",
      icon: Server,
      description: "From internal tools to client-facing automation systems.",
    },
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
              About Me
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Building Scalable Infrastructure
              </span>
            </h2>

            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                Junior{" "}
                <span className="font-semibold text-primary">
                  System Engineer and Tinkerer
                </span>{" "}
                with a passion for modernizing enterprise infrastructure through automation. I build the tools that
                simplify their operations and management.
              </p>
              <p className="hidden sm:block text-sm lg:text-base text-foreground/70 leading-relaxed">
                Currently a <span className="text-primary font-medium">System Engineer</span>{" "}
                at Nusa Network Prakarsa, I bridge the gap between operations and development
                to optimize client ICT infrastructure. I'm now seeking new challenges focused on{" "}
                <span className="font-medium text-primary">Cloud and DevOps</span>.
              </p>
              <p className="hidden md:block text-sm lg:text-base text-foreground/70 leading-relaxed">
                Certified in <span className="text-primary font-medium">Nutanix</span>,{" "}
                <span className="text-primary font-medium">Huawei</span>,{" "}
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

          {/* Right stats grid with hover reveal */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-accent/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-primary/30 transition-all duration-300 overflow-hidden h-[120px] sm:h-[140px] lg:h-[160px]"
                >
                  {/* Front content */}
                  <div className="transition-opacity duration-300 group-hover:opacity-0">
                    <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg sm:rounded-xl mb-2 sm:mb-3 lg:mb-4">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <p className="text-xs sm:text-sm text-foreground/60 font-medium">{stat.label}</p>
                  </div>

                  {/* Back content (hover reveal) */}
                  <div className="absolute inset-0 p-3 sm:p-4 lg:p-5 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center">
                    <div className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary/15 rounded-lg mb-2">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">{stat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

