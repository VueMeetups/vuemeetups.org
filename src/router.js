import Vue from "vue";
import Router from "vue-router";
import EssentialsPage from "./views/EssentialsPage.vue";
import HomePage from "./views/HomePage.vue";
import IntroductionPage from "./views/IntroductionPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/essentials",
      name: "EssentialsPage",
      component: EssentialsPage
    },
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/introduction",
      name: "IntroductionPage",
      component: IntroductionPage
    }
  ]
});
