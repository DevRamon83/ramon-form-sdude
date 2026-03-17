import { proTips } from "./proTips";
import { pswBoilerplate } from "./boilerplates";
import { consoleRendering } from "./consoleRendering";

const inputPasswordDoc = () => `
${consoleRendering(pswBoilerplate, "myPasswordField", "fields")}
${proTips()}
`;

export default inputPasswordDoc;
