import { basicError, funcsError } from "../errors/errorHandlers";
import { notAString } from "../errors/errorMessages";
import { handlersDispatcher } from "../parsers/helpers/handlersDispatcher";

// Ensures controlled inputs (Radio, Checkbox, specific Textareas)
// always pass the function check to maintain internal state sync.
export const funcCheck = (datum, element, caller) => {
  const type = element.type;
  const validBoolean = caller === "onChange" && typeof datum === "boolean";

  let isValidType = typeof datum === "function" || validBoolean;

  if (type === "textarea") {
    const isControlled = element.maxWords || element.maxChars;
    return isControlled ? true : isValidType;
  }

  const controlledTypes = type === "checkbox" || type === "radio";
  if (controlledTypes && caller === "onChange") return true;

  return isValidType;
};

export const disalignmentCheck = (firsArray, secondArray) => {
  if (!firsArray || !secondArray) return false;
  return firsArray.length === secondArray.length;
};

export const numChecker = (num, logicObj, caller) => {
  if (typeof num !== "number" || Number.isNaN(num)) {
    const index = logicObj.SSOT.length - 1;
    const errorMsg = "must be a number";
    basicError(logicObj, caller, errorMsg, index, "a number");
    return "invalid";
  }

  return num;
};

// Force-clears the array and pushes 'invalid' to prevent
// misaligned indexes when an empty string is detected.
const noEmptyStrings = (isString, msg, element, string) => {
  const isEmpty = isString && string.trim() === "";

  if (isEmpty) {
    const index = element.length - 1;
    element.splice(0, element.length);
    element.push("invalid");
    return `You cannot use an empty string at index ${index}`;
  }

  return msg;
};

export const pushTheString = (string, element, caller) => {
  const isString = typeof string === "string";
  const pushThis = isString ? string : null;
  element.push(pushThis);
  let msg = isString ? null : notAString(string, `${caller} array`);
  msg = noEmptyStrings(isString, msg, element, string);

  return msg;
};

export const duplicatedSelectOptions = (duplicates, handlerArgs) => {
  if (duplicates.length > 0) {
    const list = duplicates.join(" - ");
    const grammar = duplicates.length === 1 ? "is" : "are";
    const msg = `${list} ${grammar} duplicated`;
    const { logicObj, id, caller } = handlerArgs;
    selectsError(msg, logicObj, id, caller);
  }
};

export const stringCheck = (string, mandatory) => {
  if (!string && mandatory) return "mandatory";
  if (!string && !mandatory) return false;
  if (typeof string !== "string") return "must be a string";
  if (string.trim() === "") return "cannot be an empty string";
  return false;
};

export const funcGuard = (
  isAFunc,
  id,
  logicObj,
  mapCaller,
  arrayCaller,
  func,
  index,
) => {
  if (isAFunc) {
    handlersDispatcher(id, logicObj, mapCaller, arrayCaller, func);
  } else {
    funcsError(logicObj, mapCaller, index);
  }
};

export const requiredGuard = (logicObj, element, index) => {
  if (element.required && typeof element.required !== "boolean") {
    const caller = "required";
    const errorMsg = "must be a boolean";
    basicError(logicObj, caller, errorMsg, index);
    return;
  }

  const required = element.required ? true : false;
  logicObj.required.push(required);
};
