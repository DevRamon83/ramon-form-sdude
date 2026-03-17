import { proTips } from "./proTips";
import { dateBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputDateDoc = () => `
${consoleRendering(dateBoilerplate, "myDateField", "fields")}
${proTips()}
`;

export default inputDateDoc;
