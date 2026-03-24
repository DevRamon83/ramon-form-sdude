import us, { useMemo as T, useState as W, useRef as ps, useEffect as hs } from "react";
var he = { exports: {} }, re = {};
var Ee;
function ms() {
  if (Ee) return re;
  Ee = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(r, t, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), t.key !== void 0 && (i = "" + t.key), "key" in t) {
      o = {};
      for (var l in t)
        l !== "key" && (o[l] = t[l]);
    } else o = t;
    return t = o.ref, {
      $$typeof: s,
      type: r,
      key: i,
      ref: t !== void 0 ? t : null,
      props: o
    };
  }
  return re.Fragment = n, re.jsx = a, re.jsxs = a, re;
}
var te = {};
var Oe;
function xs() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === Y ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case g:
          return "Fragment";
        case M:
          return "Profiler";
        case v:
          return "StrictMode";
        case U:
          return "Suspense";
        case H:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case N:
            return "Portal";
          case $:
            return c.displayName || "Context";
          case O:
            return (c._context.displayName || "Context") + ".Consumer";
          case ne:
            var m = c.render;
            return c = c.displayName, c || (c = m.displayName || m.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case B:
            return m = c.displayName || null, m !== null ? m : s(c.type) || "Memo";
          case P:
            m = c._payload, c = c._init;
            try {
              return s(c(m));
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
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var j = m.error, y = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return j.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), n(c);
      }
    }
    function r(c) {
      if (c === g) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === P)
        return "<...>";
      try {
        var m = s(c);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var c = I.A;
      return c === null ? null : c.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (w.call(c, "key")) {
        var m = Object.getOwnPropertyDescriptor(c, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function l(c, m) {
      function j() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: j,
        configurable: !0
      });
    }
    function d() {
      var c = s(this.type);
      return Se[c] || (Se[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function u(c, m, j, y, pe, Ne) {
      var R = j.ref;
      return c = {
        $$typeof: b,
        type: c,
        key: m,
        props: j,
        _owner: y
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
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
        value: pe
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ne
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, m, j, y, pe, Ne) {
      var R = m.children;
      if (R !== void 0)
        if (y)
          if (ae(R)) {
            for (y = 0; y < R.length; y++)
              h(R[y]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(R);
      if (w.call(m, "key")) {
        R = s(c);
        var X = Object.keys(m).filter(function(ds) {
          return ds !== "key";
        });
        y = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", De[R + y] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          R,
          X,
          R
        ), De[R + y] = !0);
      }
      if (R = null, j !== void 0 && (a(j), R = "" + j), i(m) && (a(m.key), R = "" + m.key), "key" in m) {
        j = {};
        for (var Pe in m)
          Pe !== "key" && (j[Pe] = m[Pe]);
      } else j = m;
      return R && l(
        j,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), u(
        c,
        R,
        j,
        t(),
        pe,
        Ne
      );
    }
    function h(c) {
      x(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === P && (c._payload.status === "fulfilled" ? x(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function x(c) {
      return typeof c == "object" && c !== null && c.$$typeof === b;
    }
    var f = us, b = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), M = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), H = /* @__PURE__ */ Symbol.for("react.suspense_list"), B = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), L = /* @__PURE__ */ Symbol.for("react.activity"), Y = /* @__PURE__ */ Symbol.for("react.client.reference"), I = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, ae = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var F, Se = {}, _e = f.react_stack_bottom_frame.bind(
      f,
      o
    )(), Ce = V(r(o)), De = {};
    te.Fragment = g, te.jsx = function(c, m, j) {
      var y = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        c,
        m,
        j,
        !1,
        y ? Error("react-stack-top-frame") : _e,
        y ? V(r(c)) : Ce
      );
    }, te.jsxs = function(c, m, j) {
      var y = 1e4 > I.recentlyCreatedOwnerStacks++;
      return p(
        c,
        m,
        j,
        !0,
        y ? Error("react-stack-top-frame") : _e,
        y ? V(r(c)) : Ce
      );
    };
  })()), te;
}
var Fe;
function fs() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? he.exports = ms() : he.exports = xs()), he.exports;
}
var e = fs();
const Ke = ({ dataField: s }) => {
  const n = s.state || {}, a = s.handlers || {}, { options: r, required: t, type: o, title: i, name: l } = s.config, { value: d } = n, { onChange: u, onBlur: p, onFocus: h, onKeyDown: x } = a, f = u || (() => {
  }), b = p || (() => {
  }), N = h || (() => {
  }), g = x || (() => {
  }), M = o === "checkbox" && r.ids.length === 1 ? t : null, O = o === "radio" ? t : M;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    i && /* @__PURE__ */ e.jsx("div", { className: "", children: i }),
    r.ids.map(($, ne) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: o,
          id: $,
          required: O,
          name: l,
          checked: o === "checkbox" ? d[$] : d === $,
          onBlur: b,
          onFocus: N,
          onKeyDown: g,
          onChange: f,
          value: $
        }
      ),
      /* @__PURE__ */ e.jsx("label", { htmlFor: $, children: r.labels[ne] })
    ] }, $))
  ] });
}, js = `
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `, gs = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `, Is = `
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`, S = () => {
  console.group(
    "%c 💡 SDUDE PROFESSIONAL TIPS ",
    "background: #FF9800; color: white; padding: 2px; border-radius: 2px;"
  ), console.groupCollapsed(
    "%c1) Handling Multiple Inputs",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${js}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${gs}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${Is}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupEnd();
}, _ = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`, ys = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${_}
      }`, Rs = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${_}
       }`, bs = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${_}
       }`, Ns = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${_}
       }`, Ps = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${_}
       }`, vs = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${_}
       }`, ws = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${_}
      }`, ks = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${_}
    }`, Ts = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${_}
       }`, Ss = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${_}
       }`, _s = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${_}
       }`, Cs = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${_}
      }`, Ds = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${_}
      }`, Es = (s) => {
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
    case "mySelect":
      return { title: "SELECT INPUT CONFIGURATION", input: "SelectInput" };
    case "myTelField":
      return { title: "TEL INPUT CONFIGURATION", input: "TelInput" };
    case "myTextarea":
      return { title: "TEXTAREA INPUT CONFIGURATION", input: "TextareaInput" };
    case "myDateField":
      return { title: "Date INPUT CONFIGURATION", input: "DateInput" };
    case "myUrlField":
      return { title: "URL INPUT CONFIGURATION", input: "UrlInput" };
    case "myTimeField":
      return { title: "TIME INPUT CONFIGURATION", input: "TimeInput" };
  }
}, C = (s, n, a) => {
  const r = Es(n);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${r.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;"
  );
  const t = `
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${s}

  3) Group your objects into an array:
     const logicArray = [${n}];

  4) Initialize the Engine in your Component:
     const { ${a} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${r.input} dataField={ ${a}.${n}} />
  `;
  console.log(
    `%c${t}`,
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"
  ), console.groupEnd();
}, Os = () => `
${C(ys, "myCheckboxGroup", "groups")}
${S()}
`, Fs = () => `
${C(Rs, "myDateField", "fields")}
${S()}
`, As = () => `
${C(bs, "myDatetimeField", "fields")}
${S()}
`, qs = () => `
${C(Ns, "myEmailField", "fields")}
${S()}
`, Ms = () => `
${C(Ps, "myNumberField", "fields")}
${S()}
`, $s = () => `
${C(vs, "myPasswordField", "fields")}
${S()}
`, Us = () => `
${C(ws, "myRadioGroup", "groups")}
${S()}
`, Bs = () => `
${C(ks, "mySelect", "selects")}
${S()}
`, Ls = () => `
${C(Ts, "myTelField", "fields")}
${S()}
`, Vs = () => `
${C(_s, "myTextarea", "textareas")}
${S()}
`, Hs = () => `
${C(Ss, "myTextField", "fields")}
${S()}
`, Ys = () => `
${C(Cs, "myTimeField", "fields")}
${S()}
`, Gs = () => `
${C(Ds, "myUrlField", "fields")}
${S()}
`, We = {
  checkbox: Os,
  date: Fs,
  "dateTime-local": As,
  email: qs,
  number: Ms,
  password: $s,
  radio: Us,
  select: Bs,
  tel: Ls,
  text: Hs,
  textarea: Vs,
  time: Ys,
  url: Gs
};
function D({ isAsync: s, dataField: n }) {
  if (s) return;
  const a = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  }, r = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, t = (o) => {
    o.preventDefault();
    const i = We.text;
    i();
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
      /* @__PURE__ */ e.jsx("span", { style: { ...r }, onClick: t, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function Ks({ dataField: s }) {
  const { id: n, type: a, name: r } = s.config, t = n || r, { callers: o, errorType: i } = s.errorData, l = o.length === 1, d = l ? "an error" : "errors", u = l ? "key" : "keys", p = "You sent an empty array configuration:", h = t === "noLogicArray", x = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  }, f = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, b = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    "The configuration object for ",
    /* @__PURE__ */ e.jsx("strong", { children: t.toUpperCase() }),
    " ",
    "input is invalid and contains ",
    d,
    " in the following ",
    u,
    ":"
  ] }), N = (g) => {
    g.preventDefault();
    const v = We[a];
    v();
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { ...x }, children: [
    h ? p : b,
    /* @__PURE__ */ e.jsx("ol", { style: { textAlign: "left" }, children: o.map((g, v) => /* @__PURE__ */ e.jsxs("li", { children: [
      /* @__PURE__ */ e.jsx("strong", { children: g.toUpperCase() }),
      ": ",
      i[v]
    ] }, `${g}-${v}`)) }),
    /* @__PURE__ */ e.jsxs("p", { children: [
      /* @__PURE__ */ e.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ e.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ e.jsx("span", { style: { ...f }, onClick: N, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function E({ component: s, dataField: n }) {
  return n.error ? /* @__PURE__ */ e.jsx(Ks, { dataField: n }) : s;
}
function cr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(Ke, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
const G = ({ dataField: s, async: n }) => {
  const a = s.state || {}, r = s.handlers || {}, { id: t, label: o } = s.config, { value: i } = a, { onChange: l, onBlur: d, onFocus: u, onKeyDown: p } = r, h = l || (() => {
  }), x = d || (() => {
  }), f = u || (() => {
  }), b = p || (() => {
  }), N = {
    required: s.config.required,
    type: s.config.type,
    placeholder: s.config.placeholder,
    id: s.config.id,
    name: s.config.id,
    min: s.config.min,
    max: s.config.max,
    step: s.config.step,
    autoComplete: s.config.autoComplete,
    onBlur: x,
    onFocus: f,
    onKeyDown: b
  };
  return l && (N.onChange = h, N.value = i || ""), s.error && n ? null : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: o }),
    /* @__PURE__ */ e.jsx("input", { ...N })
  ] });
};
function dr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function ur({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function pr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function hr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function mr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function xr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(Ke, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
const Ws = ({ dataField: s }) => {
  const n = s.state || {}, a = s.handlers || {}, { options: r, id: t, labels: o, label: i, required: l } = s.config, { value: d } = n, { onChange: u, onBlur: p, onFocus: h, onKeyDown: x } = a, f = u || (() => {
  }), v = {
    required: l,
    name: t,
    id: t,
    onBlur: p || (() => {
    }),
    onFocus: h || (() => {
    }),
    onKeyDown: x || (() => {
    })
  };
  return u && (v.onChange = f, v.value = d || ""), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    i && /* @__PURE__ */ e.jsx("label", { htmlFor: t, children: i }),
    /* @__PURE__ */ e.jsx("select", { ...v, children: r.map((M, O) => /* @__PURE__ */ e.jsx("option", { value: M, children: o[O] }, M)) })
  ] });
};
function fr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(Ws, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function jr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function zs({ label: s, value: n, max: a, charsType: r }) {
  let t = null;
  return r ? t = n.trim() === "" ? 0 : n.length : t = n.trim() === "" ? 0 : n.trim().split(/\s+/).length, /* @__PURE__ */ e.jsxs("div", { className: "", children: [
    /* @__PURE__ */ e.jsx("span", { children: s }),
    " ",
    /* @__PURE__ */ e.jsx("br", {}),
    /* @__PURE__ */ e.jsxs("span", { children: [
      t,
      " / ",
      a
    ] })
  ] });
}
function Js({ dataField: s }) {
  const n = s.state || {}, a = s.handlers || {}, { id: r, counterLabel: t, maxChars: o, maxWords: i, label: l } = s.config, { value: d } = n, { onChange: u, onBlur: p, onFocus: h, onKeyDown: x } = a, f = u || (() => {
  }), b = p || (() => {
  }), N = h || (() => {
  }), g = x || (() => {
  }), v = o || i, M = o || !1, O = {
    required: s.config.required,
    placeholder: s.config.placeholder,
    rows: s.config.rows,
    cols: s.config.cols,
    id: s.config.id,
    name: s.config.id,
    autoComplete: s.config.autoComplete,
    onBlur: b,
    onFocus: N,
    onKeyDown: g,
    spellCheck: !1,
    maxLength: o
  };
  return u && (O.onChange = f, O.value = d || ""), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    l && /* @__PURE__ */ e.jsx("label", { htmlFor: r, children: l }),
    /* @__PURE__ */ e.jsx("textarea", { ...O }),
    v && /* @__PURE__ */ e.jsx(
      zs,
      {
        max: o || i,
        value: d,
        label: t,
        charsType: M
      }
    )
  ] });
}
function gr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(Js, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function Ir({ dataField: s, isAsync: n, i18n: a }) {
  return console.log("wrapper"), T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function yr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
function Rr({ dataField: s, isAsync: n, i18n: a }) {
  return T(() => {
    const r = /* @__PURE__ */ e.jsx(G, { dataField: s });
    return s ? /* @__PURE__ */ e.jsx(E, { component: r, dataField: s }) : /* @__PURE__ */ e.jsx(D, { isAsync: n });
  }, [s?.state?.value, a]);
}
const ee = (s) => {
  s.errorData.push("clean");
}, le = (s, n) => {
  s[n] === "clean" && (s[n] = {
    callers: [],
    errorType: []
  });
}, Xs = (s, n, a) => {
  const r = n.replace("Funcs", "");
  ee(s), le(s.errorData, a), s.errors[a] = !0, s.errorData[a].callers.push(r), s.errorData[a].errorType.push("must be a function");
}, q = (s, n, a, r, t) => {
  const o = a || `must be ${t}`;
  ee(s), le(s.errorData, r), s.errors[r] = !0, s.errorData[r].callers.push(n), s.errorData[r].errorType.push(o);
}, J = (s, n, a) => {
  const { customLogic: r, logicKey: t, index: o } = n, i = r[t];
  i.errors[o] = !0, ee(i), le(i.errorData, o), i.errorData[o].callers.push(a), i.errorData[o].errorType.push(s);
}, ye = (s, n, a, r) => {
  const t = n.SSOT.length - 1;
  ee(n), le(n.errorData, t), n.errors[t] = !0, n.errorData[t].callers.push(r), n.errorData[t].errorType.push(s);
}, Qs = (s, n, a, r) => {
  ee(s), le(s.errorData, r), s.errors[r] = !0, s.errorData[r].callers.push(n), s.errorData[r].errorType.push(a);
}, Zs = (s) => s.id ? s.id : s.name, en = (s) => `Values in the ids array must be unique. Change the value at position ${s.array}`, sn = (s, n, a, r) => {
  for (let t = 0; t < s.length; t++) {
    const { category: o, nidificate: i, position: l, id: d } = s[t], u = o + "Logic", p = a[u], h = n[l], x = Zs(h), f = p.SSOT.indexOf(x), b = i ? en(s[t]) : "id is duplicated";
    Qs(p, i ? "option" : x, b, f);
  }
}, Ae = {
  fieldsSSOT: [],
  groupsSSOT: [],
  selectsSSOT: [],
  textareasSSOT: []
}, nn = (s, n, a) => {
  s[n][a] = {
    options: {
      ids: [],
      labels: []
    }
  };
}, an = (s, n) => {
  s[n] = {
    options: [],
    labels: []
  };
}, rn = (s, n, a) => ({ config: {
  name: a,
  type: s.types[n],
  autoComplete: "invalid",
  title: "invalid",
  options: {
    ids: "invalid",
    labels: "invalid"
  }
}, state: {}, handlers: {} }), ze = ["text", "email", "tel", "url", "password"], Je = ["number", "date", "time", "datetime-local"], Xe = ["radio", "checkbox"], tn = "select", on = "textarea", Qe = [
  ...ze,
  ...Je,
  ...Xe,
  tn,
  on
], ln = (s, n) => `The ${s} property in ${n} must be an object`, cn = (s, n, a) => `The ${s} object in ${n} must contain only the ${a}`, dn = (s, n) => `The ${s} key in ${n} is missing`, qe = (s, n) => `The ${s} field in ${n} options must be an array`, Ze = (s, n, a) => `The ${s} and ${n} arrays in ${a} must have the same length`, un = (s, n) => `The ${s} in ${n} must be a string`, Me = "format is invalid", pn = (s) => s !== null || s !== void 0 ? `If you don't provide a valid ID, I can't identify the input. 
    However, the invalid ID is at position ${s} in the configuration array you provided` : !1, hn = (s, n, a) => {
  n[a].push(s);
}, mn = (s, n, a, r) => {
  n[a][s] = r;
}, xn = (s, n, a, r, t) => {
  const o = n.SSOT.length - 1;
  hn(o, n, r), mn(s, n, a, t);
}, fn = (s, n, a) => {
  const r = n.type;
  let o = typeof s == "function" || a === "onChange" && typeof s == "boolean";
  return r === "textarea" ? n.maxWords || n.maxChars ? !0 : o : (r === "checkbox" || r === "radio") && a === "onChange" ? !0 : o;
}, es = (s, n) => !s || !n ? !1 : s.length === n.length, z = (s, n, a) => {
  if (typeof s != "number" || Number.isNaN(s)) {
    const r = n.SSOT.length - 1;
    return q(n, a, "must be a number", r, "a number"), "invalid";
  }
  return s;
}, jn = (s, n, a, r) => {
  if (s && r.trim() === "") {
    const o = a.length - 1;
    return a.splice(0, a.length), a.push("invalid"), `You cannot use an empty string at index ${o}`;
  }
  return n;
}, ss = (s, n, a) => {
  const r = typeof s == "string", t = r ? s : null;
  n.push(t);
  let o = r ? null : un(s, `${a} array`);
  return o = jn(r, o, n, s), o;
}, gn = (s, n) => {
  if (s.length > 0) {
    const a = s.join(" - "), r = s.length === 1 ? "is" : "are", t = `${a} ${r} duplicated`, { logicObj: o, id: i, caller: l } = n;
    selectsError(t, o, i, l);
  }
}, ns = (s, n) => !s && n ? "mandatory" : !s && !n ? !1 : typeof s != "string" ? "must be a string" : s.trim() === "" ? "cannot be an empty string" : !1, In = (s, n, a, r, t, o, i) => {
  s ? xn(n, a, r, t, o) : Xs(a, r, i);
}, as = (s, n, a) => {
  if (n.required && typeof n.required != "boolean") {
    q(s, "required", "must be a boolean", a);
    return;
  }
  const r = !!n.required;
  s.required.push(r);
}, rs = (s, n, a) => {
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
}, me = (s, n, a) => {
  const { element: r, id: t, logicObj: o } = s, i = o.SSOT.length - 1, l = fn(a, r, n), d = n + "Funcs", u = n + "Indexes";
  In(l, t, o, d, u, a, i);
}, yn = (s) => s.onChange || s.type === "textarea" || s.type === "radio" || s.type === "checkbox", ts = (s, n, a, r) => {
  const t = { element: s, id: a, logicObj: n };
  yn(s) && me(t, "onChange", s.onChange), s.onBlur && me(t, "onBlur", s.onBlur), s.onFocus && me(t, "onFocus", s.onFocus), s.onKeyDown && me(t, "onKeyDown", s.onKeyDown);
}, Z = (s, n, a, r, t) => {
  let o = !1;
  const { logicObj: i, id: l, index: d, mandatory: u } = r, p = ns(s, u);
  if (p) {
    o = !0;
    const x = l ? null : pn(t);
    q(i, a, x || p, d);
  }
  const h = o ? "invalid" : s;
  return n.push(h), o;
}, os = (s, n, a, r) => {
  const { logicObj: t, index: o } = r;
  Qe.includes(s) ? Z(s, n, a, r) : (n.push(null), q(t, a, "is invalid", o));
}, Rn = (s, n, a) => {
  const { label: r, placeholder: t, id: o, type: i } = n, l = s.SSOT.length, d = { logicObj: s, id: o, index: l };
  d.mandatory = !0;
  const p = Z(o, s.SSOT, "id", d, a) ? "invalid" : o;
  d.id = p, os(i, s.types, "type", d), d.mandatory = !1, Z(r, s.labels, "label", d), i !== "select" && Z(t, s.placeholders, "placeholder", d);
}, oe = (s, n, a, r) => {
  const t = a + "Logic", o = a + "Config";
  n[t] || rs(n, t, o);
  const i = n[t];
  i.errors.push(!1), ee(i), Rn(i, s, r);
  const l = i.SSOT.length - 1;
  as(i, s, l);
  const u = i.SSOT[l] === "invalid" ? "invalid" : s.id;
  ts(s, i, u);
}, ie = (s, n, a) => new RegExp(`^[${n}]+$`).test(s), Q = (s, n) => s ? Object.keys(s).length > 0 : !1, bn = (s, n) => {
  const a = parseInt(s);
  return a % 400 === 0 || a % 4 === 0 && a % 100 !== 0;
}, Nn = (s, n, a) => {
  const r = parseInt(s);
  return r === 4 || r === 6 || r === 9 || r === 11;
}, Pn = (s, n) => s === 2, vn = (s, n, a, r) => {
  if (!Pn(n))
    return { isValid: !0, continue: !0 };
  const t = s ? 29 : 28;
  return r > t ? { isValid: !1, why: `February cannot be > ${t}` } : { isValid: !0, continue: !1 };
}, wn = (s) => s.length !== 10 ? { isValid: !1, why: "invalid length" } : s[4] !== "-" || s[7] !== "-" ? { isValid: !1, why: "invalid format" } : { isValid: !0 }, kn = (s) => {
  const a = ie(s[0], "0-9"), r = ie(s[1], "0-9"), t = ie(s[2], "0-9");
  return a ? r ? t ? { isValid: !0 } : { isValid: !1, why: "Day contains invalid chars" } : { isValid: !1, why: "Month contains invalid chars" } : { isValid: !1, why: "Year contains invalid chars" };
}, Tn = (s, n, a) => s < 0 ? { isValid: !1, why: "Year cannot be negative" } : s > 9999 ? { isValid: !1, why: "Year cannot be > 9999" } : n < 0 ? { isValid: !1, why: "Month cannot be negative" } : n > 12 ? { isValid: !1, why: "Month cannot be > 12" } : { isValid: !0 }, ve = (s, n, a) => {
  const r = wn(s);
  if (!r.isValid) return { isValid: !1, why: r.why };
  const t = s.split("-"), o = kn(t);
  if (!o.isValid) return { isValid: !1, why: o.why };
  const i = parseInt(t[0]), l = parseInt(t[1]), d = parseInt(t[2]), u = Tn(i, l);
  if (!u.isValid) return { isValid: !1, why: u.why };
  const p = bn(i), h = vn(p, l, n, d);
  if (!h.isValid)
    return { isValid: !1, why: h.why };
  if (h.isValid && !h.continue)
    return { isValid: !0 };
  const f = Nn(l) ? 30 : 31;
  return d > f ? { isValid: !1, why: `Day cannot be > ${f}` } : { isValid: !0 };
}, we = (s, n) => {
  if (s.length !== 5 || s[2] !== ":")
    return !1;
  const a = s.split(":"), r = "0-9", t = ie(a[0], r), o = ie(a[1], r);
  if (!t || !o)
    return !1;
  const i = parseInt(a[0]), l = parseInt(a[1]);
  return !(i < 0 || i > 23 || l < 0 || l > 59);
}, $e = (s, n, a) => {
  let r = null;
  if (s.includes("T") ? r = "T" : s.includes(" "), !r) return { isValid: !1, why: "invalid format" };
  const t = s.length;
  let o = null;
  if (t === 16)
    o = !1;
  else if (t === 19)
    o = !0;
  else
    return { isValid: !1, why: "invalid format" };
  if (s[10] !== r) return { isValid: !1, why: "invalid format" };
  const i = s.split(r), l = i[0], d = ve(l, "iso");
  if (!d.isValid) return { isValid: !1, why: d.why };
  const u = i[1];
  let p = u.substring(0, 5);
  o && (o = u.substring(6, 8));
  let h = null;
  if (o) {
    const f = parseInt(o);
    h = f < 0 || f > 59;
  }
  return h ? { isValid: !1, why: "Invalid format for seconds" } : we(p) ? { isValid: !0 } : { isValid: !1, why: "Invalid format for time" };
}, Ue = (s, n, a) => {
  const { customLogic: r, logicKey: t, name: o } = a, i = r[t][o].options[n], l = ss(s, i, n), d = l + " of " + n + " array";
  l && J(d, a, n);
}, Sn = (s, n, a) => {
  for (let r = 0; r < s.length; r++)
    Ue(s[r], "ids", a), Ue(n[r], "labels", a);
}, _n = (s, n, a) => {
  if (!Q(s)) {
    const t = ln("options", n);
    J(t, a, "options");
  }
}, Be = (s, n, a, r) => {
  const t = !a.includes(r), o = t && dn(r, s);
  t && J(o, n, r);
}, Cn = (s, n, a) => {
  const r = '"labels" and "ids" keys', t = s.length !== 2, o = t && cn("options", n, r);
  t && J(o, a, "options");
}, Dn = (s, n, a, r) => {
  (!s || !Array.isArray(s)) && J(qe("ids", a), r, "ids"), (!n || !Array.isArray(n)) && J(qe("labels", a), r, "labels");
}, En = (s) => {
  const { options: n, customLogic: a, name: r, logicKey: t } = s;
  nn(a, t, r), _n(n, r, s);
  const o = n ? Object.keys(n) : ["ids", "labels"];
  Cn(o, r, s), Be(r, s, o, "labels"), Be(r, s, o, "ids");
  const i = n?.ids ? n.ids : ["invalid"], l = n?.labels ? n.labels : ["invalid"];
  Dn(i, l, r, s), es(i, l) ? Sn(i, l, s) : J(Ze("ids", "labels", r), s, "options");
}, On = (s, n, a, r) => {
  s.mandatory = !0;
  const o = Z(
    n,
    a.SSOT,
    "id",
    s,
    r
  ) ? "invalid" : n;
  s.name = o;
}, Fn = (s, n, a) => {
  const r = "groupsLogic";
  n[r] || rs(n, r, "groupsConfig");
  const o = s.name, i = n[r];
  i.errors.push(!1);
  const l = i.SSOT.length, d = {
    options: s.options,
    customLogic: n,
    name: o,
    logicKey: r,
    index: l
  };
  En(d), as(i, s, l);
  const u = { logicObj: i, name: o, index: l };
  On(u, o, i, a), os(s.type, i.types, "type", u), u.mandatory = !1, Z(s.title, i.titles, "title", u), i.SSOT, ts(s, i, s.name);
}, An = (s, n) => {
  const a = n.SSOT.length - 1, r = s.min ? ve(s.min, "iso") : null, t = s.max ? ve(s.max, "iso") : null;
  r && !r.isValid && q(n, "min", r.why, a), t && !t.isValid && q(n, "max", t.why, a);
}, qn = (s, n) => {
  const a = n.SSOT.length - 1, r = s.min ? $e(s.min) : null, t = s.max ? $e(s.max) : null;
  r && !r.isValid && q(n, "min", r.why, a), t && !t.isValid && q(n, "max", t.why, a);
}, Mn = (s, n) => {
  const a = n.SSOT.length - 1, r = s.min ? we(s.min) : null, t = s.max ? we(s.max) : null;
  s.min && !r && q(n, "min", Me, a), s.max && !t && q(n, "max", Me, a);
}, $n = (s, n) => {
  const { id: a, type: r } = s;
  let t = null, o = null;
  switch (r) {
    case "date":
      An(s, n), t = s.min ? s.min : null, o = s.max ? s.max : null;
      break;
    case "time":
      Mn(s, n), t = s.min ? s.min : null, o = s.max ? s.max : null;
      break;
    case "datetime-local":
      qn(s, n), t = s.min ? s.min : null, o = s.max ? s.max : null;
      break;
    case "number":
      t = s.min && z(s.min, n, "min"), o = s.max && z(s.max, n, "max");
      break;
  }
  const i = s.step && z(s.step, n, "step");
  n.fieldsConfig[a] = {
    max: o,
    min: t,
    step: i
  };
}, Le = (s, n, a, r) => {
  const t = s.selectsConfig[n][a], o = ss(r, t, a);
  o && ye(o, s, n, a);
}, Un = (s, n, a, r) => {
  if (!s || !n) return;
  const t = [];
  let o = /* @__PURE__ */ new Set();
  for (let l = 0; l < s.length; l++) {
    Le(a, r, "options", s[l]), Le(a, r, "labels", n[l]);
    const d = o.has(s[l]);
    o.add(s[l]), d && t.push(s[l]);
  }
  gn(t, { logicObj: a, id: r, caller: "options" });
}, Bn = (s, n) => {
  const a = s.id;
  an(n.selectsConfig, a);
  const { options: r, labels: t } = s;
  if ((!r || !Array.isArray(r)) && ye("Options must be an array", n, a, "options"), (!t || !Array.isArray(t)) && ye("Labels must be an array", n, a, "labels"), !es(r, t)) {
    const p = Ze("options", "labels", a);
    ye(p, n, a, "options");
  }
  Un(r, t, n, a);
}, Ln = (s, n, a) => {
  const r = s.maxChars && z(s.maxChars, n, "step"), t = s.maxWords && z(s.maxWords, n, "step");
  let o = null;
  return s.counterLabel && (o = typeof s.counterLabel == "string" ? s.counterLabel : "invalid"), o === "invalid" && q(n, "counterLabel", null, a, "string"), { maxChars: r, maxWords: t, counterLabel: o };
}, Vn = (s, n) => {
  const a = n.SSOT, r = n.SSOT.length - 1, t = a[r] === "invalid" ? "invalid" : s.id, o = s.rows && z(s.rows, n, "max"), i = s.cols && z(s.cols, n, "min"), { maxChars: l, maxWords: d, counterLabel: u } = Ln(
    s,
    n,
    r
  );
  n.textareasConfig[t] = {
    rows: o,
    cols: i,
    counterLabel: u,
    maxChars: l,
    maxWords: d
  };
}, Hn = (s) => s === "select" ? "selects" : s === "textarea" ? "textareas" : Xe.includes(s) ? "groups" : Je.includes(s) ? "fieldsNum" : ze.includes(s) ? "fieldsText" : "invalid", Yn = (s) => {
  if (s.id === "invalid" || s.name === "invalid") return "forbidden";
  const n = s.id ? s.id : s.name;
  return ns(n, !0) ? "invalid" : n;
}, Gn = (s, n, a) => {
  const { ensureId: r, coords: t } = s, o = n.options ? n.options.ids : [];
  for (let i = 0; i < o.length; i++) {
    const l = r.has(o[i]);
    r.add(o[i]), l && t.push({
      category: "groups",
      position: a,
      array: i,
      id: o[i],
      nidificate: !0
    });
  }
}, Ve = (s) => s.replace("Num", "").replace("Text", ""), Kn = (s, n, a, r, t) => {
  switch (s) {
    case "fieldsText":
      oe(n, a, "fields", r);
      break;
    case "fieldsNum":
      oe(n, a, "fields", r), $n(n, a.fieldsLogic);
      break;
    case "groups":
      Fn(n, a, r), Gn(t, n, r);
      break;
    case "selects":
      oe(n, a, "selects", r), Bn(n, a.selectsLogic);
      break;
    case "textareas":
      oe(n, a, "textareas", r), Vn(n, a.textareasLogic);
      break;
  }
}, Wn = (s, n, a, r) => {
  const { ensureId: t, SSOTS: o, coords: i } = r, l = s.type ? s.type.toLowerCase() : "invalid", d = Hn(l);
  if (d === "invalid") {
    oe(s, n, "fields", a);
    return;
  }
  const u = Ve(d) + "SSOT", p = Yn(s);
  o[u].push(p);
  const h = t.has(p);
  if (t.add(p), p !== "invalid" && h) {
    const x = Ve(d);
    i.push({ category: x, position: a, id: p, nidificate: !1 });
  }
  Kn(d, s, n, a, r);
}, He = (s, n) => {
  const a = {};
  if ((!s || s.length === 0) && !n)
    return { logic: "invalid", SSOTS: null };
  const t = /* @__PURE__ */ new Set(), o = [], i = { ensureId: t, SSOTS: Ae, coords: o };
  for (let l = 0; l < s.length; l++)
    Wn(s[l], a, l, i);
  return sn(o, s, a), { logic: a, SSOTS: Ae };
}, A = (s, n, a) => {
  a && (s[n] = a);
}, zn = (s, n, a, r) => {
  const t = a === "password" ? "new-password" : a, o = {
    id: a,
    type: s.types[n],
    required: s.required[n],
    autoComplete: t
  };
  return A(o, "label", s.labels[n]), A(o, "placeholder", s.placeholders[n]), A(o, "min", s[r][a]?.min), A(o, "max", s[r][a]?.max), A(o, "step", s[r][a]?.step), o;
}, Jn = (s, n, a, r, t) => {
  n[a].error = s;
  const o = r.errorData[t].callers, i = r.errorData[t].errorType;
  n[a].errorData = { callers: o, errorType: i };
}, Xn = (s, n, a, r) => {
  if (a === "invalid") return;
  const t = n.selectsConfig[a];
  s.options = t.options, s.labels = t.labels, r && (s.options.unshift(""), s.labels.unshift("..."));
}, Qn = (s, n, a) => {
  const r = n.textareasConfig[a];
  A(s, "rows", r.rows), A(s, "cols", r.cols), A(s, "maxChars", r.maxChars), A(s, "maxWords", r.maxWords), A(s, "counterLabel", r.counterLabel);
}, Zn = (s, n, a, r) => {
  const t = n + "sConfig", o = zn(s, r, a, t), i = s.required[r];
  return n === "textarea" && Qn(o, s, a), n === "select" && Xn(o, s, a, i), {
    config: o,
    state: {},
    handlers: {},
    returns: { onChange: null, onBlur: null, onFocus: null, onKeyDown: null }
  };
}, ea = (s, n, a) => {
  if (s.errors[a])
    return rn(s, a, n);
  const r = n, t = {
    name: n,
    required: s.required[a],
    type: s.types[a],
    autoComplete: r,
    options: {
      ids: s[n].options.ids,
      labels: s[n].options.labels
    }
  };
  return A(t, "title", s.titles[a]), { config: t, state: {}, handlers: {} };
}, xe = (s, n) => {
  const a = {}, r = s.SSOT;
  for (let t = 0; t < r.length; t++) {
    const o = r[t], i = s.types[t];
    i === "radio" || i === "checkbox" ? a[o] = ea(s, o, t) : a[o] = Zn(s, n, o, t), s.errors[t] && Jn(s.errors[t], a, o, s, t);
  }
  return a;
}, Ye = (s) => {
  if (s === "invalid")
    return {
      fields: {},
      groups: {},
      selects: {},
      textareas: {}
    };
  const n = {}, a = s.fieldsLogic ? xe(s.fieldsLogic, "field") : {}, r = s.groupsLogic ? xe(s.groupsLogic, "group") : {}, t = s.selectsLogic ? xe(s.selectsLogic, "select") : {}, o = s.textareasLogic ? xe(s.textareasLogic, "textarea") : {};
  return {
    resets: n,
    fields: a,
    groups: r,
    selects: t,
    textareas: o
  };
}, fe = (s, n, a, r) => {
  n.returns || (n.returns = {}), s && (n.value = a), n.returns[r] = null;
}, sa = (s, n) => {
  const a = {}, { SSOT: r } = s;
  for (let t = 0; t < r.length; t++) {
    const o = r[t];
    a[o] = {}, fe(!0, a[o], n, "onChange"), fe(!1, a[o], n, "onBlur"), fe(!1, a[o], n, "onFocus"), fe(!1, a[o], n, "onKeyDown");
  }
  return a;
}, na = (s, n) => {
  const a = {};
  return s.forEach((r) => {
    a[r] = n;
  }), a;
}, aa = (s, n) => {
  const a = {};
  if (!s) return a;
  const { types: r, SSOT: t } = s;
  return t.forEach((o, i) => {
    if (r[i] === "radio")
      a[o] = {
        value: n,
        returns: {
          onChange: null,
          onFocus: null,
          onKeyDown: null,
          onBlur: null
        }
      };
    else {
      const l = s[o].options.ids;
      a[o] = { value: { ...na(l, !1) } }, a[o].returns = {
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onBlur: null
      };
    }
  }), a;
}, K = (s, n, a) => {
  const r = {};
  return s ? n === "groups" ? aa(s, a) : sa(s, a) : r;
}, ra = (s) => {
  const { fieldsLogic: n, groupsLogic: a, selectsLogic: r, textareasLogic: t } = s || {}, o = "", [i, l] = W(
    () => K(n, "fields", o)
  ), [d, u] = W(
    () => K(a, "groups", o)
  ), [p, h] = W(
    () => K(r, "selects", o)
  ), [x, f] = W(
    () => K(t, "textareas", o)
  );
  return {
    fieldsState: i,
    setFieldsState: l,
    groupsState: d,
    setGroupsState: u,
    selectsState: p,
    setSelectsState: h,
    textareasState: x,
    setTextareasState: f
  };
}, ta = ["onBlur", "onFocus", "onKeyDown"], oa = (s, n, a, r, t, o, i) => {
  for (let l = 0; l < n.length; l++) {
    const d = a[n[l]], u = s[d];
    r[d].handlers[t] = o(u, t, i);
  }
}, ia = (s, n) => {
  const a = s + "Indexes", r = s + "Funcs", t = n[a];
  return { map: n[r], indexes: t };
}, je = (s, n, a, r, t) => {
  const { map: o, indexes: i } = ia(n, a);
  i.length !== 0 && oa(
    o,
    i,
    a.SSOT,
    r,
    n,
    s,
    t
  );
}, la = (s, n, a, r) => {
  const { fields: t, textareas: o, groups: i, selects: l } = n, { fieldsLogic: d, textareasLogic: u, groupsLogic: p, selectsLogic: h } = s, x = r.setFieldsState, f = r.setGroupsState, b = r.setSelectsState, N = r.setTextareasState;
  ta.forEach((g) => {
    Q(d) && je(a, g, d, t, x), Q(u) && je(a, g, u, o, N), Q(p) && je(a, g, p, i, f), Q(h) && je(a, g, h, l, b);
  });
}, Ge = (s, n, a) => {
  const r = typeof n[s] == "boolean";
  if (!n || Object.keys(n).length === 0 || r) return;
  const t = n[s];
  return t && t(a);
}, ca = (s, n, a, r) => {
  for (let t = 0; t < a.length; t++) {
    const o = s[a[t]];
    n[o] && s[t] !== "invalid" && (n[o].handlers = { onChange: r });
  }
}, da = (s, n, a, r) => {
  for (let t in n) {
    const o = t + "Logic", i = s[o];
    if (!Q(i)) continue;
    const d = i.onChangeIndexes;
    if (!(d.length > 0)) continue;
    const p = t + "SSOT", h = r[p], x = n[t], f = a[t];
    ca(h, x, d, f);
  }
}, ua = (s, n, a, r, t) => {
  const o = n.fieldsLogic?.onChangeFuncs || {}, i = n.groupsLogic?.onChangeFuncs || {}, l = n.selectsLogic?.onChangeFuncs || {}, d = n.textareasLogic?.onChangeFuncs || {}, { setFieldsState: u, setGroupsState: p, setSelectsState: h, setTextareasState: x } = a, f = (U, H) => (B) => {
    const { id: P, value: L, type: Y } = B.target;
    console.log("setter ", L);
    const I = Ge(P, H, L);
    t.current.inputChanged = { id: P, type: Y }, U((w) => ({
      ...w,
      [P]: {
        ...w[P],
        value: L,
        returns: {
          ...w[P]?.returns,
          onChange: I
        }
      }
    }));
  }, b = (U) => {
    const H = Object.keys(a.groupsState[U].value), B = {};
    return H.forEach((P) => {
      B[P] = document.getElementById(P).checked;
    }), B;
  }, N = (U, H) => (B) => {
    const { id: P, value: L, type: Y, name: I, checked: w } = B.target;
    t.current.inputChanged = { id: I, type: Y };
    const ae = Y === "radio" ? L : b(I), V = Ge(I, H, ae);
    U(Y === "radio" ? (F) => ({
      ...F,
      [I]: {
        ...F[I],
        value: L,
        returns: {
          ...F[I]?.returns,
          onChange: V
        }
      }
    }) : (F) => ({
      ...F,
      [I]: {
        ...F[I],
        value: {
          ...F[I].value,
          [P]: w
        },
        returns: {
          ...F[I]?.returns,
          onChange: V
        }
      }
    }));
  }, g = (U, H, B) => (P) => {
    const { id: L, value: Y, type: I } = P.target, w = I === "radio" || I === "checkbox" ? P.target.name : L;
    t.current.inputChanged = { id: w, type: I };
    const ae = U(w, Y);
    B((V) => ({
      ...V,
      [w]: {
        ...V[w],
        returns: {
          ...V[w]?.returns,
          [H]: ae
        }
      }
    }));
  }, v = {
    fields: f(u, o),
    selects: f(h, l),
    textareas: f(x, d),
    groups: N(p, i)
  };
  da(n, s, v, r);
  const { configFields: M, configGroups: O, configSelects: $, configTextareas: ne } = s;
  return la(n, s, g, a), { configFields: M, configGroups: O, configSelects: $, configTextareas: ne };
}, pa = (s, n, a) => {
  const { setFieldsState: r, setGroupsState: t, setSelectsState: o, setTextareasState: i } = n, { fieldsLogic: l, groupsLogic: d, selectsLogic: u, textareasLogic: p } = s || {}, h = "";
  r(() => K(l, "fields", h)), t(() => K(d, "groups", h)), o(() => K(u, "selects", h)), i(
    () => K(p, "textareas", h)
  ), a.current = {
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: !1
  };
}, ge = (s, n) => (s((a) => ({
  ...a,
  [n]: {
    ...a[n],
    value: "",
    returns: {
      onChange: null,
      onBlur: null,
      onFocus: null
    }
  }
})), !0), ha = (s, n, a) => {
  const r = {}, t = Object.keys(a);
  for (let o = 0; o < t.length; o++)
    r[t[o]] = !1;
  return s((o) => ({
    ...o,
    [n]: {
      ...o[n],
      value: r,
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null
      }
    }
  })), !0;
}, ma = (s, n) => {
  n || console.error("A valid ID parameter is required to reset a single input.");
  const { setFieldsState: a, setGroupsState: r, setSelectsState: t, setTextareasState: o } = s;
  let i = !1;
  const { fieldsState: l, groupsState: d, selectsState: u, textareasState: p } = s;
  i = l[n] ? ge(a, n) : i, d[n] && (typeof s.groupsState[n].value == "string" ? ge(r, n) : ha(r, n, s.groupsState[n].value), i = !0), i = u[n] ? ge(t, n) : i, i = p[n] ? ge(o, n) : i, i || console.error("The ID provided as a parameter is invalid");
}, xa = (s, n, a) => {
  for (let r = 0; r < s.length; r++)
    s[r] === "invalid" || !n[s[r]] || (n[s[r]].state = { value: a[s[r]]?.value || "" }, n[s[r]].returns = {
      onChange: a[s[r]]?.returns?.onChange || null,
      onBlur: a[s[r]]?.returns?.onBlur || null,
      onFocus: a[s[r]]?.returns?.onFocus || null,
      onKeyDown: a[s[r]]?.returns?.onKeyDown || null
    });
}, fa = (s, n, a, r) => {
  for (let t in s) {
    const o = t + "Logic";
    if (!r[o]) continue;
    const l = t + "SSOT", d = n[l], u = t + "State";
    xa(d, s[t], a[u]);
  }
}, ja = (s) => s === "select" ? "selects" : s === "textarea" ? "textareas" : s === "radio" || s === "checkbox" ? "groups" : "fields", ga = (s, n, a, r) => {
  const { type: t, id: o } = r.current.inputChanged, i = ja(t), l = i + "Logic";
  if (!a[l]) return;
  const u = i + "State", p = n[u];
  s[i][o] = {
    ...s[i][o],
    state: { value: p[o]?.value || "" },
    returns: {
      onChange: p[o]?.returns?.onChange || null,
      onBlur: p[o]?.returns?.onBlur || null,
      onFocus: p[o]?.returns?.onFocus || null,
      onKeyDown: p[o]?.returns?.onKeyDown || null
    }
  };
}, Ia = (s, n) => {
  const { customLogic: a, SSOTS: r, configs: t } = n.current;
  n.current.inputChanged ? ga(t, s, a, n) : fa(t, r, s, a), t.resets && Object.keys(t.resets).length === 0 && (t.resets.resetAll = () => pa(a, s, n), t.resets.resetOne = (o) => ma(s, o));
}, Ie = (s, n, a) => {
  for (let r = 0; r < s.length; r++)
    a[s[r]].config = n[s[r]].config;
}, ya = (s, n) => {
  const a = s.fields, r = n.fields, t = Object.keys(a);
  Ie(t, a, r);
  const o = s.groups, i = n.groups, l = Object.keys(o);
  Ie(l, o, i);
  const d = s.selects, u = n.selects, p = Object.keys(d);
  Ie(p, d, u);
  const h = s.textareas, x = n.textareas, f = Object.keys(h);
  Ie(f, h, x);
}, br = (s) => {
  const { configArray: n, isAsync: a, i18n: r } = s, t = ps({
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: !1,
    inputChanged: null,
    i18nPrev: null
  }), i = !t.current.bound && !n && a ? [] : n;
  if (!t.current.customLogic && (i.length > 0 || !a)) {
    console.log("parsing");
    const { logic: d, SSOTS: u } = He(i, a), p = Ye(d);
    t.current.customLogic = d, t.current.SSOTS = u, t.current.configs = p, t.current.i18nPrev = r;
  }
  if (t.current.i18nPrev && r !== t.current.i18nPrev) {
    const { logic: d } = He(i, a), u = Ye(d);
    ya(u, t.current.configs), t.current.bound = !1;
  }
  const l = ra(t.current.customLogic);
  return t.current.configs && !t.current.bound && (console.log("binding"), ua(
    t.current.configs,
    t.current.customLogic,
    l,
    t.current.SSOTS,
    t
  ), t.current.bound = !0, t.current.i18nPrev = r), t.current.bound && Ia(l, t), t.current.configs || {};
};
function Ra() {
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
function ba() {
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
function Na() {
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
function Pa() {
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
function va() {
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
    /* @__PURE__ */ e.jsx(Pa, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "2. Pass the state to the hook:" }),
    /* @__PURE__ */ e.jsx(Na, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "3. Execute the effect or the logic needed to populate the state with your configuration objects. Keep in mind, however, that once the state is populated, you cannot change it again.",
      /* @__PURE__ */ e.jsx("br", {}),
      "In the following example,",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: "I used an effect to handle the fetch logic, but you are not required to do so" }),
      ". You can use any logic you prefer; you can even write it directly within the component body. The reactivity is driven by the state itself."
    ] }),
    /* @__PURE__ */ e.jsx(Ra, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "4.",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "You must pass an isAsync prop with a value of true to every individual component you render" }) }),
      ". This notifies them that you are in asynchronous mode. Additionally, ensure you use conditional logic for the form rendering to prevent the app from crashing in the absence of data."
    ] }),
    /* @__PURE__ */ e.jsx(ba, {}),
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
function wa() {
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
function is() {
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
function ka() {
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
function Ta() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx(ka, {}),
    `
`,
    `
`,
    /* @__PURE__ */ e.jsx(is, {}),
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
function Sa() {
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
    /* @__PURE__ */ e.jsx(Ta, {}),
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
function _a() {
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
function ke() {
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
function ce({ requiredGroups: s }) {
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
function de() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(ke, {}),
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function Re({ type: s }) {
  const n = s === "number" ? "number" : "string";
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(ke, {}),
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
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function be({
  constName: s,
  id: n,
  type: a,
  placeholder: r,
  label: t
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
      r,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      t,
      '"'
    ] }),
    ",",
    `
`
  ] });
}
function se() {
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
function Ca({
  id: s,
  label: n,
  type: a,
  placeholder: r,
  constName: t,
  min: o,
  max: i,
  step: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      be,
      {
        constName: t,
        id: s,
        type: a,
        placeholder: r,
        label: n
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: o }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: i }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ e.jsx("span", { className: "PRIparentheses", children: l }),
    ",",
    `
`,
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function ue({
  id: s,
  label: n,
  type: a,
  placeholder: r,
  constName: t
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      be,
      {
        constName: t,
        id: s,
        type: a,
        placeholder: r,
        label: n
      }
    ),
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function Te({
  id: s,
  label: n,
  type: a,
  placeholder: r,
  constName: t,
  min: o,
  max: i,
  step: l
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      be,
      {
        constName: t,
        id: s,
        type: a,
        placeholder: r,
        label: n
      }
    ),
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      o,
      '"'
    ] }),
    ",",
    `
`,
    "  ",
    /* @__PURE__ */ e.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ e.jsxs("span", { className: "PRIstrings", children: [
      '"',
      i,
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function ls({ type: s }) {
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function cs({ requiredGroups: s }) {
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
    /* @__PURE__ */ e.jsx(ce, { requiredGroups: s })
  ] });
}
function Da() {
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function Ea() {
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
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
function Oa({
  id: s,
  label: n,
  type: a,
  placeholder: r,
  constName: t
}) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      be,
      {
        constName: t,
        id: s,
        type: a,
        placeholder: r,
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
    /* @__PURE__ */ e.jsx(se, {})
  ] });
}
function Fa() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    `
`,
    /* @__PURE__ */ e.jsx(ke, {}),
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
    /* @__PURE__ */ e.jsx(ce, {})
  ] });
}
const Aa = {
  id: "username",
  type: "text",
  label: "Enter your username",
  placeholder: "john.smith",
  constName: "username",
  component: ue,
  comments: de
}, qa = {
  id: "email",
  type: "email",
  label: "Enter your email",
  placeholder: "john.smith@gmail.com",
  constName: "email",
  component: ue,
  comments: de
}, Ma = {
  id: "phone",
  type: "tel",
  label: "Enter your phone number",
  placeholder: "+39 12345678",
  constName: "phone",
  component: ue,
  comments: de
}, $a = {
  id: "website",
  type: "url",
  label: "Enter your website url",
  placeholder: "mywebsite.com",
  constName: "website",
  component: ue,
  comments: de
}, Ua = {
  id: "password",
  type: "password",
  label: "Enter your password",
  placeholder: "myStr0ngPassw0rd!",
  constName: "password",
  component: ue,
  comments: de
}, Ba = {
  id: "age",
  type: "number",
  label: "Enter your age",
  placeholder: "43",
  constName: "age",
  min: 21,
  max: 67,
  step: 1,
  interfaceType: "number",
  component: Ca,
  comments: Re
}, La = {
  id: "birthday",
  type: "date",
  label: "When is your birthday?",
  placeholder: "1980-01-01",
  constName: "birthday",
  min: "1920-01-01",
  max: "1990-01-01",
  step: 60,
  interfaceType: "date",
  component: Te,
  comments: Re
}, Va = {
  id: "time",
  type: "time",
  label: "What time is it?",
  placeholder: "09:00",
  constName: "time",
  min: "06:00",
  max: "20:00",
  step: 60,
  interfaceType: "date",
  component: Te,
  comments: Re
}, Ha = {
  id: "leave",
  type: "datetime-local",
  label: "When do you want to leave?",
  placeholder: "2028-01-01T00:00",
  constName: "leave",
  min: "2027-01-01T09:00",
  max: "2030-01-01T20:30",
  step: 60,
  interfaceType: "date",
  component: Te,
  comments: Re
}, Ya = {
  type: "radio",
  component: ls,
  comments: cs
}, Ga = {
  type: "checkbox",
  component: ls,
  comments: cs,
  requiredGroups: "// Optional: true (native) only for single checkbox. Multiple options need custom logic"
}, Ka = {
  component: Da,
  comments: Ea,
  requiredGroups: "// Optional: true to require one selection from the group (native)"
}, Wa = {
  id: "message",
  type: "textarea",
  label: "Your message",
  placeholder: "Dear John, hello",
  constName: "message",
  component: Oa,
  comments: Fa
};
function k({ props: s }) {
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
function za() {
  const [s, n] = W("text");
  return /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContainer", children: [
    /* @__PURE__ */ e.jsx("div", { className: "ramon__tabMenu", children: Qe.map((a) => /* @__PURE__ */ e.jsx(
      "div",
      {
        className: `ramon__tabBtn ${s === a ? "ramon__active" : ""}`,
        onClick: () => n(a),
        children: a.toUpperCase()
      },
      a
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__tabContent", children: [
      s === "text" && /* @__PURE__ */ e.jsx(k, { props: Aa }),
      s === "email" && /* @__PURE__ */ e.jsx(k, { props: qa }),
      s === "tel" && /* @__PURE__ */ e.jsx(k, { props: Ma }),
      s === "url" && /* @__PURE__ */ e.jsx(k, { props: $a }),
      s === "password" && /* @__PURE__ */ e.jsx(k, { props: Ua }),
      s === "number" && /* @__PURE__ */ e.jsx(k, { props: Ba }),
      s === "date" && /* @__PURE__ */ e.jsx(k, { props: La }),
      s === "time" && /* @__PURE__ */ e.jsx(k, { props: Va }),
      s === "datetime-local" && /* @__PURE__ */ e.jsx(k, { props: Ha }),
      s === "radio" && /* @__PURE__ */ e.jsx(k, { props: Ya }),
      s === "checkbox" && /* @__PURE__ */ e.jsx(k, { props: Ga }),
      s === "select" && /* @__PURE__ */ e.jsx(k, { props: Ka }),
      s === "textarea" && /* @__PURE__ */ e.jsx(k, { props: Wa })
    ] })
  ] });
}
function Ja() {
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
function Xa() {
  return /* @__PURE__ */ e.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ e.jsx(Ja, {}),
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
function Qa() {
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
function Za() {
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
function er() {
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
function sr() {
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
function nr() {
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
function ar() {
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
      /* @__PURE__ */ e.jsx(_a, {}),
      "This way,",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: 'you can keep the files containing all the configuration objects for a specific form in the "configs" folder, while storing the functions written for different input types in the "funcs" folder' }),
      '. By giving these files the same name as the form (for example, "signup.js"), it will be extremely easy to find everything you need for any future updates.'
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Using the hook" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: `Once you've decided on your file system organization, simply create an array containing all your configuration objects by importing them from the "configs" folder (the order in which you insert them is irrelevant); for example:` }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__ide", children: /* @__PURE__ */ e.jsx(is, {}) }),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("strong", { children: "Be precise with your configuration keys" }),
      "; the engine expects exactly configArray, isAsync, and i18n. If you misspell configArray, the system will catch the error and show you a generic alert.",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "However, since the other two keys are optional, I can't help you if you get them wrong" }),
      ": the orchestrator will simply ignore the misspelled key and fall back to its default internal values without warning.",
      /* @__PURE__ */ e.jsx("br", {}),
      "Having clarified this, all you have to do is pass objConfig as a parameter to the hook:"
    ] }),
    /* @__PURE__ */ e.jsx(Qa, {}),
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
    /* @__PURE__ */ e.jsx(Xa, {}),
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
    /* @__PURE__ */ e.jsx(za, {}),
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
    /* @__PURE__ */ e.jsx(Za, {}),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "And then, of course, include it in your JSX:" }),
    /* @__PURE__ */ e.jsx(er, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ e.jsx("strong", { children: "This will render the error on your screen along with a button that, when clicked, provides a boilerplate configuration object (including comments) ready to be copied and pasted" }),
      ". Just remember that for radios and checkboxes, everything revolves around the name attribute rather than the id, since we follow standard HTML (as mentioned before).",
      " ",
      /* @__PURE__ */ e.jsx("u", { children: "For everything else, you already know what to do" }),
      ". Want to change the input design? Use the IDs and handle it via CSS. Need a full form reset? You can use the browser's native method if you've attached a ref to the form (formRef.current.reset()) or just go with a good old, brutal page refresh."
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "ramon__h2", children: "Accessing state and returns values" }),
    /* @__PURE__ */ e.jsx("p", { className: "ramon__p", children: "As for accessing the values of controlled components, simply call them using standard JS syntax; for example, to conditionally show certain fields, you can do it like this:" }),
    /* @__PURE__ */ e.jsx(sr, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      'Similarly, to access the return values of your validation functions, you can use "',
      /* @__PURE__ */ e.jsx("strong", { children: "fields.username.returns.onChange" }),
      '" (or onBlur, or any other event you are working with).',
      /* @__PURE__ */ e.jsx("br", {}),
      "If you need functions to handle the supported events (onChange, onBlur, onFocus, and onKeyDown), you just have to map them in the configuration object; they will automatically receive the updated state value, along with any specific return value you have defined within your validation logic:"
    ] }),
    /* @__PURE__ */ e.jsx(nr, {}),
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
function rr() {
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
function tr() {
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
    /* @__PURE__ */ e.jsx(rr, {}),
    /* @__PURE__ */ e.jsxs("p", { className: "ramon__p", children: [
      "Even in this case, the only mandatory fields are those related to id and type;",
      " ",
      /* @__PURE__ */ e.jsx("strong", { children: /* @__PURE__ */ e.jsx("u", { children: "all other fields remain optional" }) }),
      ", just as when you use the hook."
    ] })
  ] });
}
function or({ toggle: s, page: n, setToggle: a }) {
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "ramon__minimize", onClick: () => a(!s), children: [
      s ? "HIDE" : "SHOW",
      " STARTER KIT"
    ] }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "sync" && /* @__PURE__ */ e.jsx(ar, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "async" && /* @__PURE__ */ e.jsx(va, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "i18n" && /* @__PURE__ */ e.jsx(Sa, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "uiMode" && /* @__PURE__ */ e.jsx(tr, {}) }),
    s && /* @__PURE__ */ e.jsx("div", { children: n === "doc" && /* @__PURE__ */ e.jsx(wa, {}) })
  ] });
}
const ir = `

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
function Nr() {
  const [s, n] = W(!0), [a, r] = W("sync"), t = ["sync", "async", "i18n", "uiMode", "doc"], o = [
    "Synchronous configuration",
    "Asynchronous configuration",
    "I18n",
    "Ui mode: standalone",
    "How it works"
  ];
  return hs(() => {
    const i = new CSSStyleSheet();
    return i.replaceSync(ir), document.adoptedStyleSheets = [...document.adoptedStyleSheets, i], () => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (l) => l !== i
      );
    };
  }, []), /* @__PURE__ */ e.jsxs("div", { className: "ramonContainer", children: [
    s && /* @__PURE__ */ e.jsxs("div", { className: "ramon__starterKit", children: [
      /* @__PURE__ */ e.jsx("h1", { className: "ramon__h1", children: "Thank you for choosing ramon-form-sdude!" }),
      /* @__PURE__ */ e.jsx("div", { className: "ramon__pagesContainer", children: t.map((i, l) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: `ramon__pages ${a === i ? "ramon__activePage" : ""}`,
          onClick: () => r(i),
          children: o[l]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ e.jsx(or, { page: a, toggle: s, setToggle: n })
  ] });
}
const Pr = "0.0.1";
export {
  cr as CheckboxInput,
  dr as DateInput,
  ur as DateTimeInput,
  pr as EmailInput,
  hr as NumberInput,
  mr as PasswordInput,
  xr as RadioInput,
  fr as SelectInput,
  Nr as StarterKit,
  jr as TelInput,
  Ir as TextInput,
  gr as TextareaInput,
  Rr as TimeInput,
  yr as UrlInput,
  br as useRamonForm,
  Pr as version
};
