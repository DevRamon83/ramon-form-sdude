import { proTips } from "./proTips";
import { selectsBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputSelectDoc = () => `
${consoleRendering(selectsBoilerplate, "mySelect", "selects")}
${proTips()}
`;

export default inputSelectDoc;
