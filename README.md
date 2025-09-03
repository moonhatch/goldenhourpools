# Golden Hour Pools

A modern, high-performance website for Golden Hour Pools built with cutting-edge web technologies and a headless CMS architecture.

**Live Site**: [https://www.goldenhourpools.com](https://www.goldenhourpools.com)  
**Preview Site** (with Sanity overlays): [https://goldenhourpools-preview.vercel.app](https://goldenhourpools-preview.vercel.app)

## Overview

This project showcases a sophisticated pool company website featuring dynamic content management, advanced analytics integration, and a component-based architecture. The site demonstrates modern web development practices including server-side rendering, progressive enhancement, and comprehensive third-party integrations.

## Architecture

### Monorepo Structure

```
goldenhourpools/
├── remix/          # Frontend application (Remix + React)
├── studio/         # Sanity CMS studio
├── package.json    # Workspace configuration
└── LICENSE         # Proprietary license
```

### Technical Architecture

- **Frontend**: Remix framework with React 18 and TypeScript
- **Content Management**: Sanity headless CMS with custom studio
- **Styling**: Tailwind CSS v4 (beta) with custom component system
- **Deployment**: Vercel with optimized build configuration
- **Analytics**: Multi-platform tracking and conversion optimization

### Key Architectural Decisions

- **Server-Side Rendering**: Remix provides optimal SEO and performance
- **Component-Based Design**: Modular block system for flexible page building
- **Headless CMS**: Sanity enables content flexibility and live preview
- **Monorepo**: Unified development experience across frontend and CMS

## Technology Stack

### Frontend (`/remix`)

- **Framework**: Remix v2.15.2 (React-based full-stack framework)
- **Runtime**: Node.js 22+
- **Language**: TypeScript 5.1.6
- **Styling**: Tailwind CSS v4.0.0-beta with custom configuration
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite 5.1.0 with optimized configuration

### Content Management (`/studio`)

- **CMS**: Sanity v3.99.0 with custom schemas
- **Studio**: React 19 with styled-components
- **Content Types**: 15+ custom schema types for flexible content modeling

### Third-Party Integrations

- **Analytics**: Google Analytics 4, Google Tag Manager, Crazy Egg
- **Marketing**: Klaviyo email marketing integration
- **Booking**: Calendly and Zoho booking systems
- **Forms**: Zoho Forms with custom message handling
- **Project Management**: Asana API integration
- **Tracking**: Linear project management ([View Project Board](https://linear.app/golden-hour-pools/project/website-42c559ae1281/issues?layout=board&ordering=priority&grouping=workflowState&subGrouping=none&showCompletedIssues=all&showSubIssues=true&showTriageIssues=false))

## Features & Components

### Dynamic Page Builder

The site features a flexible page builder system with 10+ content block types:

- **Hero Blocks**: Image and video hero sections with CTAs
- **Content Blocks**: Rich text with portable text rendering
- **Pool Showcase**: Grid and slider layouts for pool galleries
- **Contact Forms**: Integrated Zoho form handling
- **FAQ System**: Structured data with accordion UI
- **Media Blocks**: Responsive image and video components
- **Booking Integration**: Calendly and Zoho booking widgets
- **Gallery Blocks**: Multi-column responsive galleries
- **Thank You Pages**: Conversion tracking and follow-up

### Advanced Features

- **UTM Parameter Tracking**: Automatic capture and storage
- **Live Visual Editing**: Sanity's visual editing in preview mode
- **SEO Optimization**: Dynamic meta tags and structured data
- **Performance Optimization**: Image optimization and lazy loading
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Cache Management**: Strategic caching for optimal performance

## Project Structure

### Frontend Structure (`/remix`)

```
app/
├── components/          # Reusable components
│   ├── blocks/          # Page builder components
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── routes/              # Remix routes
├── sanity/              # Sanity client and queries
└── styles/              # Global styles and fonts
```

### Key Components

- **Page Builder**: Dynamic component rendering system
- **Block Components**: Modular content blocks (Hero, Gallery, Contact, etc.)
- **UI Components**: Radix-based design system components
- **Layout System**: Responsive container and grid components

### CMS Structure (`/studio`)

```
schemas/
├── pageType.ts          # Page content model
├── blockTypes/          # Content block schemas
├── poolType.ts          # Pool showcase model
└── seoType.ts           # SEO metadata model
```

## Integrations

### Analytics & Tracking

- **Google Analytics 4**: Comprehensive user behavior tracking
- **Google Tag Manager**: Centralized tag management
- **Crazy Egg**: Heatmap and user session recording
- **UTM Tracking**: Campaign attribution and conversion tracking

### Marketing & CRM

- **Asana**: Contact form API submission
- **Klaviyo**: Email marketing automation and segmentation
- **Zoho Forms**: Lead capture with custom validation
- **Zoho Booking**: Appointment scheduling integration

### Development & Project Management

- **Sanity**: Headless CMS with live preview capabilities
- **Linear**: Issue tracking and project planning
- **Vercel**: Deployment platform with edge optimization

## Getting Started

### Prerequisites

- Node.js 22.0.0 or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd goldenhourpools
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Copy environment files and configure:

   ```bash
   cp remix/.env.example remix/.env
   cp studio/.env.example studio/.env
   ```

   Required environment variables:
   - `SANITY_STUDIO_PROJECT_ID`: Sanity project ID
   - `SANITY_STUDIO_DATASET`: Sanity dataset name
   - `SANITY_STUDIO_URL`: Studio URL for live preview
   - Analytics IDs for Google Analytics, GTM, etc.

4. **Start Development**

   ```bash
   npm run dev
   ```

   This starts both the Remix app (port 3000) and Sanity Studio concurrently.

### Development Workflow

1. **Frontend Development**: Work in `/remix` directory
2. **Content Modeling**: Modify schemas in `/studio/schemas`
3. **Component Development**: Create blocks in `/remix/app/components/blocks`
4. **Styling**: Use Tailwind classes with custom design tokens

### Build & Deployment

1. **Build Verification**

   ```bash
   npm run build
   npm run build:verify  # Verifies all assets are generated
   ```

2. **Production Build**

   ```bash
   cd remix && npm run build
   ```

3. **Deployment**
   - Automatic deployment via Vercel on push to main branch
   - Custom `vercel.json` configuration for optimal performance
   - Build verification ensures asset integrity

## Development Highlights

### Performance Optimizations

- **Server-Side Rendering**: Remix provides optimal initial page loads
- **Image Optimization**: Sanity CDN with responsive image generation
- **Code Splitting**: Automatic route-based code splitting
- **Caching Strategy**: Strategic cache headers for HTML and assets

### Code Quality

- **TypeScript**: Full type safety across the application
- **ESLint & Prettier**: Consistent code formatting and linting
- **Component Architecture**: Reusable, composable component design
- **Error Boundaries**: Comprehensive error handling and recovery

### Production Reliability

- **Build Verification**: Custom script ensures build integrity
- **Deployment Fixes**: Documented solutions for production issues
- **Cache Management**: Prevents stale asset loading issues
- **Error Monitoring**: Comprehensive error tracking and resolution

## Architecture Decisions

### Why Remix?

- **Full-Stack Framework**: Unified frontend and backend in one framework
- **Web Standards**: Built on web fundamentals (HTTP, HTML, CSS)
- **Performance**: Optimal loading with progressive enhancement
- **SEO**: Server-side rendering with dynamic meta tag generation

### Why Sanity?

- **Developer Experience**: Excellent TypeScript support and tooling
- **Content Flexibility**: Portable text and flexible schema design
- **Live Preview**: Real-time content editing with visual feedback
- **Scalability**: Robust CDN and API performance

### Why Monorepo?

- **Unified Development**: Single repository for frontend and CMS
- **Shared Dependencies**: Consistent tooling across workspaces
- **Simplified Deployment**: Coordinated releases and versioning

This project demonstrates modern web development practices, sophisticated third-party integrations, and production-ready architecture suitable for high-traffic commercial websites.
