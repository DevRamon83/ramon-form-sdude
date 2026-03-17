import { fieldType, groupType, pseudoFieldType } from "../constants/validTypes";
import { stringCheck } from "../guards/atomicGuards";
import { basicParser } from "./basicParser";
import { groupsParser } from "./groupsParser";
import { numParser } from "./numParsers";
import { selectsParser } from "./selectsParser";
import { textareaParser } from "./textareaParser";

/**
 * SCHEMA ROUTING LAYER (Dispatch Parser)
 *
 * This module acts as a Type-Safe Router for the configuration schema.
 * It identifies the input type and dispatches it to the specialized parser
 * responsible for that specific data structure (Basic, Groups, Selects, etc.).
 *
 */

/** @internal - Maps raw input types to internal category logic */
const categoryDefiner = (type) => {
  if (type === "select") return "selects";
  if (type === "textarea") return "textareas";
  if (groupType.includes(type)) return "groups";
  if (pseudoFieldType.includes(type)) return "fieldsNum";
  if (fieldType.includes(type)) return "fieldsText";
  return "invalid";
};

/** @internal - Resolves unique identifiers with fallback to name property */
const idDefiner = (element) => {
  if (element.id === "invalid") return "forbidden";
  if (element.name === "invalid") return "forbidden";
  const idFallback = element.id ? element.id : element.name;
  if (stringCheck(idFallback, true)) return "invalid";
  return idFallback;
};

/** @internal - Tracks nested IDs within group-based inputs (Radio/Checkbox) */
const groupTracker = (checkers, element, index) => {
  const { ensureId, coords } = checkers;
  const ids = element.options ? element.options.ids : [];

  for (let i = 0; i < ids.length; i++) {
    const isDuplicate = ensureId.has(ids[i]);
    ensureId.add(ids[i]);
    isDuplicate &&
      coords.push({
        category: "groups",
        position: index,
        array: i,
        id: ids[i],
        nidificate: true,
      });
  }
};

/** @internal - Normalizes category names for SSOT store mapping */
const fallbackCategory = (category) => {
  const key = category.replace("Num", "");
  return key.replace("Text", "");
};

/** @internal - Orchestrates specialized parsing based on identified category */
const categoryHandler = (cat, element, customLogic, position, checkers) => {
  switch (cat) {
    case "fieldsText":
      basicParser(element, customLogic, "fields", position);
      break;
    case "fieldsNum":
      basicParser(element, customLogic, "fields", position);
      numParser(element, customLogic.fieldsLogic);
      break;
    case "groups":
      groupsParser(element, customLogic, position);
      groupTracker(checkers, element, position);
      break;
    case "selects":
      basicParser(element, customLogic, "selects", position);
      selectsParser(element, customLogic.selectsLogic);
      break;
    case "textareas":
      basicParser(element, customLogic, "textareas", position);
      textareaParser(element, customLogic.textareasLogic);
      break;
    default:
      break;
  }
};

/**
 * Main dispatcher: Validates, tracks collisions, and routes elements to parsers.
 */
export const dispatchParser = (element, customLogic, position, checkers) => {
  const { ensureId, SSOTS, coords } = checkers;

  const type = element.type ? element.type.toLowerCase() : "invalid";

  const category = categoryDefiner(type);

  // Unsupported type: falling back to standard fields.
  // basicParser will handle the error reporting.
  if (category === "invalid") {
    basicParser(element, customLogic, "fields", position);
    return;
  }

  // Normalize category for SSOT mapping while keeping specialized parsing logic.
  // Both 'fieldsNum' and 'fieldsText' map to the same 'fieldsSSOT' store.
  const ssotsKey = fallbackCategory(category) + "SSOT";
  const id = idDefiner(element);
  SSOTS[ssotsKey].push(id);
  const isDuplicate = ensureId.has(id);
  ensureId.add(id);

  if (id !== "invalid" && isDuplicate) {
    const rightCategory = fallbackCategory(category);
    coords.push({ category: rightCategory, position, id, nidificate: false });
  }

  categoryHandler(category, element, customLogic, position, checkers);
};
