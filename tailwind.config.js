/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c1',
          300: '#f7c4a2',
          400: '#f4af83',
          500: '#f19a64',
          600: '#c77a50',
          700: '#9d5a3c',
          800: '#733a28',
          900: '#491a14',
        },
        /* Steelers-inspired: black, gold #FFB612, near-black surfaces */
        navy: {
          50: '#f4f4f5',
          100: '#e4e4e7',
          200: '#d4d4d8',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525b',
          600: '#3f3f46',
          700: '#27272a',
          800: '#18181b',
          900: '#09090b',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFB612',
          600: '#e6a010',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        steel: {
          black: '#000000',
          surface: '#0a0a0a',
          elevated: '#0a0a0a',
          line: '#262626',
          gold: '#FFB612',
          goldMuted: '#c48a00',
        },
        /* Solid RGB — 3D decorative elements only */
        rgb: {
          red: '#B91C1C',
          green: '#15803D',
          blue: '#1D4ED8',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float-3d': 'float3d 14s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float3d: {
          '0%, 100%': { transform: 'perspective(900px) rotateX(8deg) rotateY(-12deg) translateY(0)' },
          '50%': { transform: 'perspective(900px) rotateX(14deg) rotateY(8deg) translateY(-6px)' },
        },
      }
    },
  },
  plugins: [],
}
