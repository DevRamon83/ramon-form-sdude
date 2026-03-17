import { checkAndPopulate } from "./helpers";

// Specialized decorators for complex inputs
export const buildTextareasConfig = (objConfig, logicObj, id) => {
  const provider = logicObj.textareasConfig[id];
  checkAndPopulate(objConfig, "rows", provider.rows);
  checkAndPopulate(objConfig, "cols", provider.cols);
  checkAndPopulate(objConfig, "maxChars", provider.maxChars);
  checkAndPopulate(objConfig, "maxWords", provider.maxWords);
  checkAndPopulate(objConfig, "counterLabel", provider.counterLabel);
};
