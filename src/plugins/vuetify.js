import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/scss/vuetify/overrides.scss'
Vue.use(Vuetify);

const theme = {
    primary: '#1976d2',
    info: '#1e88e5',
    success: '#41c7db',
    accent: '#fc4b6c',
    default: '#563dea'
}

export default new Vuetify({
    theme: {
        themes: {
          dark: theme,
          light: theme,
        },
      }
});
