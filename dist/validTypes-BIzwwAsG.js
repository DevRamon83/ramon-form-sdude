import K from "react";
var b = { exports: {} }, m = {};
var $;
function ee() {
  if ($) return m;
  $ = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(i, o, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      s = {};
      for (var d in o)
        d !== "key" && (s[d] = o[d]);
    } else s = o;
    return o = s.ref, {
      $$typeof: l,
      type: i,
      key: f,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return m.Fragment = E, m.jsx = c, m.jsxs = c, m;
}
var _ = {};
var F;
function re() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case z:
          return "Suspense";
        case G:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case V:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function E(e) {
      return "" + e;
    }
    function c(e) {
      try {
        E(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, a = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), E(e);
      }
    }
    function i(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (g.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = l(this.type);
      return h[e] || (h[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, t, a, R, O) {
      var n = t.ref;
      return e = {
        $$typeof: w,
        type: e,
        key: r,
        props: t,
        _owner: a
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, r, t, a, R, O) {
      var n = r.children;
      if (n !== void 0)
        if (a)
          if (Z(n)) {
            for (a = 0; a < n.length; a++)
              S(n[a]);
            Object.freeze && Object.freeze(n);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(n);
      if (g.call(r, "key")) {
        n = l(e);
        var u = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        a = 0 < u.length ? "{key: someKey, " + u.join(": ..., ") + ": ...}" : "{key: someKey}", Y[n + a] || (u = 0 < u.length ? "{" + u.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          n,
          u,
          n
        ), Y[n + a] = !0);
      }
      if (n = null, t !== void 0 && (c(t), n = "" + t), f(r) && (c(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var A in r)
          A !== "key" && (t[A] = r[A]);
      } else t = r;
      return n && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        n,
        t,
        o(),
        R,
        O
      );
    }
    function S(e) {
      P(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? P(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function P(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    var p = K, w = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), W = /* @__PURE__ */ Symbol.for("react.strict_mode"), U = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), J = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.client.reference"), k = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = Object.prototype.hasOwnProperty, Z = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var j, h = {}, N = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), C = y(i(s)), Y = {};
    _.Fragment = v, _.jsx = function(e, r, t) {
      var a = 1e4 > k.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !1,
        a ? Error("react-stack-top-frame") : N,
        a ? y(i(e)) : C
      );
    }, _.jsxs = function(e, r, t) {
      var a = 1e4 > k.recentlyCreatedOwnerStacks++;
      return x(
        e,
        r,
        t,
        !0,
        a ? Error("react-stack-top-frame") : N,
        a ? y(i(e)) : C
      );
    };
  })()), _;
}
var I;
function te() {
  return I || (I = 1, process.env.NODE_ENV === "production" ? b.exports = ee() : b.exports = re()), b.exports;
}
var ce = te();
const ae = ["text", "email", "tel", "url", "password"], ne = ["number", "date", "time", "datetime-local"], oe = ["radio", "checkbox"], se = "select", le = "textarea", ie = [
  ...ae,
  ...ne,
  ...oe,
  se,
  le
];
export {
  ae as f,
  oe as g,
  ce as j,
  ne as p,
  ie as v
};
