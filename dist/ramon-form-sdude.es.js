import require$$0, { useMemo, useState, useRef, useEffect } from "react";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production = {};
var hasRequiredReactJsxRuntime_production;
function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = "" + maybeKey);
    void 0 !== config.key && (key = "" + config.key);
    if ("key" in config) {
      maybeKey = {};
      for (var propName in config)
        "key" !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type,
      key,
      ref: void 0 !== config ? config : null,
      props: maybeKey
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}
var reactJsxRuntime_development = {};
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  "production" !== process.env.NODE_ENV && (function() {
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
        case REACT_ACTIVITY_TYPE:
          return "Activity";
      }
      if ("object" === typeof type)
        switch ("number" === typeof type.tag && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), type.$$typeof) {
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_CONTEXT_TYPE:
            return type.displayName || "Context";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
            return type;
          case REACT_MEMO_TYPE:
            return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {
            }
        }
      return null;
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      try {
        testStringCoercion(value);
        var JSCompiler_inline_result = false;
      } catch (e) {
        JSCompiler_inline_result = true;
      }
      if (JSCompiler_inline_result) {
        JSCompiler_inline_result = console;
        var JSCompiler_temp_const = JSCompiler_inline_result.error;
        var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        JSCompiler_temp_const.call(
          JSCompiler_inline_result,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          JSCompiler_inline_result$jscomp$0
        );
        return testStringCoercion(value);
      }
    }
    function getTaskName(type) {
      if (type === REACT_FRAGMENT_TYPE) return "<>";
      if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
        return "<...>";
      try {
        var name = getComponentNameFromType(type);
        return name ? "<" + name + ">" : "<...>";
      } catch (x) {
        return "<...>";
      }
    }
    function getOwner() {
      var dispatcher = ReactSharedInternals.A;
      return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
      return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
      if (hasOwnProperty.call(config, "key")) {
        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
        if (getter && getter.isReactWarning) return false;
      }
      return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      function warnAboutAccessingKey() {
        specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          displayName
        ));
      }
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, "key", {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function elementRefGetterWithDeprecationWarning() {
      var componentName = getComponentNameFromType(this.type);
      didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      ));
      componentName = this.props.ref;
      return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
      var refProp = props.ref;
      type = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        props,
        _owner: owner
      };
      null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
        enumerable: false,
        get: elementRefGetterWithDeprecationWarning
      }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
      type._store = {};
      Object.defineProperty(type._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 0
      });
      Object.defineProperty(type, "_debugInfo", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: null
      });
      Object.defineProperty(type, "_debugStack", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugStack
      });
      Object.defineProperty(type, "_debugTask", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: debugTask
      });
      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
      return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
      var children = config.children;
      if (void 0 !== children)
        if (isStaticChildren)
          if (isArrayImpl(children)) {
            for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
              validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else validateChildKeys(children);
      if (hasOwnProperty.call(config, "key")) {
        children = getComponentNameFromType(type);
        var keys = Object.keys(config).filter(function(k) {
          return "key" !== k;
        });
        isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
        didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
          'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
          isStaticChildren,
          children,
          keys,
          children
        ), didWarnAboutKeySpread[children + isStaticChildren] = true);
      }
      children = null;
      void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
      hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
      if ("key" in config) {
        maybeKey = {};
        for (var propName in config)
          "key" !== propName && (maybeKey[propName] = config[propName]);
      } else maybeKey = config;
      children && defineKeyPropWarningGetter(
        maybeKey,
        "function" === typeof type ? type.displayName || type.name || "Unknown" : type
      );
      return ReactElement(
        type,
        children,
        maybeKey,
        getOwner(),
        debugStack,
        debugTask
      );
    }
    function validateChildKeys(node) {
      isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
      return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = require$$0, REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
      return null;
    };
    React = {
      react_stack_bottom_frame: function(callStackForError) {
        return callStackForError();
      }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
      React,
      UnknownOwner
    )();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_development.jsx = function(type, config, maybeKey) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        false,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
    reactJsxRuntime_development.jsxs = function(type, config, maybeKey) {
      var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
      return jsxDEVImpl(
        type,
        config,
        maybeKey,
        true,
        trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
      );
    };
  })();
  return reactJsxRuntime_development;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  if (process.env.NODE_ENV === "production") {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
const InputGroup = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, required, type, title, name } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {
  };
  const funcOnBlur = onBlur ? onBlur : () => {
  };
  const funcOnFocus = onFocus ? onFocus : () => {
  };
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {
  };
  const requiredCheckbox = type === "checkbox" && options.ids.length === 1;
  const checkboxHandler = requiredCheckbox ? required : null;
  const requiredHandler = type === "radio" ? required : checkboxHandler;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: title }),
    options.ids.map((id, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type,
          id,
          required: requiredHandler,
          name,
          checked: type === "checkbox" ? value[id] : value === id,
          onBlur: funcOnBlur,
          onFocus: funcOnFocus,
          onKeyDown: funcOnKeyDown,
          onChange: funcOnChange,
          value: id
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, children: options.labels[index] })
    ] }, id))
  ] });
};
const multipleInputs = `
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `;
const dynamicRendering = `
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `;
const dataAccess = `
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`;
const proTips = () => {
  console.group(
    "%c 💡 SDUDE PROFESSIONAL TIPS ",
    "background: #FF9800; color: white; padding: 2px; border-radius: 2px;"
  );
  console.groupCollapsed(
    "%c1) Handling Multiple Inputs",
    "color: #2196F3; font-weight: bold;"
  );
  console.log(`%c${multipleInputs}`, "color: #555; font-family: monospace;");
  console.groupEnd();
  console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;"
  );
  console.log(`%c${dynamicRendering}`, "color: #555; font-family: monospace;");
  console.groupEnd();
  console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;"
  );
  console.log(`%c${dataAccess}`, "color: #555; font-family: monospace;");
  console.groupEnd();
  console.groupEnd();
};
const commons = `
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`;
const checkboxBoilerplate = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${commons}
      }`;
const dateBoilerplate = `{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${commons}
       }`;
const dateTimeBoilerplate = `{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${commons}
       }`;
const emailBoilerplate = `{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${commons}
       }`;
const numberBoilerplate = `{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${commons}
       }`;
const pswBoilerplate = `{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${commons}
       }`;
const radioBoilerplate = `{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${commons}
      }`;
const selectsBoilerplate = `{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${commons}
    }`;
const telBoilerplate = `{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${commons}
       }`;
const textBoilerplate = `{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${commons}
       }`;
const textareaBoilerplate = `{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${commons}
       }`;
const timeBoilerplate = `{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${commons}
      }`;
const urlBoilerplate = `{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${commons}
      }`;
const defineConsoleConsts = (input) => {
  switch (input) {
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
};
const consoleRendering = (boilerplate, input, bucket) => {
  const data = defineConsoleConsts(input);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${data.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;"
  );
  const text = `
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${boilerplate}

  3) Group your objects into an array:
     const logicArray = [${input}];

  4) Initialize the Engine in your Component:
     const { ${bucket} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${data.input} dataField={ ${bucket}.${input}} />
  `;
  console.log(
    `%c${text}`,
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"
  );
  console.groupEnd();
};
const inputCheckboxDoc = () => `
${consoleRendering(checkboxBoilerplate, "myCheckboxGroup", "groups")}
${proTips()}
`;
const inputDateDoc = () => `
${consoleRendering(dateBoilerplate, "myDateField", "fields")}
${proTips()}
`;
const inputDatetimeDoc = () => `
${consoleRendering(dateTimeBoilerplate, "myDatetimeField", "fields")}
${proTips()}
`;
const inputEmailDoc = () => `
${consoleRendering(emailBoilerplate, "myEmailField", "fields")}
${proTips()}
`;
const inputNumberDoc = () => `
${consoleRendering(numberBoilerplate, "myNumberField", "fields")}
${proTips()}
`;
const inputPasswordDoc = () => `
${consoleRendering(pswBoilerplate, "myPasswordField", "fields")}
${proTips()}
`;
const inputRadioDoc = () => `
${consoleRendering(radioBoilerplate, "myRadioGroup", "groups")}
${proTips()}
`;
const inputSelectDoc = () => `
${consoleRendering(selectsBoilerplate, "mySelect", "selects")}
${proTips()}
`;
const inputTelDoc = () => `
${consoleRendering(telBoilerplate, "myTelField", "fields")}
${proTips()}
`;
const inputTextareaDoc = () => `
${consoleRendering(textareaBoilerplate, "myTextarea", "textareas")}
${proTips()}
`;
const inputTextDoc = () => `
${consoleRendering(textBoilerplate, "myTextField", "fields")}
${proTips()}
`;
const inputTimeDoc = () => `
${consoleRendering(timeBoilerplate, "myTimeField", "fields")}
${proTips()}
`;
const inputUrlDoc = () => `
${consoleRendering(urlBoilerplate, "myUrlField", "fields")}
${proTips()}
`;
const docMap = {
  checkbox: inputCheckboxDoc,
  date: inputDateDoc,
  "dateTime-local": inputDatetimeDoc,
  email: inputEmailDoc,
  number: inputNumberDoc,
  password: inputPasswordDoc,
  radio: inputRadioDoc,
  select: inputSelectDoc,
  tel: inputTelDoc,
  text: inputTextDoc,
  textarea: inputTextareaDoc,
  time: inputTimeDoc,
  url: inputUrlDoc
};
function ErrorInvalidCall({ isAsync, dataField }) {
  if (isAsync) return;
  const errorDivStyle = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  };
  const buttonStyle = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  };
  const docHandler = (e) => {
    e.preventDefault();
    const func = docMap["text"];
    func();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...errorDivStyle }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '"Invalid Component Call: Reference not found. Note: This type of error usually occurs in one of three cases:' }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { style: { textAlign: "left" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ID Mismatch" }),
        ": You are trying to call the input using a different ID than the one defined in your configuration object."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Incorrect Destructuring" }),
        ": You are using the correct ID, but targeting the wrong logical group. For example, trying to render a select input using fields.myInput instead of selects.myInput."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Invalid Type" }),
        `: You have assigned a non-existent type in the configuration object (e.g., a typo like type: 'selct' instead of 'select')."`
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { ...buttonStyle }, onClick: docHandler, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function ErrorInput({ dataField }) {
  const { id, type, name } = dataField.config;
  const rightId = id ? id : name;
  const { callers, errorType } = dataField.errorData;
  const singular = callers.length === 1;
  const errorGram = singular ? "an error" : "errors";
  const keyGram = singular ? "key" : "keys";
  const voidMessage = "You sent an empty array configuration:";
  const isVoid = rightId === "noLogicArray" ? true : false;
  const errorDivStyle = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px"
  };
  const buttonStyle = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer"
  };
  const errorTitle = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "The configuration object for ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: rightId.toUpperCase() }),
    " ",
    "input is invalid and contains ",
    errorGram,
    " in the following ",
    keyGram,
    ":"
  ] });
  const docHandler = (e) => {
    e.preventDefault();
    const func = docMap[type];
    func();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { ...errorDivStyle }, children: [
    isVoid ? voidMessage : errorTitle,
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { style: { textAlign: "left" }, children: callers.map((caller, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: caller.toUpperCase() }),
      ": ",
      errorType[index]
    ] }, `${caller}-${index}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "red" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "Need help with the configuration" }),
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { ...buttonStyle }, onClick: docHandler, children: "Click here" }),
      "and check the console"
    ] })
  ] });
}
function RenderGate({ component, dataField }) {
  return dataField.error ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInput, { dataField }) : component;
}
function CheckboxInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroup, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
const InputField = ({ dataField, async }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { id, label } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {
  };
  const funcOnBlur = onBlur ? onBlur : () => {
  };
  const funcOnFocus = onFocus ? onFocus : () => {
  };
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {
  };
  const props = {
    required: dataField.config.required,
    type: dataField.config.type,
    placeholder: dataField.config.placeholder,
    id: dataField.config.id,
    name: dataField.config.id,
    min: dataField.config.min,
    max: dataField.config.max,
    step: dataField.config.step,
    autoComplete: dataField.config.autoComplete,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown
  };
  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }
  return dataField.error && async ? null : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...props })
  ] });
};
function DateInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function DateTimeInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function EmailInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function NumberInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function PasswordInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function RadioInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputGroup, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
const InputSelect = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, id, labels, label, required } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {
  };
  const funcOnBlur = onBlur ? onBlur : () => {
  };
  const funcOnFocus = onFocus ? onFocus : () => {
  };
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {
  };
  const props = {
    required,
    name: id,
    id,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown
  };
  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("select", { ...props, children: options.map((option, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option, children: labels[index] }, option)) })
  ] });
};
function SelectInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputSelect, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function TelInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function Counter({ label, value, max, charsType }) {
  let counter = null;
  if (charsType) {
    counter = value.trim() === "" ? 0 : value.length;
  } else {
    counter = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      counter,
      " / ",
      max
    ] })
  ] });
}
function InputTextarea({ dataField }) {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { id, counterLabel, maxChars, maxWords, label } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {
  };
  const funcOnBlur = onBlur ? onBlur : () => {
  };
  const funcOnFocus = onFocus ? onFocus : () => {
  };
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {
  };
  const counterRender = maxChars || maxWords;
  const charsType = maxChars || false;
  const props = {
    required: dataField.config.required,
    placeholder: dataField.config.placeholder,
    rows: dataField.config.rows,
    cols: dataField.config.cols,
    id: dataField.config.id,
    name: dataField.config.id,
    autoComplete: dataField.config.autoComplete,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown,
    spellCheck: false,
    maxLength: maxChars
  };
  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...props }),
    counterRender && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Counter,
      {
        max: maxChars || maxWords,
        value,
        label: counterLabel,
        charsType
      }
    )
  ] });
}
function TextareaInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputTextarea, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function TextInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function UrlInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
function TimeInput({ dataField, isAsync, i18n }) {
  return useMemo(() => {
    const component = /* @__PURE__ */ jsxRuntimeExports.jsx(InputField, { dataField });
    return !dataField ? /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorInvalidCall, { isAsync }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RenderGate, { component, dataField });
  }, [dataField?.state?.value, i18n]);
}
const initializeErrorData = (logicObj) => {
  logicObj.errorData.push("clean");
};
const errorDataHandler = (errorObj, index) => {
  if (errorObj[index] !== "clean") return;
  errorObj[index] = {
    callers: [],
    errorType: []
  };
};
const funcsError = (logicObj, caller, index) => {
  const callBy = caller.replace("Funcs", "");
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(callBy);
  logicObj.errorData[index].errorType.push("must be a function");
};
const basicError = (logicObj, caller, errorMsg, index, type) => {
  const msg = errorMsg ? errorMsg : `must be ${type}`;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(msg);
};
const optionsError = (msg, commons2, key) => {
  const { customLogic, logicKey, index } = commons2;
  const logicObj = customLogic[logicKey];
  logicObj.errors[index] = true;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errorData[index].callers.push(key);
  logicObj.errorData[index].errorType.push(msg);
};
const selectsError$1 = (errorMsg, logicObj, id, caller) => {
  const index = logicObj.SSOT.length - 1;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(errorMsg);
};
const duplicationError = (logicObj, caller, errorMsg, index) => {
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(errorMsg);
};
const defineId = (element) => {
  return element.id ? element.id : element.name;
};
const optionMsg = (coord) => {
  return `Values in the ids array must be unique. Change the value at position ${coord.array}`;
};
const uniqueIdGuard = (coords, configArray, customLogic, SSOTS2) => {
  for (let i = 0; i < coords.length; i++) {
    const { category, nidificate, position, id } = coords[i];
    const logicKey = category + "Logic";
    const logicObj = customLogic[logicKey];
    const element = configArray[position];
    const idFallback = defineId(element);
    const index = logicObj.SSOT.indexOf(idFallback);
    const errorMsg = nidificate ? optionMsg(coords[i]) : "id is duplicated";
    const caller = nidificate ? "option" : idFallback;
    duplicationError(logicObj, caller, errorMsg, index);
  }
};
const SSOTS = {
  fieldsSSOT: [],
  groupsSSOT: [],
  selectsSSOT: [],
  textareasSSOT: []
};
const optionsBlueprint = (customLogic, logicKey, name) => {
  customLogic[logicKey][name] = {
    options: {
      ids: [],
      labels: []
    }
  };
};
const selectsBlueprint = (logicObject, id) => {
  logicObject[id] = {
    options: [],
    labels: []
  };
};
const invalidGroupsBlueprint = (logicObj, index, id) => {
  const objConfig = {
    name: id,
    type: logicObj.types[index],
    autoComplete: "invalid",
    title: "invalid",
    options: {
      ids: "invalid",
      labels: "invalid"
    }
  };
  return { config: objConfig, state: {}, handlers: {} };
};
const fieldType = ["text", "email", "tel", "url", "password"];
const pseudoFieldType = ["number", "date", "time", "datetime-local"];
const groupType = ["radio", "checkbox"];
const selectsType = "select";
const textareasType = "textarea";
const validTypes = [
  ...fieldType,
  ...pseudoFieldType,
  ...groupType,
  selectsType,
  textareasType
];
const notAnObj = (caller, id) => {
  return `The ${caller} property in ${id} must be an object`;
};
const invalidLength = (caller, id, only) => {
  return `The ${caller} object in ${id} must contain only the ${only}`;
};
const missingKey = (key, postion) => {
  return `The ${key} key in ${postion} is missing`;
};
const notAnArray = (caller, id) => {
  return `The ${caller} field in ${id} options must be an array`;
};
const notAlign = (firstArray, secondArray, caller) => {
  return `The ${firstArray} and ${secondArray} arrays in ${caller} must have the same length`;
};
const notAString = (string, position) => {
  return `The ${string} in ${position} must be a string`;
};
const invalidTime = "format is invalid";
const fallbackIdErrorMessage = (position) => {
  if (position !== null || position !== void 0) {
    return `If you don't provide a valid ID, I can't identify the input. 
    However, the invalid ID is at position ${position} in the configuration array you provided`;
  }
  return false;
};
const assign = (index, logicObj, caller) => {
  logicObj[caller].push(index);
};
const map = (id, logicObj, caller, func) => {
  logicObj[caller][id] = func;
};
const handlersDispatcher = (id, logicObj, mapCaller, arrayCaller, func) => {
  const index = logicObj.SSOT.length - 1;
  assign(index, logicObj, arrayCaller);
  map(id, logicObj, mapCaller, func);
};
const funcCheck = (datum, element, caller) => {
  const type = element.type;
  const validBoolean = caller === "onChange" && typeof datum === "boolean";
  let isValidType = typeof datum === "function" || validBoolean;
  if (type === "textarea") {
    const isControlled2 = element.maxWords || element.maxChars;
    return isControlled2 ? true : isValidType;
  }
  const controlledTypes = type === "checkbox" || type === "radio";
  if (controlledTypes && caller === "onChange") return true;
  return isValidType;
};
const disalignmentCheck = (firsArray, secondArray) => {
  if (!firsArray || !secondArray) return false;
  return firsArray.length === secondArray.length;
};
const numChecker = (num, logicObj, caller) => {
  if (typeof num !== "number" || Number.isNaN(num)) {
    const index = logicObj.SSOT.length - 1;
    const errorMsg = "must be a number";
    basicError(logicObj, caller, errorMsg, index, "a number");
    return "invalid";
  }
  return num;
};
const noEmptyStrings = (isString, msg, element, string) => {
  const isEmpty = isString && string.trim() === "";
  if (isEmpty) {
    const index = element.length - 1;
    element.splice(0, element.length);
    element.push("invalid");
    return `You cannot use an empty string at index ${index}`;
  }
  return msg;
};
const pushTheString = (string, element, caller) => {
  const isString = typeof string === "string";
  const pushThis = isString ? string : null;
  element.push(pushThis);
  let msg = isString ? null : notAString(string, `${caller} array`);
  msg = noEmptyStrings(isString, msg, element, string);
  return msg;
};
const duplicatedSelectOptions = (duplicates, handlerArgs) => {
  if (duplicates.length > 0) {
    const list = duplicates.join(" - ");
    const grammar = duplicates.length === 1 ? "is" : "are";
    const msg = `${list} ${grammar} duplicated`;
    const { logicObj, id, caller } = handlerArgs;
    selectsError(msg, logicObj, id, caller);
  }
};
const stringCheck = (string, mandatory) => {
  if (!string && mandatory) return "mandatory";
  if (!string && !mandatory) return false;
  if (typeof string !== "string") return "must be a string";
  if (string.trim() === "") return "cannot be an empty string";
  return false;
};
const funcGuard = (isAFunc, id, logicObj, mapCaller, arrayCaller, func, index) => {
  if (isAFunc) {
    handlersDispatcher(id, logicObj, mapCaller, arrayCaller, func);
  } else {
    funcsError(logicObj, mapCaller, index);
  }
};
const requiredGuard = (logicObj, element, index) => {
  if (element.required && typeof element.required !== "boolean") {
    const caller = "required";
    const errorMsg = "must be a boolean";
    basicError(logicObj, caller, errorMsg, index);
    return;
  }
  const required = element.required ? true : false;
  logicObj.required.push(required);
};
const basicBlueprint = (customLogic, logicKey, configKey) => {
  customLogic[logicKey] = {
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
  };
  if (configKey !== "groupsConfig") {
    customLogic[logicKey].labels = [];
    customLogic[logicKey][configKey] = {
      targetKeys: [],
      originalObjects: []
    };
  } else {
    customLogic[logicKey].titles = [];
    customLogic[logicKey][configKey] = {};
  }
};
const processHandlers = (commons2, caller, func) => {
  const { element, id, logicObj } = commons2;
  const index = logicObj.SSOT.length - 1;
  const isAFunc = funcCheck(func, element, caller);
  const mapCaller = caller + "Funcs";
  const arrayCaller = caller + "Indexes";
  funcGuard(isAFunc, id, logicObj, mapCaller, arrayCaller, func, index);
};
const isControlled = (element) => {
  return element.onChange || element.type === "textarea" || element.type === "radio" || element.type === "checkbox";
};
const handlersParser = (element, logicObj, id, SSOT) => {
  const commons2 = { element, id, logicObj };
  if (isControlled(element)) {
    processHandlers(commons2, "onChange", element.onChange);
  }
  element.onBlur && processHandlers(commons2, "onBlur", element.onBlur);
  element.onFocus && processHandlers(commons2, "onFocus", element.onFocus);
  element.onKeyDown && processHandlers(commons2, "onKeyDown", element.onKeyDown);
};
const stringProcessor = (string, target, caller, commons2, position) => {
  let error = false;
  const { logicObj, id, index, mandatory } = commons2;
  const isInvalid = stringCheck(string, mandatory);
  if (isInvalid) {
    error = true;
    const msgFallback = id ? null : fallbackIdErrorMessage(position);
    const errorMessage = msgFallback ? msgFallback : isInvalid;
    basicError(logicObj, caller, errorMessage, index);
  }
  const myString = error ? "invalid" : string;
  target.push(myString);
  return error;
};
const typeProcessor = (type, logicElement, caller, commons2) => {
  const { logicObj, index } = commons2;
  const isValidType = validTypes.includes(type);
  if (!isValidType) {
    logicElement.push(null);
    const errorMsg = "is invalid";
    basicError(logicObj, caller, errorMsg, index);
  } else {
    stringProcessor(type, logicElement, caller, commons2);
  }
};
const stringsParser = (logicObj, element, position) => {
  const { label, placeholder, id, type } = element;
  const index = logicObj.SSOT.length;
  const commons2 = { logicObj, id, index };
  commons2.mandatory = true;
  const invalidId = stringProcessor(id, logicObj.SSOT, "id", commons2, position);
  const idFallback = invalidId ? "invalid" : id;
  commons2.id = idFallback;
  typeProcessor(type, logicObj.types, "type", commons2);
  commons2.mandatory = false;
  stringProcessor(label, logicObj.labels, "label", commons2);
  if (type !== "select") {
    stringProcessor(placeholder, logicObj.placeholders, "placeholder", commons2);
  }
};
const basicParser = (element, customLogic, key, position) => {
  const logicKey = key + "Logic";
  const configKey = key + "Config";
  if (!customLogic[logicKey]) basicBlueprint(customLogic, logicKey, configKey);
  const logicObj = customLogic[logicKey];
  logicObj.errors.push(false);
  initializeErrorData(logicObj);
  stringsParser(logicObj, element, position);
  const index = logicObj.SSOT.length - 1;
  requiredGuard(logicObj, element, index);
  const SSOT = logicObj.SSOT;
  const idFallback = SSOT[index] === "invalid" ? "invalid" : element.id;
  handlersParser(element, logicObj, idFallback);
};
const acceptOnly = (string, setCharacters, info) => {
  const regex = new RegExp(`^[${setCharacters}]+$`);
  return regex.test(string);
};
const isObjValid = (obj, info) => {
  if (!obj) return false;
  return Object.keys(obj).length > 0;
};
const isLeapYear = (year, info) => {
  const normalizeYear = parseInt(year);
  return normalizeYear % 400 === 0 || normalizeYear % 4 === 0 && normalizeYear % 100 !== 0;
};
const isShortMonth = (month, base, info) => {
  const normalizeMonth = parseInt(month);
  return normalizeMonth === 4 || normalizeMonth === 6 || normalizeMonth === 9 || normalizeMonth === 11;
};
const febMonth = (month, base) => {
  if (month === 2) return true;
  return false;
};
const februaryHandler = (leap, month, base, day) => {
  if (!febMonth(month)) {
    return { isValid: true, continue: true };
  }
  const maxFebDay = leap ? 29 : 28;
  if (day > maxFebDay) {
    return { isValid: false, why: `February cannot be > ${maxFebDay}` };
  }
  return { isValid: true, continue: false };
};
const lengthAndFormatChecker = (value) => {
  if (value.length !== 10) {
    return { isValid: false, why: "invalid length" };
  }
  if (value[4] !== "-" || value[7] !== "-") {
    return { isValid: false, why: "invalid format" };
  }
  return { isValid: true };
};
const charsChecker = (date) => {
  const validChars = "0-9";
  const isValidYear = acceptOnly(date[0], validChars);
  const isMonthValid = acceptOnly(date[1], validChars);
  const isValidDay = acceptOnly(date[2], validChars);
  if (!isValidYear) {
    return { isValid: false, why: "Year contains invalid chars" };
  }
  if (!isMonthValid) {
    return { isValid: false, why: "Month contains invalid chars" };
  }
  if (!isValidDay) {
    return { isValid: false, why: "Day contains invalid chars" };
  }
  return { isValid: true };
};
const limitsChecker = (year, month, base) => {
  if (year < 0) {
    return { isValid: false, why: "Year cannot be negative" };
  }
  if (year > 9999) {
    return { isValid: false, why: "Year cannot be > 9999" };
  }
  if (month < 0) {
    return { isValid: false, why: "Month cannot be negative" };
  }
  if (month > 12) {
    return { isValid: false, why: "Month cannot be > 12" };
  }
  return { isValid: true };
};
const isValidDate = (value, base, info) => {
  const formalCheck = lengthAndFormatChecker(value);
  if (!formalCheck.isValid) return { isValid: false, why: formalCheck.why };
  const date = value.split("-");
  const validChars = charsChecker(date);
  if (!validChars.isValid) return { isValid: false, why: validChars.why };
  const year = parseInt(date[0]);
  const month = parseInt(date[1]);
  const day = parseInt(date[2]);
  const validLimits = limitsChecker(year, month);
  if (!validLimits.isValid) return { isValid: false, why: validLimits.why };
  const leap = isLeapYear(year);
  const febCheck = februaryHandler(leap, month, base, day);
  if (!febCheck.isValid) {
    return { isValid: false, why: febCheck.why };
  }
  if (febCheck.isValid && !febCheck.continue) {
    return { isValid: true };
  }
  const shortMonth = isShortMonth(month);
  const maxDay = shortMonth ? 30 : 31;
  if (day > maxDay) {
    return { isValid: false, why: `Day cannot be > ${maxDay}` };
  }
  return { isValid: true };
};
const isValidTime = (value, info) => {
  if (value.length !== 5) {
    return false;
  }
  if (value[2] !== ":") {
    return false;
  }
  const time = value.split(":");
  const validChars = "0-9";
  const isValidHours = acceptOnly(time[0], validChars);
  const isValidMinutes = acceptOnly(time[1], validChars);
  if (!isValidHours) {
    return false;
  }
  if (!isValidMinutes) {
    return false;
  }
  const hours = parseInt(time[0]);
  const minutes = parseInt(time[1]);
  if (hours < 0 || hours > 23) {
    return false;
  }
  if (minutes < 0 || minutes > 59) {
    return false;
  }
  return true;
};
const isValidDateTimeLocal = (value, strict, info) => {
  let separator = null;
  if (value.includes("T")) {
    separator = "T";
  } else if (value.includes(" ") && false) ;
  if (!separator) return { isValid: false, why: "invalid format" };
  const length = value.length;
  let seconds = null;
  if (length === 16) {
    seconds = false;
  } else if (length === 19) {
    seconds = true;
  } else {
    return { isValid: false, why: "invalid format" };
  }
  if (value[10] !== separator) return { isValid: false, why: "invalid format" };
  const elements = value.split(separator);
  const date = elements[0];
  const validDate = isValidDate(date, "iso");
  if (!validDate.isValid) return { isValid: false, why: validDate.why };
  const timeString = elements[1];
  let time = timeString.substring(0, 5);
  if (seconds) {
    seconds = timeString.substring(6, 8);
  }
  let invalidSeconds = null;
  if (seconds) {
    const normalizeSec = parseInt(seconds);
    invalidSeconds = normalizeSec < 0 || normalizeSec > 59;
  }
  if (invalidSeconds)
    return { isValid: false, why: "Invalid format for seconds" };
  const validTime = isValidTime(time);
  if (!validTime) return { isValid: false, why: "Invalid format for time" };
  return { isValid: true };
};
const populate$1 = (string, position, commons2) => {
  const { customLogic, logicKey, name } = commons2;
  const element = customLogic[logicKey][name].options[position];
  const invalidMsg = pushTheString(string, element, position);
  const errorMsg = invalidMsg + " of " + position + " array";
  invalidMsg && optionsError(errorMsg, commons2, position);
};
const optionsGuard = (ids, labels, commons2) => {
  for (let i = 0; i < ids.length; i++) {
    populate$1(ids[i], "ids", commons2);
    populate$1(labels[i], "labels", commons2);
  }
};
const objChecker = (options, name, commons2) => {
  const validObj = isObjValid(options);
  if (!validObj) {
    const errorMessage = notAnObj("options", name);
    optionsError(errorMessage, commons2, "options");
  }
};
const arraysChecker = (name, commons2, keys, arrayName) => {
  const invalid = !keys.includes(arrayName);
  const errorMessage = invalid && missingKey(arrayName, name);
  invalid && optionsError(errorMessage, commons2, arrayName);
};
const arrayLimits = (keys, name, commons2) => {
  const error = `"labels" and "ids" keys`;
  const invalid = keys.length !== 2;
  const errorMessage = invalid && invalidLength("options", name, error);
  invalid && optionsError(errorMessage, commons2, "options");
};
const invalidArrays = (ids, labels, name, commons2) => {
  const invalidIds = !ids || !Array.isArray(ids);
  invalidIds && optionsError(notAnArray("ids", name), commons2, "ids");
  const invalidLabels = !labels || !Array.isArray(labels);
  invalidLabels && optionsError(notAnArray("labels", name), commons2, "labels");
};
const optionsParser = (commons2) => {
  const { options, customLogic, name, logicKey } = commons2;
  optionsBlueprint(customLogic, logicKey, name);
  objChecker(options, name, commons2);
  const keys = options ? Object.keys(options) : ["ids", "labels"];
  arrayLimits(keys, name, commons2);
  arraysChecker(name, commons2, keys, "labels");
  arraysChecker(name, commons2, keys, "ids");
  const ids = options?.ids ? options.ids : ["invalid"];
  const labels = options?.labels ? options.labels : ["invalid"];
  invalidArrays(ids, labels, name, commons2);
  disalignmentCheck(ids, labels) ? optionsGuard(ids, labels, commons2) : optionsError(notAlign("ids", "labels", name), commons2, "options");
};
const nameHandler = (commons2, name, logicObj, position) => {
  commons2.mandatory = true;
  const invalidName = stringProcessor(
    name,
    logicObj.SSOT,
    "id",
    commons2,
    position
  );
  const nameFallback = invalidName ? "invalid" : name;
  commons2.name = nameFallback;
};
const groupsParser = (element, customLogic, position) => {
  const logicKey = "groupsLogic";
  const configKey = "groupsConfig";
  if (!customLogic[logicKey]) basicBlueprint(customLogic, logicKey, configKey);
  const name = element.name;
  const logicObj = customLogic[logicKey];
  logicObj.errors.push(false);
  const index = logicObj.SSOT.length;
  const commonsOption = {
    options: element.options,
    customLogic,
    name,
    logicKey,
    index
  };
  optionsParser(commonsOption);
  requiredGuard(logicObj, element, index);
  const commons2 = { logicObj, name, index };
  nameHandler(commons2, name, logicObj, position);
  typeProcessor(element.type, logicObj.types, "type", commons2);
  commons2.mandatory = false;
  stringProcessor(element.title, logicObj.titles, "title", commons2);
  logicObj.SSOT;
  handlersParser(element, logicObj, element.name);
};
const dateParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;
  const minDate = element.min ? isValidDate(element.min, "iso") : null;
  const maxDate = element.max ? isValidDate(element.max, "iso") : null;
  if (minDate && !minDate.isValid) {
    basicError(logicObj, "min", minDate.why, index);
  }
  if (maxDate && !maxDate.isValid) {
    basicError(logicObj, "max", maxDate.why, index);
  }
};
const dateTimeParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;
  const minDate = element.min ? isValidDateTimeLocal(element.min) : null;
  const maxDate = element.max ? isValidDateTimeLocal(element.max) : null;
  if (minDate && !minDate.isValid) {
    basicError(logicObj, "min", minDate.why, index);
  }
  if (maxDate && !maxDate.isValid) {
    basicError(logicObj, "max", maxDate.why, index);
  }
};
const timeParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;
  const minTime = element.min ? isValidTime(element.min) : null;
  const maxTime = element.max ? isValidTime(element.max) : null;
  if (element.min && !minTime) {
    basicError(logicObj, "min", invalidTime, index);
  }
  if (element.max && !maxTime) {
    basicError(logicObj, "max", invalidTime, index);
  }
};
const numParser = (element, logicObj) => {
  const { id, type } = element;
  let min = null;
  let max = null;
  switch (type) {
    case "date":
      dateParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "time":
      timeParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "datetime-local":
      dateTimeParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "number":
      min = element.min && numChecker(element.min, logicObj, "min");
      max = element.max && numChecker(element.max, logicObj, "max");
      break;
  }
  const step = element.step && numChecker(element.step, logicObj, "step");
  logicObj.fieldsConfig[id] = {
    max,
    min,
    step
  };
};
const populate = (logicObj, id, caller, string) => {
  const element = logicObj.selectsConfig[id][caller];
  const invalidMsg = pushTheString(string, element, caller);
  if (invalidMsg) selectsError$1(invalidMsg, logicObj, id, caller);
};
const selectsGuard = (options, labels, logicObj, id) => {
  if (!options || !labels) return;
  const duplicates = [];
  let seen = /* @__PURE__ */ new Set();
  for (let i = 0; i < options.length; i++) {
    populate(logicObj, id, "options", options[i]);
    populate(logicObj, id, "labels", labels[i]);
    const isDuplicate = seen.has(options[i]);
    seen.add(options[i]);
    isDuplicate && duplicates.push(options[i]);
  }
  const handlerArgs = { logicObj, id, caller: "options" };
  duplicatedSelectOptions(duplicates, handlerArgs);
};
const selectsParser = (element, logicObj) => {
  const id = element.id;
  selectsBlueprint(logicObj.selectsConfig, id);
  const { options, labels } = element;
  const invalidOptions = !options || !Array.isArray(options);
  const optionError = "Options must be an array";
  invalidOptions && selectsError$1(optionError, logicObj, id, "options");
  const invalidLabels = !labels || !Array.isArray(labels);
  const labelsError = "Labels must be an array";
  invalidLabels && selectsError$1(labelsError, logicObj, id, "labels");
  const aligned = disalignmentCheck(options, labels);
  if (!aligned) {
    const msg = notAlign("options", "labels", id);
    selectsError$1(msg, logicObj, id, "options");
  }
  selectsGuard(options, labels, logicObj, id);
};
const counterHandler = (element, logicObj, index) => {
  const maxChars = element.maxChars && numChecker(element.maxChars, logicObj, "step");
  const maxWords = element.maxWords && numChecker(element.maxWords, logicObj, "step");
  let counterLabel = null;
  if (element.counterLabel) {
    counterLabel = typeof element.counterLabel === "string" ? element.counterLabel : "invalid";
  }
  counterLabel === "invalid" && basicError(logicObj, "counterLabel", null, index, "string");
  return { maxChars, maxWords, counterLabel };
};
const textareaParser = (element, logicObj) => {
  const SSOT = logicObj.SSOT;
  const index = logicObj.SSOT.length - 1;
  const id = SSOT[index] === "invalid" ? "invalid" : element.id;
  const rows = element.rows && numChecker(element.rows, logicObj, "max");
  const cols = element.cols && numChecker(element.cols, logicObj, "min");
  const { maxChars, maxWords, counterLabel } = counterHandler(
    element,
    logicObj,
    index
  );
  logicObj.textareasConfig[id] = {
    rows,
    cols,
    counterLabel,
    maxChars,
    maxWords
  };
};
const categoryDefiner = (type) => {
  if (type === "select") return "selects";
  if (type === "textarea") return "textareas";
  if (groupType.includes(type)) return "groups";
  if (pseudoFieldType.includes(type)) return "fieldsNum";
  if (fieldType.includes(type)) return "fieldsText";
  return "invalid";
};
const idDefiner = (element) => {
  if (element.id === "invalid") return "forbidden";
  if (element.name === "invalid") return "forbidden";
  const idFallback = element.id ? element.id : element.name;
  if (stringCheck(idFallback, true)) return "invalid";
  return idFallback;
};
const groupTracker = (checkers, element, index) => {
  const { ensureId, coords } = checkers;
  const ids = element.options ? element.options.ids : [];
  for (let i = 0; i < ids.length; i++) {
    const isDuplicate = ensureId.has(ids[i]);
    ensureId.add(ids[i]);
    isDuplicate && coords.push({
      category: "groups",
      position: index,
      array: i,
      id: ids[i],
      nidificate: true
    });
  }
};
const fallbackCategory = (category) => {
  const key = category.replace("Num", "");
  return key.replace("Text", "");
};
const categoryHandler = (cat, element, customLogic, position, checkers) => {
  switch (cat) {
    case "fieldsText":
      basicParser(element, customLogic, "fields", position);
      break;
    case "fieldsNum":
      basicParser(element, customLogic, "fields", position);
      numParser(element, customLogic.fieldsLogic);
      break;
    case "groups":
      groupsParser(element, customLogic, position);
      groupTracker(checkers, element, position);
      break;
    case "selects":
      basicParser(element, customLogic, "selects", position);
      selectsParser(element, customLogic.selectsLogic);
      break;
    case "textareas":
      basicParser(element, customLogic, "textareas", position);
      textareaParser(element, customLogic.textareasLogic);
      break;
  }
};
const dispatchParser = (element, customLogic, position, checkers) => {
  const { ensureId, SSOTS: SSOTS2, coords } = checkers;
  const type = element.type ? element.type.toLowerCase() : "invalid";
  const category = categoryDefiner(type);
  if (category === "invalid") {
    basicParser(element, customLogic, "fields", position);
    return;
  }
  const ssotsKey = fallbackCategory(category) + "SSOT";
  const id = idDefiner(element);
  SSOTS2[ssotsKey].push(id);
  const isDuplicate = ensureId.has(id);
  ensureId.add(id);
  if (id !== "invalid" && isDuplicate) {
    const rightCategory = fallbackCategory(category);
    coords.push({ category: rightCategory, position, id, nidificate: false });
  }
  categoryHandler(category, element, customLogic, position, checkers);
};
const parseConfig = (configArray, isAsync) => {
  const customLogic = {};
  const noConfigArray = !configArray || configArray.length === 0;
  if (noConfigArray && !isAsync) {
    return { logic: "invalid", SSOTS: null };
  }
  const ensureId = /* @__PURE__ */ new Set();
  const coords = [];
  const checkers = { ensureId, SSOTS, coords };
  for (let i = 0; i < configArray.length; i++) {
    dispatchParser(configArray[i], customLogic, i, checkers);
  }
  uniqueIdGuard(coords, configArray, customLogic);
  return { logic: customLogic, SSOTS };
};
const checkAndPopulate = (objConfig, key, value) => {
  if (value) objConfig[key] = value;
};
const populateObjConfig = (logicObj, index, id, configKey) => {
  const autoComplete = id === "password" ? "new-password" : id;
  const objConfig = {
    id,
    type: logicObj.types[index],
    required: logicObj.required[index],
    autoComplete
  };
  checkAndPopulate(objConfig, "label", logicObj.labels[index]);
  checkAndPopulate(objConfig, "placeholder", logicObj.placeholders[index]);
  checkAndPopulate(objConfig, "min", logicObj[configKey][id]?.min);
  checkAndPopulate(objConfig, "max", logicObj[configKey][id]?.max);
  checkAndPopulate(objConfig, "step", logicObj[configKey][id]?.step);
  return objConfig;
};
const configErrorHandler = (error, configObj, id, logicObj, index) => {
  configObj[id].error = error;
  const callers = logicObj.errorData[index].callers;
  const errorType = logicObj.errorData[index].errorType;
  configObj[id].errorData = { callers, errorType };
};
const buildSelectsConfig = (objConfig, logicObj, id, required) => {
  if (id === "invalid") return;
  const provider = logicObj.selectsConfig[id];
  objConfig.options = provider.options;
  objConfig.labels = provider.labels;
  if (required) {
    objConfig.options.unshift("");
    objConfig.labels.unshift("...");
  }
};
const buildTextareasConfig = (objConfig, logicObj, id) => {
  const provider = logicObj.textareasConfig[id];
  checkAndPopulate(objConfig, "rows", provider.rows);
  checkAndPopulate(objConfig, "cols", provider.cols);
  checkAndPopulate(objConfig, "maxChars", provider.maxChars);
  checkAndPopulate(objConfig, "maxWords", provider.maxWords);
  checkAndPopulate(objConfig, "counterLabel", provider.counterLabel);
};
const buildBasicConfig = (logicObj, caller, id, index) => {
  const configKey = caller + "sConfig";
  const objConfig = populateObjConfig(logicObj, index, id, configKey);
  const required = logicObj.required[index];
  if (caller === "textarea") buildTextareasConfig(objConfig, logicObj, id);
  if (caller === "select")
    buildSelectsConfig(objConfig, logicObj, id, required);
  return {
    config: objConfig,
    state: {},
    handlers: {},
    returns: { onChange: null, onBlur: null, onFocus: null, onKeyDown: null }
  };
};
const buildGroupsConfig = (logicObj, id, index) => {
  if (logicObj.errors[index]) {
    return invalidGroupsBlueprint(logicObj, index, id);
  }
  const autoComplete = id;
  const objConfig = {
    name: id,
    required: logicObj.required[index],
    type: logicObj.types[index],
    autoComplete,
    options: {
      ids: logicObj[id].options.ids,
      labels: logicObj[id].options.labels
    }
  };
  checkAndPopulate(objConfig, "title", logicObj.titles[index]);
  return { config: objConfig, state: {}, handlers: {} };
};
const buildConfig = (logicObj, caller) => {
  const configObj = {};
  const SSOT = logicObj.SSOT;
  for (let i = 0; i < SSOT.length; i++) {
    const id = SSOT[i];
    const type = logicObj.types[i];
    if (type === "radio" || type === "checkbox") {
      configObj[id] = buildGroupsConfig(logicObj, id, i);
    } else {
      configObj[id] = buildBasicConfig(logicObj, caller, id, i);
    }
    if (logicObj.errors[i])
      configErrorHandler(logicObj.errors[i], configObj, id, logicObj, i);
  }
  return configObj;
};
const configDispatcher = (customLogic) => {
  if (customLogic === "invalid") {
    return {
      fields: {},
      groups: {},
      selects: {},
      textareas: {}
    };
  }
  const resets = {};
  const fields = customLogic.fieldsLogic ? buildConfig(customLogic.fieldsLogic, "field") : {};
  const groups = customLogic.groupsLogic ? buildConfig(customLogic.groupsLogic, "group") : {};
  const selects = customLogic.selectsLogic ? buildConfig(customLogic.selectsLogic, "select") : {};
  const textareas = customLogic.textareasLogic ? buildConfig(customLogic.textareasLogic, "textarea") : {};
  return {
    resets,
    fields,
    groups,
    selects,
    textareas
  };
};
const keysPopulator = (controlled, obj, initial, eventName) => {
  if (!obj.returns) obj.returns = {};
  if (controlled) {
    obj.value = initial;
  }
  obj.returns[eventName] = null;
};
const commonInitialization = (logicObj, initial) => {
  const obj = {};
  const { SSOT } = logicObj;
  for (let i = 0; i < SSOT.length; i++) {
    const currentSSOT = SSOT[i];
    obj[currentSSOT] = {};
    keysPopulator(true, obj[currentSSOT], initial, "onChange");
    keysPopulator(false, obj[currentSSOT], initial, "onBlur");
    keysPopulator(false, obj[currentSSOT], initial, "onFocus");
    keysPopulator(false, obj[currentSSOT], initial, "onKeyDown");
  }
  return obj;
};
const initializeCheckbox = (state, initial) => {
  const obj = {};
  state.forEach((value) => {
    obj[value] = initial;
  });
  return obj;
};
const initializeGroups = (logicObj, initial) => {
  const obj = {};
  if (!logicObj) return obj;
  const { types, SSOT } = logicObj;
  SSOT.forEach((key, index) => {
    if (types[index] === "radio") {
      obj[key] = {
        value: initial,
        returns: {
          onChange: null,
          onFocus: null,
          onKeyDown: null,
          onBlur: null
        }
      };
    } else {
      const states = logicObj[key].options.ids;
      obj[key] = { value: { ...initializeCheckbox(states, false) } };
      obj[key].returns = {
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onBlur: null
      };
    }
  });
  return obj;
};
const buildDispatcher = (logicObj, caller, initial) => {
  const obj = {};
  if (!logicObj) return obj;
  if (caller === "groups") {
    return initializeGroups(logicObj, initial);
  } else {
    return commonInitialization(logicObj, initial);
  }
};
const useStateBuilder = (customLogic) => {
  const { fieldsLogic, groupsLogic, selectsLogic, textareasLogic } = customLogic ? customLogic : {};
  const initial = "";
  const [fieldsState, setFieldsState] = useState(
    () => buildDispatcher(fieldsLogic, "fields", initial)
  );
  const [groupsState, setGroupsState] = useState(
    () => buildDispatcher(groupsLogic, "groups", initial)
  );
  const [selectsState, setSelectsState] = useState(
    () => buildDispatcher(selectsLogic, "selects", initial)
  );
  const [textareasState, setTextareasState] = useState(
    () => buildDispatcher(textareasLogic, "textareas", initial)
  );
  return {
    fieldsState,
    setFieldsState,
    groupsState,
    setGroupsState,
    selectsState,
    setSelectsState,
    textareasState,
    setTextareasState
  };
};
const eventsArray = ["onBlur", "onFocus", "onKeyDown"];
const customLogicHandler = (map2, indexes, SSOT, obj, key, handler, setter) => {
  for (let i = 0; i < indexes.length; i++) {
    const targetId = SSOT[indexes[i]];
    const func = map2[targetId];
    obj[targetId].handlers[key] = handler(func, key, setter);
  }
};
const mapNIndexFinder = (caller, customLogic) => {
  const indexName = caller + "Indexes";
  const mapName = caller + "Funcs";
  const indexes = customLogic[indexName];
  const map2 = customLogic[mapName];
  return { map: map2, indexes };
};
const customLogicInterface = (handler, caller, logicObj, configObj, setter) => {
  const { map: map2, indexes } = mapNIndexFinder(caller, logicObj);
  if (indexes.length === 0) return;
  customLogicHandler(
    map2,
    indexes,
    logicObj.SSOT,
    configObj,
    caller,
    handler,
    setter
  );
};
const customLogicDispatcher = (logic, configs, handler, states) => {
  const { fields, textareas, groups, selects } = configs;
  const { fieldsLogic, textareasLogic, groupsLogic, selectsLogic } = logic;
  const setF = states.setFieldsState;
  const setG = states.setGroupsState;
  const setS = states.setSelectsState;
  const setT = states.setTextareasState;
  eventsArray.forEach((event) => {
    isObjValid(fieldsLogic) && customLogicInterface(handler, event, fieldsLogic, fields, setF);
    isObjValid(textareasLogic) && customLogicInterface(handler, event, textareasLogic, textareas, setT);
    isObjValid(groupsLogic) && customLogicInterface(handler, event, groupsLogic, groups, setG);
    isObjValid(selectsLogic) && customLogicInterface(handler, event, selectsLogic, selects, setS);
  });
};
const executeOnChangeLogic = (id, map2, value) => {
  const isBoolean = typeof map2[id] === "boolean";
  if (!map2 || Object.keys(map2).length === 0 || isBoolean) return;
  const myFunc = map2[id];
  const result = myFunc && myFunc(value);
  return result;
};
const populateOC = (SSOT, configObj, stateIndexes, handler) => {
  for (let i = 0; i < stateIndexes.length; i++) {
    const targetId = SSOT[stateIndexes[i]];
    if (configObj[targetId] && SSOT[i] !== "invalid") {
      configObj[targetId].handlers = { onChange: handler };
    }
  }
};
const onChangeInterface = (customLogic, configs, handlers, SSOTS2) => {
  for (let key in configs) {
    const logicKey = key + "Logic";
    const logicObj = customLogic[logicKey];
    const validLogic = isObjValid(logicObj);
    if (!validLogic) continue;
    const stateIndexes = logicObj.onChangeIndexes;
    const isControlled2 = stateIndexes.length > 0;
    if (!isControlled2) continue;
    const SSOTKey = key + "SSOT";
    const SSOT = SSOTS2[SSOTKey];
    const configObj = configs[key];
    const handler = handlers[key];
    populateOC(SSOT, configObj, stateIndexes, handler);
  }
};
const handlersBinder = (configs, customLogic, states, SSOTS2, cache) => {
  const fieldsMap = customLogic.fieldsLogic?.onChangeFuncs || {};
  const groupsMap = customLogic.groupsLogic?.onChangeFuncs || {};
  const selectsMap = customLogic.selectsLogic?.onChangeFuncs || {};
  const textareasMap = customLogic.textareasLogic?.onChangeFuncs || {};
  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } = states;
  const commonOnChangeHandler = (setter, map2) => (e) => {
    const { id, value, type } = e.target;
    const onChangeResult = executeOnChangeLogic(id, map2, value);
    cache.current.inputChanged = { id, type };
    setter((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        value,
        returns: {
          ...prev[id]?.returns,
          onChange: onChangeResult
        }
      }
    }));
  };
  const mirrorUpdate = (name) => {
    const keys = Object.keys(states.groupsState[name].value);
    const obj = {};
    keys.forEach((key) => {
      obj[key] = document.getElementById(key).checked;
    });
    return obj;
  };
  const changeGroupsHandler = (setter, map2) => (e) => {
    const { id, value, type, name, checked } = e.target;
    cache.current.inputChanged = { id: name, type };
    const finalValue = type === "radio" ? value : mirrorUpdate(name);
    const onChangeResult = executeOnChangeLogic(name, map2, finalValue);
    if (type === "radio") {
      setter((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value,
          returns: {
            ...prev[name]?.returns,
            onChange: onChangeResult
          }
        }
      }));
    } else {
      setter((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: {
            ...prev[name].value,
            [id]: checked
          },
          returns: {
            ...prev[name]?.returns,
            onChange: onChangeResult
          }
        }
      }));
    }
  };
  const returnsHandler = (func, eventName, setter) => (e) => {
    const { id, value, type } = e.target;
    const ensureId = type === "radio" || type === "checkbox" ? e.target.name : id;
    cache.current.inputChanged = { id: ensureId, type };
    const customResult = func(ensureId, value);
    setter((prev) => ({
      ...prev,
      [ensureId]: {
        ...prev[ensureId],
        returns: {
          ...prev[ensureId]?.returns,
          [eventName]: customResult
        }
      }
    }));
  };
  const handlers = {
    fields: commonOnChangeHandler(setFieldsState, fieldsMap),
    selects: commonOnChangeHandler(setSelectsState, selectsMap),
    textareas: commonOnChangeHandler(setTextareasState, textareasMap),
    groups: changeGroupsHandler(setGroupsState, groupsMap)
  };
  onChangeInterface(customLogic, configs, handlers, SSOTS2);
  const { configFields, configGroups, configSelects, configTextareas } = configs;
  customLogicDispatcher(customLogic, configs, returnsHandler, states);
  return { configFields, configGroups, configSelects, configTextareas };
};
const reset = (customLogic, states, cache) => {
  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } = states;
  const { fieldsLogic, groupsLogic, selectsLogic, textareasLogic } = customLogic ? customLogic : {};
  const initial = "";
  setFieldsState(() => buildDispatcher(fieldsLogic, "fields", initial));
  setGroupsState(() => buildDispatcher(groupsLogic, "groups", initial));
  setSelectsState(() => buildDispatcher(selectsLogic, "selects", initial));
  setTextareasState(
    () => buildDispatcher(textareasLogic, "textareas", initial)
  );
  cache.current = {
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: false
  };
};
const resetOne = (setter, id) => {
  setter((prev) => ({
    ...prev,
    [id]: {
      ...prev[id],
      value: "",
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null
      }
    }
  }));
  return true;
};
const resetCheckbox = (setter, id, value) => {
  const resetObj = {};
  const ids = Object.keys(value);
  for (let i = 0; i < ids.length; i++) {
    resetObj[ids[i]] = false;
  }
  setter((prev) => ({
    ...prev,
    [id]: {
      ...prev[id],
      value: resetObj,
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null
      }
    }
  }));
  return true;
};
const singleReset = (states, id) => {
  if (!id) {
    console.error("A valid ID parameter is required to reset a single input.");
  }
  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } = states;
  let resetted = false;
  const { fieldsState, groupsState, selectsState, textareasState } = states;
  resetted = fieldsState[id] ? resetOne(setFieldsState, id) : resetted;
  if (groupsState[id]) {
    typeof states.groupsState[id].value === "string" ? resetOne(setGroupsState, id) : resetCheckbox(setGroupsState, id, states.groupsState[id].value);
    resetted = true;
  }
  resetted = selectsState[id] ? resetOne(setSelectsState, id) : resetted;
  resetted = textareasState[id] ? resetOne(setTextareasState, id) : resetted;
  if (!resetted) {
    console.error("The ID provided as a parameter is invalid");
  }
};
const syncStates = (elements, config, state) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "invalid" || !config[elements[i]]) continue;
    config[elements[i]].state = { value: state[elements[i]]?.value || "" };
    config[elements[i]].returns = {
      onChange: state[elements[i]]?.returns?.onChange || null,
      onBlur: state[elements[i]]?.returns?.onBlur || null,
      onFocus: state[elements[i]]?.returns?.onFocus || null,
      onKeyDown: state[elements[i]]?.returns?.onKeyDown || null
    };
  }
};
const firstRender = (configs, SSOTS2, states, customLogic) => {
  for (let key in configs) {
    const logicKey = key + "Logic";
    const logicObj = customLogic[logicKey];
    if (!logicObj) continue;
    const keySSOT = key + "SSOT";
    const SSOT = SSOTS2[keySSOT];
    const stateKey = key + "State";
    syncStates(SSOT, configs[key], states[stateKey]);
  }
};
const configDefiner = (type) => {
  if (type === "select") return "selects";
  if (type === "textarea") return "textareas";
  if (type === "radio") return "groups";
  if (type === "checkbox") return "groups";
  return "fields";
};
const update = (configs, states, customLogic, inputChanged) => {
  const { type, id } = inputChanged;
  const key = configDefiner(type);
  const logicKey = key + "Logic";
  const logicObj = customLogic[logicKey];
  if (!logicObj) return;
  const stateKey = key + "State";
  const config = configs[key][id];
  const state = states[stateKey];
  config.state = { value: state[id]?.value || "" };
  config.returns = {
    onChange: state[id]?.returns?.onChange || null,
    onBlur: state[id]?.returns?.onBlur || null,
    onFocus: state[id]?.returns?.onFocus || null,
    onKeyDown: state[id]?.returns?.onKeyDown || null
  };
};
const statesMirroring = (states, cache) => {
  const { customLogic, SSOTS: SSOTS2, configs } = cache.current;
  if (!cache.current.inputChanged) {
    firstRender(configs, SSOTS2, states, customLogic);
  } else {
    update(configs, states, customLogic, cache);
  }
  if (configs.resets && Object.keys(configs.resets).length === 0) {
    configs.resets.resetAll = () => reset(customLogic, states, cache);
    configs.resets.resetOne = (obj) => singleReset(states, obj);
  }
};
const iterate = (keys, newConfig, oldConfig) => {
  for (let i = 0; i < keys.length; i++) {
    oldConfig[keys[i]].config = newConfig[keys[i]].config;
  }
};
const reConfigI18n = (newConfigs, oldConfigs) => {
  const newfields = newConfigs.fields;
  const oldFields = oldConfigs.fields;
  const fieldsKeys = Object.keys(newfields);
  iterate(fieldsKeys, newfields, oldFields);
  const newGroups = newConfigs.groups;
  const oldGroups = oldConfigs.groups;
  const groupsKeys = Object.keys(newGroups);
  iterate(groupsKeys, newGroups, oldGroups);
  const newSelects = newConfigs.selects;
  const oldSelects = oldConfigs.selects;
  const selectsKeys = Object.keys(newSelects);
  iterate(selectsKeys, newSelects, oldSelects);
  const newTextareas = newConfigs.textareas;
  const oldTextareas = oldConfigs.textareas;
  const textareasKeys = Object.keys(newTextareas);
  iterate(textareasKeys, newTextareas, oldTextareas);
};
const useRamonForms = (objConfig) => {
  const { configArray, isAsync, i18n } = objConfig;
  const cache = useRef({
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: false,
    inputChanged: null,
    i18nPrev: null
  });
  const needFallback = !cache.current.bound && !configArray && isAsync;
  const userArray = needFallback ? [] : configArray;
  if (!cache.current.customLogic && (userArray.length > 0 || !isAsync)) {
    const { logic, SSOTS: SSOTS2 } = parseConfig(userArray, isAsync);
    const configs = configDispatcher(logic);
    cache.current.customLogic = logic;
    cache.current.SSOTS = SSOTS2;
    cache.current.configs = configs;
    cache.current.i18nPrev = i18n;
  }
  if (cache.current.i18nPrev && i18n !== cache.current.i18nPrev) {
    const { logic } = parseConfig(userArray, isAsync);
    const configs = configDispatcher(logic);
    reConfigI18n(configs, cache.current.configs);
    cache.current.bound = false;
  }
  const states = useStateBuilder(cache.current.customLogic);
  if (cache.current.configs && !cache.current.bound) {
    handlersBinder(
      cache.current.configs,
      cache.current.customLogic,
      states,
      cache.current.SSOTS,
      cache
    );
    cache.current.bound = true;
    cache.current.i18nPrev = i18n;
  }
  if (cache.current.bound) {
    statesMirroring(states, cache);
  }
  return cache.current.configs || {};
};
function AsyncFetchData() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "useEffect" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: ")" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "=>" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "{"
    ] }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      "   // 1. Fetch your data from an API or DB",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "   // 2. Map it to your configuration objects"
    ] }),
    "\n",
    "   ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fetchedConfigs " }),
    "= ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "username" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "email" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "]" }),
    "\n",
    "   ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "setData" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    "\n",
    "     ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "configArray" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fetchedConfigs" }),
    ",",
    "\n",
    "     ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "isAsync" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    "\n",
    "     ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "i18n" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    "\n",
    "   ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: ")" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "}"
    ] }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function AsyncFormSnippet() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    " && ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "(" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<form` }),
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `{` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "handler" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `>` }),
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "isAsync" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<button>` }),
    "send",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</button>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</form>` }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: ")" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" })
  ] });
}
function AsyncHookParams() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      " ",
      "{"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "groups" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "selects" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "textareas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "data" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function AsyncSetState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: " [" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "data" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "setData" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "]" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "useState" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "{" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "configArray" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "[]" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "isAsync" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "i18n" }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "}" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function AsyncMode() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "In most cases, forms are static and synchronous by nature, so we design them directly within our components without needing to manage any side effects. However, there are scenarios where you might need to fetch data from a database or a global state, for instance in a multi-language website.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ramon-form-sdude also supports these cases, as long as the configuration structure changes only once" }),
      ". Essentially, the hook handles an empty array while it waits to be populated (asynchronous state). However, once populated, the array must remain static;",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "you cannot dynamically change its shape afterward" }) }),
      ". Setting up the asynchronous mode is very simple and takes just a few steps, which I will summarize below:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "1. Create a React state and initialize it:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncSetState, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "2. Pass the state to the hook:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncHookParams, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "3. Execute the effect or the logic needed to populate the state with your configuration objects. Keep in mind, however, that once the state is populated, you cannot change it again.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "In the following example,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "I used an effect to handle the fetch logic, but you are not required to do so" }),
      ". You can use any logic you prefer; you can even write it directly within the component body. The reactivity is driven by the state itself."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncFetchData, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "4.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "You must pass an isAsync prop with a value of true to every individual component you render" }) }),
      ". This notifies them that you are in asynchronous mode. Additionally, ensure you use conditional logic for the form rendering to prevent the app from crashing in the absence of data."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncFormSnippet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "As you can see, the setup is straightforward. You will have no issues as long as the state array remains immutable after being populated. In fact,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "if you try to add a new configuration object to the array after the initial population, the corresponding input will never be rendered" }) }),
      ". For this reason, if you need to manage inputs dynamically, do not attempt to add configuration objects to the original array while the form lifecycle is active; simply use conditional logic.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "If you absolutely must create inputs dynamically (e.g., a variable list of fields), you can adopt a hybrid approach.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Nothing prevents you from using the hook for the main form structure while managing a few dynamic fields with standard React logic" }),
      ". The hook will remain isolated and performant, giving you the freedom to manually add what you need without conflicts."
    ] })
  ] });
}
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "For those who want to understand how this library works (and not just settle for the fact that it does) this section explains the choices made during development.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "You will discover that some of these decisions are non-idiomatic" }),
      "; they represent an inevitable trade-off necessary to guarantee high performance and ease of use in extreme cases that are not, by nature, natively supported by React or other libraries.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: 'I am well aware that some of these solutions may appear unorthodox, or even "dirty," compared to standard React techniques' }),
      ". However, in building this library, whenever a strategic choice was required, I systematically prioritized pragmatism over common standards."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Why it never lags" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "The reason these inputs never produce lag, despite intensive use of controlled components, is so simple it might seem trivial:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "instead of using React.memo to tell the framework what to re-render, we memoized the entire component" }),
      ". This allowed us to bypass the systematic reconciliation process that React would otherwise perform, focusing the analysis solely on the state value; a value that, as you will see later, is actually a copy of the real state managed by the library.",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/wrapper.png",
          alt: "wrapper"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Error Handling and the Dual-Wrapper System" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "Every UI component is essentially wrapped in two layers. The first one, which you saw earlier, simply evaluates whether a missing configuration object is due to asynchronous management or if it is an actual error. The second layer is the RenderGate. As shown in the image below, it checks for errors within the configuration object. If errors are found, it triggers the component responsible for rendering them; otherwise, it launches the UI component that handles the requested input.",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/renderGate.png",
          alt: "renderGate"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Deterministic Parsing and Ref-based Caching: Balancing Usability and High Performance" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      'At first glance, this hook might seem to bend some standard React "rules"—specifically regarding data immutability and hook ordering. However, there is a clear engineering rationale behind these choices, shifting the focus from formal purity to raw throughput.',
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "1. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Immutability vs. Performance In React" }),
      `: immutability isn't just a stylistic choice; it’s the mechanism that ensures the UI stays reactive and aligned with the data. In this engine, we’ve decoupled the heavy configuration logic from the standard React render cycle. While the core logic is managed manually within a useRef cache to hit 60fps even with 2000+ inputs, the actual UI interaction remains perfectly idiomatic. React still handles what it does best: controlled input values and validation returns. Our mirroring function ensures that any data the calling component receives is always synchronized with React’s internal state. This isn’t "uncontrolled" mutation—it's a high-performance Deterministic Computation Engine that guarantees the same output for the same input, every single time.`,
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "2. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Stability and Concurrent Mode" }),
      ': We’ve stress-tested this approach in Strict Mode and under heavy latency (up to 3000ms) using Concurrent Mode transitions. The hook remains stable because the cache mutations follow a strict, predictable logic. Even when React pauses or retries a render, our internal pointers remain aligned, preventing "tearing" or UI inconsistencies.',
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "3. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: 'Hook Ordering Regarding the "Rules of Hooks"' }),
      ": while there are conditional blocks (like the config parsing), they exist only to prepare the data. The actual custom hook, useStateBuilder, is called at the top level and maintains a consistent call order. We aren't skipping hooks; we are simply ensuring they are fed with the correct, pre-calculated data only when necessary."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "The Dual-Stage Parsing System" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      'Choosing how to organize data parsing to ensure high performance was the true challenge in creating this library. The decision to use only four states (one for each reference input category: fields, groups, selects, and textareas) was a logical consequence of the fact that only four UI components abstractly manage the different inputs behind the multiple wrappers. In other words, you find the bulk of the inputs within the fields object simply because, behind the scenes, the UI component rendering them is always the same: "InputField."',
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "Initially, the choice to use wrappers was driven by the desire to maintain recognizable semantics for different input types, preventing users from getting lost in a sea of components with nearly identical names" }),
      ". It only later became clear that these wrappers also served as a tool to further improve both performance and Developer Experience (DX). Regarding the Dual-Stage Parsing, this approach was born from necessity:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "handling everything in a single step would have made debugging extremely complicated" }),
      ".",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " By separating the actual parsing from the process of creating the configuration objects returned to the caller, we were able to concentrate the bulk of the abstraction and complexity in the first stage, leaving the second stage much simpler, more readable, and easier to manage.",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "ramon__snap",
          src: "https://devramon.neocities.org/hook.png",
          alt: "hook"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "The Error Tracking System" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "Once the decision was made to separate the actual parsing from the creation of configuration objects for the calling component, building an error tracking system became a logical necessity.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "To prevent the processes managed by configDispatcher from collapsing unpredictably due to malformed objects, it was essential to catch every potential user error during the initial parsing phase" }),
      ". Given this requirement, tracking them to provide precise feedback was the most obvious and straightforward next step. The parseConfig function does more than just decompose user configuration objects to populate the customLogic object (",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "which is based on parallel arrays and index-based pointers, following the Data-Oriented Design paradigm" }),
      "); it analyzes the data as it processes it. Whenever it encounters malformed data, it tracks it contextually. This allows the system to return precise feedback, making error correction easy and immediate for the user. Finally, to prevent the analysis logic from proliferating uncontrollably and to maintain a strict separation of concerns, the tracking system was entrusted to a Guard System."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "State Mirroring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "The library's reactivity is guaranteed by an idiomatic use of React states.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "The decision to return a copy of the state to the user was driven by the need to wire the handlers and ensure constant alignment between the values recorded in the states and those managed by the individual inputs" }),
      ". The system ensures data alignment and focus stability by projecting states during the render phase. When a state update triggers a re-render, the statesMirroring function generates a complete copy of all state values before the component finishes rendering. This provides the calling component with a fresh and updated version of the data without ever touching other parts of the object, such as configuration data or handlers. In this way, I wanted to demonstrate that through a pragmatic approach and a deep understanding of React’s internals,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "it is possible to overcome the framework's known limitations by leveraging React for its primary function: the efficient rendering of interfaces" }),
      "."
    ] })
  ] });
}
function ConfigArray() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "data" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: " [" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "username, email, confirmEmail, password, confirmPassword" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "]" }),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "objConfig" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "configArray:" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "data" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "isAsync:" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "i18n:" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function LangConfig() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// lang is your reactive state (e.g., from a Context or a simple useState)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "placeholder" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "eng: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"username"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "spa: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"usuario"' }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    " ",
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "username" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"username"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"text"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "placeholder" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "label" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function I18nSnippet() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LangConfig, {}),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigArray, {}),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "groups" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "selects" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "textareas" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "resets" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "objConfig" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" }),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<form` }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `>` }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{/* Passing i18n={lang} ensures the component re-renders when the language changes */}" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "i18n" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "lang" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</form>` })
  ] });
}
function I18n() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "If your application is multi-language, you likely already have a logic (a hook, a context, or a state) managing your translations. To make your forms reactive to language changes, you simply need to follow three steps:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "1. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Map the i18n key" }),
      ": Pass your language state (the one that triggers the update across the rest of your site) to the i18n property inside objConfig. This tells the Ramon engine exactly when it’s time to recalculate the labels.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "2. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Propagate the i18n prop" }),
      ': Pass that same variable as a prop to the components rendering your inputs. This "unlocks" the UI and forces an immediate visual update.',
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      " 3. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use dynamic variables" }),
      ": Populate your labels (e.g., label or placeholder) using the variables that hold your translations, exactly as you would in any standard React component."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(I18nSnippet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "Naturally, you can use any logic you prefer for these dynamic variables, including external libraries;",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "the key point is that as long as those variables are reactive, your input texts will change right along with them" }),
      ". In other words when you develop a multi-language site, you might have a variable (e.g. title) that is itself reactive and changes whenever the global language state updates. Normally, you’d render that string in JSX like this: ",
      "<h1>{title}</h1>",
      ". In Ramon’s configuration objects, you do exactly the same thing. No new syntax to learn."
    ] })
  ] });
}
function FileSystem() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "| forms/",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "├── configs/",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "| └── signup.js",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "| └── personalData.js",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "├── funcs/ ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "| └── signup.js",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "| └── personalData.js",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
  ] });
}
function CommonsComments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: This ID becomes the key in the 'fields' object, must be a string" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Input placeholder (remove if not needed)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label (remove if not needed)" }),
    "\n"
  ] });
}
function HandlersComments({ requiredGroups }) {
  const standard = `// Optional: Set 'true' for required field (remove if not needed)`;
  const required = requiredGroups ? requiredGroups : standard;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: required }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: function (custom), true (default), false || missing (uncontrolled)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Event handler function (remove if not needed)" }),
    "\n"
  ] });
}
function BasicComments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommonsComments, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersComments, {})
  ] });
}
function BasicNumComments({ type }) {
  const minAndMax = type === "number" ? "number" : "string";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommonsComments, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      minAndMax
    ] }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      "// Optional: must be a ",
      minAndMax
    ] }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: must be a number" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersComments, {})
  ] });
}
function CommonConfig({
  constName,
  id,
  type,
  placeholder,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: constName }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      id,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      type,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      placeholder,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      label,
      '"'
    ] }),
    ",",
    "\n"
  ] });
}
function HandlersConfig() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "required: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "true" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "onChange: func" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onBlur: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onKeyDown: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onFocus: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    ";"
  ] });
}
function NumbersTypeInterface({
  id,
  label,
  type,
  placeholder,
  constName,
  min,
  max,
  step
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonConfig,
      {
        constName,
        id,
        type,
        placeholder,
        label
      }
    ),
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: min }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: max }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: step }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function TextsTypeInterface({
  id,
  label,
  type,
  placeholder,
  constName
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonConfig,
      {
        constName,
        id,
        type,
        placeholder,
        label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function DatesTypesInterface({
  id,
  label,
  type,
  placeholder,
  constName,
  min,
  max,
  step
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonConfig,
      {
        constName,
        id,
        type,
        placeholder,
        label
      }
    ),
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "min: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      min,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "max: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      max,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "step: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: step }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function GroupsTypeInterface({ type }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "hobbies" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "options: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "ids: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"music", "movie", "fitness"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "labels: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"music", "movie", "fitness"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "]" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIstrings", children: [
      '"',
      type,
      '"'
    ] }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "title: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"What are your hobbies?"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "name: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"hobbies"' }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function GroupsComments({ requiredGroups }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// required: Ids must be unique" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// required: Labels and ids must be aligned" }),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: UI title of your input (remove if not needed)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: This name becomes the key in the 'groups' object" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersComments, { requiredGroups })
  ] });
}
function SelectsInterface() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "accountType" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"accountType"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"selects"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "options: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"teacher", "student"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "]" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "labels: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "[" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"teacher", "student"' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "]" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"Choose your account"' }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function SelectsComments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: This ID becomes the key in the 'fields' object, must be a string" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: as in HTML, must be a string" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: Must be unique among themselves" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Required: Labels and options must be aligned" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label (remove if not needed)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersComments, {})
  ] });
}
function TextareaInterface({
  id,
  label,
  type,
  placeholder,
  constName
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CommonConfig,
      {
        constName,
        id,
        type,
        placeholder,
        label
      }
    ),
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "rows: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "25" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "cols: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "50" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "counterLabel: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"Max word"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "maxChars: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "500" }),
    ",",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersConfig, {})
  ] });
}
function TextareasComments() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide ramon__ideComments", children: [
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(CommonsComments, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Number of visible text lines" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Number of average characters per line" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: UI label for counter" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Optional: Set a char limit and counter (Mutually exclusive with maxWords)" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlersComments, {})
  ] });
}
const configTextProps = {
  id: "username",
  type: "text",
  label: "Enter your username",
  placeholder: "john.smith",
  constName: "username",
  component: TextsTypeInterface,
  comments: BasicComments
};
const configEmailProps = {
  id: "email",
  type: "email",
  label: "Enter your email",
  placeholder: "john.smith@gmail.com",
  constName: "email",
  component: TextsTypeInterface,
  comments: BasicComments
};
const configTelProps = {
  id: "phone",
  type: "tel",
  label: "Enter your phone number",
  placeholder: "+39 12345678",
  constName: "phone",
  component: TextsTypeInterface,
  comments: BasicComments
};
const configUrlProps = {
  id: "website",
  type: "url",
  label: "Enter your website url",
  placeholder: "mywebsite.com",
  constName: "website",
  component: TextsTypeInterface,
  comments: BasicComments
};
const configPswProps = {
  id: "password",
  type: "password",
  label: "Enter your password",
  placeholder: "myStr0ngPassw0rd!",
  constName: "password",
  component: TextsTypeInterface,
  comments: BasicComments
};
const configNumberProps = {
  id: "age",
  type: "number",
  label: "Enter your age",
  placeholder: "43",
  constName: "age",
  min: 21,
  max: 67,
  step: 1,
  interfaceType: "number",
  component: NumbersTypeInterface,
  comments: BasicNumComments
};
const configDateProps = {
  id: "birthday",
  type: "date",
  label: "When is your birthday?",
  placeholder: "1980-01-01",
  constName: "birthday",
  min: "1920-01-01",
  max: "1990-01-01",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments
};
const configTimeProps = {
  id: "time",
  type: "time",
  label: "What time is it?",
  placeholder: "09:00",
  constName: "time",
  min: "06:00",
  max: "20:00",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments
};
const configDateTimeProps = {
  id: "leave",
  type: "datetime-local",
  label: "When do you want to leave?",
  placeholder: "2028-01-01T00:00",
  constName: "leave",
  min: "2027-01-01T09:00",
  max: "2030-01-01T20:30",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments
};
const configRadioProps = {
  type: "radio",
  component: GroupsTypeInterface,
  comments: GroupsComments
};
const configCheckboxProps = {
  type: "checkbox",
  component: GroupsTypeInterface,
  comments: GroupsComments,
  requiredGroups: "// Optional: true (native) only for single checkbox. Multiple options need custom logic"
};
const configSelectProps = {
  component: SelectsInterface,
  comments: SelectsComments,
  requiredGroups: "// Optional: true to require one selection from the group (native)"
};
const configTextareaProps = {
  id: "message",
  type: "textarea",
  label: "Your message",
  placeholder: "Dear John, hello",
  constName: "message",
  component: TextareaInterface,
  comments: TextareasComments
};
function Interface({ props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramon__panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__ide ramon__idePanel ramon__marginLeft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      props.component,
      {
        id: props.id,
        type: props.type,
        label: props.label,
        placeholder: props.placeholder,
        constName: props.constName,
        min: props?.min,
        max: props?.max,
        step: props?.step
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      props.comments,
      {
        type: props.interfaceType,
        requiredGroups: props.requiredGroups
      }
    )
  ] });
}
function Configurations() {
  const [activeTab, setActiveTab] = useState("text");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramon__tabContainer", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ramon__tabMenu", children: validTypes.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `ramon__tabBtn ${activeTab === name ? "ramon__active" : ""}`,
        onClick: () => setActiveTab(name),
        children: name.toUpperCase()
      },
      name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramon__tabContent", children: [
      activeTab === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configTextProps }),
      activeTab === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configEmailProps }),
      activeTab === "tel" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configTelProps }),
      activeTab === "url" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configUrlProps }),
      activeTab === "password" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configPswProps }),
      activeTab === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configNumberProps }),
      activeTab === "date" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configDateProps }),
      activeTab === "time" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configTimeProps }),
      activeTab === "datetime-local" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configDateTimeProps }),
      activeTab === "radio" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configRadioProps }),
      activeTab === "checkbox" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configCheckboxProps }),
      activeTab === "select" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configSelectProps }),
      activeTab === "textarea" && /* @__PURE__ */ jsxRuntimeExports.jsx(Interface, { props: configTextareaProps })
    ] })
  ] });
}
function Handlers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "submitHandler" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "e" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "e." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "preventDefault()" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "myData" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRInew", children: "new" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "FormData" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "current" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: ")" }),
    ";",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    "\n",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "resetHandler" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "current." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "reset()" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "resets." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "resetAll()" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    "\n",
    "\n"
  ] });
}
function Form() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Handlers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<form` }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `{` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "submitHandler" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<button>` }),
    "send",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</button>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<button` }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "onClick" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `{` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "resetHandler" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `}>` }),
    "reset",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</button>` }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</form>` })
  ] });
}
function Hook() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ",    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: text, date, datetime-local, email, number, password, tel, time, url" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "groups" }),
    ",    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: radio and checkbox" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "selects" }),
    ",   ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: select" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "textareas" }),
    ", ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Contains the following input types: textarea" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "resets" }),
    "     ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Contains the functions resetAll and resetOne" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    "  = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "useRamonForms" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "objConfig" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" })
  ] });
}
function FakeCheckbox() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fakeCheckbox" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "name: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"fakeCheckbox"' }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"checkbox"' }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" })
  ] });
}
function FakeCheckboxRender() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "CheckboxInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "groups" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "fakeCheckbox" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` })
  ] });
}
function ConditionalForm() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<form` }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "ref" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "formRef" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "onSubmit" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `{` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "handler" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "TextInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "username" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "email" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "state" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "value" }),
    " !== ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '""' }),
    " && ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "(" }),
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "EmailInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmEmail" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: ")" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIcomponents", children: "PasswordInput" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIattribute", children: "dataField" }),
    "=",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "fields" }),
    ".",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "confirmPassword" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `/>` }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `<button>` }),
    "send",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</button>` }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: `</form>` })
  ] });
}
function Validation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "validateUsername" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "(" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "value" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: ")" }),
    " ",
    "=>",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "// Your logic here: e.g., length check or regex" }),
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "isValid" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "value.length" }),
    " ",
    "<",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "50" }),
    ";",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIreturn", children: "return" }),
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "isValid" }),
    " ? ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"success" ' }),
    ": ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIstrings", children: '"Username too long"' }),
    ";",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "PRIparentheses", children: [
      "\n",
      "\n",
      "// updated value in: fields.username.state.value ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "// updated return in: fields.username.returns ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "// the returns object has for key: onChange, onBlur, onFocus and onKeyDown"
    ] })
  ] });
}
function Sync() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "The purpose of this library is to let you design any type of form while keeping your components clean and organized, without sacrificing performance or giving up any of React's native features.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No matter how complex your form is or how many controlled inputs you render" }),
      ": as long as you stay within the browser's limits, your inputs will never lag."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Keeping your component organized" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "Regarding your file system organization, there are no constraints. You are, of course, free to manage it as you see fit; however, I’d like to suggest a structure below that will not only keep your components clean and organized, but also help you manage your files intuitively and easily.",
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileSystem, {}),
      "This way,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: 'you can keep the files containing all the configuration objects for a specific form in the "configs" folder, while storing the functions written for different input types in the "funcs" folder' }),
      '. By giving these files the same name as the form (for example, "signup.js"), it will be extremely easy to find everything you need for any future updates.'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Using the hook" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: `Once you've decided on your file system organization, simply create an array containing all your configuration objects by importing them from the "configs" folder (the order in which you insert them is irrelevant); for example:` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__ide", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigArray, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Be precise with your configuration keys" }),
      "; the engine expects exactly configArray, isAsync, and i18n. If you misspell configArray, the system will catch the error and show you a generic alert.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "However, since the other two keys are optional, I can't help you if you get them wrong" }),
      ": the orchestrator will simply ignore the misspelled key and fall back to its default internal values without warning.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Having clarified this, all you have to do is pass objConfig as a parameter to the hook:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hook, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "To use the reset functions, you'll need to wrap them in a handler to integrate them with your UI.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "The resetAll function can be called as-is and requires no parameters.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "In contrast, the resetOne function requires a single string parameter: the id of the specific field you wish to reset.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "I recommend attaching a ref to the entire form (as shown in the following example).",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "This way, if your form contains a mix of controlled and uncontrolled inputs, you can achieve a complete reset" }) }),
      ":",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "use the native browser function formRef.current.reset() to clear uncontrolled inputs, while the resetAll() function will handle resetting the React states."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Rendering the inputs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: 'To render the inputs, simply import the relevant components from the library; you can arrange them as you see fit and apply conditional logic. Keep in mind that, just as you would in React, you need a reactive state to leverage conditional rendering. To achieve this, you must set the "onChange" key in the configuration object to either true (if no validation logic is required) or to a function:' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Form, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "You are not required to attach a ref to the entire form, but I highly recommend doing so for two main reasons" }),
      ": mass resets and the submission process. Regarding resets even though you could handle every single input as controlled without any lag, it is still preferable to use a granular approach, employing controlled inputs only where strictly necessary.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "In this scenario,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "you will have a mix of controlled and uncontrolled inputs" }),
      "; by using a form ref, you can easily reset the entire form using the browser's native Reset API. Regarding submission",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "it is best practice to re-validate your data from scratch before sending it" }),
      ", rather than relying solely on real-time error tracking (which is meant only for providing immediate user feedback). While you could easily write a recursive function to access the returns values from your states,",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "my advice is to use the browser API to collect the data and repeat the entire validation process before the final submission" }),
      ".",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "As for the rest, the rules to follow are very straightforward, and I will summarize them for you below:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "1. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: 'The "dataField" prop is mandatory and binding' }),
      "; you cannot change its name, and if you forget to pass it to the components, they will not be able to render."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "2.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Components (TextInput, EmailInput, etc.) must be imported from the library" }),
      '. They simply follow standard HTML markup naming: use the type you defined in your configuration object plus the "Input" suffix (remember to use PascalCase, for example: "NumberInput").'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "3. The hook returns objects that each contain three keys (config, state, handlers).",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Use the input id set in your configuration object to access that specific component" }),
      " ",
      '(for example: "fields.username").'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Configuration object boilerplate" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "Take a close look at the structure of the configuration objects below: you will notice that all the keys and naming conventions follow standard HTML. There is nothing new or different to learn, if you know HTML writing these configuration objects will be extremely intuitive." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Configurations, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "In any case, if you make a mistake while structuring a configuration object, it's not the end of the world. The hook will simply display a box (instead of the input you were trying to render) listing the errors you made and a brief explanation of how to fix them. In fact, I'll go even further:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
        "don't waste time studying how configuration objects are structured;",
        " "
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "instead, create them intentionally malformed" }),
      '. My advice is this: if you want to try rendering a checkbox, for example, import the "CheckboxInput" component and purposely create a malformed object, simply by doing this:'
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FakeCheckbox, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "And then, of course, include it in your JSX:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FakeCheckboxRender, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This will render the error on your screen along with a button that, when clicked, provides a boilerplate configuration object (including comments) ready to be copied and pasted" }),
      ". Just remember that for radios and checkboxes, everything revolves around the name attribute rather than the id, since we follow standard HTML (as mentioned before).",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "For everything else, you already know what to do" }),
      ". Want to change the input design? Use the IDs and handle it via CSS. Need a full form reset? You can use the browser's native method if you've attached a ref to the form (formRef.current.reset()) or just go with a good old, brutal page refresh."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "ramon__h2", children: "Accessing state and returns values" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p", children: "As for accessing the values of controlled components, simply call them using standard JS syntax; for example, to conditionally show certain fields, you can do it like this:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionalForm, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      'Similarly, to access the return values of your validation functions, you can use "',
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "fields.username.returns.onChange" }),
      '" (or onBlur, or any other event you are working with).',
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "If you need functions to handle the supported events (onChange, onBlur, onFocus, and onKeyDown), you just have to map them in the configuration object; they will automatically receive the updated state value, along with any specific return value you have defined within your validation logic:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Validation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "or whatever other validation logic you might need.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "One thing to keep in mind:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "the configArray should remain static during the component's lifecycle to preserve the deterministic alignment of the engine" }),
      ".",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "The only exceptions are when you need to fetch configuration objects asynchronously or handle i18n (language changes)" }),
      ". For these scenarios, you'll find a dedicated, simple workflow explained in the specific tabs of this documentation.The only case where configArray can be managed dynamically is if you need to fetch configuration objects; in that case, you'll just need to follow a couple of extra small steps, nothing complicated. So, what’s next? If you want one last piece of advice, do this: in the JSX where you are rendering the starter kit, right above that line, create your first form. Play around with it, make mistakes, and copy the configuration objects you find in the console. This way, you’ll see firsthand how simple it is to design a form with ramon-form-sdude."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ramon__p" })
  ] });
}
function UiSnippet() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__ide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "const" }),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "username" }),
    " = ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "{" }),
    " ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "config: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "id: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "strings", children: '"username"' }),
    ",",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "type: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "strings", children: '"text"' }),
    ",",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "placeholder: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "strings", children: '"john.smith"' }),
    ",",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "label: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "strings", children: '"Enter your username"' }),
    ",",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "required: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "true" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "state: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "value: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIvar", children: "yourState" }),
    ",",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "handlers: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "{" }),
    " ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIfunc", children: "onChange: func" }),
    ", ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onBlur: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onKeyDown: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    "    ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIsub", children: "onFocus: " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIdeclare", children: "false" }),
    ", ",
    "\n",
    "  ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRImarkup", children: "}" }),
    ", ",
    "\n",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "PRIparentheses", children: "}" }),
    " ",
    "\n"
  ] });
}
function UiMode() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "As explained in the synchronous configuration tab, one of the main advantages of using the hook is the ability to create complex and heavy forms while maintaining high order within the component, all without having to manage states yourself. However, this does not mean you cannot use the input rendering components (TextInput, EmailInput, etc.) as simple UI components.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "In this case, the configuration objects you create can no longer be flat" }),
      "; they must mirror the shape of the objects returned by the hook (as shown in the snippet below).",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "Most importantly, you will lose the error-tracking tools" }) }),
      ". This means, for example, that if you create two objects with colliding IDs, your form will stop working as expected, and you will no longer have the tool that precisely indicates the nature and location of the error.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "You might still want to use the UI components to avoid rewriting JSX every time or to handle dynamic form creation while maintaining excellent performance.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "Below is a simple example of how to structure your configuration objects for this case" }),
      ", though a simple console.log is enough to analyze the structure of the configuration object that the various components receive."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UiSnippet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "ramon__p", children: [
      "Even in this case, the only mandatory fields are those related to id and type;",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("u", { children: "all other fields remain optional" }) }),
      ", just as when you use the hook."
    ] })
  ] });
}
function ViewManager({ toggle, page, setToggle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramon__minimize", onClick: () => setToggle(!toggle), children: [
      toggle ? "HIDE" : "SHOW",
      " STARTER KIT"
    ] }),
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: page === "sync" && /* @__PURE__ */ jsxRuntimeExports.jsx(Sync, {}) }),
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: page === "async" && /* @__PURE__ */ jsxRuntimeExports.jsx(AsyncMode, {}) }),
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: page === "i18n" && /* @__PURE__ */ jsxRuntimeExports.jsx(I18n, {}) }),
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: page === "uiMode" && /* @__PURE__ */ jsxRuntimeExports.jsx(UiMode, {}) }),
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: page === "doc" && /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}) })
  ] });
}
const styles = `

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
function StarterKit() {
  const [toggle, setToggle] = useState(true);
  const [page, setPage] = useState("sync");
  const pageArray = ["sync", "async", "i18n", "uiMode", "doc"];
  const titlesArray = [
    "Synchronous configuration",
    "Asynchronous configuration",
    "I18n",
    "Ui mode: standalone",
    "How it works"
  ];
  useEffect(() => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    return () => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (s) => s !== sheet
      );
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramonContainer", children: [
    toggle && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ramon__starterKit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "ramon__h1", children: "Thank you for choosing ramon-form-sdude!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ramon__pagesContainer", children: pageArray.map((p, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `ramon__pages ${page === p ? "ramon__activePage" : ""}`,
          onClick: () => setPage(p),
          children: titlesArray[index]
        },
        p
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ViewManager, { page, toggle, setToggle })
  ] });
}
const version = "0.0.1";
export {
  CheckboxInput,
  DateInput,
  DateTimeInput,
  EmailInput,
  NumberInput,
  PasswordInput,
  RadioInput,
  SelectInput,
  StarterKit,
  TelInput,
  TextInput,
  TextareaInput,
  TimeInput,
  UrlInput,
  useRamonForms as useRamonForm,
  version
};
//# sourceMappingURL=ramon-form-sdude.es.js.map
