import { requiredGuard } from "../guards/atomicGuards";
import { basicBlueprint } from "../blueprints/basicBlueprint";
import { handlersParser } from "./helpers/handlersParser";
import { optionsParser } from "./helpers/optionsParser";
import { stringProcessor, typeProcessor } from "./helpers/stringsParser";

/** @internal - 'name' is used here as the primary identifier instead of 'id' */
const nameHandler = (commons, name, logicObj, position) => {
  commons.mandatory = true;
  const invalidName = stringProcessor(
    name,
    logicObj.SSOT,
    "id",
    commons,
    position,
  );

  const nameFallback = invalidName ? "invalid" : name;
  commons.name = nameFallback;
};

/**
 * @param {object} element - Group configuration (Radio/Checkbox).
 * @param {object} customLogic - Central logic store.
 * @param {number} position - Index in the config array.
 */
export const groupsParser = (element, customLogic, position) => {
  const logicKey = "groupsLogic";
  const configKey = "groupsConfig";

  // Initialize the specific logic bucket for group-type inputs
  if (!customLogic[logicKey]) basicBlueprint(customLogic, logicKey, configKey);

  const name = element.name;
  const logicObj = customLogic[logicKey];

  // Pre-emptively align the errors array before pushing to SSOT
  logicObj.errors.push(false);

  // name has not been pushed to SSOT yet;
  // the next index corresponds to the current array length
  const index = logicObj.SSOT.length;

  const commonsOption = {
    options: element.options,
    customLogic,
    name,
    logicKey,
    index,
  };

  optionsParser(commonsOption);

  requiredGuard(logicObj, element, index);
  const commons = { logicObj, name, index };

  nameHandler(commons, name, logicObj, position);

  // Keep mandatory flag active to enforce type validation during processing
  typeProcessor(element.type, logicObj.types, "type", commons);

  commons.mandatory = false;
  stringProcessor(element.title, logicObj.titles, "title", commons);

  const SSOT = logicObj.SSOT;

  handlersParser(element, logicObj, element.name, SSOT);
};
