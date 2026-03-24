import { buildConfig } from "./buildConfig";

/**
 * UI PROJECTION DISPATCHER
 *
 * This module acts as the final orchestrator for the UI configuration layer.
 * It maps the normalized "Custom Logic" into specialized UI-ready objects
 * (Fields, Groups, Selects, Textareas).
 *
 * DESIGN PRINCIPLE:
 * We use a conditional initialization pattern to ensure that the engine
 * only builds the necessary configuration buckets, minimizing memory overhead
 * during the initial boot phase.
 */

export const configDispatcher = (customLogic) => {
  if (customLogic === "invalid") {
    return {
      fields: {},
      groups: {},
      selects: {},
      textareas: {},
    };
  }

  const resets = {};
  const fields = customLogic.fieldsLogic
    ? buildConfig(customLogic.fieldsLogic, "field")
    : {};
  const groups = customLogic.groupsLogic
    ? buildConfig(customLogic.groupsLogic, "group")
    : {};
  const selects = customLogic.selectsLogic
    ? buildConfig(customLogic.selectsLogic, "select")
    : {};
  const textareas = customLogic.textareasLogic
    ? buildConfig(customLogic.textareasLogic, "textarea")
    : {};

  return {
    resets,
    fields,
    groups,
    selects,
    textareas,
  };
};
