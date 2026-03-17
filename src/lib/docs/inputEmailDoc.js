import { proTips } from "./proTips";
import { emailBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputEmailDoc = () => `
${consoleRendering(emailBoilerplate, "myEmailField", "fields")}
${proTips()}
`;

export default inputEmailDoc;
