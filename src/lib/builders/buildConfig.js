import { buildBasicConfig } from "./buildBasicConfig";
import { buildGroupsConfig } from "./buildGroupsConfig";
import { configErrorHandler } from "./helpers";

/**
 * UI CONFIGURATION BUILDER
 *
 * This module is responsible for synthesizing the final UI-ready objects.
 * It maps the normalized logic arrays back into a structured format
 * consumable by React components.
 *
 * DESIGN CHOICE:
 * We enforce "Interface Consistency" by returning a standardized object
 * shape: { config, state, handlers }. This allows the UI layer to remain
 * agnostic of the underlying input complexity (Text, Radio, Select, etc.).
 */

/**
 * MAIN BUILDER ENGINE
 * Performs an O(n) iteration over the SSOT pointers to assemble
 * the final configuration dictionary.
 */

export const buildConfig = (logicObj, caller) => {
  const configObj = {};
  const SSOT = logicObj.SSOT;

  for (let i = 0; i < SSOT.length; i++) {
    const id = SSOT[i];
    const type = logicObj.types[i];

    if (type === "radio" || type === "checkbox") {
      configObj[id] = buildGroupsConfig(logicObj, id, i);
    } else {
      configObj[id] = buildBasicConfig(logicObj, caller, id, i);
    }

    if (logicObj.errors[i])
      configErrorHandler(logicObj.errors[i], configObj, id, logicObj, i);
  }

  return configObj;
};
