import VButton from "@/components/VButton.vue";
import type _Vue from "vue";

export default {
  install(app: typeof _Vue) {
    app.component("VButton", VButton);
  },
};
