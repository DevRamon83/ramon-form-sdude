(function(u,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],h):(u=typeof globalThis<"u"?globalThis:u||self,h(u.RamonFormSDUDE={},u.React))})(this,(function(u,h){"use strict";var Y={exports:{}},U={};var H;function oe(){if(H)return U;H=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(r,l,c){var p=null;if(c!==void 0&&(p=""+c),l.key!==void 0&&(p=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:e,type:r,key:p,ref:l!==void 0?l:null,props:c}}return U.Fragment=o,U.jsx=s,U.jsxs=s,U}var M={};var K;function re(){return K||(K=1,process.env.NODE_ENV!=="production"&&(function(){function e(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===We?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case C:return"StrictMode";case Fe:return"Suspense";case Be:return"SuspenseList";case Le:return"Activity"}if(typeof n=="object")switch(typeof n.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),n.$$typeof){case k:return"Portal";case _:return n.displayName||"Context";case A:return(n._context.displayName||"Context")+".Consumer";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ge:return i=n.displayName||null,i!==null?i:e(n.type)||"Memo";case F:i=n._payload,n=n._init;try{return e(n(i))}catch{}}return null}function o(n){return""+n}function s(n){try{o(n);var i=!1}catch{i=!0}if(i){i=console;var a=i.error,d=typeof Symbol=="function"&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object";return a.call(i,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",d),o(n)}}function r(n){if(n===E)return"<>";if(typeof n=="object"&&n!==null&&n.$$typeof===F)return"<...>";try{var i=e(n);return i?"<"+i+">":"<...>"}catch{return"<...>"}}function l(){var n=B.A;return n===null?null:n.getOwner()}function c(){return Error("react-stack-top-frame")}function p(n){if(X.call(n,"key")){var i=Object.getOwnPropertyDescriptor(n,"key").get;if(i&&i.isReactWarning)return!1}return n.key!==void 0}function m(n,i){function a(){Q||(Q=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",i))}a.isReactWarning=!0,Object.defineProperty(n,"key",{get:a,configurable:!0})}function T(){var n=e(this.type);return Z[n]||(Z[n]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),n=this.props.ref,n!==void 0?n:null}function b(n,i,a,d,q,L){var f=a.ref;return n={$$typeof:N,type:n,key:i,props:a,_owner:d},(f!==void 0?f:null)!==null?Object.defineProperty(n,"ref",{enumerable:!1,get:T}):Object.defineProperty(n,"ref",{enumerable:!1,value:null}),n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(n,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(n,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:q}),Object.defineProperty(n,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:L}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n}function x(n,i,a,d,q,L){var f=i.children;if(f!==void 0)if(d)if(He(f)){for(d=0;d<f.length;d++)y(f[d]);Object.freeze&&Object.freeze(f)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else y(f);if(X.call(i,"key")){f=e(n);var P=Object.keys(i).filter(function(Ke){return Ke!=="key"});d=0<P.length?"{key: someKey, "+P.join(": ..., ")+": ...}":"{key: someKey}",te[f+d]||(P=0<P.length?"{"+P.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,d,f,P,f),te[f+d]=!0)}if(f=null,a!==void 0&&(s(a),f=""+a),p(i)&&(s(i.key),f=""+i.key),"key"in i){a={};for(var W in i)W!=="key"&&(a[W]=i[W])}else a=i;return f&&m(a,typeof n=="function"?n.displayName||n.name||"Unknown":n),b(n,f,a,l(),q,L)}function y(n){g(n)?n._store&&(n._store.validated=1):typeof n=="object"&&n!==null&&n.$$typeof===F&&(n._payload.status==="fulfilled"?g(n._payload.value)&&n._payload.value._store&&(n._payload.value._store.validated=1):n._store&&(n._store.validated=1))}function g(n){return typeof n=="object"&&n!==null&&n.$$typeof===N}var I=h,N=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),_=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Le=Symbol.for("react.activity"),We=Symbol.for("react.client.reference"),B=I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=Object.prototype.hasOwnProperty,He=Array.isArray,G=console.createTask?console.createTask:function(){return null};I={react_stack_bottom_frame:function(n){return n()}};var Q,Z={},ee=I.react_stack_bottom_frame.bind(I,c)(),ne=G(r(c)),te={};M.Fragment=E,M.jsx=function(n,i,a){var d=1e4>B.recentlyCreatedOwnerStacks++;return x(n,i,a,!1,d?Error("react-stack-top-frame"):ee,d?G(r(n)):ne)},M.jsxs=function(n,i,a){var d=1e4>B.recentlyCreatedOwnerStacks++;return x(n,i,a,!0,d?Error("react-stack-top-frame"):ee,d?G(r(n)):ne)}})()),M}var z;function se(){return z||(z=1,process.env.NODE_ENV==="production"?Y.exports=oe():Y.exports=re()),Y.exports}var t=se();const V=({dataField:e})=>{const o=e.state||{},s=e.handlers||{},{options:r,required:l,type:c,title:p,name:m}=e.config,{value:T}=o,{onChange:b,onBlur:x,onFocus:y,onKeyDown:g}=s,I=b||(()=>{}),N=x||(()=>{}),k=y||(()=>{}),E=g||(()=>{}),S=c==="checkbox"&&r.ids.length===1?l:null,A=c==="radio"?l:S;return t.jsxs(t.Fragment,{children:[p&&t.jsx("div",{className:"",children:p}),r.ids.map((_,$)=>t.jsxs("div",{children:[t.jsx("input",{type:c,id:_,required:A,name:m,checked:c==="checkbox"?T[_]:T===_,onBlur:N,onFocus:k,onKeyDown:E,onChange:I,value:_}),t.jsx("label",{htmlFor:_,children:r.labels[$]})]},_))]})},ie=`
  💡 MULTIPLE INPUTS: 
  
    Add all your configuration objects to the "logicArray" before calling the hook. 
    Example: const logicArray = [username, password, email];
     `,le=`
  💡 DYNAMIC RENDERING: 
  
     Use Object.values(fields).map() in your JSX 
     to render the entire form automatically without manual placement.
     
     {Object.values(fields).map((field, index) => (
        <TextInput key={index} dataField={field} />
     ))}
     `,ce=`
  📊 DATA ACCESS: HOW TO RETRIEVE YOUR STATES
  
  To access the synchronized state of any 'controlled' input, 
  use the following path pattern:
  [category].[id].states.value
  
  Categories available: fields, groups, selects, textareas.

  Example:
  const { fields, groups, selects, textareas } = useRamonForms(logicArray);
  
  // Accessing the real-time value of the 'username' field:
  console.log(fields.username.states.value); 
`,j=()=>{console.group("%c 💡 SDUDE PROFESSIONAL TIPS ","background: #FF9800; color: white; padding: 2px; border-radius: 2px;"),console.groupCollapsed("%c1) Handling Multiple Inputs","color: #2196F3; font-weight: bold;"),console.log(`%c${ie}`,"color: #555; font-family: monospace;"),console.groupEnd(),console.groupCollapsed("%c2) Dynamic Form Generation (Mapping)","color: #2196F3; font-weight: bold;"),console.log(`%c${le}`,"color: #555; font-family: monospace;"),console.groupEnd(),console.groupCollapsed("%c3) Data Access & State Retrieval","color: #2196F3; font-weight: bold;"),console.log(`%c${ce}`,"color: #555; font-family: monospace;"),console.groupEnd(),console.groupEnd()},v=`
       required: true,      // Optional: Set to 'true' to make this field mandatory (remove if not needed)
       onChange: yourFunc,  // Optional: Event handler function, set to 'true' for a controlled input, or remove/set to 'false' for uncontrolled
       onBlur: yourFunc,    // Optional: Event handler function (remove if not needed)
       onKeyDown: yourFunc, // Optional: Event handler function (remove if not needed)
       onFocus: yourFunc,   // Optional: Event handler function (remove if not needed)
`,ae=`{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "checkbox",                         // Required: Defines a checkbox input
      title: "What are your hobbies?",          // Optional: The title of your checkbox
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${v}
      }`,ue=`{
       id: "myDateField",           // Required: This ID becomes the key in the 'fields' object
       type: "date",                // Required: Defines a date input
       label: "Date",               // Optional: UI label (remove if not needed)
       min: "2024-01-01",           // Optional: Format YYYY-MM-DD
       max: "2025-12-31",           // Optional: Format YYYY-MM-DD
       step: 1,                     // Optional: Interval in days (e.g., "7" for weekly) ${v}
       }`,pe=`{
       id: "myDateTimeField",       // Required: This ID becomes the key in the 'fields' object
       type: "datetime-local",      // Required: Defines a datetime-local input
       label: "Date and Time",      // Optional: UI label (remove if not needed)
       min: "2024-01-01T00:00",     // Format: YYYY-MM-DDTHH:mm (The 'T' is mandatory)
       max: "2025-12-31T23:59",     // Format: YYYY-MM-DDTHH:mm
       step: 60,                    // Unit: SECONDS. 60 = 1 minute (default), 3600 = 1 hour, 1 = allow seconds ${v}
       }`,me=`{
       id: "myEmailField",                // Required: This ID becomes the key in the 'fields' object
       type: "email",                     // Required: Defines an email input
       label: "Email",                    // Optional: UI label (remove if not needed)
       placeholder: "example@mail.com",   // Optional: Input placeholder ${v}
       }`,de=`{
       id: "myNumField",                // Required: This ID becomes the key in the 'fields' object
       type: "number",                  // Required: Defines a number input
       label: "Choose a number",        // Optional: UI label (remove if not needed)
       placeholder: "Enter a number",   // Optional: Input placeholder
       min: 0,                          // Optional: Minimum value
       max: 100,                        // Optional: Maximum value
       step: 1,                         // Optional: Interval (e.g., "0.01" for decimals) ${v}
       }`,fe=`{
       id: "myPasswordField",            // Required: This ID becomes the key in the 'fields' object
       type: "password",                 // Required: Defines a password input
       label: "Your Password",           // Optional: UI label
       placeholder: "Enter password",    // Optional: Input placeholder ${v}
       }`,he=`{
      options: {
      ids: ["music", "movie", "fitness"],       // required: Ids must be unique
      labels: ["music", "movie", "fitness"],    // required: Labels and ids must be aligned
        },
      type: "radio",                            // Required: Defines a radio input
      title: "What are your hobbies?",          // Optional: The title of your radio
      name: "hobbies",                          // Required: This name becomes the key in the 'groups' object ${v}
      }`,be=`{
    id: "myAccount",                            // Required: This ID becomes the key in the 'selects' object
    type: "select",                             // Required: Defines a select input      
    options: ["teacher", "student"],            // Required: Must be unique among themselves
    labels: ["teacher", "student"],             // Required: Labels and options must be aligned
    label: "Choose account type",               // Optional: UI label (remove if not needed) ${v}
    }`,xe=`{
       id: "myTelField",                 // Required: This ID becomes the key in the 'fields' object
       type: "tel",                      // Required: Defines a tel input
       label: "Your phone number",       // Optional: UI label (remove if not needed)
       placeholder: "+1 123 456 7890",   // Optional: Input placeholder ${v}
       }`,ye=`{
       id: "myTextField",               // Required: This ID becomes the key in the 'fields' object
       type: "text",                    // Required: Defines a text input
       label: "Username",               // Optional: UI label (remove if not needed)
       placeholder: "Enter username",   // Optional: Input placeholder ${v}
       }`,ge=`{
       id: "myTextareaField",       // Required: This ID becomes the key in the 'textareas' object
       type: "textarea",            // Required: Defines a textarea input
       label: "Write a message",    // Optional: UI label (remove if not needed)
       placeholder: "message",      // Optional: Input placeholder
       rows: 4,                     // Optional: Number of visible text lines
       cols: 50,                    // Optional: Number of average characters per line
       counterLabel: "Max Chars"    // Optional: UI label for counter
       maxChars: 500,               // Optional: Set a char limit and counter (Mutually exclusive with maxWords)
       maxWords: 100,               // Optional: Set a word limit and counter (Mutually exclusive with maxChars) ${v}
       }`,Te=`{
      id: "myTimeField",           // Required: This ID becomes the key in the 'fields' object
      type: "time",                // Required: Defines a time input
      label: "Time",               // Optional: UI label
      min: "09:00",                // Format: HH:mm (24-hour clock)
      max: "18:00",                // Format: HH:mm
      step: 60,                    // Unit: SECONDS. 60 = 1 min (default), 3600 = 1 hour, 1 = allow seconds ${v}
      }`,Ie=`{
       id: "myUrlField",                    // Required: This ID becomes the key in the 'fields' object
       type: "url",                         // Required: Defines a URL input
       label: "Your Website",               // Optional: UI label
       placeholder: "https://example.com",  // Optional: Input placeholder (example format) ${v}
      }`,je=e=>{switch(e){case"myTextField":return{title:"TEXT INPUT CONFIGURATION",input:"TextInput"};case"myRadioGroup":return{title:"RADIO INPUT CONFIGURATION",input:"RadioInput"};case"myCheckboxGroup":return{title:"CHECKBOX INPUT CONFIGURATION",input:"CheckboxInput"};case"myDatetimeField":return{title:"DATETIME-LOCAL INPUT CONFIGURATION",input:"DateTimeInput"};case"myEmailField":return{title:"EMAIL INPUT CONFIGURATION",input:"EmailInput"};case"myNumberField":return{title:"NUMBER INPUT CONFIGURATION",input:"NumberInput"};case"myPasswordField":return{title:"PASSWORD INPUT CONFIGURATION",input:"PasswordInput"};case"mySelect":return{title:"SELECT INPUT CONFIGURATION",input:"SelectInput"};case"myTelField":return{title:"TEL INPUT CONFIGURATION",input:"TelInput"};case"myTextarea":return{title:"TEXTAREA INPUT CONFIGURATION",input:"TextareaInput"};case"myDateField":return{title:"Date INPUT CONFIGURATION",input:"DateInput"};case"myUrlField":return{title:"URL INPUT CONFIGURATION",input:"UrlInput"};case"myTimeField":return{title:"TIME INPUT CONFIGURATION",input:"TimeInput"}}},R=(e,o,s)=>{const r=je(o);console.groupCollapsed(`%c 🚀 SDUDE QUICKSTART: ${r.title} `,"background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;");const l=`
  1) Create a "config.js" file in your project.
  2) Copy & Paste this boilerplate (adjust properties as needed):
            
     ${e}

  3) Group your objects into an array:
     const logicArray = [${o}];

  4) Initialize the Engine in your Component:
     const { ${s} } = useRamonForms(logicArray);

  5) Import and render the Component:
     <${r.input} dataField={ ${s}.${o}} />
  `;console.log(`%c${l}`,"color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;"),console.groupEnd()},J={checkbox:()=>`
${R(ae,"myCheckboxGroup","groups")}
${j()}
`,date:()=>`
${R(ue,"myDateField","fields")}
${j()}
`,"dateTime-local":()=>`
${R(pe,"myDatetimeField","fields")}
${j()}
`,email:()=>`
${R(me,"myEmailField","fields")}
${j()}
`,number:()=>`
${R(de,"myNumberField","fields")}
${j()}
`,password:()=>`
${R(fe,"myPasswordField","fields")}
${j()}
`,radio:()=>`
${R(he,"myRadioGroup","groups")}
${j()}
`,select:()=>`
${R(be,"mySelect","selects")}
${j()}
`,tel:()=>`
${R(xe,"myTelField","fields")}
${j()}
`,text:()=>`
${R(ye,"myTextField","fields")}
${j()}
`,textarea:()=>`
${R(ge,"myTextarea","textareas")}
${j()}
`,time:()=>`
${R(Te,"myTimeField","fields")}
${j()}
`,url:()=>`
${R(Ie,"myUrlField","fields")}
${j()}
`};function O({isAsync:e,dataField:o}){if(e)return;const s={border:"2px solid red",borderRadius:"5px",padding:"15px 25px 10px 25px",marginBottom:"20px"},r={backgroundColor:"black",display:"inline",color:"white",border:"1px solid black",padding:"5px 10px",margin:"0 5px 0 10px",fontWeight:"bold",borderRadius:"5px",cursor:"pointer"},l=c=>{c.preventDefault();const p=J.text;p()};return t.jsxs("div",{style:{...s},children:[t.jsx("p",{children:'"Invalid Component Call: Reference not found. Note: This type of error usually occurs in one of three cases:'}),t.jsxs("ol",{style:{textAlign:"left"},children:[t.jsxs("li",{children:[t.jsx("strong",{children:"ID Mismatch"}),": You are trying to call the input using a different ID than the one defined in your configuration object."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Incorrect Destructuring"}),": You are using the correct ID, but targeting the wrong logical group. For example, trying to render a select input using fields.myInput instead of selects.myInput."]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Invalid Type"}),`: You have assigned a non-existent type in the configuration object (e.g., a typo like type: 'selct' instead of 'select')."`]})]}),t.jsxs("p",{children:[t.jsxs("strong",{style:{color:"red"},children:[t.jsx("u",{children:"Need help with the configuration"}),"?"]}),t.jsx("span",{style:{...r},onClick:l,children:"Click here"}),"and check the console"]})]})}function ve({dataField:e}){const{id:o,type:s,name:r}=e.config,l=o||r,{callers:c,errorType:p}=e.errorData,m=c.length===1,T=m?"an error":"errors",b=m?"key":"keys",x="You sent an empty array configuration:",y=l==="noLogicArray",g={border:"2px solid red",borderRadius:"5px",padding:"15px 25px 10px 25px",marginBottom:"20px"},I={backgroundColor:"black",display:"inline",color:"white",border:"1px solid black",padding:"5px 10px",margin:"0 5px 0 10px",fontWeight:"bold",borderRadius:"5px",cursor:"pointer"},N=t.jsxs(t.Fragment,{children:["The configuration object for ",t.jsx("strong",{children:l.toUpperCase()})," ","input is invalid and contains ",T," in the following ",b,":"]}),k=E=>{E.preventDefault();const C=J[s];C()};return t.jsxs("div",{style:{...g},children:[y?x:N,t.jsx("ol",{style:{textAlign:"left"},children:c.map((E,C)=>t.jsxs("li",{children:[t.jsx("strong",{children:E.toUpperCase()}),": ",p[C]]},`${E}-${C}`))}),t.jsxs("p",{children:[t.jsxs("strong",{style:{color:"red"},children:[t.jsx("u",{children:"Need help with the configuration"}),"?"]}),t.jsx("span",{style:{...I},onClick:k,children:"Click here"}),"and check the console"]})]})}function D({component:e,dataField:o}){return o.error?t.jsx(ve,{dataField:o}):e}function Re({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(V,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}const w=({dataField:e,async:o})=>{const s=e.state||{},r=e.handlers||{},{id:l,label:c}=e.config,{value:p}=s,{onChange:m,onBlur:T,onFocus:b,onKeyDown:x}=r,y=m||(()=>{}),g=T||(()=>{}),I=b||(()=>{}),N=x||(()=>{}),k={required:e.config.required,type:e.config.type,placeholder:e.config.placeholder,id:e.config.id,name:e.config.id,min:e.config.min,max:e.config.max,step:e.config.step,autoComplete:e.config.autoComplete,onBlur:g,onFocus:I,onKeyDown:N};return m&&(k.onChange=y,k.value=p||""),e.error&&o?null:t.jsxs(t.Fragment,{children:[t.jsx("label",{htmlFor:l,children:c}),t.jsx("input",{...k})]})};function Oe({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function De({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Ee({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Ce({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function ke({dataField:e,isAsync:o,i18n:s}){return console.log("PasswordInput ",e?.state?.value),h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Ne({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(V,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}const we=({dataField:e})=>{const o=e.state||{},s=e.handlers||{},{options:r,id:l,labels:c,label:p,required:m}=e.config,{value:T}=o,{onChange:b,onBlur:x,onFocus:y,onKeyDown:g}=s,I=b||(()=>{}),C={required:m,name:l,id:l,onBlur:x||(()=>{}),onFocus:y||(()=>{}),onKeyDown:g||(()=>{})};return b&&(C.onChange=I,C.value=T||""),t.jsxs(t.Fragment,{children:[p&&t.jsx("label",{htmlFor:l,children:p}),t.jsx("select",{...C,children:r.map((S,A)=>t.jsx("option",{value:S,children:c[A]},S))})]})};function Ae({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(we,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Se({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function _e({label:e,value:o,max:s,charsType:r}){let l=null;return r?l=o.trim()===""?0:o.length:l=o.trim()===""?0:o.trim().split(/\s+/).length,t.jsxs("div",{className:"",children:[t.jsx("span",{children:e})," ",t.jsx("br",{}),t.jsxs("span",{children:[l," / ",s]})]})}function Pe({dataField:e}){const o=e.state||{},s=e.handlers||{},{id:r,counterLabel:l,maxChars:c,maxWords:p,label:m}=e.config,{value:T}=o,{onChange:b,onBlur:x,onFocus:y,onKeyDown:g}=s,I=b||(()=>{}),N=x||(()=>{}),k=y||(()=>{}),E=g||(()=>{}),C=c||p,S=c||!1,A={required:e.config.required,placeholder:e.config.placeholder,rows:e.config.rows,cols:e.config.cols,id:e.config.id,name:e.config.id,autoComplete:e.config.autoComplete,onBlur:N,onFocus:k,onKeyDown:E,spellCheck:!1,maxLength:c};return b&&(A.onChange=I,A.value=T||""),t.jsxs(t.Fragment,{children:[m&&t.jsx("label",{htmlFor:r,children:m}),t.jsx("textarea",{...A}),C&&t.jsx(_e,{max:c||p,value:T,label:l,charsType:S})]})}function Ue({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(Pe,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Me({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function Ye({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}function qe({dataField:e,isAsync:o,i18n:s}){return h.useMemo(()=>{const r=t.jsx(w,{dataField:e});return e?t.jsx(D,{component:r,dataField:e}):t.jsx(O,{isAsync:o})},[e?.state?.value,s])}const $e="0.0.1";u.CheckboxInput=Re,u.DateInput=Oe,u.DateTimeInput=De,u.EmailInput=Ee,u.NumberInput=Ce,u.PasswordInput=ke,u.RadioInput=Ne,u.SelectInput=Ae,u.TelInput=Se,u.TextInput=Me,u.TextareaInput=Ue,u.TimeInput=qe,u.UrlInput=Ye,u.version=$e,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})}));
