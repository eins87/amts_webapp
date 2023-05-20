import { d as defineNuxtRouteMiddleware, u as useRuntimeConfig } from './server.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'defu';
import 'requrl';
import 'vue/server-renderer';
import 'vue3-smooth-scroll';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'next-auth/core';
import 'node:fs';
import 'node:url';
import 'pathe';

const auth = /* @__PURE__ */ defineNuxtRouteMiddleware((to, from) => {
  const config = /* @__PURE__ */ useRuntimeConfig();
  console.log("Runtime Config in Route (auth) Middleware", config);
});

export { auth as default };
//# sourceMappingURL=auth-53a05bd4.mjs.map
