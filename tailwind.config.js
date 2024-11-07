/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },

    extend: {

      stroke: {
        "tq-blue-50": "#edfefe",
        "tq-blue-100": "#d1fbfc",
        "tq-blue-200": "#6eebf2",
        "tq-blue-300": "#6eebf2",
        "tq-blue-400": "#3ddbe6",
        "tq-blue-500": "#10bcca",
        "tq-blue-600": "#1096aa",
        "tq-blue-700": "#14788a",
        "tq-blue-800": "#1a6270",
        "tq-blue-900": "#1a515f",
        "tq-blue-950": "#0b3641",
        "md-purple-50": "#f5f2ff",
        "md-purple-100": "#ede8ff",
        "md-purple-200": "#dcd4ff",
        "md-purple-300": "#c4b1ff",
        "md-purple-400": "#a885ff",
        "md-purple-500": "#8c52ff",
        "md-purple-600": "#7f30f7",
        "md-purple-700": "#711ee3",
        "md-purple-800": "#5e18bf",
        "md-purple-900": "#4e169c",
        "md-purple-950": "#300b6a",
      },
      colors: {
        "text-theme-blue": "#8c52ff",
        "tq-blue-50": "#edfefe",
        "tq-blue-100": "#d1fbfc",
        "tq-blue-200": "#6eebf2",
        "tq-blue-300": "#6eebf2",
        "tq-blue-400": "#3ddbe6",
        "tq-blue-500": "#10bcca",
        "tq-blue-600": "#1096aa",
        "tq-blue-700": "#14788a",
        "tq-blue-800": "#1a6270",
        "tq-blue-900": "#1a515f",
        "tq-blue-950": "#0b3641",
        "md-purple-50": "#f5f2ff",
        "md-purple-100": "#ede8ff",
        "md-purple-200": "#dcd4ff",
        "md-purple-300": "#c4b1ff",
        "md-purple-400": "#a885ff",
        "md-purple-500": "#8c52ff",
        "md-purple-600": "#7f30f7",
        "md-purple-700": "#711ee3",
        "md-purple-800": "#5e18bf",
        "md-purple-900": "#4e169c",
        "md-purple-950": "#300b6a",
      },

      borderColor: {
        "theme-blue": "#8c52ff",
        "tq-blue-50": "#edfefe",
        "tq-blue-100": "#d1fbfc",
        "tq-blue-200": "#6eebf2",
        "tq-blue-300": "#6eebf2",
        "tq-blue-400": "#3ddbe6",
        "tq-blue-500": "#10bcca",
        "tq-blue-600": "#1096aa",
        "tq-blue-700": "#14788a",
        "tq-blue-800": "#1a6270",
        "tq-blue-900": "#1a515f",
        "tq-blue-950": "#0b3641",
        "md-purple-50": "#f5f2ff",
        "md-purple-100": "#ede8ff",
        "md-purple-200": "#dcd4ff",
        "md-purple-300": "#c4b1ff",
        "md-purple-400": "#a885ff",
        "md-purple-500": "#8c52ff",
        "md-purple-600": "#7f30f7",
        "md-purple-700": "#711ee3",
        "md-purple-800": "#5e18bf",
        "md-purple-900": "#4e169c",
        "md-purple-950": "#300b6a",
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Start hidden and slightly below
          '100%': { opacity: '1', transform: 'translateY(0)' },  // End visible and at original position
        },
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' }, // Start hidden and slightly above
          '100%': { opacity: '1', transform: 'translateY(0)' },   // End visible and at original position
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' }, // Start hidden and slightly to the left
          '100%': { opacity: '1', transform: 'translateX(0)' },   // End visible and at original position
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },  // Start hidden and slightly to the right
          '100%': { opacity: '1', transform: 'translateX(0)' },   // End visible and at original position
        },
        bounces: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        fadeInBottom: 'fadeInBottom 0.7s ease-out',
        fadeInTop: 'fadeInTop 0.7s ease-out',
        fadeInLeft: 'fadeInLeft 0.7s ease-out',
        fadeInRight: 'fadeInRight 0.7s ease-out',
        bounces: 'bounce 0.7s infinite',
      },

      ringColor: {
        "theme-blue": "#8c52ff",
        "tq-blue-50": "#edfefe",
        "tq-blue-100": "#d1fbfc",
        "tq-blue-200": "#6eebf2",
        "tq-blue-300": "#6eebf2",
        "tq-blue-400": "#3ddbe6",
        "tq-blue-500": "#10bcca",
        "tq-blue-600": "#1096aa",
        "tq-blue-700": "#14788a",
        "tq-blue-800": "#1a6270",
        "tq-blue-900": "#1a515f",
        "tq-blue-950": "#0b3641",
        "md-purple-50": "#f5f2ff",
        "md-purple-100": "#ede8ff",
        "md-purple-200": "#dcd4ff",
        "md-purple-300": "#c4b1ff",
        "md-purple-400": "#a885ff",
        "md-purple-500": "#8c52ff",
        "md-purple-600": "#7f30f7",
        "md-purple-700": "#711ee3",
        "md-purple-800": "#5e18bf",
        "md-purple-900": "#4e169c",
        "md-purple-950": "#300b6a",
      },

      backgroundColor: {
        "bg-theme-blue": "#8c52ff",
        "tq-blue-50": "#edfefe",
        "tq-blue-100": "#d1fbfc",
        "tq-blue-200": "#6eebf2",
        "tq-blue-300": "#6eebf2",
        "tq-blue-400": "#3ddbe6",
        "tq-blue-500": "#10bcca",
        "tq-blue-600": "#1096aa",
        "tq-blue-700": "#14788a",
        "tq-blue-800": "#1a6270",
        "tq-blue-900": "#1a515f",
        "tq-blue-950": "#0b3641",
        "md-purple-50": "#f5f2ff",
        "md-purple-100": "#ede8ff",
        "md-purple-200": "#dcd4ff",
        "md-purple-300": "#c4b1ff",
        "md-purple-400": "#a885ff",
        "md-purple-500": "#8c52ff",
        "md-purple-600": "#7f30f7",
        "md-purple-700": "#711ee3",
        "md-purple-800": "#5e18bf",
        "md-purple-900": "#4e169c",
        "md-purple-950": "#300b6a",
      }
    },
  },
  plugins: [],
}

