import { proTips } from "./proTips";
import { numberBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputNumberDoc = () => `
${consoleRendering(numberBoilerplate, "myNumberField", "fields")}
${proTips()}
`;

export default inputNumberDoc;
