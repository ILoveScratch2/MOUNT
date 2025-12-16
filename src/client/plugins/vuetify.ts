import { createVuetify } from 'vuetify'
// Commenting out CSS imports to test if they're causing the issue
// import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  // Using minimal configuration without loading all components
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#00b3ff',
          secondary: '#5988ff',
          accent: '#ca6cff',
          error: '#ca1414',
          info: '#5bc0de',
          success: '#4c9c4c',
          warning: '#f0ad4e',
          background: '#f7f8fa',
          surface: '#ffffff',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#00b3ff',
          secondary: '#5988ff',
          accent: '#ca6cff',
          error: '#ca1414',
          info: '#5bc0de',
          success: '#4c9c4c',
          warning: '#f0ad4e',
        },
      },
    },
  },
})
