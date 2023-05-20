globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setCookie, appendHeader, parseCookies, getHeaders, getMethod, getQuery, createError, isMethod, readBody, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn, defu as defu$1 } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { AuthHandler } from 'next-auth/core';
import getURL from 'requrl';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{"firebaseApiKey":"FIREBASE_API_KEY","auth":{"isEnabled":true,"origin":"","basePath":"/api/auth","trustHost":false,"enableSessionRefreshPeriodically":false,"enableSessionRefreshOnWindowFocus":true,"enableGlobalAppMiddleware":false,"defaultProvider":"","addDefaultCallbackUrl":true,"globalMiddlewareOptions":{"allow404WithoutAuth":true,"addDefaultCallbackUrl":true}}},"apiSecret":"123456789","auth":{"isEnabled":true,"origin":"","basePath":"/api/auth","trustHost":false,"enableSessionRefreshPeriodically":false,"enableSessionRefreshOnWindowFocus":true,"enableGlobalAppMiddleware":false,"defaultProvider":"","addDefaultCallbackUrl":true,"globalMiddlewareOptions":{"allow404WithoutAuth":true,"addDefaultCallbackUrl":true},"isOriginSet":false}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const ERROR_MESSAGES = {
  NO_SECRET: "AUTH_NO_SECRET: No `secret` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development",
  NO_ORIGIN: "AUTH_NO_ORIGIN: No `origin` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development"
};
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params?._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const getServerOrigin = (event) => {
  const envOrigin = process.env.AUTH_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  const runtimeConfigOrigin = useRuntimeConfig().auth.origin;
  if (runtimeConfigOrigin) {
    return runtimeConfigOrigin;
  }
  if (event && "production" !== "production") {
    return getURL(event.node.req);
  }
  throw new Error(ERROR_MESSAGES.NO_ORIGIN);
};
const detectHost = (event, { trusted, basePath }) => {
  if (trusted) {
    const forwardedValue = getURL(event.node.req);
    if (forwardedValue) {
      return Array.isArray(forwardedValue) ? forwardedValue[0] : forwardedValue;
    }
  }
  let origin;
  try {
    origin = getServerOrigin(event);
  } catch (error) {
    return void 0;
  }
  return joinURL(origin, basePath);
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      throw new Error(ERROR_MESSAGES.NO_SECRET);
    }
  }
  const options = defu$1(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useRuntimeConfig().auth.trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: detectHost(event, { trusted: useRuntimeConfig().auth.trustHost, basePath: useRuntimeConfig().auth.basePath }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: String(error) || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};

function defineNitroPlugin(def) {
  return def;
}
const _SVWMAb9ZPA = defineNitroPlugin(() => {
  try {
    getServerOrigin();
  } catch (error) {
    {
      throw error;
    }
  }
});

const plugins = [
  _SVWMAb9ZPA
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"33ee-y9mMhbUQuU7bkFwYJ9r992leM2I\"",
    "mtime": "2023-04-04T08:15:41.661Z",
    "size": 13294,
    "path": "../public/favicon.ico"
  },
  "/doc/company_profile.pdf": {
    "type": "application/pdf",
    "etag": "\"16a2b3-W/UjurA7S+FNvISVmKJMGoMCKSU\"",
    "mtime": "2023-04-01T23:50:20.378Z",
    "size": 1483443,
    "path": "../public/doc/company_profile.pdf"
  },
  "/_nuxt/advanced-trading-tools.07ce0497.webp": {
    "type": "image/webp",
    "etag": "\"170e8-ekUdWzNC/BB9jAE7PqjstRFpopQ\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 94440,
    "path": "../public/_nuxt/advanced-trading-tools.07ce0497.webp"
  },
  "/_nuxt/amido.2b1a0070.js": {
    "type": "application/javascript",
    "etag": "\"1bc-dkKMY+sXZQW7nN0NUyAhhUCZ4H0\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 444,
    "path": "../public/_nuxt/amido.2b1a0070.js"
  },
  "/_nuxt/amido.aa9b45e4.svg": {
    "type": "image/svg+xml",
    "etag": "\"4209-OKoSz0rbEBM8bXyLppbmAFESY8g\"",
    "mtime": "2023-04-24T16:54:29.223Z",
    "size": 16905,
    "path": "../public/_nuxt/amido.aa9b45e4.svg"
  },
  "/_nuxt/auth.aa8b8810.js": {
    "type": "application/javascript",
    "etag": "\"96-uljr+YOVMDZQZNz1V/fpCshJxDk\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 150,
    "path": "../public/_nuxt/auth.aa8b8810.js"
  },
  "/_nuxt/background.36e5d431.png": {
    "type": "image/png",
    "etag": "\"3c9fb-InP1PvrQnpn9UpoIonGDnHS3M5w\"",
    "mtime": "2023-04-24T16:54:29.225Z",
    "size": 248315,
    "path": "../public/_nuxt/background.36e5d431.png"
  },
  "/_nuxt/bg-trading-tools.cdc648af.webp": {
    "type": "image/webp",
    "etag": "\"4af32-Ty2v3wjtCWtA254AQxZqzH5s2IQ\"",
    "mtime": "2023-04-24T16:54:29.218Z",
    "size": 306994,
    "path": "../public/_nuxt/bg-trading-tools.cdc648af.webp"
  },
  "/_nuxt/business.49b1aa65.js": {
    "type": "application/javascript",
    "etag": "\"22f2-Y7ChYoAMpimpGMqY69enlYWWObE\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 8946,
    "path": "../public/_nuxt/business.49b1aa65.js"
  },
  "/_nuxt/business.97e82756.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"83-m+Tlzb5uxV5foLOCAWv6RlL09hM\"",
    "mtime": "2023-04-24T16:54:29.231Z",
    "size": 131,
    "path": "../public/_nuxt/business.97e82756.css"
  },
  "/_nuxt/buy-and-trade.255d95c7.webp": {
    "type": "image/webp",
    "etag": "\"c83c-8E3Ay/UQBOLO8lJ22OAGMQm1AQI\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 51260,
    "path": "../public/_nuxt/buy-and-trade.255d95c7.webp"
  },
  "/_nuxt/buy-crypto.f6a20d71.png": {
    "type": "image/png",
    "etag": "\"7ecf-8AGxintZvR+urRmFRrCh+yrb+Qo\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 32463,
    "path": "../public/_nuxt/buy-crypto.f6a20d71.png"
  },
  "/_nuxt/default.197de2b1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"343-n16VnVNK83com9D3TAXA5KihYKs\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 835,
    "path": "../public/_nuxt/default.197de2b1.css"
  },
  "/_nuxt/default.cad460fb.js": {
    "type": "application/javascript",
    "etag": "\"177e-JVevzi6KVURMH91sBzHdkA5OKVI\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 6014,
    "path": "../public/_nuxt/default.cad460fb.js"
  },
  "/_nuxt/entry.435976a5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c2b2-Iht5P/5EgcyXajl7y43x41c0Rcc\"",
    "mtime": "2023-04-24T16:54:29.225Z",
    "size": 49842,
    "path": "../public/_nuxt/entry.435976a5.css"
  },
  "/_nuxt/entry.d98840dc.js": {
    "type": "application/javascript",
    "etag": "\"820e2-7wjpbB9LGtOjYQXLy3d/A2cFgjc\"",
    "mtime": "2023-04-24T16:54:29.240Z",
    "size": 532706,
    "path": "../public/_nuxt/entry.d98840dc.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.5c319863.js": {
    "type": "application/javascript",
    "etag": "\"1968-K391Pjg12ksuFwg67Oz0Sh8Htzc\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 6504,
    "path": "../public/_nuxt/error-404.5c319863.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-500.c75da8a6.js": {
    "type": "application/javascript",
    "etag": "\"751-cpbrn0G1QSEWWETzLSTEwj0MkRE\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 1873,
    "path": "../public/_nuxt/error-500.c75da8a6.js"
  },
  "/_nuxt/error-component.ba00011f.js": {
    "type": "application/javascript",
    "etag": "\"45e-aXTkXcRyM6Ydg9dzZ5FT4+XGRRw\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.ba00011f.js"
  },
  "/_nuxt/faq.05bc91ef.webp": {
    "type": "image/webp",
    "etag": "\"cad0-I10CGSMauB7nhaai9ekEmcCKI+Q\"",
    "mtime": "2023-04-24T16:54:29.223Z",
    "size": 51920,
    "path": "../public/_nuxt/faq.05bc91ef.webp"
  },
  "/_nuxt/fund.57d2c316.png": {
    "type": "image/png",
    "etag": "\"a057-q6dElx05w87eipkETiyk+JWEW1k\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 41047,
    "path": "../public/_nuxt/fund.57d2c316.png"
  },
  "/_nuxt/index.18751afa.js": {
    "type": "application/javascript",
    "etag": "\"3327-0qqPLeYBpDON8FjTIhNElh4o/tE\"",
    "mtime": "2023-04-24T16:54:29.238Z",
    "size": 13095,
    "path": "../public/_nuxt/index.18751afa.js"
  },
  "/_nuxt/index.9f734ab7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18f-6r4ruy2SXx6GW/HmJxy2/ytWbow\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 399,
    "path": "../public/_nuxt/index.9f734ab7.css"
  },
  "/_nuxt/industry-leading-security.c5eba2e6.webp": {
    "type": "image/webp",
    "etag": "\"fd3e-02Oo9kMejQcjFbj9/trBnj31/ts\"",
    "mtime": "2023-04-24T16:54:29.223Z",
    "size": 64830,
    "path": "../public/_nuxt/industry-leading-security.c5eba2e6.webp"
  },
  "/_nuxt/jtekt-logo.8f88eb00.svg": {
    "type": "image/svg+xml",
    "etag": "\"8d6-d5gyih8pUCK9xpthPAyylWBe9tk\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 2262,
    "path": "../public/_nuxt/jtekt-logo.8f88eb00.svg"
  },
  "/_nuxt/kill_la_kill.5f6f7c2c.jpg": {
    "type": "image/jpeg",
    "etag": "\"23a32-mz7aC3rLS2Iic3DWT2JlvGyH3uc\"",
    "mtime": "2023-04-24T16:54:29.225Z",
    "size": 145970,
    "path": "../public/_nuxt/kill_la_kill.5f6f7c2c.jpg"
  },
  "/_nuxt/level_e.11243e03.jpg": {
    "type": "image/jpeg",
    "etag": "\"294c7-ZE/9GXtFsr/JT9yLN+vJKOuqZXM\"",
    "mtime": "2023-04-24T16:54:29.225Z",
    "size": 169159,
    "path": "../public/_nuxt/level_e.11243e03.jpg"
  },
  "/_nuxt/macross.6d39b8ad.js": {
    "type": "application/javascript",
    "etag": "\"dc2a-923gjE7IxJtrwo6oWqR4kxjef3M\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 56362,
    "path": "../public/_nuxt/macross.6d39b8ad.js"
  },
  "/_nuxt/macross.ddd4d925.jpg": {
    "type": "image/jpeg",
    "etag": "\"23891-4hQBDU64I8Q1M0WuEhzPASH6ZKQ\"",
    "mtime": "2023-04-24T16:54:29.225Z",
    "size": 145553,
    "path": "../public/_nuxt/macross.ddd4d925.jpg"
  },
  "/_nuxt/macross.e47b0f1a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5c11-oRwSjFBfsSa6ELuIdhAUYO8chXA\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 23569,
    "path": "../public/_nuxt/macross.e47b0f1a.css"
  },
  "/_nuxt/mayora-logo.0171154a.svg": {
    "type": "image/svg+xml",
    "etag": "\"2523-uuke4ul6TklQU5EaMFhclb+cPoY\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 9507,
    "path": "../public/_nuxt/mayora-logo.0171154a.svg"
  },
  "/_nuxt/mita-icon.8c206786.svg": {
    "type": "image/svg+xml",
    "etag": "\"816-0Y+mulPfi6M/xycr/ynBlfyzjxE\"",
    "mtime": "2023-04-24T16:54:29.223Z",
    "size": 2070,
    "path": "../public/_nuxt/mita-icon.8c206786.svg"
  },
  "/_nuxt/multifunction_printers.f82feffb.js": {
    "type": "application/javascript",
    "etag": "\"d3-cjdgqesBMIt9DYutyVwCErao9xA\"",
    "mtime": "2023-04-24T16:54:29.237Z",
    "size": 211,
    "path": "../public/_nuxt/multifunction_printers.f82feffb.js"
  },
  "/_nuxt/nefa-cc.00db6731.webp": {
    "type": "image/webp",
    "etag": "\"14cb8-/dUjg92qabOe55hSTKLiMVWG2bw\"",
    "mtime": "2023-04-24T16:54:29.223Z",
    "size": 85176,
    "path": "../public/_nuxt/nefa-cc.00db6731.webp"
  },
  "/_nuxt/ocbc-logo.c035dedc.svg": {
    "type": "image/svg+xml",
    "etag": "\"f95-eEXxJA6MnNTD4I96bY8hQOmcCgo\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 3989,
    "path": "../public/_nuxt/ocbc-logo.c035dedc.svg"
  },
  "/_nuxt/production_printers.53faaece.js": {
    "type": "application/javascript",
    "etag": "\"d6-nZe12HyjiqW/b0cqKSd7UNt4F9w\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 214,
    "path": "../public/_nuxt/production_printers.53faaece.js"
  },
  "/_nuxt/sign-up.7e88cec9.png": {
    "type": "image/png",
    "etag": "\"9dd9-SUMiX+tjCrQMWT8VAuGCsewxPHU\"",
    "mtime": "2023-04-24T16:54:29.224Z",
    "size": 40409,
    "path": "../public/_nuxt/sign-up.7e88cec9.png"
  },
  "/_nuxt/solutions.dce6c90c.js": {
    "type": "application/javascript",
    "etag": "\"d4-CZebgEUV1NIKjhcgtOb3FFTRsCk\"",
    "mtime": "2023-04-24T16:54:29.236Z",
    "size": 212,
    "path": "../public/_nuxt/solutions.dce6c90c.js"
  },
  "/_nuxt/thumbnail.c759090f.jpg": {
    "type": "image/jpeg",
    "etag": "\"a21a0-q9or1FfogncbRlBNuGTfko7hExE\"",
    "mtime": "2023-04-24T16:54:29.230Z",
    "size": 663968,
    "path": "../public/_nuxt/thumbnail.c759090f.jpg"
  },
  "/img/lottie/vue-js.json": {
    "type": "application/json",
    "etag": "\"56fa-rd09qe7jRmMgeqwCrnZKTUTCj4U\"",
    "mtime": "2023-04-16T17:19:46.403Z",
    "size": 22266,
    "path": "../public/img/lottie/vue-js.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_QryXhg = () => import('./apisecret.get.mjs');
const _lazy_7ShfDz = () => import('./_..._.mjs');
const _lazy_1NhOnp = () => import('./firebasekey.get.mjs');
const _lazy_seIvxu = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/apisecret', handler: _lazy_QryXhg, lazy: true, middleware: false, method: "get" },
  { route: '/api/auth/**', handler: _lazy_7ShfDz, lazy: true, middleware: false, method: undefined },
  { route: '/api/firebasekey', handler: _lazy_1NhOnp, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_seIvxu, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_seIvxu, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { NuxtAuthHandler as N, useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
