import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import './plugins/base'

import TableActionMenu from '@/components/commonComponents/TableActionMenu.vue';
import Breadcrumbs from '@/components/commonComponents/Breadcrumbs.vue';
import VehiclePlate from '@/components/commonComponents/VehiclePlate.vue';

// Plates
import OmanPlate from '@/components/commonComponents/Plates/OmanPlate.vue'
import SubSidebar from "@/components/commonComponents/Sidebars/SubSidebar.vue";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.component("table-action-menu", TableActionMenu);   // Edit Action Menu
Vue.component("breadcrumbs", Breadcrumbs); // Breadcrumbs
Vue.component("vehicle-plate", VehiclePlate); // VehiclePlate
Vue.component("oman-plate", OmanPlate); // VehiclePlate

Vue.component('sub-sidebar', SubSidebar); // SubSidebar

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
