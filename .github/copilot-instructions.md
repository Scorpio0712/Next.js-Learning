# AI Agent Instructions for next-css-design

## Project Overview
This is a Next.js 16 learning project focused on CSS styling approaches, using TypeScript and the App Router. It demonstrates CSS Modules alongside traditional CSS files, with Tailwind CSS v4 available but minimally utilized.

## Architecture & Structure

### Component Organization (Note: Typo in Path)
- Components live in `app/componenets/` (note the misspelling - maintain consistency)
- Each component has its own directory with co-located CSS Module: `button/button.tsx` + `button/button.module.css`
- Shared layout components ([header.tsx](app/componenets/header/header.tsx), [footer.tsx](app/componenets/footer/footer.tsx)) are rendered in [layout.tsx](app/layout.tsx) and wrap all pages

### Route Pages Structure
- [app/page.tsx](app/page.tsx) - Home page, imports `./style/home.css`
- [app/products/page.tsx](app/products/page.tsx) - Products page, imports `../style/product-page.css`
- [app/about/page.tsx](app/about/page.tsx) - About page, imports `../style/about.css`
- Page-specific styles live in `app/style/` directory using traditional CSS imports

## Styling Patterns

### CSS Modules for Components
Use CSS Modules for reusable components with variant-based styling:

```tsx
// Import CSS Module
import styles from './button.module.css'

// Build className string combining base + variants
const buttonClasses = `${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`.trim();
```

See [button.tsx](app/componenets/button/button.tsx) for the canonical pattern with `variant` and boolean modifier props.

### Traditional CSS for Pages
Page components import plain CSS files from `app/style/` using relative imports:
- `import '../style/about.css'` from [about/page.tsx](app/about/page.tsx)
- `import './style/home.css'` from [page.tsx](app/page.tsx)

### Global Styles
[globals.css](app/globals.css) imports Tailwind but primarily defines CSS variables and resets. Tailwind is installed but not actively used in components.

## Component Conventions

### Client vs Server Components
- **Use `'use client'`** for components with interactivity: [header.tsx](app/componenets/header/header.tsx) (uses Link navigation), [products/page.tsx](app/products/page.tsx) (has Button onClick)
- Static content pages can remain server components

### Component Interfaces
Define TypeScript interfaces for props with sensible defaults:
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
}
```

## Development Workflow

### Running the Project
```bash
npm run dev      # Development server on localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

### Font Configuration
Project uses Next.js font optimization with Geist fonts (see [layout.tsx](app/layout.tsx)). Font variables are defined but font classes are not applied to the body element.

## Path Aliases
TypeScript configured with `"@/*": ["./*"]` alias, but not currently used in imports. All imports use relative paths.

## Known Inconsistencies
- Directory naming: `componenets` (typo) instead of `components`
- [facebookButton.tsx](app/componenets/social-button/facebookButton.tsx) imports unused CSS Module
- Tailwind installed but CSS Modules + traditional CSS are the primary styling approach
- Font variables defined but not actively applied to DOM elements
