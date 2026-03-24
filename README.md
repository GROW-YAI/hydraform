# Hydraform Seaweed-Interlock Bricks Technology

## Project Overview

Hydraform is a modern web application showcasing innovative seaweed-based interlock bricks technology for sustainable construction. The website serves as a comprehensive platform to present the company's eco-friendly building solutions, featuring:

### Main Features
- **Hero Section**: Dynamic landing page with animated visuals showcasing the revolutionary building technology
- **About Section**: Detailed information about the company's mission and seaweed-based brick innovation
- **Services**: Comprehensive overview of construction and consulting services offered
- **Project Portfolio**: Gallery of completed projects demonstrating real-world applications
- **Testimonials**: Client feedback and success stories
- **Blog**: Industry insights and company updates
- **Contact**: Interactive contact form for inquiries and partnerships

### Technologies Used
- **Frontend Framework**: React 18 with Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for responsive, utility-first design
- **Animations**: Framer Motion for smooth, engaging animations
- **Routing**: React Router DOM for seamless single-page navigation
- **UI Components**: Lucide React icons, React Icons for visual elements
- **Media**: React Player for video content, React Slick for carousels
- **Notifications**: React Toastify for user feedback
- **Accessibility**: Boafo Accessibility Widget for inclusive user experience

### Accessibility Integration
This project uses the **Boafo Accessibility Widget** to make the website accessible to all users, including those with disabilities. The widget provides features such as:
- Screen reader compatibility
- Keyboard navigation support
- High contrast modes
- Font size adjustments
- Focus reading assistance
- Text-to-speech functionality

---

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget in your project, you need to obtain an API key:

1. Visit [boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Generate a new API key for your project
5. Copy the API key (it will look like `boafo_xxxxx`)

**Important**: Never expose your API key in public repositories or client-side code. Always use environment variables.

---

## How to Integrate the Boafo Widget

Follow these steps to integrate the Boafo Accessibility Widget into your Next.js or Vite React project:

### Step 1: Install the Package

```bash
npm install boafo-accessibility-widget
```

### Step 2: Create a Client Component

Create a file at `app/components/BoafoWidgetInitializer.tsx` (for Next.js) or `src/components/BoafoWidgetInitializer.jsx` (for Vite):

**For TypeScript (Next.js):**
```typescript
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    }
  }, []);

  return null;
}
```

**For JavaScript (Vite):**
```javascript
import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    }
  }, []);

  return null;
}
```

### Step 3: Import and Use in Layout

**For Next.js** (`app/layout.tsx`):
```typescript
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BoafoWidgetInitializer />
        {children}
      </body>
    </html>
  );
}
```

**For Vite React** (`src/App.jsx`):
```javascript
import BoafoWidgetInitializer from './components/BoafoWidgetInitializer';

function App() {
  return (
    <>
      <BoafoWidgetInitializer />
      {/* Your other components */}
    </>
  );
}
```

### Step 4: TypeScript Support

Create a type declaration file at `src/types/global.d.ts`:

```typescript
declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_BOAFO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

Update your `tsconfig.json` to include the types directory:

```json
{
  "compilerOptions": {
    // ... other options
  },
  "include": ["**/*.ts", "**/*.tsx", "src/types"]
}
```

### Step 5: Static HTML Integration (Alternative)

For static HTML sites, add the script tag directly:

```html
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="%NEXT_PUBLIC_BOAFO_API_KEY%"
  defer
></script>
```

**Note**: Replace `%NEXT_PUBLIC_BOAFO_API_KEY%` with your actual environment variable reference based on your build system.

---

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- A Boafo API key (see instructions above)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/hydraform.git
   cd hydraform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your Boafo API key
   NEXT_PUBLIC_BOAFO_API_KEY=your_boafo_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |

### Project Structure

```
hydraform/
├── app/                    # Next.js app directory (if using Next.js)
│   ├── components/         # React components
│   └── layout.tsx          # Root layout
├── src/                    # Source files
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── assets/             # Images, videos, and other assets
│   ├── styles/             # CSS styles
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── .env                    # Environment variables (not in git)
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Security Best Practices

- ✅ Never commit `.env` files to version control
- ✅ Use environment variables for all sensitive credentials
- ✅ Keep your API keys private and rotate them regularly
- ✅ Use `.gitignore` to prevent accidental commits of sensitive data

---

## License

This project is proprietary. All rights reserved.

---

## Support

For questions or support, please contact the development team or visit [boafo.co](https://boafo.co) for widget documentation.