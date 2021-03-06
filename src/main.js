import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.config.productionTip = false;

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

app
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
