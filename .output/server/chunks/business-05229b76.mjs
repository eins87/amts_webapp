import { _ as __vite_glob_0_25, a as __vite_glob_0_22, b as __vite_glob_0_18, c as __nuxt_component_0, d as __vite_glob_0_0, e as __vite_glob_0_1, f as __vite_glob_0_2, g as __vite_glob_0_3, h as __vite_glob_0_4, i as __vite_glob_0_5, j as __vite_glob_0_6, k as __vite_glob_0_7, l as __vite_glob_0_8, m as __vite_glob_0_9, n as __vite_glob_0_10, o as __vite_glob_0_11, p as __vite_glob_0_12, q as __vite_glob_0_13, r as __vite_glob_0_14, s as __vite_glob_0_15, t as __vite_glob_0_16, u as _imports_5, v as __vite_glob_0_19, w as __vite_glob_0_20, x as __vite_glob_0_21, y as _imports_4, z as __vite_glob_0_26, A as __vite_glob_0_27, B as __vite_glob_0_28, C as __vite_glob_0_29, D as _imports_0$1, E as _imports_1, F as _imports_2, G as _imports_3, H as __vite_glob_0_34, I as __vite_glob_0_35, J as __vite_glob_0_36, K as __vite_glob_0_37 } from './macross-8197ef09.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, resolveComponent, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1$1, a as _imports_0 } from './amido-cbf92c97.mjs';
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
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
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue3-smooth-scroll';

const _sfc_main$2 = {
  name: "LandingListItem",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}><div class="flex items-center space-x-2">`);
  _push(ssrRenderComponent(_component_CheckCircleIcon, {
    size: 20,
    class: "text-[#0c66ee]"
  }, null, _parent));
  _push(`<span>${ssrInterpolate($props.title)}</span></div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</li>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/ListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const useAsset = (path) => {
  var _a;
  const assets = /* @__PURE__ */ Object.assign({
    "/assets/css/style.css": __vite_glob_0_0,
    "/assets/img/advanced-trading-tools.webp": __vite_glob_0_1,
    "/assets/img/bg-trading-tools.webp": __vite_glob_0_2,
    "/assets/img/buy-and-trade.webp": __vite_glob_0_3,
    "/assets/img/country-icon/eng.png": __vite_glob_0_4,
    "/assets/img/crypto-icon/2share.png": __vite_glob_0_5,
    "/assets/img/crypto-icon/bitcoin-asia.png": __vite_glob_0_6,
    "/assets/img/crypto-icon/bitcoin.png": __vite_glob_0_7,
    "/assets/img/crypto-icon/dogecoin.png": __vite_glob_0_8,
    "/assets/img/crypto-icon/ethereum.png": __vite_glob_0_9,
    "/assets/img/crypto-icon/frog.png": __vite_glob_0_10,
    "/assets/img/crypto-icon/metacraft.png": __vite_glob_0_11,
    "/assets/img/crypto-icon/moonrock.png": __vite_glob_0_12,
    "/assets/img/crypto-icon/musk-doge.png": __vite_glob_0_13,
    "/assets/img/crypto-icon/ninjafloki.png": __vite_glob_0_14,
    "/assets/img/crypto-icon/pappay.png": __vite_glob_0_15,
    "/assets/img/crypto-icon/solana.png": __vite_glob_0_16,
    "/assets/img/faq.webp": _imports_5,
    "/assets/img/getting-started/arrow.png": __vite_glob_0_18,
    "/assets/img/getting-started/buy-crypto.png": __vite_glob_0_19,
    "/assets/img/getting-started/fund.png": __vite_glob_0_20,
    "/assets/img/getting-started/sign-up.png": __vite_glob_0_21,
    "/assets/img/industry-leading-security.webp": __vite_glob_0_22,
    "/assets/img/logo/amido.svg": _imports_0,
    "/assets/img/logo/mita-icon.svg": _imports_4,
    "/assets/img/nefa-cc.webp": __vite_glob_0_25,
    "/assets/img/partner/background.png": __vite_glob_0_26,
    "/assets/img/partner/jtekt-logo.svg": __vite_glob_0_27,
    "/assets/img/partner/mayora-logo.svg": __vite_glob_0_28,
    "/assets/img/partner/ocbc-logo.svg": __vite_glob_0_29,
    "/assets/img/pattern/ellipse-1.png": _imports_0$1,
    "/assets/img/pattern/ellipse-2.png": _imports_1,
    "/assets/img/pattern/ellipse-3.png": _imports_2,
    "/assets/img/pattern/star.png": _imports_3,
    "/assets/img/thumbnail.jpg": __vite_glob_0_34,
    "/assets/img/timeline/kill_la_kill.jpg": __vite_glob_0_35,
    "/assets/img/timeline/level_e.jpg": __vite_glob_0_36,
    "/assets/img/timeline/macross.jpg": __vite_glob_0_37
  });
  return (_a = assets["/assets/" + path]) != null ? _a : "";
};
const _sfc_main$1 = {
  name: "LandingStep",
  props: {
    step: {
      type: Object,
      required: true
    }
  },
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[280px] xl:max-w-[363px] space-y-6 sm:space-y-3 text-center" }, _attrs))}><img${ssrRenderAttr("src", ("useAsset" in _ctx ? _ctx.useAsset : unref(useAsset))(`img/getting-started/${$props.step.img}`))} class="max-w-[245px] mx-auto" alt=""><h3 class="text-xl text-neutral-800 font-semibold">${ssrInterpolate($props.step.title)}</h3><p class="text-sm text-gray-700 leading-relaxed">${ssrInterpolate($props.step.description)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/Step.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "BusinessPage",
  data() {
    return {
      steps: [
        {
          title: "Create an account",
          description: "Sign up for a free NEFA account and verify your identity. You can also link your bank account to make deposits and withdrawals.",
          image: "~/assets/img/getting-started/create-account.webp"
        },
        {
          title: "Fund your account",
          description: "Deposit funds into your NEFA account using a bank transfer, wire transfer, or cryptocurrency.",
          image: "~/assets/img/getting-started/fund-account.webp"
        },
        {
          title: "Start trading",
          description: "Trade crypto, stocks, and other assets on NEFA. You can also use our APIs to build your own trading interface.",
          image: "~/assets/img/getting-started/start-trading.webp"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseSection = __nuxt_component_0;
  const _component_LandingListItem = __nuxt_component_1;
  const _component_BaseButton = __nuxt_component_1$1;
  const _component_LandingStep = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-38cd0329><section class="w-full my-36" data-v-38cd0329>`);
  _push(ssrRenderComponent(_component_BaseSection, { "data-aos": "fade-down" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-12 lg:col-span-7" data-v-38cd0329${_scopeId}><div class="w-full" data-v-38cd0329${_scopeId}><img${ssrRenderAttr("src", __vite_glob_0_25)} class="w-[95%]" alt="" data-v-38cd0329${_scopeId}></div></div><div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20" data-v-38cd0329${_scopeId}><h2 class="text-4xl font-semibold" data-v-38cd0329${_scopeId}> Introducing the <span class="text-header-gradient" data-v-38cd0329${_scopeId}>NEFA</span> Credit Card </h2><p class="paragraph" data-v-38cd0329${_scopeId}>Subject to cardholder and rewards terms which will be available at application.</p><ul class="space-y-4 sm:space-y-2" data-v-38cd0329${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "Up to 3% back on purchases" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "Earn rewards in bitcoin or any crypto on NEFA" }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_LandingListItem, { title: "No annual fee" }, null, _parent2, _scopeId));
        _push2(`</ul>`);
        _push2(ssrRenderComponent(_component_BaseButton, { class: "w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Join the waitlist`);
            } else {
              return [
                createTextVNode("Join the waitlist")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-12 lg:col-span-7" }, [
            createVNode("div", { class: "w-full" }, [
              createVNode("img", {
                src: __vite_glob_0_25,
                class: "w-[95%]",
                alt: ""
              })
            ])
          ]),
          createVNode("div", { class: "col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20" }, [
            createVNode("h2", { class: "text-4xl font-semibold" }, [
              createTextVNode(" Introducing the "),
              createVNode("span", { class: "text-header-gradient" }, "NEFA"),
              createTextVNode(" Credit Card ")
            ]),
            createVNode("p", { class: "paragraph" }, "Subject to cardholder and rewards terms which will be available at application."),
            createVNode("ul", { class: "space-y-4 sm:space-y-2" }, [
              createVNode(_component_LandingListItem, { title: "Up to 3% back on purchases" }),
              createVNode(_component_LandingListItem, { title: "Earn rewards in bitcoin or any crypto on NEFA" }),
              createVNode(_component_LandingListItem, { title: "No annual fee" })
            ]),
            createVNode(_component_BaseButton, { class: "w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base" }, {
              default: withCtx(() => [
                createTextVNode("Join the waitlist")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow-xl rounded-2xl overflow-hidden" data-v-38cd0329><div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6" data-v-38cd0329><div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8" data-v-38cd0329><h2 class="text-4xl font-semibold" data-v-38cd0329>Advanced Trading <span class="text-header-gradient" data-v-38cd0329>Tools</span></h2><div class="space-y-2" data-v-38cd0329><h4 class="text-lg font-medium" data-v-38cd0329>Professional Access, Non-stop Availability</h4><p class="paragraph text-sm xl:text-base" data-v-38cd0329> We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime. </p></div><div class="space-y-2" data-v-38cd0329><h4 class="text-lg font-medium" data-v-38cd0329>A Range of Powerful Apis</h4><p class="paragraph text-sm xl:text-base" data-v-38cd0329> Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming. </p></div><div class="space-y-2" data-v-38cd0329><h4 class="text-lg font-medium" data-v-38cd0329>Customer Support</h4><p class="paragraph text-sm xl:text-base" data-v-38cd0329> Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners. </p></div><div class="flex flex-col sm:flex-row" data-v-38cd0329>`);
  _push(ssrRenderComponent(_component_BaseButton, { class: "px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Get Started `);
      } else {
        return [
          createTextVNode(" Get Started ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_BaseButton, { class: "bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn More `);
      } else {
        return [
          createTextVNode(" Learn More ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></section><section class="w-full my-24" data-v-38cd0329><div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6" data-v-38cd0329><div data-aos="fade-right" class="col-span-12 lg:col-span-6" data-v-38cd0329><div class="w-full" data-v-38cd0329><img${ssrRenderAttr("src", __vite_glob_0_22)} class="w-full" alt="" data-v-38cd0329></div></div><div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8" data-v-38cd0329><h2 class="text-4xl font-semibold" data-v-38cd0329>Industry-leading security from day one</h2><ul class="space-y-8 sm:space-y-4" data-v-38cd0329>`);
  _push(ssrRenderComponent(_component_LandingListItem, { title: "Safety, security and compliance" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm text-gray-700 leading-relaxed" data-v-38cd0329${_scopeId}> NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. <span class="underline" data-v-38cd0329${_scopeId}>Learn more</span> about our commitment to security. </p>`);
      } else {
        return [
          createVNode("p", { class: "text-sm text-gray-700 leading-relaxed" }, [
            createTextVNode(" NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. "),
            createVNode("span", { class: "underline" }, "Learn more"),
            createTextVNode(" about our commitment to security. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_LandingListItem, { title: "Hardware security keys" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm text-gray-700 leading-relaxed" data-v-38cd0329${_scopeId}> With NEFA you can secure your account with a hardware security key via WebAuthn. </p>`);
      } else {
        return [
          createVNode("p", { class: "text-sm text-gray-700 leading-relaxed" }, " With NEFA you can secure your account with a hardware security key via WebAuthn. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_LandingListItem, { title: "SOC Certifications" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm text-gray-700 leading-relaxed" data-v-38cd0329${_scopeId}> NEFA is <span class="underline" data-v-38cd0329${_scopeId}>SOC 1 Type 2</span> and <span class="underline" data-v-38cd0329${_scopeId}>SOC 2 Type 2</span> compliant. We are the world\u2019s first cryptocurrency exchange and custodian to complete these exams. </p>`);
      } else {
        return [
          createVNode("p", { class: "text-sm text-gray-700 leading-relaxed" }, [
            createTextVNode(" NEFA is "),
            createVNode("span", { class: "underline" }, "SOC 1 Type 2"),
            createTextVNode(" and "),
            createVNode("span", { class: "underline" }, "SOC 2 Type 2"),
            createTextVNode(" compliant. We are the world\u2019s first cryptocurrency exchange and custodian to complete these exams. ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></div></div></section><section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow-xl sm:rounded-2xl overflow-hidden" data-v-38cd0329><div class="w-full py-16 flex flex-col items-center" data-v-38cd0329><h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center" data-v-38cd0329> Get started in just a few minutes </h2><div data-aos="fade-up" class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8" data-v-38cd0329><!--[-->`);
  ssrRenderList($data.steps, (step) => {
    _push(ssrRenderComponent(_component_LandingStep, {
      key: step.title,
      step
    }, null, _parent));
  });
  _push(`<!--]--><img${ssrRenderAttr("src", __vite_glob_0_18)} class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]" alt="" data-v-38cd0329><img${ssrRenderAttr("src", __vite_glob_0_18)} class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]" alt="" data-v-38cd0329></div></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/business.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const business = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38cd0329"]]);

export { business as default };
//# sourceMappingURL=business-05229b76.mjs.map
