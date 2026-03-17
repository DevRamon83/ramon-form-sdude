import { defineConsoleConsts } from "./defineConsoleConsts";

export const consoleRendering = (boilerplate, input, bucket) => {
  const data = defineConsoleConsts(input);
  console.groupCollapsed(
    `%c 🚀 SDUDE QUICKSTART: ${data.title} `,
    "background: #2196F3; color: white; font-weight: bold; padding: 2px; border-radius: 2px;",
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
    "color: #333; font-family: 'Courier New', monospace; line-height: 1.5; font-size: 12px;",
  );

  console.groupEnd();
};
