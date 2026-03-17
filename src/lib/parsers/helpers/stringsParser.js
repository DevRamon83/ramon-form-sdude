import { validTypes } from "../../constants/validTypes";
import { basicError } from "../../errors/errorHandlers";
import { fallbackIdErrorMessage } from "../../errors/errorMessages";
import { stringCheck } from "../../guards/atomicGuards";

export const stringProcessor = (string, target, caller, commons, position) => {
  let error = false;

  const { logicObj, id, index, mandatory } = commons;
  const isInvalid = stringCheck(string, mandatory);
  if (isInvalid) {
    error = true;
    const msgFallback = id ? null : fallbackIdErrorMessage(position);
    const errorMessage = msgFallback ? msgFallback : isInvalid;

    basicError(logicObj, caller, errorMessage, index);
  }

  const myString = error ? "invalid" : string;

  target.push(myString);
  return error;
};

export const typeProcessor = (type, logicElement, caller, commons) => {
  const { logicObj, index } = commons;
  const isValidType = validTypes.includes(type);

  if (!isValidType) {
    logicElement.push(null);
    const errorMsg = "is invalid";
    basicError(logicObj, caller, errorMsg, index);
  } else {
    stringProcessor(type, logicElement, caller, commons);
  }
};

export const stringsParser = (logicObj, element, position) => {
  const { label, placeholder, id, type } = element;

  // id has not been pushed to SSOT yet;
  // the next index corresponds to the current array length
  const index = logicObj.SSOT.length;

  const commons = { logicObj, id, index };

  commons.mandatory = true;
  const invalidId = stringProcessor(id, logicObj.SSOT, "id", commons, position);
  const idFallback = invalidId ? "invalid" : id;

  commons.id = idFallback;
  typeProcessor(type, logicObj.types, "type", commons);

  commons.mandatory = false;
  stringProcessor(label, logicObj.labels, "label", commons);

  if (type !== "select") {
    // also not mandatory
    stringProcessor(placeholder, logicObj.placeholders, "placeholder", commons);
  }
};
