import GithubProvider from 'next-auth/providers/github';
import { N as NuxtAuthHandler } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'h3';
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

const _____ = NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: "enter-your-client-id-here",
      clientSecret: "enter-your-client-secret-here"
    })
  ]
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
