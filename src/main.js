import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'

import TableActionMenu from '@/components/commonComponents/TableActionMenu.vue';
import Breadcrumbs from '@/components/commonComponents/Breadcrumbs.vue';
import VehiclePlate from '@/components/commonComponents/VehiclePlate.vue';

Vue.component("table-action-menu", TableActionMenu);   // Edit Action Menu
Vue.component("breadcrumbs", Breadcrumbs); // Breadcrumbs
Vue.component("vehicle-plate", VehiclePlate); // VehiclePlate

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
