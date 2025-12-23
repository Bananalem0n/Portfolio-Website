"use client"

import { ExternalLink, Github, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
}

// Fallback images for projects
const projectImages = [
  "/task-management-dashboard.png",
  "/design-system-components.png",
  "/ecommerce-website-interface.png",
]

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Bananalem0n/repos?sort=pushed&per_page=6"
        )
        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data: GitHubRepo[] = await response.json()
        // Filter out the profile README repo
        const filteredRepos = data.filter((repo) => repo.name !== "Bananalem0n")
        setRepos(filteredRepos.slice(0, 3))
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const formatRepoName = (name: string) => {
    return name
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Generate tags from language and topics
  const getTags = (repo: GitHubRepo) => {
    const tags: string[] = []
    if (repo.language) tags.push(repo.language)
    if (repo.topics) tags.push(...repo.topics.slice(0, 5))
    return tags.length > 0 ? tags : ["Project"]
  }

  return (
    <section id="projects" className="min-h-screen lg:h-screen px-4 sm:px-6 bg-card/30 flex items-center py-16 lg:py-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-6 lg:mb-10">
          <div className="inline-block mb-2 sm:mb-3 px-3 py-1 bg-accent/10 rounded-full text-xs sm:text-sm text-primary font-medium">
            My Projects
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Featured Projects</h2>
          <p className="text-foreground/60 text-xs sm:text-sm">Recent work showcasing my expertise.</p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {repos.map((repo, index) => (
              <div
                key={repo.id}
                className="group bg-background rounded-lg border border-accent/10 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 flex flex-col"
              >
                <div className="relative overflow-hidden rounded-lg h-32 sm:h-36 lg:h-40 mb-3">
                  <img
                    src={projectImages[index % projectImages.length] || "/placeholder.svg"}
                    alt={formatRepoName(repo.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1">
                    {formatRepoName(repo.name)}
                  </h3>
                  <p className="text-foreground/70 mb-2 sm:mb-3 text-xs leading-relaxed flex-1">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    {getTags(repo).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 sm:px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 sm:py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
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
        )}
      </div>
    </section>
  )
}
