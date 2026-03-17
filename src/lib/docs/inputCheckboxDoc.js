import { proTips } from "./proTips";
import { checkboxBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputCheckboxDoc = () => `
${consoleRendering(checkboxBoilerplate, "myCheckboxGroup", "groups")}
${proTips()}
`;

export default inputCheckboxDoc;
