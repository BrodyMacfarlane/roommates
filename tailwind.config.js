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
        'roommates': {
          'purple': '#6622CC',
          'pink': '#DA4167',
          'yellow': '#F4D35E',
          'coral': '#F78764',
          'beige': '#EBEBD3',
        }
      },
      theme: {
        screens: {
          'sm': '670px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        }
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}
