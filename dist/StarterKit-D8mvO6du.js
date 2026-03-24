import pe, { useState as A, useEffect as ue } from "react";
var y = { exports: {} }, f = {};
var $;
function xe() {
  if ($) return f;
  $ = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function t(m, l, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), l.key !== void 0 && (d = "" + l.key), "key" in l) {
      h = {};
      for (var p in l)
        p !== "key" && (h[p] = l[p]);
    } else h = l;
    return l = h.ref, {
      $$typeof: a,
      type: m,
      key: d,
      ref: l !== void 0 ? l : null,
      props: h
    };
  }
  return f.Fragment = r, f.jsx = t, f.jsxs = t, f;
}
var N = {};
var G;
function je() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === me ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case k:
          return "Fragment";
        case ae:
          return "Profiler";
        case se:
          return "StrictMode";
        case le:
          return "Suspense";
        case ie:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case ee:
            return "Portal";
          case re:
            return s.displayName || "Context";
          case ne:
            return (s._context.displayName || "Context") + ".Consumer";
          case te:
            var n = s.render;
            return s = s.displayName, s || (s = n.displayName || n.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case ce:
            return n = s.displayName || null, n !== null ? n : a(s.type) || "Memo";
          case _:
            n = s._payload, s = s._init;
            try {
              return a(s(n));
            } catch {
            }
        }
      return null;
    }
    function r(s) {
      return "" + s;
    }
    function t(s) {
      try {
        r(s);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var i = n.error, c = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return i.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), r(s);
      }
    }
    function m(s) {
      if (s === k) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === _)
        return "<...>";
      try {
        var n = a(s);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var s = T.A;
      return s === null ? null : s.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function d(s) {
      if (H.call(s, "key")) {
        var n = Object.getOwnPropertyDescriptor(s, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function p(s, n) {
      function i() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: i,
        configurable: !0
      });
    }
    function Z() {
      var s = a(this.type);
      return z[s] || (z[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function Q(s, n, i, c, b, C) {
      var o = i.ref;
      return s = {
        $$typeof: U,
        type: s,
        key: n,
        props: i,
        _owner: c
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: Z
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: b
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function D(s, n, i, c, b, C) {
      var o = n.children;
      if (o !== void 0)
        if (c)
          if (de(o)) {
            for (c = 0; c < o.length; c++)
              M(o[c]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(o);
      if (H.call(n, "key")) {
        o = a(s);
        var x = Object.keys(n).filter(function(he) {
          return he !== "key";
        });
        c = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", B[o + c] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          o,
          x,
          o
        ), B[o + c] = !0);
      }
      if (o = null, i !== void 0 && (t(i), o = "" + i), d(n) && (t(n.key), o = "" + n.key), "key" in n) {
        i = {};
        for (var S in n)
          S !== "key" && (i[S] = n[S]);
      } else i = n;
      return o && p(
        i,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), Q(
        s,
        o,
        i,
        l(),
        b,
        C
      );
    }
    function M(s) {
      q(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === _ && (s._payload.status === "fulfilled" ? q(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function q(s) {
      return typeof s == "object" && s !== null && s.$$typeof === U;
    }
    var g = pe, U = /* @__PURE__ */ Symbol.for("react.transitional.element"), ee = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), se = /* @__PURE__ */ Symbol.for("react.strict_mode"), ae = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.consumer"), re = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), ce = /* @__PURE__ */ Symbol.for("react.memo"), _ = /* @__PURE__ */ Symbol.for("react.lazy"), oe = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.client.reference"), T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, de = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var Y, z = {}, W = g.react_stack_bottom_frame.bind(
      g,
      h
    )(), L = E(m(h)), B = {};
    N.Fragment = k, N.jsx = function(s, n, i) {
      var c = 1e4 > T.recentlyCreatedOwnerStacks++;
      return D(
        s,
        n,
        i,
        !1,
        c ? Error("react-stack-top-frame") : W,
        c ? E(m(s)) : L
      );
    }, N.jsxs = function(s, n, i) {
      var c = 1e4 > T.recentlyCreatedOwnerStacks++;
      return D(
        s,
        n,
        i,
        !0,
        c ? Error("react-stack-top-frame") : W,
        c ? E(m(s)) : L
      );
    };
  })()), N;
}
var J;
function fe() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? y.exports = xe() : y.exports = je()), y.exports;
}
var e = fe();
const Ne = ["text", "email", "tel", "url", "password"], Re = ["number", "date", "time", "datetime-local"], Ie = ["radio", "checkbox"], Pe = "select", ge = "textarea", be = [
  ...Ne,
  ...Re,
  ...Ie,
  Pe,
  ge
];
function ye() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useEffect" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: ")" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "=>" }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "{"
    ] }),
    `
`,
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      "   // 1. Fetch your data from an API or DB",
      /* @__PURE__ */ e.jsx("br", {}),
      "   // 2. Map it to your configuration objects"
    ] }),
    `
`,
    "   ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fetchedConfigs " }),
    "= ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "username" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "email" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "password" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" }),
    `
`,
    "   ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "setData" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    `
`,
    "     ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "configArray" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fetchedConfigs" }),
    ",",
    `
`,
    "     ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "isAsync" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    `
`,
    "     ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "i18n" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    `
`,
    "   ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: ")" }),
    `
`,
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "}"
    ] }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "]" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function ve() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    " && ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "(" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<form" }),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "handler" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: ">" }),
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<button>" }),
    "send",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</button>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</form>" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: ")" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" })
  ] });
}
function we() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "{"
    ] }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "groups" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "selects" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "textareas" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "data" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function ke() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: " [" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "data" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "setData" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useState" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "{" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "configArray" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "[]" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "isAsync" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "i18n" }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function _e() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "In most cases, forms are static and synchronous by nature, so we design them directly within our components without needing to manage any side effects. However, there are scenarios where you might need to fetch data from a database or a global state, for instance in a multi-language website.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "ramon-form-sdude also supports these cases, as long as the configuration structure changes only once" }),
      ". Essentially, the hook handles an empty array while it waits to be populated (asynchronous state). However, once populated, the array must remain static;",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "you cannot dynamically change its shape afterward" }) }),
      ". Setting up the asynchronous mode is very simple and takes just a few steps, which I will summarize below:"
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "1. Create a React state and initialize it:" }),
    /* @__PURE__ */ e.jsx(ke, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "2. Pass the state to the hook:" }),
    /* @__PURE__ */ e.jsx(we, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "3. Execute the effect or the logic needed to populate the state with your configuration objects. Keep in mind, however, that once the state is populated, you cannot change it again.",
      /* @__PURE__ */ e.jsx("br", {}),
      "In the following example,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "I used an effect to handle the fetch logic, but you are not required to do so" }),
      ". You can use any logic you prefer; you can even write it directly within the component body. The reactivity is driven by the state itself."
    ] }),
    /* @__PURE__ */ e.jsx(ye, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "4.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "You must pass an isAsync prop with a value of true to every individual component you render" }) }),
      ". This notifies them that you are in asynchronous mode. Additionally, ensure you use conditional logic for the form rendering to prevent the app from crashing in the absence of data."
    ] }),
    /* @__PURE__ */ e.jsx(ve, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "As you can see, the setup is straightforward. You will have no issues as long as the state array remains immutable after being populated. In fact,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "if you try to add a new configuration object to the array after the initial population, the corresponding input will never be rendered" }) }),
      ". For this reason, if you need to manage inputs dynamically, do not attempt to add configuration objects to the original array while the form lifecycle is active; simply use conditional logic.",
      /* @__PURE__ */ e.jsx("br", {}),
      "If you absolutely must create inputs dynamically (e.g., a variable list of fields), you can adopt a hybrid approach.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "Nothing prevents you from using the hook for the main form structure while managing a few dynamic fields with standard React logic" }),
      ". The hook will remain isolated and performant, giving you the freedom to manually add what you need without conflicts."
    ] })
  ] });
}
function Te() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "For those who want to understand how this library works (and not just settle for the fact that it does) this section explains the choices made during development.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "You will discover that some of these decisions are non-idiomatic" }),
      "; they represent an inevitable trade-off necessary to guarantee high performance and ease of use in extreme cases that are not, by nature, natively supported by React or other libraries.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: 'I am well aware that some of these solutions may appear unorthodox, or even "dirty," compared to standard React techniques' }),
      ". However, in building this library, whenever a strategic choice was required, I systematically prioritized pragmatism over common standards."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Why it never lags" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "The reason these inputs never produce lag, despite intensive use of controlled components, is so simple it might seem trivial:",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "instead of using React.memo to tell the framework what to re-render, we memoized the entire component" }),
      ". This allowed us to bypass the systematic reconciliation process that React would otherwise perform, focusing the analysis solely on the state value; a value that, as you will see later, is actually a copy of the real state managed by the library.",
      /* @__PURE__ */ e.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/wrapper.png",
          alt: "wrapper"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Error Handling and the Dual-Wrapper System" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Every UI component is essentially wrapped in two layers. The first one, which you saw earlier, simply evaluates whether a missing configuration object is due to asynchronous management or if it is an actual error. The second layer is the RenderGate. As shown in the image below, it checks for errors within the configuration object. If errors are found, it triggers the component responsible for rendering them; otherwise, it launches the UI component that handles the requested input.",
      /* @__PURE__ */ e.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/renderGate.png",
          alt: "renderGate"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Deterministic Parsing and Ref-based Caching: Balancing Usability and High Performance" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      'At first glance, this hook might seem to bend some standard React "rules"—specifically regarding data immutability and hook ordering. However, there is a clear engineering rationale behind these choices, shifting the focus from formal purity to raw throughput.',
      /* @__PURE__ */ e.jsx("br", {}),
      "1. ",
      /* @__PURE__ */ e.jsx("strong", { children: "Immutability vs. Performance In React" }),
      `: immutability isn't just a stylistic choice; it’s the mechanism that ensures the UI stays reactive and aligned with the data. In this engine, we’ve decoupled the heavy configuration logic from the standard React render cycle. While the core logic is managed manually within a useRef cache to hit 60fps even with 2000+ inputs, the actual UI interaction remains perfectly idiomatic. React still handles what it does best: controlled input values and validation returns. Our mirroring function ensures that any data the calling component receives is always synchronized with React’s internal state. This isn’t "uncontrolled" mutation—it's a high-performance Deterministic Computation Engine that guarantees the same output for the same input, every single time.`,
      /* @__PURE__ */ e.jsx("br", {}),
      "2. ",
      /* @__PURE__ */ e.jsx("strong", { children: "Stability and Concurrent Mode" }),
      ': We’ve stress-tested this approach in Strict Mode and under heavy latency (up to 3000ms) using Concurrent Mode transitions. The hook remains stable because the cache mutations follow a strict, predictable logic. Even when React pauses or retries a render, our internal pointers remain aligned, preventing "tearing" or UI inconsistencies.',
      /* @__PURE__ */ e.jsx("br", {}),
      "3. ",
      /* @__PURE__ */ e.jsx("strong", { children: 'Hook Ordering Regarding the "Rules of Hooks"' }),
      ": while there are conditional blocks (like the config parsing), they exist only to prepare the data. The actual custom hook, useStateBuilder, is called at the top level and maintains a consistent call order. We aren't skipping hooks; we are simply ensuring they are fed with the correct, pre-calculated data only when necessary."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "The Dual-Stage Parsing System" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      'Choosing how to organize data parsing to ensure high performance was the true challenge in creating this library. The decision to use only four states (one for each reference input category: fields, groups, selects, and textareas) was a logical consequence of the fact that only four UI components abstractly manage the different inputs behind the multiple wrappers. In other words, you find the bulk of the inputs within the fields object simply because, behind the scenes, the UI component rendering them is always the same: "InputField."',
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "Initially, the choice to use wrappers was driven by the desire to maintain recognizable semantics for different input types, preventing users from getting lost in a sea of components with nearly identical names" }),
      ". It only later became clear that these wrappers also served as a tool to further improve both performance and Developer Experience (DX). Regarding the Dual-Stage Parsing, this approach was born from necessity:",
      /* @__PURE__ */ e.jsx("br", {}),
      /* @__PURE__ */ e.jsx("strong", { children: "handling everything in a single step would have made debugging extremely complicated" }),
      ".",
      /* @__PURE__ */ e.jsx("br", {}),
      " By separating the actual parsing from the process of creating the configuration objects returned to the caller, we were able to concentrate the bulk of the abstraction and complexity in the first stage, leaving the second stage much simpler, more readable, and easier to manage.",
      /* @__PURE__ */ e.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/hook.png",
          alt: "hook"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "The Error Tracking System" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Once the decision was made to separate the actual parsing from the creation of configuration objects for the calling component, building an error tracking system became a logical necessity.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "To prevent the processes managed by configDispatcher from collapsing unpredictably due to malformed objects, it was essential to catch every potential user error during the initial parsing phase" }),
      ". Given this requirement, tracking them to provide precise feedback was the most obvious and straightforward next step. The parseConfig function does more than just decompose user configuration objects to populate the customLogic object (",
      /* @__PURE__ */ e.jsx("u", { children: "which is based on parallel arrays and index-based pointers, following the Data-Oriented Design paradigm" }),
      "); it analyzes the data as it processes it. Whenever it encounters malformed data, it tracks it contextually. This allows the system to return precise feedback, making error correction easy and immediate for the user. Finally, to prevent the analysis logic from proliferating uncontrollably and to maintain a strict separation of concerns, the tracking system was entrusted to a Guard System."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "State Mirroring" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "The library's reactivity is guaranteed by an idiomatic use of React states.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "The decision to return a copy of the state to the user was driven by the need to wire the handlers and ensure constant alignment between the values recorded in the states and those managed by the individual inputs" }),
      ". The system ensures data alignment and focus stability by projecting states during the render phase. When a state update triggers a re-render, the statesMirroring function generates a complete copy of all state values before the component finishes rendering. This provides the calling component with a fresh and updated version of the data without ever touching other parts of the object, such as configuration data or handlers. In this way, I wanted to demonstrate that through a pragmatic approach and a deep understanding of React’s internals,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "it is possible to overcome the framework's known limitations by leveraging React for its primary function: the efficient rendering of interfaces" }),
      "."
    ] })
  ] });
}
function V() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "data" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: " [" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "username, email, confirmEmail, password, confirmPassword" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" }),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "objConfig" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "configArray:" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "data" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "isAsync:" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "i18n:" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function Ee() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// lang is your reactive state (e.g., from a Context or a simple useState)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "placeholder" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "eng: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"username"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "spa: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"usuario"' }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    " ",
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "username" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"username"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"text"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "placeholder" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "label" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function Ce() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx(Ee, {}),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx(V, {}),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "groups" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "selects" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "textareas" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "resets" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "objConfig" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<form" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: ">" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{/* Passing i18n={lang} ensures the component re-renders when the language changes */}" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</form>" })
  ] });
}
function Se() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "If your application is multi-language, you likely already have a logic (a hook, a context, or a state) managing your translations. To make your forms reactive to language changes, you simply need to follow three steps:" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "1. ",
      /* @__PURE__ */ e.jsx("strong", { children: "Map the i18n key" }),
      ": Pass your language state (the one that triggers the update across the rest of your site) to the i18n property inside objConfig. This tells the Ramon engine exactly when it’s time to recalculate the labels.",
      /* @__PURE__ */ e.jsx("br", {}),
      "2. ",
      /* @__PURE__ */ e.jsx("strong", { children: "Propagate the i18n prop" }),
      ': Pass that same variable as a prop to the components rendering your inputs. This "unlocks" the UI and forces an immediate visual update.',
      /* @__PURE__ */ e.jsx("br", {}),
      " 3. ",
      /* @__PURE__ */ e.jsx("strong", { children: "Use dynamic variables" }),
      ": Populate your labels (e.g., label or placeholder) using the variables that hold your translations, exactly as you would in any standard React component."
    ] }),
    /* @__PURE__ */ e.jsx(Ce, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Naturally, you can use any logic you prefer for these dynamic variables, including external libraries;",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "the key point is that as long as those variables are reactive, your input texts will change right along with them" }),
      ". In other words when you develop a multi-language site, you might have a variable (e.g. title) that is itself reactive and changes whenever the global language state updates. Normally, you’d render that string in JSX like this: ",
      "<h1>{title}</h1>",
      ". In Ramon’s configuration objects, you do exactly the same thing. No new syntax to learn."
    ] })
  ] });
}
function Ae() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("br", {}),
    /* @__PURE__ */ e.jsx("br", {}),
    "| forms/",
    /* @__PURE__ */ e.jsx("br", {}),
    "├── configs/",
    /* @__PURE__ */ e.jsx("br", {}),
    "| └── signup.js",
    /* @__PURE__ */ e.jsx("br", {}),
    "| └── personalData.js",
    /* @__PURE__ */ e.jsx("br", {}),
    "├── funcs/ ",
    /* @__PURE__ */ e.jsx("br", {}),
    "| └── signup.js",
    /* @__PURE__ */ e.jsx("br", {}),
    "| └── personalData.js",
    /* @__PURE__ */ e.jsx("br", {}),
    /* @__PURE__ */ e.jsx("br", {})
  ] });
}
function F() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: This ID becomes the key in the 'fields' object, must be a string" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Input placeholder (remove if not needed)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label (remove if not needed)" }),
    `
`
  ] });
}
function R({ requiredGroups: a }) {
  const t = a || "// Optional: Set 'true' for required field (remove if not needed)";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: t }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: function (custom), true (default), false || missing (uncontrolled)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    `
`
  ] });
}
function I() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(F, {}),
    /* @__PURE__ */ e.jsx(R, {})
  ] });
}
function v({ type: a }) {
  const r = a === "number" ? "number" : "string";
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(F, {}),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      r
    ] }),
    `
`,
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      r
    ] }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: must be a number" }),
    `
`,
    /* @__PURE__ */ e.jsx(R, {})
  ] });
}
function w({
  constName: a,
  id: r,
  type: t,
  placeholder: m,
  label: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: a }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      r,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      t,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      m,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      l,
      '"'
    ] }),
    ",",
    `
`
  ] });
}
function j() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "required: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "true" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "onChange: func" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onBlur: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onKeyDown: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onFocus: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    ";"
  ] });
}
function Fe({
  id: a,
  label: r,
  type: t,
  placeholder: m,
  constName: l,
  min: h,
  max: d,
  step: p
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      w,
      {
        constName: l,
        id: a,
        type: t,
        placeholder: m,
        label: r
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: h }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: d }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: p }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function P({
  id: a,
  label: r,
  type: t,
  placeholder: m,
  constName: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      w,
      {
        constName: l,
        id: a,
        type: t,
        placeholder: m,
        label: r
      }
    ),
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function O({
  id: a,
  label: r,
  type: t,
  placeholder: m,
  constName: l,
  min: h,
  max: d,
  step: p
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      w,
      {
        constName: l,
        id: a,
        type: t,
        placeholder: m,
        label: r
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      h,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      d,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: p }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function X({ type: a }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "hobbies" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "options: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "ids: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"music", "movie", "fitness"' }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "labels: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"music", "movie", "fitness"' }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      a,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "title: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"What are your hobbies?"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "name: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"hobbies"' }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function K({ requiredGroups: a }) {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// required: Ids must be unique" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// required: Labels and ids must be aligned" }),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: UI title of your input (remove if not needed)" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: This name becomes the key in the 'groups' object" }),
    `
`,
    /* @__PURE__ */ e.jsx(R, { requiredGroups: a })
  ] });
}
function Oe() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "accountType" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"accountType"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"selects"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "options: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"teacher", "student"' }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "labels: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"teacher", "student"' }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"Choose your account"' }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function De() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: This ID becomes the key in the 'fields' object, must be a string" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: Must be unique among themselves" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Required: Labels and options must be aligned" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label (remove if not needed)" }),
    `
`,
    /* @__PURE__ */ e.jsx(R, {})
  ] });
}
function Me({
  id: a,
  label: r,
  type: t,
  placeholder: m,
  constName: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      w,
      {
        constName: l,
        id: a,
        type: t,
        placeholder: m,
        label: r
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "rows: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "25" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "cols: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "50" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "counterLabel: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"Max word"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "maxChars: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "500" }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(j, {})
  ] });
}
function qe() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(F, {}),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Number of visible text lines" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Number of average characters per line" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label for counter" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: Set a char limit and counter (Mutually exclusive with maxWords)" }),
    `
`,
    /* @__PURE__ */ e.jsx(R, {})
  ] });
}
const Ue = {
  id: "username",
  type: "text",
  label: "Enter your username",
  placeholder: "john.smith",
  constName: "username",
  component: P,
  comments: I
}, He = {
  id: "email",
  type: "email",
  label: "Enter your email",
  placeholder: "john.smith@gmail.com",
  constName: "email",
  component: P,
  comments: I
}, Ye = {
  id: "phone",
  type: "tel",
  label: "Enter your phone number",
  placeholder: "+39 12345678",
  constName: "phone",
  component: P,
  comments: I
}, ze = {
  id: "website",
  type: "url",
  label: "Enter your website url",
  placeholder: "mywebsite.com",
  constName: "website",
  component: P,
  comments: I
}, We = {
  id: "password",
  type: "password",
  label: "Enter your password",
  placeholder: "myStr0ngPassw0rd!",
  constName: "password",
  component: P,
  comments: I
}, Le = {
  id: "age",
  type: "number",
  label: "Enter your age",
  placeholder: "43",
  constName: "age",
  min: 21,
  max: 67,
  step: 1,
  interfaceType: "number",
  component: Fe,
  comments: v
}, Be = {
  id: "birthday",
  type: "date",
  label: "When is your birthday?",
  placeholder: "1980-01-01",
  constName: "birthday",
  min: "1920-01-01",
  max: "1990-01-01",
  step: 60,
  interfaceType: "date",
  component: O,
  comments: v
}, $e = {
  id: "time",
  type: "time",
  label: "What time is it?",
  placeholder: "09:00",
  constName: "time",
  min: "06:00",
  max: "20:00",
  step: 60,
  interfaceType: "date",
  component: O,
  comments: v
}, Ge = {
  id: "leave",
  type: "datetime-local",
  label: "When do you want to leave?",
  placeholder: "2028-01-01T00:00",
  constName: "leave",
  min: "2027-01-01T09:00",
  max: "2030-01-01T20:30",
  step: 60,
  interfaceType: "date",
  component: O,
  comments: v
}, Je = {
  type: "radio",
  component: X,
  comments: K
}, Ve = {
  type: "checkbox",
  component: X,
  comments: K,
  requiredGroups: "// Optional: true (native) only for single checkbox. Multiple options need custom logic"
}, Xe = {
  component: Oe,
  comments: De,
  requiredGroups: "// Optional: true to require one selection from the group (native)"
}, Ke = {
  id: "message",
  type: "textarea",
  label: "Your message",
  placeholder: "Dear John, hello",
  constName: "message",
  component: Me,
  comments: qe
};
function u({ props: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: "ramon__panel", children: [
    /* @__PURE__ */ e.jsx("p", { className: "ramon__ide ramon__idePanel ramon__marginLeft", children: /* @__PURE__ */ e.jsx(
      a.component,
      {
        id: a.id,
        type: a.type,
        label: a.label,
        placeholder: a.placeholder,
        constName: a.constName,
        min: a?.min,
        max: a?.max,
        step: a?.step
      }
    ) }),
    /* @__PURE__ */ e.jsx(
      a.comments,
      {
        type: a.interfaceType,
        requiredGroups: a.requiredGroups
      }
    )
  ] });
}
function Ze() {
  const [a, r] = A("text");
  return /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContainer", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ramon__tabMenu", children: be.map((t) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ramon__tabBtn ${a === t ? "ramon__active" : ""}`,
        onClick: () => r(t),
        children: t.toUpperCase()
      },
      t
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContent", children: [
      a === "text" && /* @__PURE__ */ e.jsx(u, { props: Ue }),
      a === "email" && /* @__PURE__ */ e.jsx(u, { props: He }),
      a === "tel" && /* @__PURE__ */ e.jsx(u, { props: Ye }),
      a === "url" && /* @__PURE__ */ e.jsx(u, { props: ze }),
      a === "password" && /* @__PURE__ */ e.jsx(u, { props: We }),
      a === "number" && /* @__PURE__ */ e.jsx(u, { props: Le }),
      a === "date" && /* @__PURE__ */ e.jsx(u, { props: Be }),
      a === "time" && /* @__PURE__ */ e.jsx(u, { props: $e }),
      a === "datetime-local" && /* @__PURE__ */ e.jsx(u, { props: Ge }),
      a === "radio" && /* @__PURE__ */ e.jsx(u, { props: Je }),
      a === "checkbox" && /* @__PURE__ */ e.jsx(u, { props: Ve }),
      a === "select" && /* @__PURE__ */ e.jsx(u, { props: Xe }),
      a === "textarea" && /* @__PURE__ */ e.jsx(u, { props: Ke })
    ] })
  ] });
}
function Qe() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "submitHandler" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "e" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "e." }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "preventDefault()" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "myData" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRInew", children: "new" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "FormData" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "current" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: ")" }),
    ";",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "resetHandler" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef." }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "current." }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "reset()" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "resets." }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "resetAll()" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    `
`,
    `
`
  ] });
}
function es() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx(Qe, {}),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<form" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "submitHandler" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: ">" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<button>" }),
    "send",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</button>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<button" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "onClick" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "resetHandler" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}>" }),
    "reset",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</button>" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</form>" })
  ] });
}
function ss() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ",    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: text, date, datetime-local, email, number, password, tel, time, url" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "groups" }),
    ",    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: radio and checkbox" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "selects" }),
    ",   ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: select" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "textareas" }),
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: textarea" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "resets" }),
    "     ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the functions resetAll and resetOne" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    "  = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "objConfig" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function as() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fakeCheckbox" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "name: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"fakeCheckbox"' }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"checkbox"' }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function ns() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "CheckboxInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "groups" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "fakeCheckbox" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" })
  ] });
}
function rs() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<form" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "handler" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: ">" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "email" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "state" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "value" }),
    " !== ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '""' }),
    " && ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "(" }),
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: ")" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "/>" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "<button>" }),
    "send",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</button>" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</form>" })
  ] });
}
function ts() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "validateUsername" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "value, id" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Your logic here: e.g., length check or regex" }),
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "isValid" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "value.length" }),
    " ",
    "<",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "50" }),
    ";",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIreturn", children: "return" }),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "isValid" }),
    " ? ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"success" ' }),
    ": ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIstrings", children: '"Username too long"' }),
    ";",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      `
`,
      `
`,
      "// updated value in: fields.username.state.value ",
      /* @__PURE__ */ e.jsx("br", {}),
      "// updated return in: fields.username.returns ",
      /* @__PURE__ */ e.jsx("br", {}),
      "// the returns object has for key: onChange, onBlur, onFocus and onKeyDown"
    ] })
  ] });
}
function ls() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "The purpose of this library is to let you design any type of form while keeping your components clean and organized, without sacrificing performance or giving up any of React's native features.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "No matter how complex your form is or how many controlled inputs you render" }),
      ": as long as you stay within the browser's limits, your inputs will never lag."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Keeping your component organized" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Regarding your file system organization, there are no constraints. You are, of course, free to manage it as you see fit; however, I’d like to suggest a structure below that will not only keep your components clean and organized, but also help you manage your files intuitively and easily.",
      /* @__PURE__ */ e.jsx(Ae, {}),
      "This way,",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: 'you can keep the files containing all the configuration objects for a specific form in the "configs" folder, while storing the functions written for different input types in the "funcs" folder' }),
      '. By giving these files the same name as the form (for example, "signup.js"), it will be extremely easy to find everything you need for any future updates.'
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Using the hook" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: `Once you've decided on your file system organization, simply create an array containing all your configuration objects by importing them from the "configs" folder (the order in which you insert them is irrelevant); for example:` }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__ide", children: /* @__PURE__ */ e.jsx(V, {}) }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("strong", { children: "Be precise with your configuration keys" }),
      "; the engine expects exactly configArray, isAsync, and i18n. If you misspell configArray, the system will catch the error and show you a generic alert.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "However, since the other two keys are optional, I can't help you if you get them wrong" }),
      ": the orchestrator will simply ignore the misspelled key and fall back to its default internal values without warning.",
      /* @__PURE__ */ e.jsx("br", {}),
      "Having clarified this, all you have to do is pass objConfig as a parameter to the hook:"
    ] }),
    /* @__PURE__ */ e.jsx(ss, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "To use the reset functions, you'll need to wrap them in a handler to integrate them with your UI.",
      /* @__PURE__ */ e.jsx("br", {}),
      "The resetAll function can be called as-is and requires no parameters.",
      /* @__PURE__ */ e.jsx("br", {}),
      "In contrast, the resetOne function requires a single string parameter: the id of the specific field you wish to reset.",
      /* @__PURE__ */ e.jsx("br", {}),
      "I recommend attaching a ref to the entire form (as shown in the following example).",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "This way, if your form contains a mix of controlled and uncontrolled inputs, you can achieve a complete reset" }) }),
      ":",
      /* @__PURE__ */ e.jsx("br", {}),
      "use the native browser function formRef.current.reset() to clear uncontrolled inputs, while the resetAll() function will handle resetting the React states."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Rendering the inputs" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: 'To render the inputs, simply import the relevant components from the library; you can arrange them as you see fit and apply conditional logic. Keep in mind that, just as you would in React, you need a reactive state to leverage conditional rendering. To achieve this, you must set the "onChange" key in the configuration object to either true (if no validation logic is required) or to a function:' }),
    /* @__PURE__ */ e.jsx(es, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("u", { children: "You are not required to attach a ref to the entire form, but I highly recommend doing so for two main reasons" }),
      ": mass resets and the submission process. Regarding resets even though you could handle every single input as controlled without any lag, it is still preferable to use a granular approach, employing controlled inputs only where strictly necessary.",
      /* @__PURE__ */ e.jsx("br", {}),
      "In this scenario,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "you will have a mix of controlled and uncontrolled inputs" }),
      "; by using a form ref, you can easily reset the entire form using the browser's native Reset API. Regarding submission",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "it is best practice to re-validate your data from scratch before sending it" }),
      ", rather than relying solely on real-time error tracking (which is meant only for providing immediate user feedback). While you could easily write a recursive function to access the returns values from your states,",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "my advice is to use the browser API to collect the data and repeat the entire validation process before the final submission" }),
      ".",
      /* @__PURE__ */ e.jsx("br", {}),
      "As for the rest, the rules to follow are very straightforward, and I will summarize them for you below:"
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "1. ",
      /* @__PURE__ */ e.jsx("strong", { children: 'The "dataField" prop is mandatory and binding' }),
      "; you cannot change its name, and if you forget to pass it to the components, they will not be able to render."
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "2.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "Components (TextInput, EmailInput, etc.) must be imported from the library" }),
      '. They simply follow standard HTML markup naming: use the type you defined in your configuration object plus the "Input" suffix (remember to use PascalCase, for example: "NumberInput").'
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "3. The hook returns objects that each contain three keys (config, state, handlers).",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "Use the input id set in your configuration object to access that specific component" }),
      " ",
      '(for example: "fields.username").'
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Configuration object boilerplate" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "Take a close look at the structure of the configuration objects below: you will notice that all the keys and naming conventions follow standard HTML. There is nothing new or different to learn, if you know HTML writing these configuration objects will be extremely intuitive." }),
    /* @__PURE__ */ e.jsx(Ze, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "In any case, if you make a mistake while structuring a configuration object, it's not the end of the world. The hook will simply display a box (instead of the input you were trying to render) listing the errors you made and a brief explanation of how to fix them. In fact, I'll go even further:",
      " ",
      /* @__PURE__ */ e.jsxs("strong", { children: [
        "don't waste time studying how configuration objects are structured;",
        " "
      ] }),
      /* @__PURE__ */ e.jsx("u", { children: "instead, create them intentionally malformed" }),
      '. My advice is this: if you want to try rendering a checkbox, for example, import the "CheckboxInput" component and purposely create a malformed object, simply by doing this:'
    ] }),
    /* @__PURE__ */ e.jsx(as, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "And then, of course, include it in your JSX:" }),
    /* @__PURE__ */ e.jsx(ns, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("strong", { children: "This will render the error on your screen along with a button that, when clicked, provides a boilerplate configuration object (including comments) ready to be copied and pasted" }),
      ". Just remember that for radios and checkboxes, everything revolves around the name attribute rather than the id, since we follow standard HTML (as mentioned before).",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "For everything else, you already know what to do" }),
      ". Want to change the input design? Use the IDs and handle it via CSS. Need a full form reset? You can use the browser's native method if you've attached a ref to the form (formRef.current.reset()) or just go with a good old, brutal page refresh."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Accessing state and returns values" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "As for accessing the values of controlled components, simply call them using standard JS syntax; for example, to conditionally show certain fields, you can do it like this:" }),
    /* @__PURE__ */ e.jsx(rs, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      'Similarly, to access the return values of your validation functions, you can use "',
      /* @__PURE__ */ e.jsx("strong", { children: "fields.username.returns.onChange" }),
      '" (or onBlur, or any other event you are working with).',
      /* @__PURE__ */ e.jsx("br", {}),
      "If you need functions to handle the supported events (onChange, onBlur, onFocus, and onKeyDown), you just have to map them in the configuration object; they will automatically receive the updated state value, along with any specific return value you have defined within your validation logic:"
    ] }),
    /* @__PURE__ */ e.jsx(ts, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "or whatever other validation logic you might need.",
      /* @__PURE__ */ e.jsx("br", {}),
      "One thing to keep in mind:",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "the configArray should remain static during the component's lifecycle to preserve the deterministic alignment of the engine" }),
      ".",
      /* @__PURE__ */ e.jsx("br", {}),
      /* @__PURE__ */ e.jsx("strong", { children: "The only exceptions are when you need to fetch configuration objects asynchronously or handle i18n (language changes)" }),
      ". For these scenarios, you'll find a dedicated, simple workflow explained in the specific tabs of this documentation.The only case where configArray can be managed dynamically is if you need to fetch configuration objects; in that case, you'll just need to follow a couple of extra small steps, nothing complicated. So, what’s next? If you want one last piece of advice, do this: in the JSX where you are rendering the starter kit, right above that line, create your first form. Play around with it, make mistakes, and copy the configuration objects you find in the console. This way, you’ll see firsthand how simple it is to design a form with ramon-form-sdude."
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p" })
  ] });
}
function is() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "username" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "config: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ e.jsx("span", { className: "strings", children: '"username"' }),
    ",",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ e.jsx("span", { className: "strings", children: '"text"' }),
    ",",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ e.jsx("span", { className: "strings", children: '"john.smith"' }),
    ",",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsx("span", { className: "strings", children: '"Enter your username"' }),
    ",",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "required: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "state: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "value: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "yourState" }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "handlers: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "onChange: func" }),
    ", ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onBlur: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onKeyDown: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    "    ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "onFocus: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    " ",
    `
`
  ] });
}
function cs() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "As explained in the synchronous configuration tab, one of the main advantages of using the hook is the ability to create complex and heavy forms while maintaining high order within the component, all without having to manage states yourself. However, this does not mean you cannot use the input rendering components (TextInput, EmailInput, etc.) as simple UI components.",
      /* @__PURE__ */ e.jsx("br", {}),
      /* @__PURE__ */ e.jsx("strong", { children: "In this case, the configuration objects you create can no longer be flat" }),
      "; they must mirror the shape of the objects returned by the hook (as shown in the snippet below).",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "Most importantly, you will lose the error-tracking tools" }) }),
      ". This means, for example, that if you create two objects with colliding IDs, your form will stop working as expected, and you will no longer have the tool that precisely indicates the nature and location of the error.",
      /* @__PURE__ */ e.jsx("br", {}),
      "You might still want to use the UI components to avoid rewriting JSX every time or to handle dynamic form creation while maintaining excellent performance.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "Below is a simple example of how to structure your configuration objects for this case" }),
      ", though a simple console.log is enough to analyze the structure of the configuration object that the various components receive."
    ] }),
    /* @__PURE__ */ e.jsx(is, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Even in this case, the only mandatory fields are those related to id and type;",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "all other fields remain optional" }) }),
      ", just as when you use the hook."
    ] })
  ] });
}
function os({ toggle: a, page: r, setToggle: t }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__minimize", onClick: () => t(!a), children: [
      a ? "HIDE" : "SHOW",
      " STARTER KIT"
    ] }),
    a && /* @__PURE__ */ e.jsx("div", { children: r === "sync" && /* @__PURE__ */ e.jsx(ls, {}) }),
    a && /* @__PURE__ */ e.jsx("div", { children: r === "async" && /* @__PURE__ */ e.jsx(_e, {}) }),
    a && /* @__PURE__ */ e.jsx("div", { children: r === "i18n" && /* @__PURE__ */ e.jsx(Se, {}) }),
    a && /* @__PURE__ */ e.jsx("div", { children: r === "uiMode" && /* @__PURE__ */ e.jsx(cs, {}) }),
    a && /* @__PURE__ */ e.jsx("div", { children: r === "doc" && /* @__PURE__ */ e.jsx(Te, {}) })
  ] });
}
const ms = `

.ramonContainer {
  padding: 10px 25px;
}

.ramon__h1 {
  text-align: center;
}

.ramon__h2 {
  background-color: lightgreen;
  width: fit-content;
  padding: 5px 100px;
  margin: 2vh 0 2vh -10px;
  border-radius: 10px;
  border: 1px solid black;
}

.ramon__p {
  font-size: 1.2em;
  line-height: 1.7em;
}

.ramon__pages {
  border: 1px solid black;
  border-radius: 10px;
  width: fit-content;
  padding: 5px 10px;
  background-color: white;
  cursor: pointer;
}

.ramon__activePage {
  font-weight: bold;
  background-color: lightgreen;
}

.ramon__pagesContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
}

.ramon__snap {
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  margin: 3vh 0;
}

.ramon__marginLeft {
  margin-left: 15px;
}

.ramon__active {
  background-color: dimgrey !important;
  color: white !important;
  font-weight: bold;
  border: 1px solid black !important;
  border-bottom: 0px !important;
}

.ramon__starterKit {
  text-align: left;
}

.PRIdeclare {
  color: #0000ff;
}

.PRInew {
  color: #0090ff;
}

.PRIparentheses {
  color: #008000;
}

.PRIparams {
  color: #179fff;
}

.PRIvar {
  color: #0070c1;
}

.PRIsub {
  color: #001080;
}

.PRIfunc {
  color: #795e26;
}

.PRIstrings {
  color: #a31515;
}

.PRImarkup {
  color: maroon;
}

.PRIattribute {
  color: red;
}

.PRIcomponents {
  color: #267f99;
}

.PRIreturn {
color: #AF00DB;
}

.ramon__ide {
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: fit-content;
  height: auto;
  white-space: pre;
  font-family:
    "Consolas", "Monaco", "Menlo", "Cascadia Code", "Fira Code", monospace;
  font-size: 14px;
  line-height: 1.5;
  font-variant-ligatures: none;
  padding: 10px 25px;
}

.ramon__idePanel {
  border-right: 0;
  border-radius: 5px 0 0 5px;
}

.ramon__ideComments {
  border-left: 0;
  border-radius: 0 5px 5px 0;
}

.ramon__panel {
  display: flex;
}

.ramon__tabContainer {
  width: 100%;
}

.ramon__tabMenu {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2vh 0 0 0;
  flex-wrap: wrap-reverse;
}

.ramon__tabContent {
  background-color: dimgrey;
  margin: 0;
  width: 98%;
  margin-left: 1%;
  border: 1px solid black;
}

.ramon__tabBtn {
  width: fit-content;
  height: auto;
  border: 1px solid black;
  border-radius: 5px 5px 0 0;
  margin: 0 5px;
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 0 10px;
  margin-bottom: -1px;
  font-size: 14px;
  font-weight: bold;
}

.ramon__minimize {
  cursor: pointer;
  background-color: black;
  color: white;
  width: 100%;
  padding: 5px 20px;
  text-align: center;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  left: 0;
}

`;
function hs() {
  const [a, r] = A(!0), [t, m] = A("sync"), l = ["sync", "async", "i18n", "uiMode", "doc"], h = [
    "Synchronous configuration",
    "Asynchronous configuration",
    "I18n",
    "Ui mode: standalone",
    "How it works"
  ];
  return ue(() => {
    const d = new CSSStyleSheet();
    return d.replaceSync(ms), document.adoptedStyleSheets = [...document.adoptedStyleSheets, d], () => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (p) => p !== d
      );
    };
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "ramonContainer", children: [
    a && /* @__PURE__ */ e.jsxs("div", { className: "ramon__starterKit", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "ramon__h1", children: "Thank you for choosing ramon-form-sdude!" }),
      /* @__PURE__ */ e.jsx("div", { className: "ramon__pagesContainer", children: l.map((d, p) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `ramon__pages ${t === d ? "ramon__activePage" : ""}`,
          onClick: () => m(d),
          children: h[p]
        },
        d
      )) })
    ] }),
    /* @__PURE__ */ e.jsx(os, { page: t, toggle: a, setToggle: r })
  ] });
}
export {
  hs as S,
  Ne as f,
  Ie as g,
  e as j,
  Re as p,
  be as v
};
