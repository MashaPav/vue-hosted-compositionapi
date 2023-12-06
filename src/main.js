import { createApp } from "vue";
import App from "./App.vue";
import { Frontegg } from "@frontegg/vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/vue-hosted-compositionapi"),
  routes: [
    {
      path: "/frontegg/frontegg-test",
      name: "Home",
      component: App
    },
  ],
});

const app = createApp(App).use(router);

const themeOptions = {
  adminPortal: {
    pages: {
      users: {
        hideInviteWithEmail: true,
      },
    },
  },
};

app.use(Frontegg, {
  contextOptions: {
    baseUrl: 'https://nbj-test55.frontegg.com',
    clientId: '78820e01-8160-4312-bdb6-54683edb1cca',
  },
  authOptions: {
    keepSessionAlive: true,
    routes: {
      hostedLoginRedirectUrl: `/frontegg/frontegg-test/oauth/callback`
    }
  },
  hostedLoginBox: true,
  router,
  themeOptions,
});

app.mount("#app");
