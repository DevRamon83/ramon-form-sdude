import { initializeErrorData } from "../errors/errorHandlers";
import { requiredGuard } from "../guards/atomicGuards";
import { basicBlueprint } from "../blueprints/basicBlueprint";
import { handlersParser } from "./helpers/handlersParser";
import { stringsParser } from "./helpers/stringsParser";

/**
 * SCHEMA NORMALIZATION ENGINE (Basic Parser)
 *
 * This module flattens the user-provided configuration into parallel primitive arrays.
 *
 * DESIGN CHOICE:
 * Instead of storing a collection of heavy objects, we normalize data into separate
 * arrays (SSOT, labels, placeholders). This "Data-Oriented" approach ensures
 * high-speed cache-friendly iterations and simplifies the synchronization logic
 * for the UI projection layer.
 * Check the blueprint to understand how data structures are handled.
 */

/**
 * @param {object} element - The raw input configuration.
 * @param {object} customLogic - The central logic store being populated.
 * @param {string} key - Category key (e.g., 'fields', 'selects').
 * @param {number} position - Index in the original configuration array.
 */
export const basicParser = (element, customLogic, key, position) => {
  const logicKey = key + "Logic";
  const configKey = key + "Config";

  // Lazy initialization of the category blueprint (Fields, Textareas, etc.)
  if (!customLogic[logicKey]) basicBlueprint(customLogic, logicKey, configKey);
  const logicObj = customLogic[logicKey];

  // Pre-emptively align the errors array before pushing to SSOT
  logicObj.errors.push(false);
  initializeErrorData(logicObj);
  stringsParser(logicObj, element, position);
  const index = logicObj.SSOT.length - 1;
  requiredGuard(logicObj, element, index);

  const SSOT = logicObj.SSOT;
  const idFallback = SSOT[index] === "invalid" ? "invalid" : element.id;

  /**
   * EVENT REGISTRATION PIPELINE
   * We conditionally attach event handlers only if defined in the schema.
   * By using 'handlersDispatcher', we map functions to IDs and track
   * 'controlled' vs 'uncontrolled' indexes for targeted re-renders.
   */

  handlersParser(element, logicObj, idFallback, SSOT);
};
