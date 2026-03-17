import { populateObjConfig } from "./helpers";
import { buildSelectsConfig } from "./buildSelectConfig";
import { buildTextareasConfig } from "./buildTextareaConfig";

// Synthesizes the UI-ready configuration for standard text-based and specialized inputs.
export const buildBasicConfig = (logicObj, caller, id, index) => {
  const configKey = caller + "sConfig";
  const objConfig = populateObjConfig(logicObj, index, id, configKey);

  const required = logicObj.required[index];
  if (caller === "textarea") buildTextareasConfig(objConfig, logicObj, id);
  if (caller === "select")
    buildSelectsConfig(objConfig, logicObj, id, required);

  return { config: objConfig, state: {}, handlers: {} };
};
