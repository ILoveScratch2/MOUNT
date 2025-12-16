import { createVuetify } from 'vuetify'

/**
 * Minimal Vuetify configuration to avoid SSR/hydration issues with VuePress.
 * 
 * CSS imports (vuetify/styles, @mdi/font) have been removed as they cause
 * routing issues when the page is directly accessed or refreshed.
 * 
 * Component and directive bulk imports have been removed to reduce overhead.
 * If you need Vuetify components, import them individually in your Vue files:
 * 
 * Example:
 *   import { VBtn, VCard } from 'vuetify/components'
 * 
 * For styles, you may need to import them manually in your component or
 * add them to your custom CSS if Vuetify components are used.
 */
export default createVuetify({
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
