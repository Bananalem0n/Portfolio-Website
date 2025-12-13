"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce with seamless checkout.",
    image: "/ecommerce-website-interface.png",
    tags: ["Next.js", "Stripe"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 2,
    title: "Task Management",
    description: "Collaborative tool with real-time updates.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 3,
    title: "Design System",
    description: "Component library for enterprise apps.",
    image: "/design-system-components.png",
    tags: ["React", "TypeScript"],
    links: { demo: "#", github: "#" },
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen lg:h-screen px-4 sm:px-6 bg-card/30 flex items-center py-16 lg:py-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-6 lg:mb-10">
          <div className="inline-block mb-2 sm:mb-3 px-3 py-1 bg-accent/10 rounded-full text-xs sm:text-sm text-primary font-medium">
            Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-foreground/60 text-xs sm:text-sm">Recent work showcasing my expertise.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-lg border border-accent/10 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-lg h-32 sm:h-36 lg:h-40 mb-3">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-foreground/70 mb-2 sm:mb-3 text-xs leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 sm:px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-1 px-2 py-1 sm:py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View
                  </a>
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-1 px-2 py-1 sm:py-1.5 border border-accent/20 text-foreground rounded text-xs font-medium hover:bg-accent/5 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
