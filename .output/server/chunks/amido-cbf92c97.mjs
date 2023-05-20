import { b as buildAssetsURL } from './renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "BaseButton",
  inheritAttrs: false
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 p-2" }, _ctx.$attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("amido.aa9b45e4.svg");

export { __nuxt_component_1 as _, _imports_0 as a };
//# sourceMappingURL=amido-cbf92c97.mjs.map
