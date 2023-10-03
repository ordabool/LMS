import "primevue/resources/themes/lara-light-indigo/theme.css";
import "./assets/main.css";

import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).mount("#app");
app.use(PrimeVue);
