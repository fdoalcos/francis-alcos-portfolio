import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#D1D1D1',
        'charcoal': '#121212',
        'background-dark': '#050505',
        'ascii-gray': '#1A1A1A',
        'primary-black': '#000000',
        'accent-charcoal': '#262626',
        'accent-gray': '#737373',
        'accent-light': '#E5E5E5',
        'matte-black': '#0a0a0a',
        'neutral-dark': '#121212',
        'border-light-gray': '#333333',
        'tag-gray': '#1e1e1e',
        'console-gray': '#737373',
        'border-gray': '#1f1f1f',
        'status-green': '#4ade80',
        'surface-dark': '#0a0a0a',
        'border-dark': '#1a1a1a',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'DEFAULT': '0px',
        'lg': '0px',
        'xl': '0px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
