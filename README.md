# CarNow Design System

A comprehensive multi-brand design system for CarNow automotive retail platform, built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Token-Based Theming**: JSON-based design tokens for easy brand management
- **Live Theme Switching**: Switch between CarNow, Toyota, and Ford brands in real-time
- **CSS Variables**: Automatic CSS variable generation for seamless theming
- **Fully Typed**: Complete TypeScript support with strict mode
- **Component Library**: 5 production-ready components with variants
- **Comprehensive Documentation**: Interactive documentation pages for all components and foundations

## Brands

### CarNow
- Primary: #0073EA
- Secondary: #003478
- Tertiary: #7B61FF

### Toyota
- Primary: #CC0000
- Secondary: #3E3A39

### Ford
- Primary: #003478
- Secondary: #00274C

## Components

### Button
Buttons with three variants (primary, secondary, text) and three sizes (small, medium, large).

### Pill
Tag-style components for labels and categories with five color variants.

### Input
Text input fields with label, helper text, and error state support.

### Toggle
Switch components for boolean states with two sizes.

### Card
Container components with three variants (elevated, outlined, filled) and flexible padding options.

## Foundations

### Colors
Complete color system with primary, secondary, tertiary, state, surface, and text colors.

### Typography
Type scale with h1-h3 headings, body, label, and detail text styles.

### Spacing
8px grid-based spacing system with border radius tokens.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
carnow-design-system/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── components/         # Component documentation pages
│   │   ├── foundations/        # Foundation documentation pages
│   │   ├── layout.tsx          # Root layout with ThemeProvider
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # Component library
│   │   ├── Button.tsx
│   │   ├── Pill.tsx
│   │   ├── Input.tsx
│   │   ├── Toggle.tsx
│   │   ├── Card.tsx
│   │   ├── Header.tsx
│   │   ├── ThemeSwitcher.tsx
│   │   └── CodeBlock.tsx
│   ├── contexts/               # React contexts
│   │   └── ThemeContext.tsx    # Theme provider and hook
│   ├── lib/                    # Utility functions
│   │   └── theme-utils.ts      # Token to CSS variable conversion
│   └── tokens/                 # Design tokens
│       ├── carnow.json
│       ├── toyota.json
│       ├── ford.json
│       ├── types.ts
│       └── index.ts
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Usage Examples

### Using Components

```tsx
import { Button } from '@/components/Button';
import { Pill } from '@/components/Pill';
import { Input } from '@/components/Input';

function MyComponent() {
  return (
    <>
      <Button variant="primary" size="medium">
        Click Me
      </Button>
      <Pill variant="success">Available</Pill>
      <Input label="Email" type="email" placeholder="Enter email" />
    </>
  );
}
```

### Using Theme Context

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { brand, setBrand, availableBrands } = useTheme();

  return (
    <select value={brand} onChange={(e) => setBrand(e.target.value as any)}>
      {availableBrands.map((b) => (
        <option key={b} value={b}>{b}</option>
      ))}
    </select>
  );
}
```

### Using CSS Variables

```tsx
// In React components
<div style={{
  color: 'var(--color-primary-500)',
  padding: 'var(--spacing-4)',
  borderRadius: 'var(--border-radius-md)',
  fontSize: 'var(--typography-body-font-size)'
}}>
  Themed content
</div>
```

```css
/* In CSS files */
.custom-element {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-size: var(--typography-body-font-size);
}
```

## Adding New Brands

1. Create a new JSON file in `src/tokens/` following the existing structure
2. Add the brand to the `tokens` object in `src/tokens/index.ts`
3. Update the `BrandName` type in `src/tokens/types.ts`
4. The new brand will automatically appear in the theme switcher

## Design Token Structure

```json
{
  "name": "Brand Name",
  "colors": {
    "primary": { "50": "...", "500": "...", "900": "..." },
    "secondary": { ... },
    "tertiary": { ... },
    "success": { ... },
    "warning": { ... },
    "error": { ... },
    "surface": { ... },
    "text": { ... }
  },
  "typography": {
    "fontFamily": { ... },
    "scale": { ... }
  },
  "spacing": { ... },
  "borderRadius": { ... }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please follow the existing code style and include documentation for new components.
