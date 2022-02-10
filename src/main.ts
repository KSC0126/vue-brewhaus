import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./main.css";
import axios from "axios";
import VueAxios from "vue-axios";

// createApp(App).use(store).use(router, VueAxios, axios).mount("#app");
const app = createApp(App).use(store);
app.use(VueAxios, axios);
app.use(router);
app.provide("router", app.config.globalProperties.router);
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
