import { proTips } from "./proTips";
import { radioBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputRadioDoc = () => `
${consoleRendering(radioBoilerplate, "myRadioGroup", "groups")}
${proTips()}
`;

export default inputRadioDoc;
