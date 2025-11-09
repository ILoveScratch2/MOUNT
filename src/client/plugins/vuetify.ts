import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  components,
  directives,
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
