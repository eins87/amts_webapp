import { defineEventHandler } from 'h3';
import { u as useRuntimeConfig } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'pathe';

const firebasekey_get = defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const headers = event.node.req.headers;
  console.log("Header Authorization (FIREBASE KEY):", headers.firebaseapikey, config.public.firebaseApiKey);
  if (headers.firebaseapikey === config.public.firebaseApiKey) {
    return "You are authorized";
  } else {
    return "Access denied!";
  }
});

export { firebasekey_get as default };
//# sourceMappingURL=firebasekey.get.mjs.map
