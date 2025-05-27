// const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    minWidth: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      30: '30%',
      49: '49%',
      full: '100%'
    },
    maxWidth: {
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/4': '75%',
      32: '32%',
      49: '49.5%',
      100: '100%',
      120: '120px',
      140: '140px',
      160: '160px',
      200: '200px',
      250: '250px',
      300: '300px',
      400: '400px',
      450: '450px',
      500: '500px',
      600: '600px',
      700: '700px',
      1200: '1200px'
    },
    backgroundColor: theme => ({
      primary: {
        DEFAULT: '#00DD80',
        200: '#33ffaa',
        300: '#1aff9f',
        400: '#00ff95',
        500: '#00e686',
        600: '#00cc77',
        700: '#00b368'
      },
      shadow: {
        DEFAULT: '#2AB57B',
        200: '#73FFC5'
      },
      light: {
        DEFAULT: '#3DCCAB',
        200: '#8CFFE4'
      },
      secondary: {
        DEFAULT: '#40E1BC',
        200: '#38e0b9',
        300: '#22ddb1',
        400: '#4fe3c1',
        500: '#1fc79f',
        600: '#1cb08e',
        700: '#189a7c'
      },
      third: {
        DEFAULT: '#00DD80',
        200: '#00cc77',
        300: '#00b368',
        400: '#009959',
        500: '#00804a',
        600: '#00663c',
        700: '#004d2d'
      },
      yellow: {
        DEFAULT: '#FACA00',
        200: '#e6b800',
        300: '#cca300',
        400: '#b38f00',
        500: '#997a00',
        600: '#806600',
        700: '#665200',
        focus: '#D7BA00'
      },
      pink: {
        DEFAULT: '#EE447B',
        200: '#eb2d69',
        300: '#e91659',
        400: '#d21450',
        500: '#bb1147',
        600: '#a30f3e',
        700: '#8c0d35',
        focus: '#FF5A90',
        light: '#FFACBB'
      },
      orange: {
        DEFAULT: '#FF7832',
        200: '#ff661a',
        300: '#ff5500',
        400: '#e64d00',
        500: '#cc4400',
        600: '#b33c00',
        700: '#993300',
        focus: '#EB5E15'
      },
      purple: {
        DEFAULT: '#7949D2',
        200: '#6933cc',
        300: '#5e2eb8',
        400: '#5429a3',
        500: '#49248f',
        600: '#3f1f7a',
        700: '#341966',
        focus: '#9360F1'
      },
      lightblue: {
        DEFAULT: '#1A88FF',
        200: '#007bff',
        300: '#006fe6',
        400: '#0063cc',
        500: '#0056b3',
        600: '#004a99',
        700: '#003e80',
        focus: '#4DA2FF'
      },
      gray: {
        DEFAULT: '#21262D',
        100: '#c5cddb',
        200: '#A3B0C9',
        300: '#78849E',
        400: '#576073'
      },
      white: {
        DEFAULT: '#FAFBFC',
        200: '#F2F2F2',
        300: '#D0D8E6'
      },
      black: {
        DEFAULT: '#0D1117',
        200: '#151b24'
      }
    }),
    textColor: {
      primary: {
        DEFAULT: '#00DD80',
        200: '#33ffaa',
        300: '#1aff9f',
        400: '#00ff95',
        500: '#00e686',
        600: '#00cc77',
        700: '#00b368'
      },
      shadow: {
        DEFAULT: '#2AB57B',
        200: '#73FFC5'
      },
      light: {
        DEFAULT: '#3DCCAB',
        200: '#8CFFE4'
      },
      secondary: {
        DEFAULT: '#40E1BC',
        200: '#38e0b9',
        300: '#22ddb1',
        400: '#4fe3c1',
        500: '#1fc79f',
        600: '#1cb08e',
        700: '#189a7c'
      },
      third: {
        DEFAULT: '#00DD80',
        200: '#00cc77',
        300: '#00b368',
        400: '#009959',
        500: '#00804a',
        600: '#00663c',
        700: '#004d2d'
      },
      yellow: {
        DEFAULT: '#FACA00',
        200: '#e6b800',
        300: '#cca300',
        400: '#b38f00',
        500: '#997a00',
        600: '#806600',
        700: '#665200',
        focus: '#D7BA00'
      },
      pink: {
        DEFAULT: '#EE447B',
        200: '#eb2d69',
        300: '#e91659',
        400: '#d21450',
        500: '#bb1147',
        600: '#a30f3e',
        700: '#8c0d35',
        focus: '#FF5A90'
      },
      orange: {
        DEFAULT: '#FF7832',
        200: '#ff661a',
        300: '#ff5500',
        400: '#e64d00',
        500: '#cc4400',
        600: '#b33c00',
        700: '#993300',
        focus: '#EB5E15'
      },
      purple: {
        DEFAULT: '#7949D2',
        200: '#6933cc',
        300: '#5e2eb8',
        400: '#5429a3',
        500: '#49248f',
        600: '#3f1f7a',
        700: '#341966',
        focus: '#9360F1'
      },
      lightblue: {
        DEFAULT: '#1A88FF',
        200: '#007bff',
        300: '#006fe6',
        400: '#0063cc',
        500: '#0056b3',
        600: '#004a99',
        700: '#003e80',
        focus: '#4DA2FF'
      },
      gray: {
        DEFAULT: '#21262D',
        100: '#c5cddb',

        200: '#A3B0C9',
        300: '#78849E',
        400: '#576073'
      },
      white: {
        DEFAULT: '#FAFBFC',
        200: '#F2F2F2'
      },
      black: {
        DEFAULT: '#0D1117'
      }
    },
    borderColor: theme => ({
      primary: {
        DEFAULT: '#00DD80',
        200: '#33ffaa',
        300: '#1aff9f',
        400: '#00ff95',
        500: '#00e686',
        600: '#00cc77',
        700: '#00b368'
      },
      shadow: {
        DEFAULT: '#2AB57B',
        200: '#73FFC5'
      },
      light: {
        DEFAULT: '#3DCCAB',
        200: '#8CFFE4'
      },
      secondary: {
        DEFAULT: '#40E1BC',
        200: '#38e0b9',
        300: '#22ddb1',
        400: '#4fe3c1',
        500: '#1fc79f',
        600: '#1cb08e',
        700: '#189a7c'
      },
      third: {
        DEFAULT: '#00DD80',
        200: '#00cc77',
        300: '#00b368',
        400: '#009959',
        500: '#00804a',
        600: '#00663c',
        700: '#004d2d'
      },
      yellow: {
        DEFAULT: '#FACA00',
        200: '#e6b800',
        300: '#cca300',
        400: '#b38f00',
        500: '#997a00',
        600: '#806600',
        700: '#665200',
        focus: '#D7BA00'
      },
      pink: {
        DEFAULT: '#EE447B',
        200: '#eb2d69',
        300: '#e91659',
        400: '#d21450',
        500: '#bb1147',
        600: '#a30f3e',
        700: '#8c0d35',
        focus: '#FF5A90'
      },
      orange: {
        DEFAULT: '#FF7832',
        200: '#ff661a',
        300: '#ff5500',
        400: '#e64d00',
        500: '#cc4400',
        600: '#b33c00',
        700: '#993300',
        focus: '#EB5E15'
      },
      purple: {
        DEFAULT: '#7949D2',
        200: '#6933cc',
        300: '#5e2eb8',
        400: '#5429a3',
        500: '#49248f',
        600: '#3f1f7a',
        700: '#341966',
        focus: '#9360F1'
      },
      lightblue: {
        DEFAULT: '#1A88FF',
        200: '#007bff',
        300: '#006fe6',
        400: '#0063cc',
        500: '#0056b3',
        600: '#004a99',
        700: '#003e80',
        focus: '#4DA2FF'
      },
      gray: {
        DEFAULT: '#21262D',
        100: '#c5cddb',
        200: '#A3B0C9',
        300: '#78849E',
        400: '#576073'
      },
      white: {
        DEFAULT: '#FAFBFC',
        200: '#F2F2F2'
      },
      black: {
        DEFAULT: '#0D1117'
      }
    })
  },
  variants: {
    extend: {}
  }
}
