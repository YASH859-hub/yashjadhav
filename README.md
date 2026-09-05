# Yash Jadhav - Portfolio

Personal portfolio for Yash Jadhav, an AI/ML engineer, researcher, and builder. The site presents selected projects, engineering capabilities, research interests, writing, experience, academics, and current work in a responsive, motion-led interface.

Live repository: [github.com/YASH859-hub/yashjadhav](https://github.com/YASH859-hub/yashjadhav)

## Highlights

- Scroll-driven two-row marquee with 12 technical categories and projects moving in opposite directions.
- Project pages for AI Code Vulnerability Detector, RepoBrain, and Nexora.
- Dedicated views for engineering, research, writing, now, resume, and contact information.
- Command palette navigation and custom cursor interactions on pointer devices.
- Responsive layouts with Tailwind CSS and Motion animations.
- Image tiles with lazy loading, grayscale treatment, hover scale, and compositor-friendly `will-change` styling.

## Tech Stack

- React 19 and TypeScript
- Vite
- React Router
- Tailwind CSS 4
- Motion for React
- Lucide React icons
- Node.js and npm

## Project Routes

| Route | Purpose |
| --- | --- |
| `/` | Portfolio home page |
| `/projects` | Project index |
| `/engineering` | Engineering principles and systems work |
| `/research` | Research interests and explorations |
| `/writing` | Writing and notes |
| `/now` | Current focus and activities |
| `/resume` | Resume overview |
| `/contact` | Contact information |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The development server runs on [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Type-check the project

```bash
npm run lint
```

## Project Structure

```text
src/
├── components/       Shared layout, navigation, cursor, palette, and sections
├── data/             Portfolio content and project data
├── pages/            Route-level page components
├── App.tsx           Application routes
├── index.css         Tailwind theme and global styles
└── main.tsx          React entry point
public/               Static public assets
```

## Content and Customization

Most portfolio content is kept in `src/data/`:

- `profile.ts` - identity, positioning, contact links, capabilities, and skills
- `projects.ts` - project descriptions, technologies, and architecture stages
- `experience.ts` - experience entries
- `research.ts` - research content
- `writing.ts` - writing entries
- `now.ts` - current focus content

Page composition lives in `src/pages/`, while reusable visual sections live in `src/components/sections/`.

## Marquee Implementation

The homepage marquee is implemented in `src/components/sections/Marquee.tsx`. It uses Motion's `useScroll` and `useTransform` hooks to map page scroll progress to horizontal translation:

- The first row moves toward the left as the user scrolls.
- The second row moves in the opposite direction.
- Each row duplicates its six items to maintain a continuous visual track.
- Tile media is lazy-loaded and the moving tracks use `will-change: transform` for smoother browser compositing.

The image URLs currently point to Unsplash-hosted source images. Replace the `image` values in the marquee data with local assets when self-hosted media is available.

## Deployment

This is a standard Vite single-page application. Build the project with `npm run build` and deploy the generated `dist/` directory to a static hosting provider such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

For deployments that use client-side routing, configure the host to serve `index.html` as the fallback for unknown routes.

## License

This repository contains personal portfolio content and project descriptions. Contact the repository owner before reusing branded content, written material, or personal information.
