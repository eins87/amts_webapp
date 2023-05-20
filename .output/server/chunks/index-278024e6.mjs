import { D as _imports_0, E as _imports_1, F as _imports_2, G as _imports_3, y as _imports_4, u as _imports_5, c as __nuxt_component_0$1, d as __vite_glob_0_0, e as __vite_glob_0_1, f as __vite_glob_0_2, g as __vite_glob_0_3, h as __vite_glob_0_4, i as __vite_glob_0_5, j as __vite_glob_0_6, k as __vite_glob_0_7, l as __vite_glob_0_8, m as __vite_glob_0_9, n as __vite_glob_0_10, o as __vite_glob_0_11, p as __vite_glob_0_12, q as __vite_glob_0_13, r as __vite_glob_0_14, s as __vite_glob_0_15, t as __vite_glob_0_16, b as __vite_glob_0_18, v as __vite_glob_0_19, w as __vite_glob_0_20, x as __vite_glob_0_21, a as __vite_glob_0_22, _ as __vite_glob_0_25, z as __vite_glob_0_26, A as __vite_glob_0_27, B as __vite_glob_0_28, C as __vite_glob_0_29, H as __vite_glob_0_34, I as __vite_glob_0_35, J as __vite_glob_0_36, K as __vite_glob_0_37 } from './macross-8197ef09.mjs';
import { _ as __nuxt_component_1, a as _imports_0$1 } from './amido-cbf92c97.mjs';
import { defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeStyle, useSSRContext, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, createBlock, Fragment, renderList } from 'vue';
import Lottie from 'lottie-web';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc$1 } from './server.mjs';
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

var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isArray = Array.isArray;
var isArray$1 = isArray;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$9.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$4.call(data, key) ? data[key] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map");
var Map$1 = Map;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
var Set$1$1 = Set$1;
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1$1 && getTag(new Set$1$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = defineComponent({
  props: {
    animationData: {
      type: Object,
      default: () => ({})
    },
    animationLink: {
      type: String,
      default: ""
    },
    loop: {
      type: [Boolean, Number],
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    },
    speed: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: "forward"
    },
    pauseOnHover: {
      type: Boolean,
      default: false
    },
    playOnHover: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    pauseAnimation: {
      type: Boolean,
      default: false
    },
    renderer: {
      type: String,
      default: "svg"
    },
    rendererSettings: {
      type: Object,
      default: () => ({})
    }
  },
  emits: {
    onComplete: null,
    onLoopComplete: null,
    onEnterFrame: null,
    onSegmentStart: null,
    onAnimationLoaded: null
  },
  setup(props, { emit: emits }) {
    let lottieAnimation = ref(null);
    const elementid = ref("");
    let direction = 1;
    const checkIfContainerExists = (elementID) => {
      if (document.querySelector(`[data-id="${elementID}"]`) !== null) {
        return true;
      } else {
        return false;
      }
    };
    const loadLottie = async (element) => {
      let autoPlay = props.autoPlay;
      if (props.playOnHover) {
        autoPlay = false;
      }
      let animationData = {};
      if (isEqual(props.animationData, {}) === false) {
        animationData = cloneDeep(props.animationData);
      }
      if (props.animationLink != "") {
        try {
          const response = await fetch(props.animationLink);
          const json = await response.json();
          animationData = json;
        } catch (error) {
          console.error(error);
          return;
        }
      }
      let loop = props.loop;
      if (typeof loop === "number") {
        if (loop > 0) {
          loop = loop - 1;
        }
      }
      if (props.delay > 0) {
        autoPlay = false;
      }
      const lottieAnimationConfig = {
        container: element,
        renderer: props.renderer,
        loop,
        autoplay: autoPlay,
        animationData
      };
      if (isEqual(props.rendererSettings, {}) === false) {
        lottieAnimationConfig.rendererSettings = props.rendererSettings;
      }
      lottieAnimation = Lottie.loadAnimation(lottieAnimationConfig);
      setTimeout(() => {
        autoPlay = props.autoPlay;
        if (props.playOnHover) {
          lottieAnimation.pause();
        } else {
          if (autoPlay) {
            lottieAnimation.play();
          } else {
            lottieAnimation.pause();
          }
        }
        emits("onAnimationLoaded");
      }, props.delay);
      lottieAnimation.setSpeed(props.speed);
      if (props.direction === "reverse") {
        lottieAnimation.setDirection(-1);
      }
      if (props.direction === "normal") {
        lottieAnimation.setDirection(1);
      }
      if (props.pauseAnimation) {
        lottieAnimation.pause();
      } else {
        if (props.playOnHover) {
          lottieAnimation.pause();
        }
      }
      lottieAnimation.addEventListener("loopComplete", () => {
        if (props.direction === "alternate") {
          lottieAnimation.stop();
          direction = direction * -1;
          lottieAnimation.setDirection(direction);
          lottieAnimation.play();
        }
        emits("onLoopComplete");
      });
      lottieAnimation.addEventListener("complete", () => {
        emits("onComplete");
      });
      lottieAnimation.addEventListener("enterFrame", () => {
        emits("onEnterFrame");
      });
      lottieAnimation.addEventListener("segmentStart", () => {
        emits("onSegmentStart");
      });
    };
    const getCurrentStyle = computed(() => {
      let width = props.width;
      let height = props.height;
      if (typeof props.width === "number") {
        width = `${props.width}px`;
      }
      if (typeof props.height === "number") {
        height = `${props.height}px`;
      }
      let cssVariables = {
        "--lottie-animation-container-width": width,
        "--lottie-animation-container-height": height,
        "--lottie-animation-container-background-color": props.backgroundColor
      };
      return cssVariables;
    });
    const hoverStarted = () => {
      if (lottieAnimation && props.pauseOnHover) {
        lottieAnimation.pause();
      }
      if (lottieAnimation && props.playOnHover) {
        lottieAnimation.play();
      }
    };
    const hoverEnded = () => {
      if (lottieAnimation && props.pauseOnHover) {
        lottieAnimation.play();
      }
      if (lottieAnimation && props.playOnHover) {
        lottieAnimation.pause();
      }
    };
    watch(() => props.pauseAnimation, () => {
      if ((props.pauseOnHover || props.playOnHover) && props.pauseAnimation) {
        console.error("If you are using pauseAnimation prop for Vue3-Lottie, please remove the props pauseOnHover and playOnHover");
        return;
      }
      if (lottieAnimation) {
        if (props.pauseAnimation) {
          lottieAnimation.pause();
        } else {
          lottieAnimation.play();
        }
      }
    });
    const play = () => {
      if (lottieAnimation) {
        lottieAnimation.play();
      }
    };
    const pause = () => {
      if (lottieAnimation) {
        lottieAnimation.pause();
      }
    };
    const stop = () => {
      if (lottieAnimation) {
        lottieAnimation.stop();
      }
    };
    const destroy = () => {
      if (lottieAnimation) {
        lottieAnimation.destroy();
      }
    };
    const setSpeed = (speed = 1) => {
      if (speed <= 0) {
        throw new Error("Speed must be greater than 0");
      }
      if (lottieAnimation) {
        lottieAnimation.setSpeed(speed);
      }
    };
    const setDirection = (direction2) => {
      if (lottieAnimation) {
        if (direction2 === "forward") {
          lottieAnimation.setDirection(1);
        } else if (direction2 === "reverse") {
          lottieAnimation.setDirection(-1);
        }
      }
    };
    const goToAndStop = (frame, isFrame = true) => {
      if (lottieAnimation) {
        lottieAnimation.goToAndStop(frame, isFrame);
      }
    };
    const goToAndPlay = (frame, isFrame = true) => {
      if (lottieAnimation) {
        lottieAnimation.goToAndPlay(frame, isFrame);
      }
    };
    const playSegments = (segments, forceFlag = false) => {
      if (lottieAnimation) {
        lottieAnimation.playSegments(segments, forceFlag);
      }
    };
    const setSubFrame = (useSubFrame = true) => {
      if (lottieAnimation) {
        lottieAnimation.setSubframe(useSubFrame);
      }
    };
    const getDuration = (inFrames = true) => {
      if (lottieAnimation) {
        return lottieAnimation.getDuration(inFrames);
      }
    };
    const updateDocumentData = (documentData, index = 0) => {
      if (lottieAnimation) {
        lottieAnimation.renderer.elements[index].updateDocumentData(documentData);
      }
    };
    const makeid = (length) => {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    };
    const setupLottie = (elementID) => {
      if (props.pauseOnHover && props.playOnHover) {
        throw new Error("You cannot set pauseOnHover and playOnHover for Vue3-Lottie at the same time.");
      }
      if (props.animationLink === "" && isEqual(props.animationData, {})) {
        console.log(props.animationData, "animationData", props.animationLink, "animationLink");
        throw new Error("You must provide either animationLink or animationData");
      }
      const interval = setInterval(() => {
        if (checkIfContainerExists(elementID)) {
          clearInterval(interval);
          const element = document.querySelector(`[data-id="${elementID}" ]`);
          if (element) {
            loadLottie(element);
          }
        }
      }, 0);
    };
    onMounted(async () => {
      elementid.value = makeid(20);
      setupLottie(elementid.value);
    });
    return {
      elementid,
      hoverEnded,
      hoverStarted,
      getCurrentStyle,
      play,
      pause,
      stop,
      destroy,
      setSpeed,
      setDirection,
      goToAndStop,
      goToAndPlay,
      playSegments,
      setSubFrame,
      getDuration,
      updateDocumentData
    };
  }
});
const _hoisted_1 = ["data-id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "data-id": _ctx.elementid,
    class: "lottie-animation-container",
    style: normalizeStyle(_ctx.getCurrentStyle),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverStarted && _ctx.hoverStarted(...args)),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.hoverEnded && _ctx.hoverEnded(...args))
  }, null, 44, _hoisted_1);
}
var Vue3Lottie = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$3 = {
  name: "LottieAnimation",
  components: { Lottie: Vue3Lottie },
  props: {
    animationLink: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(ssrRenderComponent(_component_client_only, _attrs, {}, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LottieAnimation.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: {
    img: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  methods: {
    useAsset(path) {
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
        "/assets/img/logo/amido.svg": _imports_0$1,
        "/assets/img/logo/mita-icon.svg": _imports_4,
        "/assets/img/nefa-cc.webp": __vite_glob_0_25,
        "/assets/img/partner/background.png": __vite_glob_0_26,
        "/assets/img/partner/jtekt-logo.svg": __vite_glob_0_27,
        "/assets/img/partner/mayora-logo.svg": __vite_glob_0_28,
        "/assets/img/partner/ocbc-logo.svg": __vite_glob_0_29,
        "/assets/img/pattern/ellipse-1.png": _imports_0,
        "/assets/img/pattern/ellipse-2.png": _imports_1,
        "/assets/img/pattern/ellipse-3.png": _imports_2,
        "/assets/img/pattern/star.png": _imports_3,
        "/assets/img/thumbnail.jpg": __vite_glob_0_34,
        "/assets/img/timeline/kill_la_kill.jpg": __vite_glob_0_35,
        "/assets/img/timeline/level_e.jpg": __vite_glob_0_36,
        "/assets/img/timeline/macross.jpg": __vite_glob_0_37
      });
      return assets["/assets/" + path];
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><img${ssrRenderAttr("src", $options.useAsset(`img/partner/${$props.img}`))} class="w-[75%] aspect-auto m-4 sm:w-1/2 lg:w-[30rem] lg:m-5 lg:p-4 mx-auto"${ssrRenderAttr("alt", `${$props.img}`)}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/PartnerImage.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  name: "BaseAccordion",
  props: {
    accordion: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");
  const _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "relative border-b-2 border-gray-200" }, _attrs))}><button type="button" class="w-full py-4 text-left"><div class="flex items-center justify-between"><span class="font-medium">${ssrInterpolate($props.accordion.title)}</span>`);
  if ($data.selected) {
    _push(ssrRenderComponent(_component_ChevronUpIcon, { size: 20 }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_ChevronDownIcon, { size: 20 }, null, _parent));
  }
  _push(`</div></button>`);
  if ($data.selected) {
    _push(`<div class="relative overflow-hidden transition-all duration-700" style="${ssrRenderStyle({})}"><div class="py-2"><p class="text-sm text-gray-700 tracking-wide leading-relaxed">${ssrInterpolate($props.accordion.description)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/base/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "IndexPage",
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: "country-icon/eng.png",
        name: "USD"
      },
      currencies: [
        {
          img: "country-icon/eng.png",
          name: "USD"
        }
      ],
      cryptoSelected: {
        img: "crypto-icon/bitcoin.png",
        name: "BTC"
      },
      cryptocurrencies: [
        {
          img: "crypto-icon/bitcoin.png",
          name: "BTC"
        }
      ],
      trendings: [
        {
          id: 1,
          name: "Bitcoin",
          price: 43180.13,
          logo: "bitcoin.png",
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50]
        },
        {
          id: 2,
          name: "Ethereum",
          price: 3480.65,
          logo: "ethereum.png",
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80]
        },
        {
          id: 3,
          name: "Solana",
          price: 150.2,
          logo: "solana.png",
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35]
        },
        {
          id: 4,
          name: "Dogecoin",
          price: 0.1572,
          logo: "dogecoin.png",
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40]
        }
      ],
      topGainers: [
        {
          id: 1,
          name: "PAPPAY",
          price: 374e-5,
          logo: "pappay.png",
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45]
        },
        {
          id: 2,
          name: "Bitcoin Asia",
          price: 0.02096,
          logo: "bitcoin-asia.png",
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70]
        },
        {
          id: 3,
          name: "MoonRock",
          price: 4907e-6,
          logo: "moonrock.png",
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45]
        },
        {
          id: 4,
          name: "NinjaFloki",
          price: 123e-6,
          logo: "ninjafloki.png",
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35]
        }
      ],
      recents: [
        {
          id: 1,
          name: "MetaCraft",
          price: 0.0608,
          logo: "metacraft.png",
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45]
        },
        {
          id: 2,
          name: "Frog",
          price: 0.5875,
          logo: "frog.png",
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45]
        },
        {
          id: 3,
          name: "Musk Doge",
          price: 0.04041,
          logo: "musk-doge.png",
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45]
        },
        {
          id: 4,
          name: "2SHARE",
          price: 1366.24,
          logo: "2share.png",
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40]
        }
      ],
      accordions: [
        {
          title: "Why should I choose NEFA?",
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."
        },
        {
          title: "How secure is NEFA?",
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."
        },
        {
          title: "Do I have to buy a whole Bitcoin?",
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."
        },
        {
          title: "How do I actually buy Bitcoin?",
          description: "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features."
        }
      ]
    };
  },
  methods: {
    downloadCompanyProfile() {
      const link = document.createElement("a");
      link.href = "/doc/company_profile.pdf";
      link.download = "doc/company_profile.pdf";
      link.target = "_blank";
      link.click();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BaseSection = __nuxt_component_0$1;
  const _component_BaseButton = __nuxt_component_1;
  const _component_LottieAnimation = __nuxt_component_2;
  const _component_LandingPartnerImage = __nuxt_component_3;
  const _component_BaseAccordion = __nuxt_component_4;
  const _component_ArrowUpIcon = resolveComponent("ArrowUpIcon");
  const _directive_smooth_scroll = resolveDirective("smooth-scroll");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-b4b02197><section id="hero" class="w-full pb-24" data-v-b4b02197>`);
  _push(ssrRenderComponent(_component_BaseSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left mb-2" data-v-b4b02197${_scopeId}><h1 data-aos="fade-right" data-aos-once="true" class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10" data-v-b4b02197${_scopeId}> providing <span class="text-header-gradient" data-v-b4b02197${_scopeId}>Solutions to your business</span> with best products and services. </h1><p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block" data-v-b4b02197${_scopeId}> Our Mission to Distribute products and services to businesses by maintaining the highest standard of quality, offering innovation and advanced technologies to ensure costomer satisfactions. </p><div data-aos="fade-up" data-aos-once="true" class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2" data-v-b4b02197${_scopeId}>`);
        _push2(ssrRenderComponent(_component_BaseButton, {
          class: "max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center",
          onClick: $options.downloadCompanyProfile
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span data-v-b4b02197${_scopeId2}>Download Our Company Profile</span>`);
            } else {
              return [
                createVNode("span", null, "Download Our Company Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="hidden sm:block sm:justify-between col-span-12 lg:col-span-6 sm:mt-5" data-v-b4b02197${_scopeId}><div data-aos="zoom-in" data-aos-once="true" data-aos-delay="500" class="w-full h-[30vh] lg:h-full" data-v-b4b02197${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LottieAnimation, { "animation-link": "https://assets2.lottiefiles.com/packages/lf20_vvtkfqbo.json" }, null, _parent2, _scopeId));
        _push2(`</div></div><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", _imports_0)} class="hidden sm:block absolute bottom-20 xl:bottom-16 left-4 xl:left-0 w-6" data-v-b4b02197${_scopeId}><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", _imports_1)} class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[40rem] w-6" data-v-b4b02197${_scopeId}><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", _imports_2)} class="hidden sm:block absolute bottom-56 right-40 w-6" data-v-b4b02197${_scopeId}><img data-aos="fade-up" data-aos-delay="300"${ssrRenderAttr("src", _imports_3)} class="hidden sm:block absolute bottom-10 sm:bottom-28 right-10 lg:right-0 lg:left-[35rem] w-8" data-v-b4b02197${_scopeId}>`);
      } else {
        return [
          createVNode("div", { class: "col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left mb-2" }, [
            createVNode("h1", {
              "data-aos": "fade-right",
              "data-aos-once": "true",
              class: "text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
            }, [
              createTextVNode(" providing "),
              createVNode("span", { class: "text-header-gradient" }, "Solutions to your business"),
              createTextVNode(" with best products and services. ")
            ]),
            createVNode("p", {
              "data-aos": "fade-down",
              "data-aos-once": "true",
              "data-aos-delay": "300",
              class: "paragraph hidden sm:block"
            }, " Our Mission to Distribute products and services to businesses by maintaining the highest standard of quality, offering innovation and advanced technologies to ensure costomer satisfactions. "),
            createVNode("div", {
              "data-aos": "fade-up",
              "data-aos-once": "true",
              class: "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
            }, [
              createVNode(_component_BaseButton, {
                class: "max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center",
                onClick: $options.downloadCompanyProfile
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Download Our Company Profile")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          createVNode("div", { class: "hidden sm:block sm:justify-between col-span-12 lg:col-span-6 sm:mt-5" }, [
            createVNode("div", {
              "data-aos": "zoom-in",
              "data-aos-once": "true",
              "data-aos-delay": "500",
              class: "w-full h-[30vh] lg:h-full"
            }, [
              createVNode(_component_LottieAnimation, { "animation-link": "https://assets2.lottiefiles.com/packages/lf20_vvtkfqbo.json" })
            ])
          ]),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: _imports_0,
            class: "hidden sm:block absolute bottom-20 xl:bottom-16 left-4 xl:left-0 w-6"
          }),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: _imports_1,
            class: "hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[40rem] w-6"
          }),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: _imports_2,
            class: "hidden sm:block absolute bottom-56 right-40 w-6"
          }),
          createVNode("img", {
            "data-aos": "fade-up",
            "data-aos-delay": "300",
            src: _imports_3,
            class: "hidden sm:block absolute bottom-10 sm:bottom-28 right-10 lg:right-0 lg:left-[35rem] w-8"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-8 sm:py-6 rounded-[2.25rem] sm:rounded-xl bg-white shadow-xl sm:shadow-xl transform lg:-translate-y-12" data-aos="fade-right" data-aos-once="true" data-aos-delay="300" data-v-b4b02197><div class="w-full flex flex-col lg:flex-row items-center justify-center" data-v-b4b02197><div class="col-span-12 lg:col-span-7" data-v-b4b02197><div class="w-[35rem]" data-v-b4b02197>`);
  _push(ssrRenderComponent(_component_LottieAnimation, { "animation-link": "https://assets2.lottiefiles.com/packages/lf20_myigw022.json" }, null, _parent));
  _push(`</div></div><div class="col-span-12 lg:col-span-5 space-y-4 px-4 sm:px-6 mt-5" data-v-b4b02197><h2 class="text-4xl font-semibold" data-v-b4b02197><span class="text-header-gradient" data-v-b4b02197>Introducing</span></h2><p class="paragraph" data-v-b4b02197> PT. AMIDO MAKMOR TULUS SEJATI was humbly established in 1987 initially as the sole distributor for <img class="w-10 inline-block mb-1.5"${ssrRenderAttr("src", _imports_4)} data-v-b4b02197> copiers from Japan and Amida brand Typewriters. Since then we have expanded our business from office domain business such as Document Solutions, Document Security to public doamin business such as Point of Sales Systems and Content Management Services. </p><p class="paragraph" data-v-b4b02197> In 2012, we changed our identity from &quot;PT. AMIDA TULUS SEJATI&quot; to &quot;PT. AMIDO MAKMOR TULUS SEJATI&quot; in comformity to our commitment towards Solutions business in Document as well as Content Management Business which display tremendous growth due to advancement of internet technology. Nevertheless our motto &quot;Always With You&quot; never changed as we remain alongside all our costumers and strive even harder not only to serve well but try to exceed their expectations. </p></div></div></section><section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow-xl sm:rounded-2xl overflow-hidden" data-v-b4b02197><div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center" data-v-b4b02197><h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold" data-v-b4b02197>Our Customers</h3><div data-aos="fade-up" class="flex flex-wrap items-center justify-center" data-v-b4b02197><!--[-->`);
  ssrRenderList(["mayora-logo.svg", "ocbc-logo.svg", "jtekt-logo.svg"], (img) => {
    _push(ssrRenderComponent(_component_LandingPartnerImage, {
      key: img,
      img
    }, null, _parent));
  });
  _push(`<!--]--></div></div></section><section class="w-full my-24" data-v-b4b02197>`);
  _push(ssrRenderComponent(_component_BaseSection, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6" data-v-b4b02197${_scopeId}><div class="w-full" data-v-b4b02197${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="w-ll" alt="" data-v-b4b02197${_scopeId}></div></div><div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8" data-v-b4b02197${_scopeId}><span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2" data-v-b4b02197${_scopeId}>Support</span><h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6" data-v-b4b02197${_scopeId}>Frequently asked questions</h2><ul class="shadow-box" data-v-b4b02197${_scopeId}><!--[-->`);
        ssrRenderList($data.accordions, (accordion, index2) => {
          _push2(ssrRenderComponent(_component_BaseAccordion, {
            key: index2,
            accordion
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></ul></div>`);
      } else {
        return [
          createVNode("div", {
            "data-aos": "fade-right",
            "data-aos-delay": "150",
            class: "col-span-12 lg:col-span-6"
          }, [
            createVNode("div", { class: "w-full" }, [
              createVNode("img", {
                src: _imports_5,
                class: "w-ll",
                alt: ""
              })
            ])
          ]),
          createVNode("div", {
            "data-aos": "fade-left",
            "data-aos-delay": "150",
            class: "col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8"
          }, [
            createVNode("span", { class: "text-base text-gradient font-semibold uppercase mb-4 sm:mb-2" }, "Support"),
            createVNode("h2", { class: "text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6" }, "Frequently asked questions"),
            createVNode("ul", { class: "shadow-box" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($data.accordions, (accordion, index2) => {
                return openBlock(), createBlock(_component_BaseAccordion, {
                  key: index2,
                  accordion
                }, null, 8, ["accordion"]);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><div class="w-full my-10 flex justify-center" data-v-b4b02197><a${ssrRenderAttrs(mergeProps({
    "data-aos": "flip-down",
    "data-aos-delay": "150",
    href: "#navbar",
    class: "px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
  }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)))} data-v-b4b02197><span data-v-b4b02197>Back to top</span>`);
  _push(ssrRenderComponent(_component_ArrowUpIcon, { size: 20 }, null, _parent));
  _push(`</a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b4b02197"]]);

export { index as default };
//# sourceMappingURL=index-278024e6.mjs.map
