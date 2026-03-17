import { proTips } from "./proTips";
import { timeBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputTimeDoc = () => `
${consoleRendering(timeBoilerplate, "myTimeField", "fields")}
${proTips()}
`;

export default inputTimeDoc;
