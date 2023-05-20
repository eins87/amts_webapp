import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { a as _imports_0, _ as __nuxt_component_1$1 } from './amido-cbf92c97.mjs';
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
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';

const _sfc_main$3 = {
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><a class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline"${ssrRenderAttr("href", $props.url)}>${ssrInterpolate($props.name)}</a></li>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  name: "BaseNavbar",
  data() {
    return {
      open: false,
      dropdownNavbar: false
    };
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SegmentIcon = resolveComponent("SegmentIcon");
  const _component_CloseIcon = resolveComponent("CloseIcon");
  const _component_NavLink = __nuxt_component_0$1;
  const _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  const _component_base_button = __nuxt_component_1$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    id: "navbar",
    class: "relative z-10 w-full text-neutral-800"
  }, _attrs))}><div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4"><div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8"><div class="w-full flex flex-row items-center justify-between py-6"><div><img${ssrRenderAttr("src", _imports_0)} class="w-20 xl:w-24" alt="Amido Logo"></div><button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline">`);
  if (!$data.open) {
    _push(ssrRenderComponent(_component_SegmentIcon, { size: 24 }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_CloseIcon, { size: 24 }, null, _parent));
  }
  _push(`</button></div><ul class="${ssrRenderClass([[$data.open ? "flex" : "hidden lg:flex"], "w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top xl:space-x-2 space-y-3 lg:space-y-0"])}">`);
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Home",
    url: "/"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Business",
    url: "/business"
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavLink, {
    name: "Solutions",
    url: "/solutions"
  }, null, _parent));
  _push(`<li class="relative group"><button class="md:px-4 py-2 text-sm bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline flex items-center"><span>Products</span>`);
  if ($data.dropdownNavbar) {
    _push(ssrRenderComponent(_component_ChevronUpIcon, { size: 16 }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_ChevronDownIcon, { size: 16 }, null, _parent));
  }
  _push(`</button>`);
  if ($data.dropdownNavbar) {
    _push(`<ul class="flex lg:absolute flex-col max-w-42 py-1 lg:bg-white rounded-md lg:shadow-md pl-2 lg:pl-0"><li><a href="/products/multifunction_printers" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Multifunction Printers</a></li><li><a href="/products/production_printers" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Production Printers</a></li></ul>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li></ul></div><div class="${ssrRenderClass([[$data.open ? "flex" : "hidden lg:flex"], "space-x-3"])}">`);
  _push(ssrRenderComponent(_component_base_button, { class: "px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee]" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Login `);
      } else {
        return [
          createTextVNode(" Login ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_base_button, { class: "px-8 xl:px-10 py-3 mt-2 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sign Up `);
      } else {
        return [
          createTextVNode(" Sign Up ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "BaseFooter"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ArrowRightIcon = resolveComponent("ArrowRightIcon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "max-w-screen-xl px-8 mx-auto" }, _attrs))}><div class="w-full border-y border-[#DDDDDD]"><div class="grid xl:grid-cols-3 xl:justify-between lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"><div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]" data-aos="fade-up" data-aos-once="true" data-aos-delay="300"><h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Head Office :</h2><p class="paragraph text-left xl:text-left">Jln. Daan Mogot KM. 11 No. 7</p><p class="paragraph text-left xl:text-left">Jakarta Barat 11710, Indonesia</p><p class="paragraph text-left xl:text-left">Tel. (021) 5436 6111, 5436 6222</p><p class="paragraph text-left xl:text-left">Fax. (021) 5436 6030 / 40</p></div><div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]" data-aos="fade-down" data-aos-once="true" data-aos-delay="600"><h2 class="text-xl sm:text-2xl font-semibold mb-10 sm:mb-6">Branch Cikarang Area :</h2><p class="paragraph text-left xl:text-left">Jln. Niaga Raya Kav. AA3 Blok. B No. 23 Ruko CBD Jababeka</p><p class="paragraph text-left xl:text-left">Cikarang Bekasi, Jaw Barat</p><p class="paragraph text-left xl:text-left">Tel. (021) 2908 3865</p></div><div class="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]" data-aos="fade-right" data-aos-once="true" data-aos-delay="900"><h5 class="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5><p class="text-sm text-[#666666] focus:outline-none focus:shadow-outline"> Never miss anything crypto when <br class="sm:hidden">you&#39;re on the go </p><div class="flex items-center space-x-2"><input type="text" class="w-full px-2 py-4 sm:py-3 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]" placeholder="Enter your email"><button class="bg-blue-gradient px-4 py-4 sm:py-3 rounded-md text-white hover:shadow-md transition duration-300">`);
  _push(ssrRenderComponent(_component_ArrowRightIcon, { size: 20 }, null, _parent));
  _push(`</button></div></div></div></div><div class="py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900"> \xA9 Copyright 2023 PT. AMIDO MAKMOR TULUS SEJATI. </div><div class="py-4 sm:py-2 text-center text-sm text-[#666666] hover:text-gray-900"> Made with <span class="text-red-500">\u2665</span> by <a href="https://www.linkedin.com/in/andiwinata87" class="text-blue-500">Andi Winata</a></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "DefaultLayout"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseNavbar = __nuxt_component_0;
  const _component_BaseFooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_BaseNavbar, null, null, _parent));
  _push(`<main class="text-neutral-800">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_BaseFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-137600a6.mjs.map
