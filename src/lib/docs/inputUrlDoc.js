import { proTips } from "./proTips";
import { urlBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputUrlDoc = () => `
${consoleRendering(urlBoilerplate, "myUrlField", "fields")}
${proTips()}
`;

export default inputUrlDoc;
