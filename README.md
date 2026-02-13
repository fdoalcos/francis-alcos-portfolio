# Francis Alcos Portfolio

A modern, dark-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a terminal/code editor aesthetic with responsive design for all devices.

## Features

- **6 Main Sections**: Home, About, Experience, Portfolio, Mindset, Contact
- **Dark Theme**: Terminal-inspired design with high contrast
- **Fully Responsive**: Mobile-first approach with breakpoints for tablet and desktop
- **Smooth Animations**: Scrolling keywords, hover effects, and transitions
- **Optimized Images**: Next.js Image component for optimal performance
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Space Grotesk (display), JetBrains Mono (mono)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be live at `https://your-project.vercel.app`

### Manual Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   ├── page.tsx       # Home page
│   ├── about/         # About page
│   ├── experience/    # Experience page
│   ├── portfolio/    # Portfolio page
│   ├── mindset/       # Mindset page
│   ├── contact/       # Contact page
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScrollingKeywords.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ProjectCard.tsx
│   └── StatusWidget.tsx
├── data/              # Data files
│   ├── experience.ts
│   ├── portfolio.ts
│   └── mindset.ts
└── public/            # Static assets
```

## Customization

### Update Content

- **Experience**: Edit `data/experience.ts`
- **Portfolio Projects**: Edit `data/portfolio.ts`
- **Mindset Principles**: Edit `data/mindset.ts`

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Update Contact Information

Edit `app/contact/page.tsx` to update email, GitHub, and LinkedIn links.

## License

MIT
