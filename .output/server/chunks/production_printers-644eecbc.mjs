import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p> this Content services page </p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/production_printers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const production_printers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { production_printers as default };
//# sourceMappingURL=production_printers-644eecbc.mjs.map
