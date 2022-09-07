/** @type {import('tailwindcss').Config} */
// prettier-ignore
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        back:'#BFDBFE',
        backDark:'#1D1D1D',
        card:'#F3F4F6',
        cardDark:'#141414',
        inputs:'#E2E8F0',
        inputsDark:'#1D1D1D',
        texts:'#141414',
        textsDark:'#BFDBFE',
        accent:'#00474B',
        accentDark:'#25C1AD',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
