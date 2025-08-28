# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React Router v7 application for Wolfe Lift Rentals, a scissor lift rental company in San Dimas, CA. The app is a bilingual (English/Spanish) landing page with SSR support built using modern web technologies.

## Development Commands

### Package Manager
- Uses pnpm (version 10.12.1+)
- Install dependencies: `pnpm install`

### Development
- Start dev server: `pnpm run dev` (runs at http://localhost:5173)
- Build for production: `pnpm run build`
- Start production server: `pnpm start`
- Type checking: `pnpm run typecheck`

## Architecture

### Tech Stack
- React Router v7 with SSR enabled
- TypeScript with strict mode
- Tailwind CSS v4 for styling
- Vite for bundling

### Project Structure
- `app/` - Main application code
  - `components/` - React components for different sections
  - `hooks/` - Custom React hooks (language management)
  - `lib/` - Utilities (i18n translations, equipment data)
  - `routes/` - React Router route components
  - `types/` - TypeScript type definitions
- `public/` - Static assets including equipment images organized by lift height (19/, 26/, 32/)

### Key Components Architecture
- `WolfeLiftLanding.tsx` - Main landing page component that orchestrates all sections
- Section-based components: `HeroSection`, `EquipmentSection`, `WhyChooseSection`, `ContactSection`, `Footer`
- `Header` with language toggle and `MobileContactBar` for mobile UX

### Internationalization
- Bilingual support (English/Spanish) using custom i18n system
- Language state managed by `useLanguage` hook
- Translations stored in `app/lib/i18n.ts`
- Language toggle available in header

### Configuration
- React Router config in `react-router.config.ts` (SSR enabled)
- TypeScript paths: `~/*` maps to `./app/*`
- Vite plugins: Tailwind CSS, React Router, and tsconfig paths

### Equipment Data
- Equipment information stored in `app/lib/equipmentData.ts`
- Images organized by equipment size in `public/` directory
- Three lift types: 19', 26', and 32' scissor lifts