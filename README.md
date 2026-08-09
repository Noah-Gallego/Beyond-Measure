# Beyond Measure

A Next.js application for helping private-school teachers create classroom projects and connect with donors.

[![TypeScript](https://img.shields.io/badge/TypeScript-Next.js-3178C6?style=flat-square&logo=typescript&logoColor=white)](package.json)

<p align="center">
  <img src="https://skillicons.dev/icons?i=typescript,nextjs,react&theme=light" alt="TypeScript, Next.js, and React" />
</p>

## Overview

Beyond Measure presents a teacher-focused project-funding experience. The application includes project discovery, project creation, account and authentication pages, impact tracking, funding information, FAQs, contact, privacy, and terms pages.

## Features

- Teacher project creation and project management
- Browse and explore classroom projects
- Account registration and login
- Impact tracking and funding-breakdown pages
- Responsive navigation, theme support, and reusable UI components
- Committed visual assets in `public/images/`

## Tech stack

Next.js 15, React 19, TypeScript, and Tailwind CSS.

### Important libraries

- Radix UI components for accessible interface primitives
- `react-hook-form` and `zod` for form state and validation
- `recharts` for charts
- `lucide-react` for icons

## Getting started

Install dependencies with pnpm and start the development server:

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`. The package also defines `pnpm run build` and `pnpm run start`. External service configuration, if required by a deployed environment, should remain in local environment files rather than the README.

## Assets

The application references repository-relative classroom imagery and Beyond Measure logos in `public/images/`. These are existing project assets, not generated README screenshots.

## Preview

![Beyond Measure classroom hero](https://noah-readme-assets-v3.vercel.app/Beyond-Measure/asset__public__images__classroom-hero.png)

## Status and limitations

The repository contains the application source and UI assets. No verified public deployment link or license file is present in this checkout; deployment and data-service behavior should be confirmed separately.
