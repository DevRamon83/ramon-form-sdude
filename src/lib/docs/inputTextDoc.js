import { proTips } from "./proTips";
import { textBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputTextDoc = () => `
${consoleRendering(textBoilerplate, "myTextField", "fields")}
${proTips()}
`;

export default inputTextDoc;
