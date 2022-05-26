import Vue from "vue";
import App from "../App.vue";
import AppError from "../App-Error.vue";

import { pinia } from "./external/pinia";
import router from "../../router/index";

export async function initApplication() {
    try {
        Vue.config.productionTip = false;
        new Vue({
            pinia,
            router,
            render: (h) => h(App),
        }).$mount("#app");

    } catch (error) {
        new Vue({
            render: (h) => h(AppError, { props: { error } }),
        }).$mount("#app");
    }
}
