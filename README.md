# Portfolio - Ukasyah Dewastoro

A modern, minimalist portfolio website built with Next.js 16 and Tailwind CSS v4. Features smooth scroll snapping, premium animations, and a warm paper-like color palette.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)

## ✨ Features

- **Modern Design** - Warm, paper-like color palette with premium aesthetics
- **Dark Mode Support** - Seamless theme switching with `next-themes`
- **Scroll Snapping** - Smooth section-based navigation on desktop
- **Dynamic Animations** - Floating orbs, sliding lines, and subtle particle effects
- **Responsive Layout** - Optimized for mobile, tablet, and desktop
- **Component Library** - Built with Radix UI primitives and shadcn/ui

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| UI Components | Radix UI + shadcn/ui |
| Language | TypeScript 5 |
| Animations | CSS Keyframes + tw-animate-css |
| Icons | Lucide React |
| Package Manager | Bun |

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-gg

# Install dependencies
bun install

# Start development server
bun dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
# Create production build
bun run build

# Start production server
bun start
```

## 📁 Project Structure

```
portfolio-gg/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles & Tailwind config
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Main page composition
├── components/             # React components
│   ├── ui/                 # shadcn/ui components
│   ├── hero.tsx            # Hero section with animations
│   ├── about.tsx           # About section
│   ├── projects.tsx        # Projects showcase
│   ├── skills.tsx          # Skills & technologies
│   ├── contact.tsx         # Contact information
│   ├── navigation.tsx      # Header navigation
│   └── theme-provider.tsx  # Dark mode provider
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional stylesheets
```

## 🎨 Design System

The portfolio uses a **warm, paper-like color palette** with OKLCH colors for better color perception:

- **Light Mode**: Warm cream backgrounds with terracotta accents
- **Dark Mode**: Deep warm grays with muted orange highlights

### Key Colors

| Token | Description |
|-------|-------------|
| `--primary` | Terracotta/coral accent |
| `--secondary` | Warm peach tones |
| `--accent` | Soft orange highlights |
| `--background` | Paper-like cream/warm gray |

## 🧩 Key Sections

1. **Hero** - Introduction with animated background effects
2. **About** - Personal introduction and background
3. **Skills** - Technical skills and technologies
4. **Projects** - Portfolio of work and projects
5. **Contact** - Contact information and links

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start development server |
| `bun build` | Create production build |
| `bun start` | Start production server |
| `bun lint` | Run ESLint |

## 🔧 Configuration

### IDE Setup

This project uses Tailwind CSS v4 which introduces new CSS directives (`@theme`, `@custom-variant`, etc.). To suppress IDE warnings:

- **VS Code**: The project includes `.vscode/settings.json` with proper CSS validation settings
- **WebStorm/IntelliJ**: Enable Tailwind CSS plugin and update CSS dialect settings

## 📄 License

This project is for personal portfolio purposes.

---

Built with Nextjs by Ukasyah Dewastoro
