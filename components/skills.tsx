"use client"

import { useState } from "react"
import { Code, Server, Database, Cloud, Shield, Monitor, HardDrive, Layers, Terminal, GitBranch, X } from "lucide-react"

const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    icon: Code,
    description: "Building modern applications with type-safe languages and frameworks for web and mobile platforms.",
    tools: ["Javascript/Typescript", "Python", "Kotlin", "Java", "React"],
  },
  {
    id: "virtualization",
    name: "Virtualization",
    icon: Server,
    description:
      "Designing high-performance virtualization systems using enterprise hypervisors for optimal resource utilization.",
    tools: ["VMware ESXi", "Proxmox", "KVM", "Nutanix", "Hyper-V", "Maipu HCI"],
  },
  {
    id: "storage",
    name: "Storage",
    icon: HardDrive,
    description: "Managing enterprise storage solutions with focus on performance, redundancy, and data integrity.",
    tools: ["Huawei", "QNAP", "Synology", "Pure Storage", "Rubrik"],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: Layers,
    description: "Developing scalable applications using modern frameworks for backend and frontend development.",
    tools: ["NestJS", "NextJS", "Jetpack Compose", "Quarkus", "ExpressJS", "QT Quick"],
  },
  {
    id: "devops",
    name: "DevOps & CI/CD",
    icon: GitBranch,
    description: "Automating deployment pipelines and infrastructure management with modern DevOps practices.",
    tools: ["Github Actions", "Gitlab CI", "Google Cloud Build", "Kubernetes", "Terraform"],
  },
  {
    id: "monitoring",
    name: "Monitoring",
    icon: Monitor,
    description: "Implementing comprehensive monitoring solutions for infrastructure and application performance.",
    tools: ["Solarwind", "Zabbix", "Grafana", "Elastic Stack", "Wazuh"],
  },
  {
    id: "cloud",
    name: "Cloud Platform",
    icon: Cloud,
    description: "Architecting cloud-native solutions across multiple cloud providers with best practices.",
    tools: ["Google Cloud Platform", "AWS", "Alibaba Cloud"],
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
    description: "Designing and managing relational and NoSQL databases for scalable data persistence.",
    tools: ["Firebase/Firestore", "Redis", "Postgres", "Neo4j", "MySQL", "SQLite"],
  },
  {
    id: "os",
    name: "Operating Systems",
    icon: Terminal,
    description: "Administering Linux and Windows server environments with security and performance optimization.",
    tools: ["Ubuntu", "CentOS/RHEL", "SLES", "Windows Server"],
  },
  {
    id: "backup",
    name: "Backup & DR",
    icon: Shield,
    description: "Implementing disaster recovery infrastructure with industry best-practices for business continuity.",
    tools: ["Veeam Backup & Replication", "Huawei", "DR Concepts"],
  },
]

export default function Skills() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section
      id="skills"
      className="min-h-screen lg:h-screen px-4 sm:px-6 bg-background flex items-center py-16 lg:py-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-6 lg:mb-8">
          <div className="inline-block mb-3 sm:mb-4 px-3 py-1 bg-accent/10 rounded-full text-xs sm:text-sm text-primary font-medium">
            Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Skills & Technologies</h2>
          <p className="text-foreground/60 text-xs sm:text-sm max-w-xl">
            Click on each category to explore my expertise and tools.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 auto-rows-auto">
          {skillCategories.map((skill) => {
            const Icon = skill.icon
            const isActive = activeCard === skill.id
            const isHovered = hoveredCard === skill.id && !isActive

            return (
              <div
                key={skill.id}
                className={`
                  relative bg-card rounded-xl border overflow-hidden
                  cursor-pointer transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "col-span-2 row-span-2 border-primary/40 shadow-lg"
                      : "border-accent/10 hover:border-accent/30"
                  }
                `}
                onClick={() => setActiveCard(isActive ? null : skill.id)}
                onMouseEnter={() => setHoveredCard(skill.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {!isActive && (
                  <div className="p-4 lg:p-5 flex flex-col items-center justify-center gap-2 text-center min-h-[100px] lg:min-h-[120px]">
                    {/* Hover hint overlay */}
                    <div className="flex items-center justify-center rounded-lg bg-accent/10 text-primary w-10 h-10 lg:w-12 lg:h-12">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <h3 className="font-medium text-foreground text-xs lg:text-sm">{skill.name}</h3>

                    <span
                      className={`
                        text-[10px] text-primary/70 transition-opacity duration-200
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      Click to explore
                    </span>
                  </div>
                )}

                {isActive && (
                  <div className="p-4 lg:p-6 h-full flex flex-col">
                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveCard(null)
                      }}
                      className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-accent/10 text-foreground/60 hover:text-foreground transition-colors z-10"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Header with icon and name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center rounded-lg bg-primary/10 text-primary w-10 h-10 lg:w-12 lg:h-12">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground text-base lg:text-lg">{skill.name}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 text-xs lg:text-sm mb-4 leading-relaxed flex-grow">
                      {skill.description}
                    </p>

                    {/* Tools */}
                    <div>
                      <p className="text-xs font-medium text-primary mb-2">Tools & Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 text-[10px] lg:text-xs bg-accent/10 text-foreground/80 rounded-md border border-accent/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile hint */}
        <p className="text-center text-foreground/40 text-xs mt-4 lg:hidden">
          {activeCard ? "Tap another card or X to close" : "Tap on a card to see details"}
        </p>
      </div>
    </section>
  )
}
