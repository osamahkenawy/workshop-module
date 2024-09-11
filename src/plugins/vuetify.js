import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/scss/vuetify/overrides.scss'
import '@/scss/colors.scss'; // Import the global colors.scss file

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: 'var(--primary-color)',
        info: 'var(--info-color)',
        success: 'var(--success-color)',
        accent: 'var(--accent-color)',
        default: 'var(--default-color)',
      },
      dark: {
        primary: 'var(--primary-color)',
        info: 'var(--info-color)',
        success: 'var(--success-color)',
        accent: 'var(--accent-color)',
        default: 'var(--default-color)',
      },
    },
  },
});