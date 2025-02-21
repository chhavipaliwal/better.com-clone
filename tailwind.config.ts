import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          '50': '#dfeee8',
          '100': '#b3d7c8',
          '200': '#86bfa8',
          '300': '#59a788',
          '400': '#2d9068',
          '500': '#007848',
          '600': '#00633b',
          '700': '#004e2f',
          '800': '#003922',
          '900': '#002416',
          foreground: '#fff',
          DEFAULT: '#007848'
        }
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      },
      fontFamily: {
        sans: ['Aeonik', 'system-ui', 'sans-serif']
      }
    }
  },
  darkMode: ['class', '[data-theme^="dark-"]'],
  plugins: [
    require('tailwindcss-animate'),
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              '50': '#fcfcfc',
              '100': '#f8f9f8',
              '200': '#f4f5f3',
              '300': '#f0f1ef',
              '400': '#eceeea',
              '500': '#e8eae6',
              '600': '#bfc1be',
              '700': '#979896',
              '800': '#6e6f6d',
              '900': '#464645',
              foreground: '#000',
              DEFAULT: '#e8eae6'
            },
            primary: {
              '50': '#dfe8e6',
              '100': '#b3c8c2',
              '200': '#86a89e',
              '300': '#59877a',
              '400': '#2d6757',
              '500': '#004733',
              '600': '#003b2a',
              '700': '#002e21',
              '800': '#002218',
              '900': '#00150f',
              foreground: '#fff',
              DEFAULT: '#004733'
            },
            secondary: {
              '50': '#e3fbef',
              '100': '#bcf6d9',
              '200': '#95f0c2',
              '300': '#6debac',
              '400': '#46e595',
              '500': '#1fe07f',
              '600': '#1ab969',
              '700': '#149253',
              '800': '#0f6a3c',
              '900': '#094326',
              foreground: '#000',
              DEFAULT: '#1fe07f'
            },

            background: '#FFFDFA',
            foreground: {
              '50': '#e4e5e4',
              '100': '#bfbfbf',
              '200': '#999a99',
              '300': '#747574',
              '400': '#4e504e',
              '500': '#292b29',
              '600': '#222322',
              '700': '#1b1c1b',
              '800': '#131413',
              '900': '#0c0d0c',
              foreground: '#fff',
              DEFAULT: '#292b29'
            }
          }
        },
        dark: {
          colors: {
            primary: {
              '50': '#254329',
              '100': '#3f7145',
              '200': '#599f61',
              '300': '#73cd7d',
              '400': '#93d89a',
              '500': '#b2e4b8',
              '600': '#d2efd5',
              '700': '#f1faf2',
              foreground: '#000',
              DEFAULT: '#599f61'
            }
          }
        }
      },
      layout: {
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },
        radius: {
          small: '0.5rem',
          medium: '0.75rem',
          large: '0.875rem'
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9'
      }
    })
  ]
} satisfies Config;

export default config;
