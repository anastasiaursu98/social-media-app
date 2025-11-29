# StoryLine

A modern social media platform for sharing stories and connecting with users worldwide. Built with Next.js and TypeScript, StoryLine provides a seamless experience for content sharing, user profiles, and social interactions.

## Live Site

The application is hosted and available at: **https://story-line-app.vercel.app/**

## Overview

StoryLine is a full-stack social media application that enables users to create accounts, share content, manage profiles, and interact with other users. The platform features a modern, responsive design with a focus on user experience and performance.

## Features

- **User Authentication**: Secure authentication system with email/password and OAuth support (Google, Facebook)
- **User Profiles**: Comprehensive profile management with customizable avatars, statistics, and story highlights
- **Social Feed**: Content discovery and interaction features
- **Story Highlights**: Create and organize story highlights on user profiles
- **Responsive Design**: Fully responsive interface optimized for desktop, tablet, and mobile devices
- **Real-time Features**: Notifications and activity tracking capabilities

## Technology Stack

### Core Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Build Tool**: Next.js built-in bundler

### Libraries and Tools

- **UI Components**: shadcn/ui, Radix UI primitives
- **Form Management**: React Hook Form with Zod schema validation
- **State Management**: Zustand
- **Authentication**: NextAuth.js v5 (beta)
- **Icons**: Lucide React, React Icons
- **Typography**: Google Fonts (Roboto, Kaushan Script)
- **Code Quality**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager
- Git (for cloning the repository)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd social-media-app
```

2. Install project dependencies:

```bash
npm install
```

3. Configure environment variables:

   - Create a `.env.local` file in the root directory
   - Add required environment variables (database URLs, API keys, OAuth credentials, etc.)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Create an optimized production build
- `npm run start` - Start the production server (requires build first)
- `npm run lint` - Run ESLint to analyze code quality and catch errors

## Project Structure

```
social-media-app/
├── app/                    # Next.js App Router directory
│   ├── auth/              # Authentication routes (login, register)
│   ├── profile/           # User profile pages
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── shared/           # Shared/common components
│   └── ui/               # shadcn/ui component library
├── features/             # Feature-based modules
│   ├── auth/            # Authentication feature module
│   │   ├── components/  # Auth-related components
│   │   ├── hooks/       # Custom authentication hooks
│   │   ├── services/    # API service functions
│   │   ├── store/       # State management
│   │   └── types/       # TypeScript type definitions
│   ├── profile/         # Profile feature module
│   └── post/            # Post feature module
├── layouts/             # Layout components
│   ├── auth/           # Authentication layout
│   ├── header/         # Header component
│   ├── footer/         # Footer component
│   ├── sidebar/        # Sidebar navigation
│   └── LayoutWrapper.tsx # Main layout wrapper
├── lib/                 # Utility functions and helpers
├── constants/           # Application constants and routes
├── public/              # Static assets (images, icons, etc.)
├── middleware.ts        # Next.js middleware
└── package.json         # Project dependencies and scripts
```

## Design System

The application implements a cohesive design system with the following characteristics:

- **Color Scheme**: Purple to pink gradient theme for branding and accents
- **Typography**: Custom font pairing using Roboto for body text and Kaushan Script for branding
- **Layout**: Responsive grid system optimized for various screen sizes
- **Components**: Consistent component library built on Radix UI primitives
- **Animations**: Smooth transitions and micro-interactions for enhanced UX

## Authentication

The application implements a comprehensive authentication system:

- **Email/Password Authentication**: Traditional login and registration flow
- **OAuth Integration**: Support for Google and Facebook authentication
- **Session Management**: Secure session handling via NextAuth.js
- **Protected Routes**: Middleware-based route protection
- **Form Validation**: Client and server-side validation using Zod schemas

## Development

### Code Style

- TypeScript strict mode enabled
- ESLint configuration following Next.js best practices
- Component-based architecture with feature modules
- Custom hooks for reusable logic

### Best Practices

- Server and client components clearly separated
- Type-safe API calls and data handling
- Responsive design with mobile-first approach
- Accessibility considerations in component design

## Deployment

The application is deployed on Vercel, providing:

- Automatic deployments from Git repository
- Optimized production builds with Next.js
- Global CDN distribution for fast content delivery
- Environment variable management
- Edge function support

### Deployment Process

1. Push code to the main branch of your Git repository
2. Connect the repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push or manually trigger deployments

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Documentation

### External Resources

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js framework documentation
- [Next.js Learn](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework guide
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library documentation
- [React Hook Form Documentation](https://react-hook-form.com/) - Form library documentation
- [Zod Documentation](https://zod.dev/) - TypeScript-first schema validation

## License

This project is private and proprietary. All rights reserved.

---

Built with Next.js and modern web technologies.
