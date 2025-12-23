import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Core metadata
  title: {
    default: "Ukasyah Dewastoro | System Engineer & Cloud Enthusiast",
    template: "%s | Ukasyah Dewastoro",
  },
  description:
    "System Engineer specializing in virtualization, cloud infrastructure, and Cloud Technology. I deploy and maintain enterprise ICT infrastructure with best-practices and compliance standards.",
  keywords: [
    "Ukasyah Dewastoro",
    "System Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Cloud Infrastructure",
    "Virtualization",
    "ICT Infrastructure",
    "Fresh Graduate",
    "Jakarta State Polytechnic",
    "Nutanix Certified",
    "Oracle Cloud",
    "Huawei Certified",
    "VMware",
    "Proxmox",
    "Kubernetes",
    "Docker",
    "Network Engineer",
    "Indonesia",
    "sodachi.dev",
  ],
  authors: [{ name: "Ukasyah Dewastoro" }],
  creator: "Ukasyah Dewastoro",
  publisher: "Ukasyah Dewastoro",

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ukasyah Dewastoro Portfolio",
    title: "Ukasyah Dewastoro | System Engineer & DevOps Specialist",
    description:
      "System Engineer specializing in virtualization, cloud infrastructure, and DevOps. Explore my portfolio and professional experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ukasyah Dewastoro - System Engineer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ukasyah Dewastoro | System Engineer & DevOps Specialist",
    description:
      "System Engineer specializing in virtualization, cloud infrastructure, and DevOps.",
    images: ["/og-image.png"],
    creator: "@ukasyahnata",
  },

  // Icons & Favicon
  icons: {
    icon: [
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon-512x512.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon-512x512.png",
  },

  // App manifest
  manifest: "/manifest.json",

  // Verification (add your actual verification codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // Category
  category: "technology",
}

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
