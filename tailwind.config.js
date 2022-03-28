module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main-red': 'var(--main-red)',
      'main-blue': 'var(--main-blue)',
      'white': 'rgb(255,255,255)',
      'black': 'var(--black)',
      'headers': 'var(--text-headers)',
      'primary': 'var(--primary-color)',
      'primary-text': 'var(--primary-text-color)',
      'secondary-text': 'white',
      'controls-text': 'var(--text-controls)',
      'headers-dark': 'var(--text-headers-dark)',
      'input': 'var(--input)',
      'input-placeholder': 'var(--input-placeholder)',
      'disabled': 'var(--disabled)',
      'error': 'var(--error)',
      'action': 'var(--action)',
      'grey-text': 'var(--text-grey)',
      'action-shadow': 'var(--action-shadow)'
    },
    fontFamily: {
      'roboto': 'Roboto, sans-serif',
      'manrope': 'Manrope, sans-serif',
    },
    extend: {
      height: {
        "header": 'var(--header-size)'
      },
      width: {
        "drawer": 'var(--drawer-size)'
      },
      spacing: {
        "header": 'var(--header-size)',
        "drawer": 'var(--drawer-size)'
      }

    },
    screens: {
      'small': '350px',
      'desktop': '768px',
      'header-breakpoint': '930px',
      'large': '1200px',
      'xl': 'var(--max-size)'
    },

  },
  plugins: [],
}