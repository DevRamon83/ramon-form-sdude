import rs, { useMemo as v, useState as D, useEffect as is, useRef as os } from "react";
var ie = { exports: {} }, Z = {};
var Te;
function cs() {
  if (Te) return Z;
  Te = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(t, r, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), r.key !== void 0 && (o = "" + r.key), "key" in r) {
      i = {};
      for (var l in r)
        l !== "key" && (i[l] = r[l]);
    } else i = r;
    return r = i.ref, {
      $$typeof: s,
      type: t,
      key: o,
      ref: r !== void 0 ? r : null,
      props: i
    };
  }
  return Z.Fragment = n, Z.jsx = a, Z.jsxs = a, Z;
}
var _ = {};
var He;
function ls() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case j:
          return "Fragment";
        case M:
          return "Profiler";
        case y:
          return "StrictMode";
        case Y:
          return "Suspense";
        case S:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case P:
            return "Portal";
          case z:
            return c.displayName || "Context";
          case G:
            return (c._context.displayName || "Context") + ".Consumer";
          case B:
            var p = c.render;
            return c = c.displayName, c || (c = p.displayName || p.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case w:
            return p = c.displayName || null, p !== null ? p : s(c.type) || "Memo";
          case J:
            p = c._payload, c = c._init;
            try {
              return s(c(p));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function a(c) {
      try {
        n(c);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var x = p.error, g = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return x.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), n(c);
      }
    }
    function t(c) {
      if (c === j) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === J)
        return "<...>";
      try {
        var p = s(c);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var c = fe.A;
      return c === null ? null : c.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(c) {
      if (Pe.call(c, "key")) {
        var p = Object.getOwnPropertyDescriptor(c, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, p) {
      function x() {
        ye || (ye = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: x,
        configurable: !0
      });
    }
    function h() {
      var c = s(this.type);
      return be[c] || (be[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function d(c, p, x, g, re, xe) {
      var R = x.ref;
      return c = {
        $$typeof: E,
        type: c,
        key: p,
        props: x,
        _owner: g
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: re
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function u(c, p, x, g, re, xe) {
      var R = p.children;
      if (R !== void 0)
        if (g)
          if (as(R)) {
            for (g = 0; g < R.length; g++)
              m(R[g]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(R);
      if (Pe.call(p, "key")) {
        R = s(c);
        var q = Object.keys(p).filter(function(ts) {
          return ts !== "key";
        });
        g = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", Qe[R + g] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          R,
          q,
          R
        ), Qe[R + g] = !0);
      }
      if (R = null, x !== void 0 && (a(x), R = "" + x), o(p) && (a(p.key), R = "" + p.key), "key" in p) {
        x = {};
        for (var Ee in p)
          Ee !== "key" && (x[Ee] = p[Ee]);
      } else x = p;
      return R && l(
        x,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), d(
        c,
        R,
        x,
        r(),
        re,
        xe
      );
    }
    function m(c) {
      f(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === J && (c._payload.status === "fulfilled" ? f(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function f(c) {
      return typeof c == "object" && c !== null && c.$$typeof === E;
    }
    var I = rs, E = /* @__PURE__ */ Symbol.for("react.transitional.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), G = /* @__PURE__ */ Symbol.for("react.consumer"), z = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.suspense_list"), w = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), F = /* @__PURE__ */ Symbol.for("react.client.reference"), fe = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pe = Object.prototype.hasOwnProperty, as = Array.isArray, Ie = console.createTask ? console.createTask : function() {
      return null;
    };
    I = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var ye, be = {}, Ne = I.react_stack_bottom_frame.bind(
      I,
      i
    )(), Ce = Ie(t(i)), Qe = {};
    _.Fragment = j, _.jsx = function(c, p, x) {
      var g = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return u(
        c,
        p,
        x,
        !1,
        g ? Error("react-stack-top-frame") : Ne,
        g ? Ie(t(c)) : Ce
      );
    }, _.jsxs = function(c, p, x) {
      var g = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return u(
        c,
        p,
        x,
        !0,
        g ? Error("react-stack-top-frame") : Ne,
        g ? Ie(t(c)) : Ce
      );
    };
  })()), _;
}
var Ae;
function hs() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ie.exports = cs() : ie.exports = ls()), ie.exports;
}
var e = hs();
const De = ({ dataField: s }) => {
  const n = s.state || {}, a = s.handlers || {}, { options: t, required: r, type: i, title: o, name: l } = s.config, { value: h } = n, { onChange: d } = a, u = d || (() => {
  }), f = i === "checkbox" && t.ids.length === 1 ? r : null, I = i === "radio" ? r : f;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o && /* @__PURE__ */ e.jsx("div", { className: "", children: o }),
    t.ids.map((E, P) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: i,
          id: E,
          required: I,
          name: l,
          checked: i === "checkbox" ? h[E] : h === E,
          onChange: u,
          value: E
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: E, children: t.labels[P] })
    ] }, E))
  ] });
}, ds = `
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `, us = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `, ps = `
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`, N = () => {
  console.group(
    "%c 💡 SDUDE PROFESSIONAL TIPS ",
    "background: #FF9800; color: white; padding: 2px; border-radius: 2px;"
  ), console.groupCollapsed(
    "%c1) Handling Multiple Inputs",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${ds}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${us}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${ps}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupEnd();
}, C = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`, ms = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${C}
      }`, fs = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${C}
       }`, Is = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${C}
       }`, xs = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${C}
       }`, Es = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${C}
       }`, gs = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${C}
       }`, Rs = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${C}
      }`, js = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${C}
    }`, vs = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${C}
       }`, Ps = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${C}
       }`, ys = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${C}
       }`, bs = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${C}
      }`, Ns = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${C}
      }`, Cs = (s) => {
  switch (s) {
    case "myTextField":
      return { title: "TEXT INPUT CONFIGURATION", input: "TextInput" };
    case "myRadioGroup":
      return { title: "RADIO INPUT CONFIGURATION", input: "RadioInput" };
    case "myCheckboxGroup":
      return { title: "CHECKBOX INPUT CONFIGURATION", input: "CheckboxInput" };
    case "myDatetimeField":
      return {
        title: "DATETIME-LOCAL INPUT CONFIGURATION",
        input: "DateTimeInput"
      };
    case "myEmailField":
      return { title: "EMAIL INPUT CONFIGURATION", input: "EmailInput" };
    case "myNumberField":
      return { title: "NUMBER INPUT CONFIGURATION", input: "NumberInput" };
    case "myPasswordField":
      return { title: "PASSWORD INPUT CONFIGURATION", input: "PasswordInput" };
    case "mySelectSelect":
      return { title: "SELECT INPUT CONFIGURATION", input: "SelectInput" };
    case "myTelField":
      return { title: "TEL INPUT CONFIGURATION", input: "TelInput" };
    case "myTextareaField":
      return { title: "TEXTAREA INPUT CONFIGURATION", input: "TextareaInput" };
    case "myDateField":
      return { title: "Date INPUT CONFIGURATION", input: "DateInput" };
    case "myUrlField":
      return { title: "URL INPUT CONFIGURATION", input: "UrlInput" };
    case "myTimeField":
      return { title: "TIME INPUT CONFIGURATION", input: "TimeInput" };
  }
}, Q = (s, n, a) => {
  const t = Cs(n);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${t.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;"
  );
  const r = `
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${s}

  3) Group your objects into an array:
     const logicArray = [${n}];

  4) Initialize the Engine in your Component:
     const { ${a} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${t.input} dataField={ ${a}.${n}} />
  `;
  console.log(
    `%c${r}`,
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"
  ), console.groupEnd();
}, Qs = () => `
${Q(ms, "myCheckboxGroup", "groups")}
${N()}
`, Ts = () => `
${Q(fs, "myDateField", "fields")}
${N()}
`, Hs = () => `
${Q(Is, "myDatetimeField", "fields")}
${N()}
`, As = () => `
${Q(xs, "myEmailField", "fields")}
${N()}
`, Os = () => `
${Q(Es, "myNumberField", "fields")}
${N()}
`, Gs = () => `
${Q(gs, "myPasswordField", "fields")}
${N()}
`, Bs = () => `
${Q(Rs, "myRadioGroup", "groups")}
${N()}
`, zs = () => `
${Q(js, "mySelect", "selects")}
${N()}
`, ks = () => `
${Q(vs, "myTelField", "fields")}
${N()}
`, Ms = () => `
${Q(ys, "myTextarea", "textareas")}
${N()}
`, Ys = () => `
${Q(Ps, "myTextField", "fields")}
${N()}
`, Ss = () => `
${Q(bs, "myTimeField", "fields")}
${N()}
`, ws = () => `
${Q(Ns, "myUrlField", "fields")}
${N()}
`, Xe = {
  checkbox: Qs,
  date: Ts,
  "dateTime-local": Hs,
  email: As,
  number: Os,
  password: Gs,
  radio: Bs,
  select: zs,
  tel: ks,
  text: Ys,
  textarea: Ms,
  time: Ss,
  url: ws
};
function T({ isAsync: s, dataField: n }) {
  if (s) return;
  const a = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  };
  console.log("data ", n);
  const t = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, r = (i) => {
    i.preventDefault();
    const o = Xe.text;
    o();
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { ...a }, children: [
    /* @__PURE__ */ e.jsx("p", { children: '"Invalid Component Call: Reference not found. Note: This type of error usually occurs in one of three cases:' }),
    /* @__PURE__ */ e.jsxs("ol", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx("strong", { children: "ID Mismatch" }),
        ": You are trying to call the input using a different ID than the one defined in your configuration object."
      ] }),
      /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx("strong", { children: "Incorrect Destructuring" }),
        ": You are using the correct ID, but targeting the wrong logical group. For example, trying to render a select input using fields.myInput instead of selects.myInput."
      ] }),
      /* @__PURE__ */ e.jsxs("li", { children: [
        /* @__PURE__ */ e.jsx("strong", { children: "Invalid Type" }),
        `: You have assigned a non-existent type in the configuration object (e.g., a typo like type: 'selct' instead of 'select')."`
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      /* @__PURE__ */ e.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ e.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ e.jsx("span", { style: { ...t }, onClick: r, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function Ds({ dataField: s }) {
  const { id: n, type: a, name: t } = s.config, r = n || t, { callers: i, errorType: o } = s.errorData, l = i.length === 1, h = l ? "an error" : "errors", d = l ? "key" : "keys", u = "You sent an empty array configuration:", m = r === "noLogicArray", f = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  }, I = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, E = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    "The configuration object for ",
    /* @__PURE__ */ e.jsx("strong", { children: r.toUpperCase() }),
    " ",
    "input is invalid and contains ",
    h,
    " in the following ",
    d,
    ":"
  ] }), P = (j) => {
    j.preventDefault();
    const y = Xe[a];
    y();
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { ...f }, children: [
    m ? u : E,
    /* @__PURE__ */ e.jsx("ol", { style: { textAlign: "left" }, children: i.map((j, y) => /* @__PURE__ */ e.jsxs("li", { children: [
      /* @__PURE__ */ e.jsx("strong", { children: j.toUpperCase() }),
      ": ",
      o[y]
    ] }, `${j}-${y}`)) }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      /* @__PURE__ */ e.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ e.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ e.jsx("span", { style: { ...I }, onClick: P, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function H({ component: s, dataField: n }) {
  return n.error ? /* @__PURE__ */ e.jsx(Ds, { dataField: n }) : s;
}
function _a({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(De, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
const k = ({ dataField: s, async: n }) => {
  const a = s.state || {}, t = s.handlers || {}, {
    id: r,
    required: i,
    label: o,
    type: l,
    placeholder: h,
    autoComplete: d,
    min: u,
    max: m,
    step: f
  } = s.config, { value: I } = a, { onChange: E, onBlur: P, onFocus: j, onKeyDown: y } = t, M = E || (() => {
  }), G = P || (() => {
  }), z = j || (() => {
  }), B = y || (() => {
  });
  return s.error && n ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("label", { htmlFor: r, children: o }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        required: i,
        type: l,
        id: r,
        placeholder: h,
        name: r,
        value: I,
        min: u,
        max: m,
        step: f,
        onChange: M,
        onBlur: G,
        onFocus: z,
        onKeyDown: B,
        autoComplete: d
      }
    )
  ] });
};
function $a({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function et({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function st({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function nt({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function at({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function tt({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(De, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
const Xs = ({ dataField: s }) => {
  const n = s.state || {}, a = s.handlers || {}, { options: t, id: r, labels: i, label: o, required: l } = s.config, { value: h } = n, { onChange: d } = a;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o && /* @__PURE__ */ e.jsx("label", { htmlFor: r, children: o }),
    /* @__PURE__ */ e.jsx(
      "select",
      {
        required: l,
        name: r,
        id: r,
        onChange: d,
        value: h,
        children: t.map((u, m) => /* @__PURE__ */ e.jsx("option", { value: u, children: i[m] }, u))
      }
    )
  ] });
};
function rt({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(Xs, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function it({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function Us({ label: s, value: n, max: a, charsType: t }) {
  let r = null;
  return t ? r = n.trim() === "" ? 0 : n.length : r = n.trim() === "" ? 0 : n.trim().split(/\s+/).length, /* @__PURE__ */ e.jsxs("div", { className: "", children: [
    /* @__PURE__ */ e.jsx("span", { children: s }),
    " ",
    /* @__PURE__ */ e.jsx("br", {}),
    /* @__PURE__ */ e.jsxs("span", { children: [
      r,
      " / ",
      a
    ] })
  ] });
}
function Js({ dataField: s }) {
  const n = s.state || {}, a = s.handlers || {}, { id: t, required: r, counterLabel: i, rows: o, cols: l, maxChars: h, maxWords: d, label: u } = s.config, { value: m } = n, { onChange: f, onBlur: I, onFocus: E, onKeyDown: P } = a, j = f || (() => {
  }), y = I || (() => {
  }), M = E || (() => {
  }), G = P || (() => {
  }), z = h || d, B = h || !1;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    u && /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: u }),
    /* @__PURE__ */ e.jsx(
      "textarea",
      {
        required: r,
        spellCheck: "false",
        maxLength: h,
        id: t,
        rows: o,
        cols: l,
        name: t,
        value: m,
        onChange: j,
        onBlur: y,
        onFocus: M,
        onKeyDown: G
      }
    ),
    z && /* @__PURE__ */ e.jsx(
      Us,
      {
        max: h || d,
        value: m,
        label: i,
        charsType: B
      }
    )
  ] });
}
function ot({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(Js, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function ct({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function lt({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function ht({ dataField: s, isAsync: n }) {
  return v(() => {
    const a = /* @__PURE__ */ e.jsx(k, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(H, { component: a, dataField: s }) : /* @__PURE__ */ e.jsx(T, { isAsync: n });
  }, [s?.state?.value]);
}
function Fs() {
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
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "fetchedConfigs" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "]" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
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
function qs() {
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
function Ls() {
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
    ", ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "true" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function Ks() {
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
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "[" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "]" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function Ws() {
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
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "1. Create a React state and initialize it with an empty array" }),
    /* @__PURE__ */ e.jsx(Ks, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "2. Pass the state to the hook as the first parameter and a value of true as the second parameter to notify it that you are in asynchronous mode." }),
    /* @__PURE__ */ e.jsx(Ls, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "3. Execute the effect or the logic needed to populate the state with your configuration objects. Keep in mind, however, that once the state is populated, you cannot change it again.",
      /* @__PURE__ */ e.jsx("br", {}),
      "In the following example,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "I used an effect to handle the fetch logic, but you are not required to do so" }),
      ". You can use any logic you prefer; you can even write it directly within the component body. The reactivity is driven by the state itself."
    ] }),
    /* @__PURE__ */ e.jsx(Fs, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "4.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "You must pass an isAsync prop with a value of true to every individual component you render" }) }),
      ". This notifies them that you are in asynchronous mode. Additionally, ensure you use conditional logic for the form rendering to prevent the app from crashing in the absence of data."
    ] }),
    /* @__PURE__ */ e.jsx(qs, {}),
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
const Vs = "data:image/png;base64,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", Zs = "data:image/png;base64,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", _s = "data:image/png;base64,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M1RdERERERE53wBiIjwqAr+Oemq+cgPQfmAntR4zMbFm/FRLERERERE5Z6oYxK6Rk2ezsPE9lr/6H6wCYBi2ufczNzZIlRQRERERkXMa1FOwmndtYNXWJsInTmXevO8xfZxBzdoPWLWzU5UUEREREZFzGvgIiKeJqo+q6brxbn68MI4QgMkxRL6xlFUba5h5YwLDNQ9LRERERES+wcBHQLxuWtz9bsDT1YlXtRQRERERkYsWQALNxIw06Ni1ibUVDpo7mti9dQOle48QMtJCsF9vGGlvdLB7Zw2OVjdej4vavTXsrmui3aNii4iIiIhc63x6enp6Brx3l5PPyzZQuq2G/a1HCAwbhW3qNOYm2/qmX7nYvPR1lu/qPvV1xk08/NQiJoV/OydVXV1NXFycrq6IiIiIyBUdQK4QCiAiIiIiIpcnX5VAREREREQUQERERERERAFEREREREREAURERERERBRAREREREREFEBEREREREQBREREREREFEBELtBR7KVbsby4m/IuVeOq5HZStLgQW3QuPmG52BY7cJ+6A2WL87HcW47DfQmP01VGVoKN9GLnWXZwUpxuIyGrDNcFvE13+0f8/sOHmf2HJO788EMOeAG6+dsn6SS9dif3rFzCh84O3TciInLNMQ1u904c5etZVWanprWbwOuiuSVlFnMTLQwFPC01bCjdxOad9TR2QvB1VialzCC1b/u16lDRATZk+xBffj2jLbrpZBB9+l3lpM4tJ2FpJvnJxmV9rK6N5eS87yZj2VNkJZsx+vl1Yx47miTMGMbVfuW62bntP1nRGs+/znuZlOsiCAAggJtvL+IvEytYsf4Z/vOz27jt+7OI0K0uIiLXkEGMgHhprviAglU1BE6dz/Mv/JCFE6Bq5TLe2d4JeGnfu42/tQYxPnkWD983nfHBTja8+yf+VNGER7UWuYp5cTW6cIdaSIrvL3z0BpCER++l+EUbV38O76D5UDcBYZOJDzsWPk4IDolncsRIug810eHV3SMiIgogZ+1gNO5twhMWx8ykGEaHW7g5ZTrxwW7273HhwcTwxPk88/h87rkjkUmJySx6aD63XddN7XYnV+SsG7eb7Ul7Kc1qpz7vIB9Zayj2qeHPmZ19U0uO0lHyFZ8m7OVDnxo+tNaxpdDdF7aO0lG4nw99avjzA4forv2aiut7X1+c8BUt7t59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NWnRmqMlIiJXD1+VQEQuNVdVBXlv9E5Xw+2keHk9RnICKZFX6hkFEBv3OHfwHj96cxLf+fBDDniPBZN7mFQwn19+ZWXh5Nv6CR8Anez+4iDhMxYxQ+FDRESuMnryvIhccu6Gegqf3cbiZ4GQYUyfn0LRkriL9H0olyiChM0i98FZ5J4WTG6+/X0+v/1crx7OzNwVzNStISIiCiAiIhefZWYa9ta0b+fNDCtpWVm4bGebXGXGlp5Fltl6eS5wFxERucJpDYiIiIiIiCiAiIiIiIjI1UeL0EVERERERAFEREREREQUQK4QPVT+3kNEkofE/+PlTzs1y0xERERE5HIwyDUgnTjK17OqzE5NazeB10VzS8os5iZaGAp4Git5Z/l6Pjv4NQDB193EpJQZpPZt/7ZDiOtAD///kiP8PtiXjb8ZckU/0lNERERE5GowiBEQL80VH1CwqobAqfN5/oUfsnACVK1cxjvbO4/tQvDE6Tz26EIyH/o+M2/08vnKZfypognPt5+tMI/04Tvx4G4GV7cutoiIiIjIpTaI7wHx0ri3CU9YHDOTYhgdCKNTprNj2zJq9rjwTAjCb2QC3x954hXjx1lor1vKZ7ucdCVG4HcJT9Stay0iIiIicskNYgTERHhUBH4d9dR81dudbz+wk1qPmZhYcz/hwkt73XZqWntfF3ipzjAY6AYO97+5Y/trLExO5t5fldOh+0FERERE5B/KNJhdIyfPZmHjeyx/9T9YBcAwbHPvZ25s0IndPE4+fPUPrD8IMIRRk+/m4amWSzb6YbH6YD5wlP9c58Mv5vpgCfDRVRcRERERuUQGtQi9efsHFLxjxy82gSk3htKyfSub9sKUhx7m/uMhxEvzgXr2H6hnx7ZtfLHXS/x9D7MgwXxpQkh3D/+1xMuDfwaG+7D67SHMilAIERERERG5FAY+BcvTRNVH1XTdOJvMhbNISUrinofu556oTr7YWEPz8VXmJoaPtHJzYjL3P/YwCyd4qdpYTYPn0pyga+sR/u+nsODZIex+X+FDREREROTKCCBeNy39ruT24unqxPtN2cXdRpf3UpxeD46dPbhG+vL8932xBit8iIiIiIhcSgNfAxJoJmakwYbtm1hbEcTM2CBatm+gdO8RQqZaCPbzUl+xgc+9kYwNM/B0ONmxbRuf7fqawInRRF6qVegdQADg3//m7tpinnvk1+yemsObL87ket0TIiIiIiKXQQAhiJvnLeLhsA2Uli7j5+8eITBsFLbUBcxNjmEoXjroxL52E+v7RkoCw0YRn7qAu5JshFziEzXOtuFwJx1AuGU4QbofREREREQulwACBFqYdNf9TLqr/6YiE+/mJ4l3Xz5n193DZzvBGA7mgH53wLl9M07/W8hM+yeCdT+IiIiIiFxGAeSK0UPl773cWggE+fDyK75Y+t2vk91fHCR8xnPMiA7Q3SAiIiIi8g82qMfwioiIiIiIXAhflUBERERERBRAREREREREAUREREREREQBREREREREFEBEREREREQUQERERERERAFEREREREQUQERERERERBRAREREREREAUREREREROQM/w+jQRB2h9uLkwAAAABJRU5ErkJggg==";
function $s() {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "For those who want to understand how this library works (and not just settle for the fact that it does) this section explains the choices made during development.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "You will discover that many of these decisions are non-idiomatic" }),
      "; they represent an inevitable trade-off necessary to guarantee high performance and ease of use in extreme cases that are not, by nature, natively supported by React or other libraries.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: 'I am well aware that many of these solutions may appear unorthodox, or even "dirty," compared to standard React techniques' }),
      ". However, in building this library, whenever a strategic choice was required, I systematically prioritized pragmatism over common standards."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Why it never lags" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "The reason these inputs never produce lag, despite intensive use of controlled components, is so simple it might seem trivial:",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "instead of using React.memo to tell the framework what to re-render, we memoized the entire component" }),
      ". This allowed us to bypass the systematic reconciliation process that React would otherwise perform, focusing the analysis solely on the state value; a value that, as you will see later, is actually a copy of the real state managed by the library.",
      /* @__PURE__ */ e.jsx("img", { className: "ramon__snap", src: Vs, alt: "wrapper" })
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Error Handling and the Dual-Wrapper System" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Every UI component is essentially wrapped in two layers. The first one, which you saw earlier, simply evaluates whether a missing configuration object is due to asynchronous management or if it is an actual error. The second layer is the RenderGate. As shown in the image below, it checks for errors within the configuration object. If errors are found, it triggers the component responsible for rendering them; otherwise, it launches the UI component that handles the requested input.",
      /* @__PURE__ */ e.jsx("img", { className: "ramon__snap", src: Zs, alt: "renderGate" })
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Deterministic Parsing, a Hybrid Caching Approach with Hooks and Refs" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "While the wrapper system was essential to prevent constant re-renders of individual form inputs, the next challenge was ensuring that every new trigger wouldn't restart the entire parsing process. To address this, I implemented a dual approach:",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "using a ref as a cache for the parsed data, and two useMemo hooks to incorporate conditional logic without violating the rules of hook order" }),
      ". As shown in the image below, the process follows a strict sequence: first parsing the data, then utilizing a custom hook to generate the actual states, and finally connecting those states to their respective handlers. Without the conditional logic enabled by these useMemo hooks, I wouldn't have been able to 'lock' the parsing once completed, nor divide it into two consecutive stages separated by the state creation logic."
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
      /* @__PURE__ */ e.jsx("img", { className: "ramon__snap", src: _s, alt: "hook" })
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "The Error Tracking System" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Once the decision was made to separate the actual parsing from the creation of configuration objects for the calling component, building an error tracking system became a logical necessity.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "To prevent the processes managed by configDispatcher from collapsing unpredictably due to malformed objects, it was essential to catch every potential user error during the initial parsing phase" }),
      ". Given this requirement, tracking them to provide precise feedback was the most obvious and straightforward next step. The parseConfig function does more than just decompose user configuration objects to populate the customLogic object (",
      /* @__PURE__ */ e.jsx("u", { children: "which is based on parallel arrays and pointers, following the Data-Oriented Design paradigm" }),
      "); it analyzes the data as it processes it. Whenever it encounters malformed data, it tracks it contextually. This allows the system to return precise feedback, making error correction easy and immediate for the user. Finally, to prevent the analysis logic from proliferating uncontrollably and to maintain a strict separation of concerns, the tracking system was entrusted to a Guard System."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "State Mirroring" }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "The library's reactivity is guaranteed by an idiomatic use of React states.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "The decision to return a copy of the state to the user was driven by the need to wire the handlers and ensure constant alignment between the values recorded in the states and those managed by the individual inputs" }),
      ". The system ensures data alignment and focus stability by syncing states during the render cycle. When a state update triggers a re-render, the statesMirroring function generates a complete copy of all state values before the component finishes rendering. This provides the calling component with a fresh and updated version of the data without ever touching other parts of the object, such as configuration data or handlers. In this way, I wanted to demonstrate that through a pragmatic approach and a deep understanding of React’s internals,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "it is possible to overcome the framework's known limitations by leveraging React for its primary function: the efficient rendering of interfaces" }),
      "."
    ] })
  ] });
}
function en() {
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
const Ue = ["text", "email", "tel", "url", "password"], Je = ["number", "date", "time", "datetime-local"], Fe = ["radio", "checkbox"], sn = "select", nn = "textarea", qe = [
  ...Ue,
  ...Je,
  ...Fe,
  sn,
  nn
];
function je() {
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
function se({ requiredGroups: s }) {
  const a = s || "// Optional: Set 'true' for required field (remove if not needed)";
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: a }),
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
function ne() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(je, {}),
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function ue({ type: s }) {
  const n = s === "number" ? "number" : "string";
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(je, {}),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      n
    ] }),
    `
`,
    /* @__PURE__ */ e.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      n
    ] }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Optional: must be a number" }),
    `
`,
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function pe({
  constName: s,
  id: n,
  type: a,
  placeholder: t,
  label: r
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: s }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      n,
      '"'
    ] }),
    ",",
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
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      t,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      r,
      '"'
    ] }),
    ",",
    `
`
  ] });
}
function W() {
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
function an({
  id: s,
  label: n,
  type: a,
  placeholder: t,
  constName: r,
  min: i,
  max: o,
  step: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      pe,
      {
        constName: r,
        id: s,
        type: a,
        placeholder: t,
        label: n
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: i }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: o }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: l }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function ae({
  id: s,
  label: n,
  type: a,
  placeholder: t,
  constName: r
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      pe,
      {
        constName: r,
        id: s,
        type: a,
        placeholder: t,
        label: n
      }
    ),
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function ve({
  id: s,
  label: n,
  type: a,
  placeholder: t,
  constName: r,
  min: i,
  max: o,
  step: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      pe,
      {
        constName: r,
        id: s,
        type: a,
        placeholder: t,
        label: n
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      i,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      o,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: l }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function Le({ type: s }) {
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
      s,
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
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function Ke({ requiredGroups: s }) {
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
    /* @__PURE__ */ e.jsx(se, { requiredGroups: s })
  ] });
}
function tn() {
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
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function rn() {
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function on({
  id: s,
  label: n,
  type: a,
  placeholder: t,
  constName: r
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      pe,
      {
        constName: r,
        id: s,
        type: a,
        placeholder: t,
        label: n
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
    /* @__PURE__ */ e.jsx(W, {})
  ] });
}
function cn() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(je, {}),
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
const ln = {
  id: "username",
  type: "text",
  label: "Enter your username",
  placeholder: "john.smith",
  constName: "username",
  component: ae,
  comments: ne
}, hn = {
  id: "email",
  type: "email",
  label: "Enter your email",
  placeholder: "john.smith@gmail.com",
  constName: "email",
  component: ae,
  comments: ne
}, dn = {
  id: "phone",
  type: "tel",
  label: "Enter your phone number",
  placeholder: "+39 12345678",
  constName: "phone",
  component: ae,
  comments: ne
}, un = {
  id: "website",
  type: "url",
  label: "Enter your website url",
  placeholder: "mywebsite.com",
  constName: "website",
  component: ae,
  comments: ne
}, pn = {
  id: "password",
  type: "password",
  label: "Enter your password",
  placeholder: "myStr0ngPassw0rd!",
  constName: "password",
  component: ae,
  comments: ne
}, mn = {
  id: "age",
  type: "number",
  label: "Enter your age",
  placeholder: "43",
  constName: "age",
  min: 21,
  max: 67,
  step: 1,
  interfaceType: "number",
  component: an,
  comments: ue
}, fn = {
  id: "birthday",
  type: "date",
  label: "When is your birthday?",
  placeholder: "1980-01-01",
  constName: "birthday",
  min: "1920-01-01",
  max: "1990-01-01",
  step: 60,
  interfaceType: "date",
  component: ve,
  comments: ue
}, In = {
  id: "time",
  type: "time",
  label: "What time is it?",
  placeholder: "09:00",
  constName: "time",
  min: "06:00",
  max: "20:00",
  step: 60,
  interfaceType: "date",
  component: ve,
  comments: ue
}, xn = {
  id: "leave",
  type: "datetime-local",
  label: "When do you want to leave?",
  placeholder: "2028-01-01T00:00",
  constName: "leave",
  min: "2027-01-01T09:00",
  max: "2030-01-01T20:30",
  step: 60,
  interfaceType: "date",
  component: ve,
  comments: ue
}, En = {
  type: "radio",
  component: Le,
  comments: Ke
}, gn = {
  type: "checkbox",
  component: Le,
  comments: Ke,
  requiredGroups: "// Optional: true (native) only for single checkbox. Multiple options need custom logic"
}, Rn = {
  component: tn,
  comments: rn,
  requiredGroups: "// Optional: true to require one selection from the group (native)"
}, jn = {
  id: "message",
  type: "textarea",
  label: "Your message",
  placeholder: "Dear John, hello",
  constName: "message",
  component: on,
  comments: cn
};
function b({ props: s }) {
  return /* @__PURE__ */ e.jsxs("div", { className: "ramon__panel", children: [
    /* @__PURE__ */ e.jsx("p", { className: "ramon__ide ramon__idePanel ramon__marginLeft", children: /* @__PURE__ */ e.jsx(
      s.component,
      {
        id: s.id,
        type: s.type,
        label: s.label,
        placeholder: s.placeholder,
        constName: s.constName,
        min: s?.min,
        max: s?.max,
        step: s?.step
      }
    ) }),
    /* @__PURE__ */ e.jsx(
      s.comments,
      {
        type: s.interfaceType,
        requiredGroups: s.requiredGroups
      }
    )
  ] });
}
function vn() {
  const [s, n] = D("text");
  return /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContainer", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ramon__tabMenu", children: qe.map((a) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ramon__tabBtn ${s === a ? "ramon__active" : ""}`,
        onClick: () => n(a),
        children: a.toUpperCase()
      },
      a
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContent", children: [
      s === "text" && /* @__PURE__ */ e.jsx(b, { props: ln }),
      s === "email" && /* @__PURE__ */ e.jsx(b, { props: hn }),
      s === "tel" && /* @__PURE__ */ e.jsx(b, { props: dn }),
      s === "url" && /* @__PURE__ */ e.jsx(b, { props: un }),
      s === "password" && /* @__PURE__ */ e.jsx(b, { props: pn }),
      s === "number" && /* @__PURE__ */ e.jsx(b, { props: mn }),
      s === "date" && /* @__PURE__ */ e.jsx(b, { props: fn }),
      s === "time" && /* @__PURE__ */ e.jsx(b, { props: In }),
      s === "datetime-local" && /* @__PURE__ */ e.jsx(b, { props: xn }),
      s === "radio" && /* @__PURE__ */ e.jsx(b, { props: En }),
      s === "checkbox" && /* @__PURE__ */ e.jsx(b, { props: gn }),
      s === "select" && /* @__PURE__ */ e.jsx(b, { props: Rn }),
      s === "textarea" && /* @__PURE__ */ e.jsx(b, { props: jn })
    ] })
  ] });
}
function Pn() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
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
    /* @__PURE__ */ e.jsx("span", { className: "PRImarkup", children: "</form>" })
  ] });
}
function yn() {
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
    " ",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: textarea" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" }),
    "  = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "configArray" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function bn() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "configArray" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: " [" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIvar", children: "username, email, confirmEmail, password, confirmPassword" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "]" })
  ] });
}
function Nn() {
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
function Cn() {
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
function Qn() {
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
function Tn() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIfunc", children: "validateUsername" }),
    " = ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "value" }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "{" }),
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
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "// the rest of your logic" }),
    `
`,
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function Hn() {
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
      /* @__PURE__ */ e.jsx(en, {}),
      "This way,",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: 'you can keep the files containing all the configuration objects for a specific form in the "configs" folder, while storing the functions written for different input types in the "funcs" folder' }),
      '. By giving these files the same name as the form (for example, "signup.js"), it will be extremely easy to find everything you need for any future updates.'
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Using the hook" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: `Once you've decided on your file system organization, simply create an array containing all your configuration objects by importing them from the "configs" folder (the order in which you insert them is irrelevant); for example:` }),
    /* @__PURE__ */ e.jsx(bn, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      " ",
      "and then pass the configuration object to the hook:"
    ] }),
    /* @__PURE__ */ e.jsx(yn, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p" }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Rendering the inputs" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: 'To render the inputs, simply import the relevant components from the library; you can arrange them as you see fit and apply conditional logic. Keep in mind that, just as you would in React, you need a reactive state to leverage conditional rendering. To achieve this, you must set the "onChange" key in the configuration object to either true (if no validation logic is required) or to a function:' }),
    /* @__PURE__ */ e.jsx(Pn, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "You are not required to attach a ref to the entire form. If you don't need it, don't do it. Usually, attaching a ref to the form is simply the best and fastest way to access all its constituent inputs. As for the rest, the rules to follow are very straightforward, and I will summarize them for you below:" }),
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
    /* @__PURE__ */ e.jsx(vn, {}),
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
    /* @__PURE__ */ e.jsx(Nn, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "And then, of course, include it in your JSX:" }),
    /* @__PURE__ */ e.jsx(Cn, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("strong", { children: "This will render the error on your screen along with a button that, when clicked, provides a boilerplate configuration object (including comments) ready to be copied and pasted" }),
      ". Just remember that for radios and checkboxes, everything revolves around the name attribute rather than the id, since we follow standard HTML (as mentioned before).",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "For everything else, you already know what to do" }),
      ". Want to change the input design? Use the IDs and handle it via CSS. Need a full form reset? You can use the browser's native method if you've attached a ref to the form (formRef.current.reset()) or just go with a good old, brutal page refresh."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Accessing state values" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "As for accessing the values of controlled components, simply call them using standard JS syntax; for example, to conditionally show certain fields, you can do it like this:" }),
    /* @__PURE__ */ e.jsx(Qn, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "If you need functions to handle the supported events (onChange, onBlur, onFocus, and onKeyDown), you just have to map them in the configuration object; they will automatically receive the updated state:" }),
    /* @__PURE__ */ e.jsx(Tn, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "or whatever other validation logic you might need.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "One thing you must be careful about is to never dynamically manipulate the configuration array, the one I called configArray in my examples" }) }),
      ". The only case where configArray can be managed dynamically is if you need to fetch configuration objects; in that case, you'll just need to follow a couple of extra small steps, nothing complicated. So, what’s next? If you want one last piece of advice, do this: in the JSX where you are rendering the starter kit, right above that line, create your first form. Play around with it, make mistakes, and copy the configuration objects you find in the console. This way, you’ll see firsthand how simple it is to design a form with ramon-form-sdude."
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p" })
  ] });
}
function An() {
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
function On() {
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
    /* @__PURE__ */ e.jsx(An, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Even in this case, the only mandatory fields are those related to id and type;",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "all other fields remain optional" }) }),
      ", just as when you use the hook."
    ] })
  ] });
}
function Gn({ toggle: s, page: n, setToggle: a }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__minimize", onClick: () => a(!s), children: [
      s ? "HIDE" : "SHOW",
      " STARTER KIT"
    ] }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "sync" && /* @__PURE__ */ e.jsx(Hn, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "async" && /* @__PURE__ */ e.jsx(Ws, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "uiMode" && /* @__PURE__ */ e.jsx(On, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "doc" && /* @__PURE__ */ e.jsx($s, {}) })
  ] });
}
const Bn = `

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
function dt() {
  const [s, n] = D(!0), [a, t] = D("sync"), r = ["sync", "async", "uiMode", "doc"], i = [
    "Synchronous configuration",
    "Asynchronous configuration",
    "Ui mode: standalone",
    "How it works"
  ];
  return is(() => {
    const o = new CSSStyleSheet();
    return o.replaceSync(Bn), document.adoptedStyleSheets = [...document.adoptedStyleSheets, o], () => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (l) => l !== o
      );
    };
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "ramonContainer", children: [
    s && /* @__PURE__ */ e.jsxs("div", { className: "ramon__starterKit", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "ramon__h1", children: "Thank you for choosing ramon-form-sdude!" }),
      /* @__PURE__ */ e.jsx("div", { className: "ramon__pagesContainer", children: r.map((o, l) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `ramon__pages ${a === o ? "ramon__activePage" : ""}`,
          onClick: () => t(o),
          children: i[l]
        },
        o
      )) })
    ] }),
    /* @__PURE__ */ e.jsx(Gn, { page: a, toggle: s, setToggle: n })
  ] });
}
const V = (s) => {
  s.errorData.push("clean");
}, te = (s, n) => {
  s[n] === "clean" && (s[n] = {
    callers: [],
    errorType: []
  });
}, zn = (s, n, a) => {
  const t = n.replace("Funcs", "");
  V(s), te(s.errorData, a), s.errors[a] = !0, s.errorData[a].callers.push(t), s.errorData[a].errorType.push("must be a function");
}, O = (s, n, a, t, r) => {
  const i = a || `must be ${r}`;
  V(s), te(s.errorData, t), s.errors[t] = !0, s.errorData[t].callers.push(n), s.errorData[t].errorType.push(i);
}, U = (s, n, a) => {
  const { customLogic: t, logicKey: r, index: i } = n, o = t[r];
  o.errors[i] = !0, V(o), te(o.errorData, i), o.errorData[i].callers.push(a), o.errorData[i].errorType.push(s);
}, de = (s, n, a, t) => {
  const r = n.SSOT.length - 1;
  V(n), te(n.errorData, r), n.errors[r] = !0, n.errorData[r].callers.push(t), n.errorData[r].errorType.push(s);
}, kn = (s, n, a, t) => {
  V(s), te(s.errorData, t), s.errors[t] = !0, s.errorData[t].callers.push(n), s.errorData[t].errorType.push(a);
}, Mn = (s) => s.id ? s.id : s.name, Yn = (s) => `Values in the ids array must be unique. Change the value at position ${s.array}`, Sn = (s, n, a, t) => {
  for (let r = 0; r < s.length; r++) {
    const { category: i, nidificate: o, position: l, id: h } = s[r], d = i + "Logic", u = a[d], m = n[l], f = Mn(m), I = u.SSOT.indexOf(f), E = o ? Yn(s[r]) : "id is duplicated";
    kn(u, o ? "option" : f, E, I);
  }
}, Oe = {
  fieldsSSOT: [],
  groupsSSOT: [],
  selectsSSOT: [],
  textareasSSOT: []
}, wn = (s, n, a) => {
  s[n][a] = {
    options: {
      ids: [],
      labels: []
    }
  };
}, Dn = (s, n) => {
  s[n] = {
    options: [],
    labels: []
  };
}, Xn = (s, n, a) => ({ config: {
  name: a,
  type: s.types[n],
  autoComplete: "invalid",
  title: "invalid",
  options: {
    ids: "invalid",
    labels: "invalid"
  }
}, state: {}, handlers: {} }), Un = (s, n) => `The ${s} property in ${n} must be an object`, Jn = (s, n, a) => `The ${s} object in ${n} must contain only the ${a}`, Fn = (s, n) => `The ${s} key in ${n} is missing`, Ge = (s, n) => `The ${s} field in ${n} options must be an array`, We = (s, n, a) => `The ${s} and ${n} arrays in ${a} must have the same length`, qn = (s, n) => `The ${s} in ${n} must be a string`, Be = "format is invalid", Ln = (s) => s !== null || s !== void 0 ? `If you don't provide a valid ID, I can't identify the input. 
    However, the invalid ID is at position ${s} in the configuration array you provided` : !1, Kn = (s, n, a) => {
  n[a].push(s);
}, Wn = (s, n, a, t) => {
  n[a][s] = t;
}, Vn = (s, n, a, t, r) => {
  const i = n.SSOT.length - 1;
  Kn(i, n, t), Wn(s, n, a, r);
}, Zn = (s, n, a) => {
  const t = n.type;
  let i = typeof s == "function" || a === "onChange" && typeof s == "boolean";
  return t === "textarea" ? n.maxWords || n.maxChars ? !0 : i : (t === "checkbox" || t === "radio") && a === "onChange" ? !0 : i;
}, Ve = (s, n) => !s || !n ? !1 : s.length === n.length, X = (s, n, a) => {
  if (typeof s != "number" || Number.isNaN(s)) {
    const t = n.SSOT.length - 1;
    return O(n, a, "must be a number", t, "a number"), "invalid";
  }
  return s;
}, _n = (s, n, a, t) => {
  if (s && t.trim() === "") {
    const i = a.length - 1;
    return a.splice(0, a.length), a.push("invalid"), `You cannot use an empty string at index ${i}`;
  }
  return n;
}, Ze = (s, n, a) => {
  const t = typeof s == "string", r = t ? s : null;
  n.push(r);
  let i = t ? null : qn(s, `${a} array`);
  return i = _n(t, i, n, s), i;
}, $n = (s, n) => {
  if (s.length > 0) {
    const a = s.join(" - "), t = s.length === 1 ? "is" : "are", r = `${a} ${t} duplicated`, { logicObj: i, id: o, caller: l } = n;
    selectsError(r, i, o, l);
  }
}, _e = (s, n) => !s && n ? "mandatory" : !s && !n ? !1 : typeof s != "string" ? "must be a string" : s.trim() === "" ? "cannot be an empty string" : !1, ea = (s, n, a, t, r, i, o) => {
  s ? Vn(n, a, t, r, i) : zn(a, t, o);
}, $e = (s, n, a) => {
  if (n.required && typeof n.required != "boolean") {
    O(s, "required", "must be a boolean", a);
    return;
  }
  const t = !!n.required;
  s.required.push(t);
}, es = (s, n, a) => {
  s[n] = {
    SSOT: [],
    types: [],
    // must be alligned with SSOT
    placeholders: [],
    // must be alligned with SSOT
    onChangeFuncs: {},
    onChangeIndexes: [],
    // track the position in SSOT
    onBlurFuncs: {},
    onBlurIndexes: [],
    // track the position in SSOT
    onFocusFuncs: {},
    onFocusIndexes: [],
    // track the position in SSOT
    onKeyDownFuncs: {},
    onKeyDownIndexes: [],
    errors: [],
    // must be aligned with SSOT
    errorData: [],
    // must be aligned with SSOT
    required: []
    // must be aligned with SSOT
  }, a !== "groupsConfig" ? (s[n].labels = [], s[n][a] = {
    targetKeys: [],
    originalObjects: []
  }) : (s[n].titles = [], s[n][a] = {});
}, oe = (s, n, a) => {
  const { element: t, id: r, logicObj: i } = s, o = i.SSOT.length - 1, l = Zn(a, t, n), h = n + "Funcs", d = n + "Indexes";
  ea(l, r, i, h, d, a, o);
}, sa = (s) => s.onChange || s.type === "textarea" || s.type === "radio" || s.type === "checkbox", ss = (s, n, a, t) => {
  const r = { element: s, id: a, logicObj: n };
  sa(s) && oe(r, "onChange", s.onChange), s.onBlur && oe(r, "onBlur", s.onBlur), s.onFocus && oe(r, "onFocus", s.onFocus), s.onKeyDown && oe(r, "onKeyDown", s.onKeyDown);
}, K = (s, n, a, t, r) => {
  let i = !1;
  const { logicObj: o, id: l, index: h, mandatory: d } = t, u = _e(s, d);
  if (u) {
    i = !0;
    const f = l ? null : Ln(r);
    O(o, a, f || u, h);
  }
  const m = i ? "invalid" : s;
  return n.push(m), i;
}, ns = (s, n, a, t) => {
  const { logicObj: r, index: i } = t;
  qe.includes(s) ? K(s, n, a, t) : (n.push(null), O(r, a, "is invalid", i));
}, na = (s, n, a) => {
  const { label: t, placeholder: r, id: i, type: o } = n, l = s.SSOT.length, h = { logicObj: s, id: i, index: l };
  h.mandatory = !0;
  const u = K(i, s.SSOT, "id", h, a) ? "invalid" : i;
  h.id = u, ns(o, s.types, "type", h), h.mandatory = !1, K(t, s.labels, "label", h), o !== "select" && K(r, s.placeholders, "placeholder", h);
}, $ = (s, n, a, t) => {
  const r = a + "Logic", i = a + "Config";
  n[r] || es(n, r, i);
  const o = n[r];
  o.errors.push(!1), V(o), na(o, s, t);
  const l = o.SSOT.length - 1;
  $e(o, s, l);
  const d = o.SSOT[l] === "invalid" ? "invalid" : s.id;
  ss(s, o, d);
}, ee = (s, n, a) => new RegExp(`^[${n}]+$`).test(s), L = (s, n) => s ? Object.keys(s).length > 0 : !1, aa = (s, n) => {
  const a = parseInt(s);
  return a % 400 === 0 || a % 4 === 0 && a % 100 !== 0;
}, ta = (s, n, a) => {
  const t = parseInt(s);
  return t === 4 || t === 6 || t === 9 || t === 11;
}, ra = (s, n) => s === 2, ia = (s, n, a, t) => {
  if (!ra(n))
    return { isValid: !0, continue: !0 };
  const r = s ? 29 : 28;
  return t > r ? { isValid: !1, why: `February cannot be > ${r}` } : { isValid: !0, continue: !1 };
}, oa = (s) => s.length !== 10 ? { isValid: !1, why: "invalid length" } : s[4] !== "-" || s[7] !== "-" ? { isValid: !1, why: "invalid format" } : { isValid: !0 }, ca = (s) => {
  const a = ee(s[0], "0-9"), t = ee(s[1], "0-9"), r = ee(s[2], "0-9");
  return a ? t ? r ? { isValid: !0 } : { isValid: !1, why: "Day contains invalid chars" } : { isValid: !1, why: "Month contains invalid chars" } : { isValid: !1, why: "Year contains invalid chars" };
}, la = (s, n, a) => s < 0 ? { isValid: !1, why: "Year cannot be negative" } : s > 9999 ? { isValid: !1, why: "Year cannot be > 9999" } : n < 0 ? { isValid: !1, why: "Month cannot be negative" } : n > 12 ? { isValid: !1, why: "Month cannot be > 12" } : { isValid: !0 }, ge = (s, n, a) => {
  const t = oa(s);
  if (!t.isValid) return { isValid: !1, why: t.why };
  const r = s.split("-"), i = ca(r);
  if (!i.isValid) return { isValid: !1, why: i.why };
  const o = parseInt(r[0]), l = parseInt(r[1]), h = parseInt(r[2]), d = la(o, l);
  if (!d.isValid) return { isValid: !1, why: d.why };
  const u = aa(o), m = ia(u, l, n, h);
  if (!m.isValid)
    return { isValid: !1, why: m.why };
  if (m.isValid && !m.continue)
    return { isValid: !0 };
  const I = ta(l) ? 30 : 31;
  return h > I ? { isValid: !1, why: `Day cannot be > ${I}` } : { isValid: !0 };
}, Re = (s, n) => {
  if (s.length !== 5 || s[2] !== ":")
    return !1;
  const a = s.split(":"), t = "0-9", r = ee(a[0], t), i = ee(a[1], t);
  if (!r || !i)
    return !1;
  const o = parseInt(a[0]), l = parseInt(a[1]);
  return !(o < 0 || o > 23 || l < 0 || l > 59);
}, ze = (s, n, a) => {
  let t = null;
  if (s.includes("T") ? t = "T" : s.includes(" "), !t) return { isValid: !1, why: "invalid format" };
  const r = s.length;
  let i = null;
  if (r === 16)
    i = !1;
  else if (r === 19)
    i = !0;
  else
    return { isValid: !1, why: "invalid format" };
  if (s[10] !== t) return { isValid: !1, why: "invalid format" };
  const o = s.split(t), l = o[0], h = ge(l, "iso");
  if (!h.isValid) return { isValid: !1, why: h.why };
  const d = o[1];
  let u = d.substring(0, 5);
  i && (i = d.substring(6, 8));
  let m = null;
  if (i) {
    const I = parseInt(i);
    m = I < 0 || I > 59;
  }
  return m ? { isValid: !1, why: "Invalid format for seconds" } : Re(u) ? { isValid: !0 } : { isValid: !1, why: "Invalid format for time" };
}, ke = (s, n, a) => {
  const { customLogic: t, logicKey: r, name: i } = a, o = t[r][i].options[n], l = Ze(s, o, n), h = l + " of " + n + " array";
  l && U(h, a, n);
}, ha = (s, n, a) => {
  for (let t = 0; t < s.length; t++)
    ke(s[t], "ids", a), ke(n[t], "labels", a);
}, da = (s, n, a) => {
  if (!L(s)) {
    const r = Un("options", n);
    U(r, a, "options");
  }
}, Me = (s, n, a, t) => {
  const r = !a.includes(t), i = r && Fn(t, s);
  r && U(i, n, t);
}, ua = (s, n, a) => {
  const t = '"labels" and "ids" keys', r = s.length !== 2, i = r && Jn("options", n, t);
  r && U(i, a, "options");
}, pa = (s, n, a, t) => {
  (!s || !Array.isArray(s)) && U(Ge("ids", a), t, "ids"), (!n || !Array.isArray(n)) && U(Ge("labels", a), t, "labels");
}, ma = (s) => {
  const { options: n, customLogic: a, name: t, logicKey: r } = s;
  wn(a, r, t), da(n, t, s);
  const i = n ? Object.keys(n) : ["ids", "labels"];
  ua(i, t, s), Me(t, s, i, "labels"), Me(t, s, i, "ids");
  const o = n?.ids ? n.ids : ["invalid"], l = n?.labels ? n.labels : ["invalid"];
  pa(o, l, t, s), Ve(o, l) ? ha(o, l, s) : U(We("ids", "labels", t), s, "options");
}, fa = (s, n, a, t) => {
  s.mandatory = !0;
  const i = K(
    n,
    a.SSOT,
    "id",
    s,
    t
  ) ? "invalid" : n;
  s.name = i;
}, Ia = (s, n, a) => {
  const t = "groupsLogic";
  n[t] || es(n, t, "groupsConfig");
  const i = s.name, o = n[t];
  o.errors.push(!1);
  const l = o.SSOT.length, h = {
    options: s.options,
    customLogic: n,
    name: i,
    logicKey: t,
    index: l
  };
  ma(h), $e(o, s, l);
  const d = { logicObj: o, name: i, index: l };
  fa(d, i, o, a), ns(s.type, o.types, "type", d), d.mandatory = !1, K(s.title, o.titles, "title", d), o.SSOT, ss(s, o, s.name);
}, xa = (s, n) => {
  const a = n.SSOT.length - 1, t = s.min ? ge(s.min, "iso") : null, r = s.max ? ge(s.max, "iso") : null;
  t && !t.isValid && O(n, "min", t.why, a), r && !r.isValid && O(n, "max", r.why, a);
}, Ea = (s, n) => {
  const a = n.SSOT.length - 1, t = s.min ? ze(s.min) : null, r = s.max ? ze(s.max) : null;
  t && !t.isValid && O(n, "min", t.why, a), r && !r.isValid && O(n, "max", r.why, a);
}, ga = (s, n) => {
  const a = n.SSOT.length - 1, t = s.min ? Re(s.min) : null, r = s.max ? Re(s.max) : null;
  s.min && !t && O(n, "min", Be, a), s.max && !r && O(n, "max", Be, a);
}, Ra = (s, n) => {
  const { id: a, type: t } = s;
  let r = null, i = null;
  switch (t) {
    case "date":
      xa(s, n), r = s.min ? s.min : null, i = s.max ? s.max : null;
      break;
    case "time":
      ga(s, n), r = s.min ? s.min : null, i = s.max ? s.max : null;
      break;
    case "datetime-local":
      Ea(s, n), r = s.min ? s.min : null, i = s.max ? s.max : null;
      break;
    case "number":
      r = s.min && X(s.min, n, "min"), i = s.max && X(s.max, n, "max");
      break;
  }
  const o = s.step && X(s.step, n, "step");
  n.fieldsConfig[a] = {
    max: i,
    min: r,
    step: o
  };
}, Ye = (s, n, a, t) => {
  const r = s.selectsConfig[n][a], i = Ze(t, r, a);
  i && de(i, s, n, a);
}, ja = (s, n, a, t) => {
  if (!s || !n) return;
  const r = [];
  let i = /* @__PURE__ */ new Set();
  for (let l = 0; l < s.length; l++) {
    Ye(a, t, "options", s[l]), Ye(a, t, "labels", n[l]);
    const h = i.has(s[l]);
    i.add(s[l]), h && r.push(s[l]);
  }
  $n(r, { logicObj: a, id: t, caller: "options" });
}, va = (s, n) => {
  const a = s.id;
  Dn(n.selectsConfig, a);
  const { options: t, labels: r } = s;
  if ((!t || !Array.isArray(t)) && de("Options must be an array", n, a, "options"), (!r || !Array.isArray(r)) && de("Labels must be an array", n, a, "labels"), !Ve(t, r)) {
    const u = We("options", "labels", a);
    de(u, n, a, "options");
  }
  ja(t, r, n, a);
}, Pa = (s, n, a) => {
  const t = s.maxChars && X(s.maxChars, n, "step"), r = s.maxWords && X(s.maxWords, n, "step");
  let i = null;
  return s.counterLabel && (i = typeof s.counterLabel == "string" ? s.counterLabel : "invalid"), i === "invalid" && O(n, "counterLabel", null, a, "string"), { maxChars: t, maxWords: r, counterLabel: i };
}, ya = (s, n) => {
  const a = n.SSOT, t = n.SSOT.length - 1, r = a[t] === "invalid" ? "invalid" : s.id, i = s.rows && X(s.rows, n, "max"), o = s.cols && X(s.cols, n, "min"), { maxChars: l, maxWords: h, counterLabel: d } = Pa(
    s,
    n,
    t
  );
  n.textareasConfig[r] = {
    rows: i,
    cols: o,
    counterLabel: d,
    maxChars: l,
    maxWords: h
  };
}, ba = (s) => s === "select" ? "selects" : s === "textarea" ? "textareas" : Fe.includes(s) ? "groups" : Je.includes(s) ? "fieldsNum" : Ue.includes(s) ? "fieldsText" : "invalid", Na = (s) => {
  if (s.id === "invalid" || s.name === "invalid") return "forbidden";
  const n = s.id ? s.id : s.name;
  return _e(n, !0) ? "invalid" : n;
}, Ca = (s, n, a) => {
  const { ensureId: t, coords: r } = s, i = n.options ? n.options.ids : [];
  for (let o = 0; o < i.length; o++) {
    const l = t.has(i[o]);
    t.add(i[o]), l && r.push({
      category: "groups",
      position: a,
      array: o,
      id: i[o],
      nidificate: !0
    });
  }
}, Se = (s) => s.replace("Num", "").replace("Text", ""), Qa = (s, n, a, t, r) => {
  switch (s) {
    case "fieldsText":
      $(n, a, "fields", t);
      break;
    case "fieldsNum":
      $(n, a, "fields", t), Ra(n, a.fieldsLogic);
      break;
    case "groups":
      Ia(n, a, t), Ca(r, n, t);
      break;
    case "selects":
      $(n, a, "selects", t), va(n, a.selectsLogic);
      break;
    case "textareas":
      $(n, a, "textareas", t), ya(n, a.textareasLogic);
      break;
  }
}, Ta = (s, n, a, t) => {
  const { ensureId: r, SSOTS: i, coords: o } = t, l = s.type ? s.type.toLowerCase() : "invalid", h = ba(l);
  if (h === "invalid") {
    $(s, n, "fields", a);
    return;
  }
  const d = Se(h) + "SSOT", u = Na(s);
  i[d].push(u);
  const m = r.has(u);
  if (r.add(u), u !== "invalid" && m) {
    const f = Se(h);
    o.push({ category: f, position: a, id: u, nidificate: !1 });
  }
  Qa(h, s, n, a, t);
}, Ha = (s, n) => {
  const a = {};
  if ((!s || s.length === 0) && !n)
    return { logic: "invalid", SSOTS: null };
  const r = /* @__PURE__ */ new Set(), i = [], o = { ensureId: r, SSOTS: Oe, coords: i };
  for (let l = 0; l < s.length; l++)
    Ta(s[l], a, l, o);
  return Sn(i, s, a), { logic: a, SSOTS: Oe };
}, A = (s, n, a) => {
  a && (s[n] = a);
}, Aa = (s, n, a, t) => {
  const r = a === "password" ? "new-password" : a, i = {
    id: a,
    type: s.types[n],
    required: s.required[n],
    autoComplete: r
  };
  return A(i, "label", s.labels[n]), A(i, "placeholder", s.placeholders[n]), A(i, "min", s[t][a]?.min), A(i, "max", s[t][a]?.max), A(i, "step", s[t][a]?.step), i;
}, Oa = (s, n, a, t, r) => {
  n[a].error = s;
  const i = t.errorData[r].callers, o = t.errorData[r].errorType;
  n[a].errorData = { callers: i, errorType: o };
}, Ga = (s, n, a, t) => {
  if (a === "invalid") return;
  const r = n.selectsConfig[a];
  s.options = r.options, s.labels = r.labels, t && (s.options.unshift(""), s.labels.unshift("..."));
}, Ba = (s, n, a) => {
  const t = n.textareasConfig[a];
  A(s, "rows", t.rows), A(s, "cols", t.cols), A(s, "maxChars", t.maxChars), A(s, "maxWords", t.maxWords), A(s, "counterLabel", t.counterLabel);
}, za = (s, n, a, t) => {
  const r = n + "sConfig", i = Aa(s, t, a, r), o = s.required[t];
  return n === "textarea" && Ba(i, s, a), n === "select" && Ga(i, s, a, o), { config: i, state: {}, handlers: {} };
}, ka = (s, n, a) => {
  if (s.errors[a])
    return Xn(s, a, n);
  const t = n, r = {
    name: n,
    required: s.required[a],
    type: s.types[a],
    autoComplete: t,
    options: {
      ids: s[n].options.ids,
      labels: s[n].options.labels
    }
  };
  return A(r, "title", s.titles[a]), { config: r, state: {}, handlers: {} };
}, ce = (s, n) => {
  const a = {}, t = s.SSOT;
  for (let r = 0; r < t.length; r++) {
    const i = t[r], o = s.types[r];
    o === "radio" || o === "checkbox" ? a[i] = ka(s, i, r) : a[i] = za(s, n, i, r), s.errors[r] && Oa(s.errors[r], a, i, s, r);
  }
  return a;
}, Ma = (s) => {
  if (s === "invalid")
    return {
      fields: {},
      groups: {},
      selects: {},
      textareas: {}
    };
  const n = s.fieldsLogic ? ce(s.fieldsLogic, "field") : {}, a = s.groupsLogic ? ce(s.groupsLogic, "group") : {}, t = s.selectsLogic ? ce(s.selectsLogic, "selects") : {}, r = s.textareasLogic ? ce(s.textareasLogic, "textarea") : {};
  return {
    fields: n,
    groups: a,
    selects: t,
    textareas: r
  };
}, Ya = (s, n, a) => {
  const t = {};
  return n.forEach((r) => {
    const i = s[r];
    t[i] = a;
  }), t;
}, Sa = (s, n) => {
  const a = {};
  return s.forEach((t) => {
    a[t] = n;
  }), a;
}, wa = (s, n) => {
  const a = {};
  if (!s) return a;
  const { types: t, SSOT: r } = s;
  return r.forEach((i, o) => {
    if (t[o] === "radio")
      a[i] = n;
    else {
      const l = s[i].options.ids;
      a[i] = { ...Sa(l, !1) };
    }
  }), a;
}, le = (s, n, a) => {
  if (!s) return {};
  if (n === "groups")
    return wa(s, a);
  {
    const { SSOT: t, onChangeIndexes: r } = s;
    return r.length > 0 ? Ya(t, r, a) : {};
  }
}, Da = (s) => {
  const { fieldsLogic: n, groupsLogic: a, selectsLogic: t, textareasLogic: r } = s || {}, i = "", [o, l] = D(
    () => le(n, "fields", i)
  ), [h, d] = D(
    () => le(a, "groups", i)
  ), [u, m] = D(
    () => le(t, "selects", i)
  ), [f, I] = D(
    () => le(r, "textareas", i)
  );
  return {
    fieldsState: o,
    setFieldState: l,
    groupsState: h,
    setGroupsState: d,
    selectsState: u,
    setSelectsState: m,
    textareasState: f,
    setTextareasState: I
  };
}, Xa = ["onBlur", "onFocus", "onKeyDown"], Ua = (s, n, a, t, r) => {
  for (let i = 0; i < n.length; i++) {
    const o = a[n[i]];
    t[o].handlers[r] = s[o];
  }
}, Ja = (s, n) => {
  const a = s + "Indexes", t = s + "Funcs", r = n[a];
  return { map: n[t], indexes: r };
}, he = (s, n, a) => {
  const { map: t, indexes: r } = Ja(s, n);
  r.length !== 0 && Ua(t, r, n.SSOT, a, s);
}, Fa = (s, n) => {
  const { fields: a, textareas: t, groups: r, selects: i } = n, { fieldsLogic: o, textareasLogic: l, groupsLogic: h, selectsLogic: d } = s;
  Xa.forEach((u) => {
    L(o) && he(u, o, a), L(l) && he(u, l, t), L(h) && he(u, h, r), L(d) && he(u, d, i);
  });
}, we = (s, n, a) => {
  const t = typeof n[s] == "boolean";
  if (!n || Object.keys(n).length === 0 || t) return;
  const r = n[s];
  r && r(a);
}, qa = (s, n, a, t) => {
  for (let r = 0; r < a.length; r++) {
    const i = s[a[r]];
    n[i] && s[r] !== "invalid" && (n[i].handlers = { onChange: t });
  }
}, La = (s, n, a, t) => {
  for (let r in n) {
    const i = r + "Logic", o = s[i];
    if (!L(o)) continue;
    const h = o.onChangeIndexes;
    if (!(h.length > 0)) continue;
    const u = r + "SSOT", m = t[u], f = n[r], I = a[r];
    qa(m, f, h, I);
  }
}, Ka = (s, n, a, t) => {
  const r = n.fieldsLogic?.onChangeFuncs || {}, i = n.groupsLogic?.onChangeFuncs || {}, o = n.selectsLogic?.onChangeFuncs || {}, l = n.textareasLogic?.onChangeFuncs || {}, { setFieldState: h, setGroupsState: d, setSelectsState: u, setTextareasState: m } = a, f = (G, z) => (B) => {
    const { id: Y, value: S } = B.target;
    G((w) => ({
      ...w,
      [Y]: S
    })), we(Y, z, S);
  }, I = (G) => (z) => {
    const { id: B, value: Y, type: S, name: w, checked: J } = z.target, me = S === "checkbox" ? J : Y;
    G(S === "radio" ? (F) => ({
      ...F,
      [w]: Y
    }) : (F) => ({
      ...F,
      [w]: {
        ...F[w],
        [B]: J
      }
    })), we(B, i, me);
  }, E = {
    fields: f(h, r),
    selects: f(u, o),
    textareas: f(m, l),
    groups: I(d)
  };
  La(n, s, E, t);
  const { configFields: P, configGroups: j, configSelects: y, configTextareas: M } = s;
  return Fa(n, s), { configFields: P, configGroups: j, configSelects: y, configTextareas: M };
}, Wa = (s, n, a) => {
  for (let t = 0; t < s.length; t++)
    s[t] === "invalid" || !n[s[t]] || (n[s[t]].state = { value: a[s[t]] || "" });
}, Va = (s, n, a, t) => {
  for (let r in a) {
    const i = r + "Logic", o = s[i];
    if (!o || !(o.onChangeIndexes.length > 0)) continue;
    const h = r + "SSOT", d = n[h], u = r + "State";
    Wa(d, a[r], t[u]);
  }
}, ut = (s = [], n) => {
  const a = os({
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: !1
  });
  v(() => {
    if (!a.current.customLogic && (s.length > 0 || !n)) {
      const { logic: r, SSOTS: i } = Ha(s, n);
      a.current.customLogic = r, a.current.SSOTS = i, a.current.configs = Ma(r);
    }
  }, [s, n]);
  const t = Da(a.current.customLogic);
  return v(() => {
    a.current.configs && !a.current.bound && (Ka(
      a.current.configs,
      a.current.customLogic,
      t,
      a.current.SSOTS
    ), a.current.bound = !0);
  }, [s, n]), a.current.bound && Va(
    a.current.customLogic,
    a.current.SSOTS,
    a.current.configs,
    t
  ), a.current.configs || {};
}, pt = "0.0.1";
export {
  _a as CheckboxInput,
  $a as DateInput,
  et as DateTimeInput,
  st as EmailInput,
  nt as NumberInput,
  at as PasswordInput,
  tt as RadioInput,
  rt as SelectInput,
  dt as StarterKit,
  it as TelInput,
  ct as TextInput,
  ot as TextareaInput,
  ht as TimeInput,
  lt as UrlInput,
  ut as useRamonForms,
  pt as version
};
