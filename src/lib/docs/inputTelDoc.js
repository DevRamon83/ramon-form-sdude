import { proTips } from "./proTips";
import { telBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputTelDoc = () => `
${consoleRendering(telBoilerplate, "myTelField", "fields")}
${proTips()}
`;

export default inputTelDoc;
