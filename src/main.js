import { createApp } from "vue";
import App from "./App.vue";
import { Frontegg } from "@frontegg/vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
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
    baseUrl: "https://dev22mt-ga-ssl.callvu.net",
    clientId: "4e9e2c48-ecc4-4757-be43-c4a492e5130e",
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
