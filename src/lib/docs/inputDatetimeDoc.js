import { proTips } from "./proTips";
import { dateTimeBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputDatetimeDoc = () => `
${consoleRendering(dateTimeBoilerplate, "myDatetimeField", "fields")}
${proTips()}
`;

export default inputDatetimeDoc;
