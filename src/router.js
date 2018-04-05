import Vue from "vue";
import Router from "vue-router";
import EssentialsPage from "./views/EssentialsPage.vue";
import IntroductionPage from "./views/IntroductionPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "EssentialsPage",
      component: EssentialsPage
    },
    {
      path: "/introduction",
      name: "IntroductionPage",
      component: IntroductionPage
    }
  ]
});
