import { proTips } from "./proTips";
import { textareaBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputTextareaDoc = () => `
${consoleRendering(textareaBoilerplate, "myTextarea", "textareas")}
${proTips()}
`;

export default inputTextareaDoc;
