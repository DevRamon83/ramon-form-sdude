import { j as c, v as be, g as $e, p as Fe, f as Ee } from "./validTypes-BIzwwAsG.js";
import { useMemo as I, useState as J, useRef as Ne } from "react";
const Te = ({ dataField: e }) => {
  const n = e.state || {}, t = e.handlers || {}, { options: s, required: r, type: o, title: i, name: a } = e.config, { value: l } = n, { onChange: u, onBlur: d, onFocus: p, onKeyDown: f } = t, h = u || (() => {
  }), g = d || (() => {
  }), m = p || (() => {
  }), x = f || (() => {
  }), T = o === "checkbox" && s.ids.length === 1 ? r : null, F = o === "radio" ? r : T;
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    i && /* @__PURE__ */ c.jsx("div", { className: "", children: i }),
    s.ids.map((N, re) => /* @__PURE__ */ c.jsxs("div", { children: [
      /* @__PURE__ */ c.jsx(
        "input",
        {
          type: o,
          id: N,
          required: F,
          name: a,
          checked: o === "checkbox" ? l[N] : l === N,
          onBlur: g,
          onFocus: m,
          onKeyDown: x,
          onChange: h,
          value: N
        }
      ),
      /* @__PURE__ */ c.jsx("label", { htmlFor: N, children: s.labels[re] })
    ] }, N))
  ] });
}, qe = `
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `, Ae = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `, je = `
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
  ), console.log(`%c${qe}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${Ae}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;"
  ), console.log(`%c${je}`, "color: #555; font-family: monospace;"), console.groupEnd(), console.groupEnd();
}, C = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`, Ue = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${C}
      }`, Be = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${C}
       }`, Me = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${C}
       }`, Ve = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${C}
       }`, Le = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${C}
       }`, Pe = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${C}
       }`, Ke = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${C}
      }`, Ge = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${C}
    }`, He = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${C}
       }`, Ye = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${C}
       }`, We = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${C}
       }`, ze = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${C}
      }`, Xe = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${C}
      }`, Je = (e) => {
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
}, D = (e, n, t) => {
  const s = Je(n);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${s.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;"
  );
  const r = `
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${e}

  3) Group your objects into an array:
     const logicArray = [${n}];

  4) Initialize the Engine in your Component:
     const { ${t} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${s.input} dataField={ ${t}.${n}} />
  `;
  console.log(
    `%c${r}`,
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"
  ), console.groupEnd();
}, Qe = () => `
${D(Ue, "myCheckboxGroup", "groups")}
${v()}
`, Ze = () => `
${D(Be, "myDateField", "fields")}
${v()}
`, _e = () => `
${D(Me, "myDatetimeField", "fields")}
${v()}
`, en = () => `
${D(Ve, "myEmailField", "fields")}
${v()}
`, nn = () => `
${D(Le, "myNumberField", "fields")}
${v()}
`, tn = () => `
${D(Pe, "myPasswordField", "fields")}
${v()}
`, sn = () => `
${D(Ke, "myRadioGroup", "groups")}
${v()}
`, rn = () => `
${D(Ge, "mySelect", "selects")}
${v()}
`, on = () => `
${D(He, "myTelField", "fields")}
${v()}
`, an = () => `
${D(We, "myTextarea", "textareas")}
${v()}
`, cn = () => `
${D(Ye, "myTextField", "fields")}
${v()}
`, ln = () => `
${D(ze, "myTimeField", "fields")}
${v()}
`, un = () => `
${D(Xe, "myUrlField", "fields")}
${v()}
`, Se = {
  checkbox: Qe,
  date: Ze,
  "dateTime-local": _e,
  email: en,
  number: nn,
  password: tn,
  radio: sn,
  select: rn,
  tel: on,
  text: cn,
  textarea: an,
  time: ln,
  url: un
};
function w({ isAsync: e, dataField: n }) {
  if (e) return;
  const t = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  }, s = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  }, r = (o) => {
    o.preventDefault();
    const i = Se.text;
    i();
  };
  return /* @__PURE__ */ c.jsxs("div", { style: { ...t }, children: [
    /* @__PURE__ */ c.jsx("p", { children: '"Invalid Component Call: Reference not found. Note: This type of error usually occurs in one of three cases:' }),
    /* @__PURE__ */ c.jsxs("ol", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "ID Mismatch" }),
        ": You are trying to call the input using a different ID than the one defined in your configuration object."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Incorrect Destructuring" }),
        ": You are using the correct ID, but targeting the wrong logical group. For example, trying to render a select input using fields.myInput instead of selects.myInput."
      ] }),
      /* @__PURE__ */ c.jsxs("li", { children: [
        /* @__PURE__ */ c.jsx("strong", { children: "Invalid Type" }),
        `: You have assigned a non-existent type in the configuration object (e.g., a typo like type: 'selct' instead of 'select')."`
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("p", { children: [
      /* @__PURE__ */ c.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ c.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ c.jsx("span", { style: { ...s }, onClick: r, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function dn({ dataField: e }) {
  const { id: n, type: t, name: s } = e.config, r = n || s, { callers: o, errorType: i } = e.errorData, a = o.length === 1, l = a ? "an error" : "errors", u = a ? "key" : "keys", d = be.includes(t), p = "You sent an empty array configuration:", f = r === "noLogicArray", h = {
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
  }, m = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    "The configuration object for ",
    /* @__PURE__ */ c.jsx("strong", { children: r.toUpperCase() }),
    " ",
    "input is invalid and contains ",
    l,
    " in the following ",
    u,
    ":"
  ] }), x = (b) => {
    b.preventDefault();
    const T = Se[t];
    T();
  };
  return /* @__PURE__ */ c.jsxs("div", { style: { ...h }, children: [
    f ? p : m,
    /* @__PURE__ */ c.jsx("ol", { style: { textAlign: "left" }, children: o.map((b, T) => /* @__PURE__ */ c.jsxs("li", { children: [
      /* @__PURE__ */ c.jsx("strong", { children: b.toUpperCase() }),
      ": ",
      i[T]
    ] }, `${b}-${T}`)) }),
    d && /* @__PURE__ */ c.jsxs("p", { children: [
      /* @__PURE__ */ c.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ c.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ c.jsx("span", { style: { ...g }, onClick: x, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function k({ component: e, dataField: n }) {
  return n.error ? /* @__PURE__ */ c.jsx(dn, { dataField: n }) : e;
}
function Bt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(Te, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
const E = ({ dataField: e, async: n }) => {
  const t = e.state || {}, s = e.handlers || {}, { id: r, label: o } = e.config, { value: i } = t, { onChange: a, onBlur: l, onFocus: u, onKeyDown: d } = s, p = a || (() => {
  }), f = l || (() => {
  }), h = u || (() => {
  }), g = d || (() => {
  }), m = {
    required: e.config.required,
    type: e.config.type,
    placeholder: e.config.placeholder,
    id: e.config.id,
    name: e.config.id,
    min: e.config.min,
    max: e.config.max,
    step: e.config.step,
    autoComplete: e.config.autoComplete,
    onBlur: f,
    onFocus: h,
    onKeyDown: g
  };
  return a && (m.onChange = p, m.value = i || ""), e.error && n ? null : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx("label", { htmlFor: r, children: o }),
    /* @__PURE__ */ c.jsx("input", { ...m })
  ] });
};
function Mt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Vt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Lt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Pt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Kt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Gt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(Te, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
const pn = ({ dataField: e }) => {
  const n = e.state || {}, t = e.handlers || {}, { options: s, id: r, labels: o, label: i, required: a } = e.config, { value: l } = n, { onChange: u, onBlur: d, onFocus: p, onKeyDown: f } = t, h = u || (() => {
  }), b = {
    required: a,
    name: r,
    id: r,
    onBlur: d || (() => {
    }),
    onFocus: p || (() => {
    }),
    onKeyDown: f || (() => {
    })
  };
  return u && (b.onChange = h, b.value = l || ""), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    i && /* @__PURE__ */ c.jsx("label", { htmlFor: r, children: i }),
    /* @__PURE__ */ c.jsx("select", { ...b, children: s.map((T, F) => /* @__PURE__ */ c.jsx("option", { value: T, children: o[F] }, T)) })
  ] });
};
function Ht({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(pn, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Yt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function fn({ label: e, value: n, max: t, charsType: s }) {
  let r = null;
  return s ? r = n.trim() === "" ? 0 : n.length : r = n.trim() === "" ? 0 : n.trim().split(/\s+/).length, /* @__PURE__ */ c.jsxs("div", { className: "", children: [
    /* @__PURE__ */ c.jsx("span", { children: e }),
    " ",
    /* @__PURE__ */ c.jsx("br", {}),
    /* @__PURE__ */ c.jsxs("span", { children: [
      r,
      " / ",
      t
    ] })
  ] });
}
function hn({ dataField: e }) {
  const n = e.state || {}, t = e.handlers || {}, { id: s, counterLabel: r, maxChars: o, maxWords: i, label: a } = e.config, { value: l } = n, { onChange: u, onBlur: d, onFocus: p, onKeyDown: f } = t, h = u || (() => {
  }), g = d || (() => {
  }), m = p || (() => {
  }), x = f || (() => {
  }), b = o || i, T = o || !1, F = {
    required: e.config.required,
    placeholder: e.config.placeholder,
    rows: e.config.rows,
    cols: e.config.cols,
    id: e.config.id,
    name: e.config.id,
    autoComplete: e.config.autoComplete,
    onBlur: g,
    onFocus: m,
    onKeyDown: x,
    spellCheck: !1,
    maxLength: o
  };
  return u && (F.onChange = h, F.value = l || ""), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    a && /* @__PURE__ */ c.jsx("label", { htmlFor: s, children: a }),
    /* @__PURE__ */ c.jsx("textarea", { ...F }),
    b && /* @__PURE__ */ c.jsx(
      fn,
      {
        max: o || i,
        value: l,
        label: r,
        charsType: T
      }
    )
  ] });
}
function Wt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(hn, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function zt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Xt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
function Jt({ dataField: e, isAsync: n, i18n: t }) {
  return I(() => {
    const s = /* @__PURE__ */ c.jsx(E, { dataField: e });
    return e ? /* @__PURE__ */ c.jsx(k, { component: s, dataField: e }) : /* @__PURE__ */ c.jsx(w, { isAsync: n });
  }, [e?.state?.value, t]);
}
const Y = (e) => {
  e.errorData.push("clean");
}, X = (e, n) => {
  e[n] === "clean" && (e[n] = {
    callers: [],
    errorType: []
  });
}, yn = (e, n, t) => {
  const s = n.replace("Funcs", "");
  Y(e), X(e.errorData, t), e.errors[t] = !0, e.errorData[t].callers.push(s), e.errorData[t].errorType.push("must be a function");
}, $ = (e, n, t, s, r) => {
  const o = t || `must be ${r}`;
  Y(e), X(e.errorData, s), e.errors[s] = !0, e.errorData[s].callers.push(n), e.errorData[s].errorType.push(o);
}, P = (e, n, t) => {
  const { customLogic: s, logicKey: r, index: o } = n, i = s[r];
  i.errors[o] = !0, Y(i), X(i.errorData, o), i.errorData[o].callers.push(t), i.errorData[o].errorType.push(e);
}, se = (e, n, t, s) => {
  const r = n.SSOT.length - 1;
  Y(n), X(n.errorData, r), n.errors[r] = !0, n.errorData[r].callers.push(s), n.errorData[r].errorType.push(e);
}, mn = (e, n, t, s) => {
  Y(e), X(e.errorData, s), e.errors[s] = !0, e.errorData[s].callers.push(n), e.errorData[s].errorType.push(t);
}, gn = (e) => e.id ? e.id : e.name, xn = (e) => `Values in the ids array must be unique. Change the value at position ${e.array}`, bn = (e, n, t, s) => {
  for (let r = 0; r < e.length; r++) {
    const { category: o, nidificate: i, position: a, id: l } = e[r], u = o + "Logic", d = t[u], p = n[a], f = gn(p), h = d.SSOT.indexOf(f), g = i ? xn(e[r]) : "id is duplicated";
    mn(d, i ? "option" : f, g, h);
  }
}, ce = {
  fieldsSSOT: [],
  groupsSSOT: [],
  selectsSSOT: [],
  textareasSSOT: []
}, Tn = (e, n, t) => {
  e[n][t] = {
    options: {
      ids: [],
      labels: []
    }
  };
}, Sn = (e, n) => {
  e[n] = {
    options: [],
    labels: []
  };
}, In = (e, n, t) => ({ config: {
  name: t,
  type: e.types[n],
  autoComplete: "invalid",
  title: "invalid",
  options: {
    ids: "invalid",
    labels: "invalid"
  }
}, state: {}, handlers: {} }), vn = (e, n) => `The ${e} property in ${n} must be an object`, Cn = (e, n, t) => `The ${e} object in ${n} must contain only the ${t}`, Dn = (e, n) => `The ${e} key in ${n} is missing`, le = (e, n) => `The ${e} field in ${n} options must be an array`, Ie = (e, n, t) => `The ${e} and ${n} arrays in ${t} must have the same length`, wn = (e, n) => `The ${e} in ${n} must be a string`, ue = "format is invalid", kn = (e) => e !== null || e !== void 0 ? `If you don't provide a valid ID, I can't identify the input. 
    However, the invalid ID is at position ${e} in the configuration array you provided` : !1, On = (e, n, t) => {
  n[t].push(e);
}, Rn = (e, n, t, s) => {
  n[t][e] = s;
}, $n = (e, n, t, s, r) => {
  const o = n.SSOT.length - 1;
  On(o, n, s), Rn(e, n, t, r);
}, Fn = (e, n, t) => {
  const s = n.type;
  let o = typeof e == "function" || t === "onChange" && typeof e == "boolean";
  return s === "textarea" ? n.maxWords || n.maxChars ? !0 : o : (s === "checkbox" || s === "radio") && t === "onChange" ? !0 : o;
}, ve = (e, n) => !e || !n ? !1 : e.length === n.length, L = (e, n, t) => {
  if (typeof e != "number" || Number.isNaN(e)) {
    const s = n.SSOT.length - 1;
    return $(n, t, "must be a number", s, "a number"), "invalid";
  }
  return e;
}, En = (e, n, t, s) => {
  if (e && s.trim() === "") {
    const o = t.length - 1;
    return t.splice(0, t.length), t.push("invalid"), `You cannot use an empty string at index ${o}`;
  }
  return n;
}, Ce = (e, n, t) => {
  const s = typeof e == "string", r = s ? e : null;
  n.push(r);
  let o = s ? null : wn(e, `${t} array`);
  return o = En(s, o, n, e), o;
}, Nn = (e, n) => {
  if (e.length > 0) {
    const t = e.join(" - "), s = e.length === 1 ? "is" : "are", r = `${t} ${s} duplicated`, { logicObj: o, id: i, caller: a } = n;
    selectsError(r, o, i, a);
  }
}, De = (e, n) => !e && n ? "mandatory" : !e && !n ? !1 : typeof e != "string" ? "must be a string" : e.trim() === "" ? "cannot be an empty string" : !1, qn = (e, n, t, s, r, o, i) => {
  e ? $n(n, t, s, r, o) : yn(t, s, i);
}, we = (e, n, t) => {
  if (n.required && typeof n.required != "boolean") {
    $(e, "required", "must be a boolean", t);
    return;
  }
  const s = !!n.required;
  e.required.push(s);
}, ke = (e, n, t) => {
  e[n] = {
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
  }, t !== "groupsConfig" ? (e[n].labels = [], e[n][t] = {
    targetKeys: [],
    originalObjects: []
  }) : (e[n].titles = [], e[n][t] = {});
}, Q = (e, n, t) => {
  const { element: s, id: r, logicObj: o } = e, i = o.SSOT.length - 1, a = Fn(t, s, n), l = n + "Funcs", u = n + "Indexes";
  qn(a, r, o, l, u, t, i);
}, An = (e) => e.onChange || e.type === "textarea" || e.type === "radio" || e.type === "checkbox", Oe = (e, n, t, s) => {
  const r = { element: e, id: t, logicObj: n };
  An(e) && Q(r, "onChange", e.onChange), e.onBlur && Q(r, "onBlur", e.onBlur), e.onFocus && Q(r, "onFocus", e.onFocus), e.onKeyDown && Q(r, "onKeyDown", e.onKeyDown);
}, H = (e, n, t, s, r) => {
  let o = !1;
  const { logicObj: i, id: a, index: l, mandatory: u } = s, d = De(e, u);
  if (d) {
    o = !0;
    const f = a ? null : kn(r);
    $(i, t, f || d, l);
  }
  const p = o ? "invalid" : e;
  return n.push(p), o;
}, Re = (e, n, t, s) => {
  const { logicObj: r, index: o } = s;
  be.includes(e) ? H(e, n, t, s) : (n.push(null), $(r, t, "is invalid", o));
}, jn = (e, n, t) => {
  const { label: s, placeholder: r, id: o, type: i } = n, a = e.SSOT.length, l = { logicObj: e, id: o, index: a };
  l.mandatory = !0;
  const d = H(o, e.SSOT, "id", l, t) ? "invalid" : o;
  l.id = d, Re(i, e.types, "type", l), l.mandatory = !1, H(s, e.labels, "label", l), i !== "select" && H(r, e.placeholders, "placeholder", l);
}, W = (e, n, t, s) => {
  const r = t + "Logic", o = t + "Config";
  n[r] || ke(n, r, o);
  const i = n[r];
  i.errors.push(!1), Y(i), jn(i, e, s);
  const a = i.SSOT.length - 1;
  we(i, e, a);
  const u = i.SSOT[a] === "invalid" ? "invalid" : e.id;
  Oe(e, i, u);
}, z = (e, n, t) => new RegExp(`^[${n}]+$`).test(e), G = (e, n) => e ? Object.keys(e).length > 0 : !1, Un = (e, n) => {
  const t = parseInt(e);
  return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0;
}, Bn = (e, n, t) => {
  const s = parseInt(e);
  return s === 4 || s === 6 || s === 9 || s === 11;
}, Mn = (e, n) => e === 2, Vn = (e, n, t, s) => {
  if (!Mn(n))
    return { isValid: !0, continue: !0 };
  const r = e ? 29 : 28;
  return s > r ? { isValid: !1, why: `February cannot be > ${r}` } : { isValid: !0, continue: !1 };
}, Ln = (e) => e.length !== 10 ? { isValid: !1, why: "invalid length" } : e[4] !== "-" || e[7] !== "-" ? { isValid: !1, why: "invalid format" } : { isValid: !0 }, Pn = (e) => {
  const t = z(e[0], "0-9"), s = z(e[1], "0-9"), r = z(e[2], "0-9");
  return t ? s ? r ? { isValid: !0 } : { isValid: !1, why: "Day contains invalid chars" } : { isValid: !1, why: "Month contains invalid chars" } : { isValid: !1, why: "Year contains invalid chars" };
}, Kn = (e, n, t) => e < 0 ? { isValid: !1, why: "Year cannot be negative" } : e > 9999 ? { isValid: !1, why: "Year cannot be > 9999" } : n < 0 ? { isValid: !1, why: "Month cannot be negative" } : n > 12 ? { isValid: !1, why: "Month cannot be > 12" } : { isValid: !0 }, ie = (e, n, t) => {
  const s = Ln(e);
  if (!s.isValid) return { isValid: !1, why: s.why };
  const r = e.split("-"), o = Pn(r);
  if (!o.isValid) return { isValid: !1, why: o.why };
  const i = parseInt(r[0]), a = parseInt(r[1]), l = parseInt(r[2]), u = Kn(i, a);
  if (!u.isValid) return { isValid: !1, why: u.why };
  const d = Un(i), p = Vn(d, a, n, l);
  if (!p.isValid)
    return { isValid: !1, why: p.why };
  if (p.isValid && !p.continue)
    return { isValid: !0 };
  const h = Bn(a) ? 30 : 31;
  return l > h ? { isValid: !1, why: `Day cannot be > ${h}` } : { isValid: !0 };
}, ae = (e, n) => {
  if (e.length !== 5 || e[2] !== ":")
    return !1;
  const t = e.split(":"), s = "0-9", r = z(t[0], s), o = z(t[1], s);
  if (!r || !o)
    return !1;
  const i = parseInt(t[0]), a = parseInt(t[1]);
  return !(i < 0 || i > 23 || a < 0 || a > 59);
}, de = (e, n, t) => {
  let s = null;
  if (e.includes("T") ? s = "T" : e.includes(" "), !s) return { isValid: !1, why: "invalid format" };
  const r = e.length;
  let o = null;
  if (r === 16)
    o = !1;
  else if (r === 19)
    o = !0;
  else
    return { isValid: !1, why: "invalid format" };
  if (e[10] !== s) return { isValid: !1, why: "invalid format" };
  const i = e.split(s), a = i[0], l = ie(a, "iso");
  if (!l.isValid) return { isValid: !1, why: l.why };
  const u = i[1];
  let d = u.substring(0, 5);
  o && (o = u.substring(6, 8));
  let p = null;
  if (o) {
    const h = parseInt(o);
    p = h < 0 || h > 59;
  }
  return p ? { isValid: !1, why: "Invalid format for seconds" } : ae(d) ? { isValid: !0 } : { isValid: !1, why: "Invalid format for time" };
}, pe = (e, n, t) => {
  const { customLogic: s, logicKey: r, name: o } = t, i = s[r][o].options[n], a = Ce(e, i, n), l = a + " of " + n + " array";
  a && P(l, t, n);
}, Gn = (e, n, t) => {
  for (let s = 0; s < e.length; s++)
    pe(e[s], "ids", t), pe(n[s], "labels", t);
}, Hn = (e, n, t) => {
  if (!G(e)) {
    const r = vn("options", n);
    P(r, t, "options");
  }
}, fe = (e, n, t, s) => {
  const r = !t.includes(s), o = r && Dn(s, e);
  r && P(o, n, s);
}, Yn = (e, n, t) => {
  const s = '"labels" and "ids" keys', r = e.length !== 2, o = r && Cn("options", n, s);
  r && P(o, t, "options");
}, Wn = (e, n, t, s) => {
  (!e || !Array.isArray(e)) && P(le("ids", t), s, "ids"), (!n || !Array.isArray(n)) && P(le("labels", t), s, "labels");
}, zn = (e) => {
  const { options: n, customLogic: t, name: s, logicKey: r } = e;
  Tn(t, r, s), Hn(n, s, e);
  const o = n ? Object.keys(n) : ["ids", "labels"];
  Yn(o, s, e), fe(s, e, o, "labels"), fe(s, e, o, "ids");
  const i = n?.ids ? n.ids : ["invalid"], a = n?.labels ? n.labels : ["invalid"];
  Wn(i, a, s, e), ve(i, a) ? Gn(i, a, e) : P(Ie("ids", "labels", s), e, "options");
}, Xn = (e, n, t, s) => {
  e.mandatory = !0;
  const o = H(
    n,
    t.SSOT,
    "id",
    e,
    s
  ) ? "invalid" : n;
  e.name = o;
}, Jn = (e, n, t) => {
  const s = "groupsLogic";
  n[s] || ke(n, s, "groupsConfig");
  const o = e.name, i = n[s];
  i.errors.push(!1);
  const a = i.SSOT.length, l = {
    options: e.options,
    customLogic: n,
    name: o,
    logicKey: s,
    index: a
  };
  zn(l), we(i, e, a);
  const u = { logicObj: i, name: o, index: a };
  Xn(u, o, i, t), Re(e.type, i.types, "type", u), u.mandatory = !1, H(e.title, i.titles, "title", u), i.SSOT, Oe(e, i, e.name);
}, Qn = (e, n) => {
  const t = n.SSOT.length - 1, s = e.min ? ie(e.min, "iso") : null, r = e.max ? ie(e.max, "iso") : null;
  s && !s.isValid && $(n, "min", s.why, t), r && !r.isValid && $(n, "max", r.why, t);
}, Zn = (e, n) => {
  const t = n.SSOT.length - 1, s = e.min ? de(e.min) : null, r = e.max ? de(e.max) : null;
  s && !s.isValid && $(n, "min", s.why, t), r && !r.isValid && $(n, "max", r.why, t);
}, _n = (e, n) => {
  const t = n.SSOT.length - 1, s = e.min ? ae(e.min) : null, r = e.max ? ae(e.max) : null;
  e.min && !s && $(n, "min", ue, t), e.max && !r && $(n, "max", ue, t);
}, et = (e, n) => {
  const { id: t, type: s } = e;
  let r = null, o = null;
  switch (s) {
    case "date":
      Qn(e, n), r = e.min ? e.min : null, o = e.max ? e.max : null;
      break;
    case "time":
      _n(e, n), r = e.min ? e.min : null, o = e.max ? e.max : null;
      break;
    case "datetime-local":
      Zn(e, n), r = e.min ? e.min : null, o = e.max ? e.max : null;
      break;
    case "number":
      r = e.min && L(e.min, n, "min"), o = e.max && L(e.max, n, "max");
      break;
  }
  const i = e.step && L(e.step, n, "step");
  n.fieldsConfig[t] = {
    max: o,
    min: r,
    step: i
  };
}, he = (e, n, t, s) => {
  const r = e.selectsConfig[n][t], o = Ce(s, r, t);
  o && se(o, e, n, t);
}, nt = (e, n, t, s) => {
  if (!e || !n) return;
  const r = [];
  let o = /* @__PURE__ */ new Set();
  for (let a = 0; a < e.length; a++) {
    he(t, s, "options", e[a]), he(t, s, "labels", n[a]);
    const l = o.has(e[a]);
    o.add(e[a]), l && r.push(e[a]);
  }
  Nn(r, { logicObj: t, id: s, caller: "options" });
}, tt = (e, n) => {
  const t = e.id;
  Sn(n.selectsConfig, t);
  const { options: s, labels: r } = e;
  if ((!s || !Array.isArray(s)) && se("Options must be an array", n, t, "options"), (!r || !Array.isArray(r)) && se("Labels must be an array", n, t, "labels"), !ve(s, r)) {
    const d = Ie("options", "labels", t);
    se(d, n, t, "options");
  }
  nt(s, r, n, t);
}, st = (e, n, t) => {
  const s = e.maxChars && L(e.maxChars, n, "step"), r = e.maxWords && L(e.maxWords, n, "step");
  let o = null;
  return e.counterLabel && (o = typeof e.counterLabel == "string" ? e.counterLabel : "invalid"), o === "invalid" && $(n, "counterLabel", null, t, "string"), { maxChars: s, maxWords: r, counterLabel: o };
}, rt = (e, n) => {
  const t = n.SSOT, s = n.SSOT.length - 1, r = t[s] === "invalid" ? "invalid" : e.id, o = e.rows && L(e.rows, n, "max"), i = e.cols && L(e.cols, n, "min"), { maxChars: a, maxWords: l, counterLabel: u } = st(
    e,
    n,
    s
  );
  n.textareasConfig[r] = {
    rows: o,
    cols: i,
    counterLabel: u,
    maxChars: a,
    maxWords: l
  };
}, ot = (e) => e === "select" ? "selects" : e === "textarea" ? "textareas" : $e.includes(e) ? "groups" : Fe.includes(e) ? "fieldsNum" : Ee.includes(e) ? "fieldsText" : "invalid", it = (e) => {
  if (e.id === "invalid" || e.name === "invalid") return "forbidden";
  const n = e.id ? e.id : e.name;
  return De(n, !0) ? "invalid" : n;
}, at = (e, n, t) => {
  const { ensureId: s, coords: r } = e, o = n.options ? n.options.ids : [];
  for (let i = 0; i < o.length; i++) {
    const a = s.has(o[i]);
    s.add(o[i]), a && r.push({
      category: "groups",
      position: t,
      array: i,
      id: o[i],
      nidificate: !0
    });
  }
}, ye = (e) => e.replace("Num", "").replace("Text", ""), ct = (e, n, t, s, r) => {
  switch (e) {
    case "fieldsText":
      W(n, t, "fields", s);
      break;
    case "fieldsNum":
      W(n, t, "fields", s), et(n, t.fieldsLogic);
      break;
    case "groups":
      Jn(n, t, s), at(r, n, s);
      break;
    case "selects":
      W(n, t, "selects", s), tt(n, t.selectsLogic);
      break;
    case "textareas":
      W(n, t, "textareas", s), rt(n, t.textareasLogic);
      break;
  }
}, lt = (e, n, t, s) => {
  const { ensureId: r, SSOTS: o, coords: i } = s, a = e.type ? e.type.toLowerCase() : "invalid", l = ot(a);
  if (l === "invalid") {
    W(e, n, "fields", t);
    return;
  }
  const u = ye(l) + "SSOT", d = it(e);
  o[u].push(d);
  const p = r.has(d);
  if (r.add(d), d !== "invalid" && p) {
    const f = ye(l);
    i.push({ category: f, position: t, id: d, nidificate: !1 });
  }
  ct(l, e, n, t, s);
}, me = (e, n) => {
  const t = {};
  if ((!e || e.length === 0) && !n)
    return { logic: "invalid", SSOTS: null };
  const r = /* @__PURE__ */ new Set(), o = [], i = { ensureId: r, SSOTS: ce, coords: o };
  for (let a = 0; a < e.length; a++)
    lt(e[a], t, a, i);
  return bn(o, e, t), { logic: t, SSOTS: ce };
}, R = (e, n, t) => {
  t && (e[n] = t);
}, ut = (e, n, t, s) => {
  const r = t === "password" ? "new-password" : t, o = {
    id: t,
    type: e.types[n],
    required: e.required[n],
    autoComplete: r
  };
  return R(o, "label", e.labels[n]), R(o, "placeholder", e.placeholders[n]), R(o, "min", e[s][t]?.min), R(o, "max", e[s][t]?.max), R(o, "step", e[s][t]?.step), o;
}, dt = (e, n, t, s, r) => {
  n[t].error = e;
  const o = s.errorData[r].callers, i = s.errorData[r].errorType;
  n[t].errorData = { callers: o, errorType: i };
}, pt = (e, n, t, s) => {
  if (t === "invalid") return;
  const r = n.selectsConfig[t];
  e.options = r.options, e.labels = r.labels, s && (e.options.unshift(""), e.labels.unshift("..."));
}, ft = (e, n, t) => {
  const s = n.textareasConfig[t];
  R(e, "rows", s.rows), R(e, "cols", s.cols), R(e, "maxChars", s.maxChars), R(e, "maxWords", s.maxWords), R(e, "counterLabel", s.counterLabel);
}, ht = (e, n, t, s) => {
  const r = n + "sConfig", o = ut(e, s, t, r), i = e.required[s];
  return n === "textarea" && ft(o, e, t), n === "select" && pt(o, e, t, i), {
    config: o,
    state: {},
    handlers: {},
    returns: { onChange: null, onBlur: null, onFocus: null, onKeyDown: null }
  };
}, yt = (e, n, t) => {
  if (e.errors[t])
    return In(e, t, n);
  const s = n, r = {
    name: n,
    required: e.required[t],
    type: e.types[t],
    autoComplete: s,
    options: {
      ids: e[n].options.ids,
      labels: e[n].options.labels
    }
  };
  return R(r, "title", e.titles[t]), { config: r, state: {}, handlers: {} };
}, Z = (e, n) => {
  const t = {}, s = e.SSOT;
  for (let r = 0; r < s.length; r++) {
    const o = s[r], i = e.types[r];
    i === "radio" || i === "checkbox" ? t[o] = yt(e, o, r) : t[o] = ht(e, n, o, r), e.errors[r] && dt(e.errors[r], t, o, e, r);
  }
  return t;
}, ge = (e) => {
  if (e === "invalid")
    return {
      fields: {},
      groups: {},
      selects: {},
      textareas: {}
    };
  const n = {}, t = e.fieldsLogic ? Z(e.fieldsLogic, "field") : {}, s = e.groupsLogic ? Z(e.groupsLogic, "group") : {}, r = e.selectsLogic ? Z(e.selectsLogic, "select") : {}, o = e.textareasLogic ? Z(e.textareasLogic, "textarea") : {};
  return {
    resets: n,
    fields: t,
    groups: s,
    selects: r,
    textareas: o
  };
}, _ = (e, n, t, s) => {
  n.returns || (n.returns = {}), e && (n.value = t), n.returns[s] = null;
}, mt = (e, n) => {
  const t = {}, { SSOT: s } = e;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    t[o] = {}, _(!0, t[o], n, "onChange"), _(!1, t[o], n, "onBlur"), _(!1, t[o], n, "onFocus"), _(!1, t[o], n, "onKeyDown");
  }
  return t;
}, gt = (e, n) => {
  const t = {};
  return e.forEach((s) => {
    t[s] = n;
  }), t;
}, xt = (e, n) => {
  const t = {};
  if (!e) return t;
  const { types: s, SSOT: r } = e;
  return r.forEach((o, i) => {
    if (s[i] === "radio")
      t[o] = {
        value: n,
        returns: {
          onChange: null,
          onFocus: null,
          onKeyDown: null,
          onBlur: null
        }
      };
    else {
      const a = e[o].options.ids;
      t[o] = { value: { ...gt(a, !1) } }, t[o].returns = {
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onBlur: null
      };
    }
  }), t;
}, U = (e, n, t) => {
  const s = {};
  return e ? n === "groups" ? xt(e, t) : mt(e, t) : s;
}, bt = (e) => {
  const { fieldsLogic: n, groupsLogic: t, selectsLogic: s, textareasLogic: r } = e || {}, o = "", [i, a] = J(
    () => U(n, "fields", o)
  ), [l, u] = J(
    () => U(t, "groups", o)
  ), [d, p] = J(
    () => U(s, "selects", o)
  ), [f, h] = J(
    () => U(r, "textareas", o)
  );
  return {
    fieldsState: i,
    setFieldsState: a,
    groupsState: l,
    setGroupsState: u,
    selectsState: d,
    setSelectsState: p,
    textareasState: f,
    setTextareasState: h
  };
}, Tt = ["onBlur", "onFocus", "onKeyDown"], St = (e, n, t, s, r, o, i) => {
  for (let a = 0; a < n.length; a++) {
    const l = t[n[a]], u = e[l];
    s[l].handlers[r] = o(u, r, i);
  }
}, It = (e, n) => {
  const t = e + "Indexes", s = e + "Funcs", r = n[t];
  return { map: n[s], indexes: r };
}, ee = (e, n, t, s, r) => {
  const { map: o, indexes: i } = It(n, t);
  i.length !== 0 && St(
    o,
    i,
    t.SSOT,
    s,
    n,
    e,
    r
  );
}, vt = (e, n, t, s) => {
  const { fields: r, textareas: o, groups: i, selects: a } = n, { fieldsLogic: l, textareasLogic: u, groupsLogic: d, selectsLogic: p } = e, f = s.setFieldsState, h = s.setGroupsState, g = s.setSelectsState, m = s.setTextareasState;
  Tt.forEach((x) => {
    G(l) && ee(t, x, l, r, f), G(u) && ee(t, x, u, o, m), G(d) && ee(t, x, d, i, h), G(p) && ee(t, x, p, a, g);
  });
}, xe = (e, n, t) => {
  const s = typeof n[e] == "boolean";
  if (!n || Object.keys(n).length === 0 || s) return;
  const r = n[e];
  return r && r(t, e);
}, Ct = (e, n, t, s) => {
  for (let r = 0; r < t.length; r++) {
    const o = e[t[r]];
    n[o] && e[r] !== "invalid" && (n[o].handlers = { onChange: s });
  }
}, Dt = (e, n, t, s) => {
  for (let r in n) {
    const o = r + "Logic", i = e[o];
    if (!G(i)) continue;
    const l = i.onChangeIndexes;
    if (!(l.length > 0)) continue;
    const d = r + "SSOT", p = s[d], f = n[r], h = t[r];
    Ct(p, f, l, h);
  }
}, wt = (e, n, t, s, r) => {
  const o = n.fieldsLogic?.onChangeFuncs || {}, i = n.groupsLogic?.onChangeFuncs || {}, a = n.selectsLogic?.onChangeFuncs || {}, l = n.textareasLogic?.onChangeFuncs || {}, { setFieldsState: u, setGroupsState: d, setSelectsState: p, setTextareasState: f } = t, h = (q, B) => (A) => {
    const { id: S, value: M, type: V } = A.target, y = xe(S, B, M);
    r.current.inputChanged = { id: S, type: V }, q((O) => ({
      ...O,
      [S]: {
        ...O[S],
        value: M,
        returns: {
          ...O[S]?.returns,
          onChange: y
        }
      }
    }));
  }, g = (q) => {
    const B = Object.keys(t.groupsState[q].value), A = {};
    return B.forEach((S) => {
      A[S] = document.getElementById(S).checked;
    }), A;
  }, m = (q, B) => (A) => {
    const { id: S, value: M, type: V, name: y, checked: O } = A.target;
    r.current.inputChanged = { id: y, type: V };
    const oe = V === "radio" ? M : g(y), K = xe(y, B, oe);
    q(V === "radio" ? (j) => ({
      ...j,
      [y]: {
        ...j[y],
        value: M,
        returns: {
          ...j[y]?.returns,
          onChange: K
        }
      }
    }) : (j) => ({
      ...j,
      [y]: {
        ...j[y],
        value: {
          ...j[y].value,
          [S]: O
        },
        returns: {
          ...j[y]?.returns,
          onChange: K
        }
      }
    }));
  }, x = (q, B, A) => (S) => {
    const { id: M, value: V, type: y } = S.target, O = y === "radio" || y === "checkbox" ? S.target.name : M;
    r.current.inputChanged = { id: O, type: y };
    const oe = q(V, O);
    A((K) => ({
      ...K,
      [O]: {
        ...K[O],
        returns: {
          ...K[O]?.returns,
          [B]: oe
        }
      }
    }));
  }, b = {
    fields: h(u, o),
    selects: h(p, a),
    textareas: h(f, l),
    groups: m(d, i)
  };
  Dt(n, e, b, s);
  const { configFields: T, configGroups: F, configSelects: N, configTextareas: re } = e;
  return vt(n, e, x, t), { configFields: T, configGroups: F, configSelects: N, configTextareas: re };
}, kt = (e, n, t) => {
  const { setFieldsState: s, setGroupsState: r, setSelectsState: o, setTextareasState: i } = n, { fieldsLogic: a, groupsLogic: l, selectsLogic: u, textareasLogic: d } = e || {}, p = "";
  s(() => U(a, "fields", p)), r(() => U(l, "groups", p)), o(() => U(u, "selects", p)), i(
    () => U(d, "textareas", p)
  ), t.current = {
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: !1
  };
}, ne = (e, n) => (e((t) => ({
  ...t,
  [n]: {
    ...t[n],
    value: "",
    returns: {
      onChange: null,
      onBlur: null,
      onFocus: null
    }
  }
})), !0), Ot = (e, n, t) => {
  const s = {}, r = Object.keys(t);
  for (let o = 0; o < r.length; o++)
    s[r[o]] = !1;
  return e((o) => ({
    ...o,
    [n]: {
      ...o[n],
      value: s,
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null
      }
    }
  })), !0;
}, Rt = (e, n) => {
  n || console.error("A valid ID parameter is required to reset a single input.");
  const { setFieldsState: t, setGroupsState: s, setSelectsState: r, setTextareasState: o } = e;
  let i = !1;
  const { fieldsState: a, groupsState: l, selectsState: u, textareasState: d } = e;
  i = a[n] ? ne(t, n) : i, l[n] && (typeof e.groupsState[n].value == "string" ? ne(s, n) : Ot(s, n, e.groupsState[n].value), i = !0), i = u[n] ? ne(r, n) : i, i = d[n] ? ne(o, n) : i, i || console.error("The ID provided as a parameter is invalid");
}, $t = (e, n, t) => {
  for (let s = 0; s < e.length; s++)
    e[s] === "invalid" || !n[e[s]] || (n[e[s]].state = { value: t[e[s]]?.value || "" }, n[e[s]].returns = {
      onChange: t[e[s]]?.returns?.onChange || null,
      onBlur: t[e[s]]?.returns?.onBlur || null,
      onFocus: t[e[s]]?.returns?.onFocus || null,
      onKeyDown: t[e[s]]?.returns?.onKeyDown || null
    });
}, Ft = (e, n, t, s) => {
  for (let r in e) {
    const o = r + "Logic";
    if (!s[o]) continue;
    const a = r + "SSOT", l = n[a], u = r + "State";
    $t(l, e[r], t[u]);
  }
}, Et = (e) => e === "select" ? "selects" : e === "textarea" ? "textareas" : e === "radio" || e === "checkbox" ? "groups" : "fields", Nt = (e, n, t, s) => {
  const { type: r, id: o } = s.current.inputChanged, i = Et(r), a = i + "Logic";
  if (!t[a]) return;
  const u = i + "State", d = n[u];
  e[i][o] = {
    ...e[i][o],
    state: { value: d[o]?.value || "" },
    returns: {
      onChange: d[o]?.returns?.onChange || null,
      onBlur: d[o]?.returns?.onBlur || null,
      onFocus: d[o]?.returns?.onFocus || null,
      onKeyDown: d[o]?.returns?.onKeyDown || null
    }
  };
}, qt = (e, n) => {
  const { customLogic: t, SSOTS: s, configs: r } = n.current;
  n.current.inputChanged ? Nt(r, e, t, n) : Ft(r, s, e, t), r.resets && Object.keys(r.resets).length === 0 && (r.resets.resetAll = () => kt(t, e, n), r.resets.resetOne = (o) => Rt(e, o));
}, te = (e, n, t) => {
  for (let s = 0; s < e.length; s++)
    t[e[s]].config = n[e[s]].config;
}, At = (e, n) => {
  const t = e.fields, s = n.fields, r = Object.keys(t);
  te(r, t, s);
  const o = e.groups, i = n.groups, a = Object.keys(o);
  te(a, o, i);
  const l = e.selects, u = n.selects, d = Object.keys(l);
  te(d, l, u);
  const p = e.textareas, f = n.textareas, h = Object.keys(p);
  te(h, p, f);
}, Qt = (e) => {
  const { configArray: n, isAsync: t, i18n: s } = e, r = Ne({
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: !1,
    inputChanged: null,
    i18nPrev: null
  }), i = !r.current.bound && !n && t ? [] : n;
  if (!r.current.customLogic && (i.length > 0 || !t)) {
    const { logic: l, SSOTS: u } = me(i, t), d = ge(l);
    r.current.customLogic = l, r.current.SSOTS = u, r.current.configs = d, r.current.i18nPrev = s;
  }
  if (r.current.i18nPrev && s !== r.current.i18nPrev) {
    const { logic: l } = me(i, t), u = ge(l);
    At(u, r.current.configs), r.current.bound = !1;
  }
  const a = bt(r.current.customLogic);
  return r.current.configs && !r.current.bound && (wt(
    r.current.configs,
    r.current.customLogic,
    a,
    r.current.SSOTS,
    r
  ), r.current.bound = !0, r.current.i18nPrev = s), r.current.bound && qt(a, r), r.current.configs || {};
}, Zt = "0.1.1";
export {
  Bt as CheckboxInput,
  Mt as DateInput,
  Vt as DateTimeInput,
  Lt as EmailInput,
  Pt as NumberInput,
  Kt as PasswordInput,
  Gt as RadioInput,
  Ht as SelectInput,
  Yt as TelInput,
  zt as TextInput,
  Wt as TextareaInput,
  Jt as TimeInput,
  Xt as UrlInput,
  Qt as useRamonForm,
  Zt as version
};
