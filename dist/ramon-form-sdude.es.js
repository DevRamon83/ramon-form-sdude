import ae, { useMemo as j } from "react";
var q = { exports: {} }, P = {};
var X;
function ue() {
  if (X) return P;
  X = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, i, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      c = {};
      for (var p in i)
        p !== "key" && (c[p] = i[p]);
    } else c = i;
    return i = c.ref, {
      $$typeof: e,
      type: r,
      key: u,
      ref: i !== void 0 ? i : null,
      props: c
    };
  }
  return P.Fragment = o, P.jsx = s, P.jsxs = s, P;
}
var U = {};
var Q;
function pe() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === le ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case T:
          return "Fragment";
        case A:
          return "Profiler";
        case I:
          return "StrictMode";
        case te:
          return "Suspense";
        case oe:
          return "SuspenseList";
        case se:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case C:
            return "Portal";
          case _:
            return n.displayName || "Context";
          case N:
            return (n._context.displayName || "Context") + ".Consumer";
          case Y:
            var l = n.render;
            return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case re:
            return l = n.displayName || null, l !== null ? l : e(n.type) || "Memo";
          case M:
            l = n._payload, n = n._init;
            try {
              return e(n(l));
            } catch {
            }
        }
      return null;
    }
    function o(n) {
      return "" + n;
    }
    function s(n) {
      try {
        o(n);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var a = l.error, m = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return a.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), o(n);
      }
    }
    function r(n) {
      if (n === T) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === M)
        return "<...>";
      try {
        var l = e(n);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var n = F.A;
      return n === null ? null : n.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(n) {
      if (W.call(n, "key")) {
        var l = Object.getOwnPropertyDescriptor(n, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function p(n, l) {
      function a() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: a,
        configurable: !0
      });
    }
    function y() {
      var n = e(this.type);
      return K[n] || (K[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function f(n, l, a, m, $, G) {
      var d = a.ref;
      return n = {
        $$typeof: k,
        type: n,
        key: l,
        props: a,
        _owner: m
      }, (d !== void 0 ? d : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function h(n, l, a, m, $, G) {
      var d = l.children;
      if (d !== void 0)
        if (m)
          if (ie(d)) {
            for (m = 0; m < d.length; m++)
              x(d[m]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(d);
      if (W.call(l, "key")) {
        d = e(n);
        var S = Object.keys(l).filter(function(ce) {
          return ce !== "key";
        });
        m = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", J[d + m] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          d,
          S,
          d
        ), J[d + m] = !0);
      }
      if (d = null, a !== void 0 && (s(a), d = "" + a), u(l) && (s(l.key), d = "" + l.key), "key" in l) {
        a = {};
        for (var L in l)
          L !== "key" && (a[L] = l[L]);
      } else a = l;
      return d && p(
        a,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), f(
        n,
        d,
        a,
        i(),
        $,
        G
      );
    }
    function x(n) {
      b(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === M && (n._payload.status === "fulfilled" ? b(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function b(n) {
      return typeof n == "object" && n !== null && n.$$typeof === k;
    }
    var g = ae, k = /* @__PURE__ */ Symbol.for("react.transitional.element"), C = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), _ = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), te = /* @__PURE__ */ Symbol.for("react.suspense"), oe = /* @__PURE__ */ Symbol.for("react.suspense_list"), re = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), le = /* @__PURE__ */ Symbol.for("react.client.reference"), F = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, ie = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var H, K = {}, z = g.react_stack_bottom_frame.bind(
      g,
      c
    )(), V = B(r(c)), J = {};
    U.Fragment = T, U.jsx = function(n, l, a) {
      var m = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        n,
        l,
        a,
        !1,
        m ? Error("react-stack-top-frame") : z,
        m ? B(r(n)) : V
      );
    }, U.jsxs = function(n, l, a) {
      var m = 1e4 > F.recentlyCreatedOwnerStacks++;
      return h(
        n,
        l,
        a,
        !0,
        m ? Error("react-stack-top-frame") : z,
        m ? B(r(n)) : V
      );
    };
  })()), U;
}
var Z;
function me() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? q.exports = ue() : q.exports = pe()), q.exports;
}
var t = me();
const ee = ({ dataField: e }) => {
  const o = e.state || {}, s = e.handlers || {}, { options: r, required: i, type: c, title: u, name: p } = e.config, { value: y } = o, { onChange: f, onBlur: h, onFocus: x, onKeyDown: b } = s, g = f || (() => {
  }), k = h || (() => {
  }), C = x || (() => {
  }), T = b || (() => {
  }), A = c === "checkbox" && r.ids.length === 1 ? i : null, N = c === "radio" ? i : A;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    u && /* @__PURE__ */ t.jsx("div", { className: "", children: u }),
    r.ids.map((_, Y) => /* @__PURE__ */ t.jsxs("div", { children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: c,
          id: _,
          required: N,
          name: p,
          checked: c === "checkbox" ? y[_] : y === _,
          onBlur: k,
          onFocus: C,
          onKeyDown: T,
          onChange: g,
          value: _
        }
      ),
      /* @__PURE__ */ t.jsx("label", { htmlFor: _, children: r.labels[Y] })
    ] }, _))
  ] });
}, de = `
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `, fe = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `, he = `
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`, v = () => {
  console.group(
    "%c 💡 SDUDE PROFESSIONAL TIPS ",
    "background: #FF9800; color: white; padding: 2px; border-radius: 2px;"
  ), console.groupCollapsed(
    "%c1) Handling Multiple Inputs",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${de}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${fe}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${he}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupEnd();
}, R = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`, xe = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${R}
      }`, be = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${R}
       }`, ye = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${R}
       }`, ge = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${R}
       }`, Te = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${R}
       }`, Ie = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${R}
       }`, je = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${R}
      }`, ve = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${R}
    }`, Re = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${R}
       }`, Oe = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${R}
       }`, Ee = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${R}
       }`, De = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${R}
      }`, Ce = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${R}
      }`, ke = (e) => {
  switch (e) {
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
}, O = (e, o, s) => {
  const r = ke(o);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${r.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;"
  );
  const i = `
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${e}

  3) Group your objects into an array:
     const logicArray = [${o}];

  4) Initialize the Engine in your Component:
     const { ${s} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${r.input} dataField={ ${s}.${o}} />
  `;
  console.log(
    `%c${i}`,
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"
  ), console.groupEnd();
}, Ne = () => `
${O(xe, "myCheckboxGroup", "groups")}
${v()}
`, we = () => `
${O(be, "myDateField", "fields")}
${v()}
`, Ae = () => `
${O(ye, "myDatetimeField", "fields")}
${v()}
`, _e = () => `
${O(ge, "myEmailField", "fields")}
${v()}
`, Se = () => `
${O(Te, "myNumberField", "fields")}
${v()}
`, Pe = () => `
${O(Ie, "myPasswordField", "fields")}
${v()}
`, Ue = () => `
${O(je, "myRadioGroup", "groups")}
${v()}
`, $e = () => `
${O(ve, "mySelect", "selects")}
${v()}
`, qe = () => `
${O(Re, "myTelField", "fields")}
${v()}
`, Ye = () => `
${O(Ee, "myTextarea", "textareas")}
${v()}
`, Me = () => `
${O(Oe, "myTextField", "fields")}
${v()}
`, Fe = () => `
${O(De, "myTimeField", "fields")}
${v()}
`, Be = () => `
${O(Ce, "myUrlField", "fields")}
${v()}
`, ne = {
  checkbox: Ne,
  date: we,
  "dateTime-local": Ae,
  email: _e,
  number: Se,
  password: Pe,
  radio: Ue,
  select: $e,
  tel: qe,
  text: Me,
  textarea: Ye,
  time: Fe,
  url: Be
};
function E({ isAsync: e, dataField: o }) {
  if (e) return;
  const s = {
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
  }, i = (c) => {
    c.preventDefault();
    const u = ne.text;
    u();
  };
  return /* @__PURE__ */ t.jsxs("div", { style: { ...s }, children: [
    /* @__PURE__ */ t.jsx("p", { children: '"Invalid Component Call: Reference not found. Note: This type of error usually occurs in one of three cases:' }),
    /* @__PURE__ */ t.jsxs("ol", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ t.jsxs("li", { children: [
        /* @__PURE__ */ t.jsx("strong", { children: "ID Mismatch" }),
        ": You are trying to call the input using a different ID than the one defined in your configuration object."
      ] }),
      /* @__PURE__ */ t.jsxs("li", { children: [
        /* @__PURE__ */ t.jsx("strong", { children: "Incorrect Destructuring" }),
        ": You are using the correct ID, but targeting the wrong logical group. For example, trying to render a select input using fields.myInput instead of selects.myInput."
      ] }),
      /* @__PURE__ */ t.jsxs("li", { children: [
        /* @__PURE__ */ t.jsx("strong", { children: "Invalid Type" }),
        `: You have assigned a non-existent type in the configuration object (e.g., a typo like type: 'selct' instead of 'select')."`
      ] })
    ] }),
    /* @__PURE__ */ t.jsxs("p", { children: [
      /* @__PURE__ */ t.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ t.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ t.jsx("span", { style: { ...r }, onClick: i, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function Ge({ dataField: e }) {
  const { id: o, type: s, name: r } = e.config, i = o || r, { callers: c, errorType: u } = e.errorData, p = c.length === 1, y = p ? "an error" : "errors", f = p ? "key" : "keys", h = "You sent an empty array configuration:", x = i === "noLogicArray", b = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  }, g = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, k = /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    "The configuration object for ",
    /* @__PURE__ */ t.jsx("strong", { children: i.toUpperCase() }),
    " ",
    "input is invalid and contains ",
    y,
    " in the following ",
    f,
    ":"
  ] }), C = (T) => {
    T.preventDefault();
    const I = ne[s];
    I();
  };
  return /* @__PURE__ */ t.jsxs("div", { style: { ...b }, children: [
    x ? h : k,
    /* @__PURE__ */ t.jsx("ol", { style: { textAlign: "left" }, children: c.map((T, I) => /* @__PURE__ */ t.jsxs("li", { children: [
      /* @__PURE__ */ t.jsx("strong", { children: T.toUpperCase() }),
      ": ",
      u[I]
    ] }, `${T}-${I}`)) }),
    /* @__PURE__ */ t.jsxs("p", { children: [
      /* @__PURE__ */ t.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ t.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ t.jsx("span", { style: { ...g }, onClick: C, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function D({ component: e, dataField: o }) {
  return o.error ? /* @__PURE__ */ t.jsx(Ge, { dataField: o }) : e;
}
function ze({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(ee, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
const w = ({ dataField: e, async: o }) => {
  const s = e.state || {}, r = e.handlers || {}, { id: i, label: c } = e.config, { value: u } = s, { onChange: p, onBlur: y, onFocus: f, onKeyDown: h } = r, x = p || (() => {
  }), b = y || (() => {
  }), g = f || (() => {
  }), k = h || (() => {
  }), C = {
    required: e.config.required,
    type: e.config.type,
    placeholder: e.config.placeholder,
    id: e.config.id,
    name: e.config.id,
    min: e.config.min,
    max: e.config.max,
    step: e.config.step,
    autoComplete: e.config.autoComplete,
    onBlur: b,
    onFocus: g,
    onKeyDown: k
  };
  return p && (C.onChange = x, C.value = u || ""), e.error && o ? null : /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsx("label", { htmlFor: i, children: c }),
    /* @__PURE__ */ t.jsx("input", { ...C })
  ] });
};
function Ve({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function Je({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function Xe({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function Qe({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function Ze({ dataField: e, isAsync: o, i18n: s }) {
  return console.log("PasswordInput ", e?.state?.value), j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function en({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(ee, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
const Le = ({ dataField: e }) => {
  const o = e.state || {}, s = e.handlers || {}, { options: r, id: i, labels: c, label: u, required: p } = e.config, { value: y } = o, { onChange: f, onBlur: h, onFocus: x, onKeyDown: b } = s, g = f || (() => {
  }), I = {
    required: p,
    name: i,
    id: i,
    onBlur: h || (() => {
    }),
    onFocus: x || (() => {
    }),
    onKeyDown: b || (() => {
    })
  };
  return f && (I.onChange = g, I.value = y || ""), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    u && /* @__PURE__ */ t.jsx("label", { htmlFor: i, children: u }),
    /* @__PURE__ */ t.jsx("select", { ...I, children: r.map((A, N) => /* @__PURE__ */ t.jsx("option", { value: A, children: c[N] }, A)) })
  ] });
};
function nn({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(Le, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function tn({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function We({ label: e, value: o, max: s, charsType: r }) {
  let i = null;
  return r ? i = o.trim() === "" ? 0 : o.length : i = o.trim() === "" ? 0 : o.trim().split(/\s+/).length, /* @__PURE__ */ t.jsxs("div", { className: "", children: [
    /* @__PURE__ */ t.jsx("span", { children: e }),
    " ",
    /* @__PURE__ */ t.jsx("br", {}),
    /* @__PURE__ */ t.jsxs("span", { children: [
      i,
      " / ",
      s
    ] })
  ] });
}
function He({ dataField: e }) {
  const o = e.state || {}, s = e.handlers || {}, { id: r, counterLabel: i, maxChars: c, maxWords: u, label: p } = e.config, { value: y } = o, { onChange: f, onBlur: h, onFocus: x, onKeyDown: b } = s, g = f || (() => {
  }), k = h || (() => {
  }), C = x || (() => {
  }), T = b || (() => {
  }), I = c || u, A = c || !1, N = {
    required: e.config.required,
    placeholder: e.config.placeholder,
    rows: e.config.rows,
    cols: e.config.cols,
    id: e.config.id,
    name: e.config.id,
    autoComplete: e.config.autoComplete,
    onBlur: k,
    onFocus: C,
    onKeyDown: T,
    spellCheck: !1,
    maxLength: c
  };
  return f && (N.onChange = g, N.value = y || ""), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    p && /* @__PURE__ */ t.jsx("label", { htmlFor: r, children: p }),
    /* @__PURE__ */ t.jsx("textarea", { ...N }),
    I && /* @__PURE__ */ t.jsx(
      We,
      {
        max: c || u,
        value: y,
        label: i,
        charsType: A
      }
    )
  ] });
}
function on({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(He, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function rn({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function sn({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
function ln({ dataField: e, isAsync: o, i18n: s }) {
  return j(() => {
    const r = /* @__PURE__ */ t.jsx(w, { dataField: e });
    return e ? /* @__PURE__ */ t.jsx(D, { component: r, dataField: e }) : /* @__PURE__ */ t.jsx(E, { isAsync: o });
  }, [e?.state?.value, s]);
}
const cn = "0.0.1";
export {
  ze as CheckboxInput,
  Ve as DateInput,
  Je as DateTimeInput,
  Xe as EmailInput,
  Qe as NumberInput,
  Ze as PasswordInput,
  en as RadioInput,
  nn as SelectInput,
  tn as TelInput,
  rn as TextInput,
  on as TextareaInput,
  ln as TimeInput,
  sn as UrlInput,
  cn as version
};
