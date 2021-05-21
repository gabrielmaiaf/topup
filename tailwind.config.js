module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'phone-topup': "url('/phone_topup.jpg')",
      }),
      backgroundColor: (theme) => ({
        ...theme('colors'),
        blueBg: '#CCFFF6',
      }),
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
