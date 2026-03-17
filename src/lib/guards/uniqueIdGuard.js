import { duplicationError } from "../errors/errorHandlers";

const defineId = (element) => {
  return element.id ? element.id : element.name;
};

const optionMsg = (coord) => {
  return `Values in the ids array must be unique. Change the value at position ${coord.array}`;
};

(". Check the ids array in options and change the value in ");

export const uniqueIdGuard = (coords, configArray, customLogic, SSOTS) => {
  for (let i = 0; i < coords.length; i++) {
    const { category, nidificate, position, id } = coords[i];
    const logicKey = category + "Logic";
    const logicObj = customLogic[logicKey];
    const element = configArray[position];
    const idFallback = defineId(element);
    const index = logicObj.SSOT.indexOf(idFallback);
    const errorMsg = nidificate ? optionMsg(coords[i]) : "id is duplicated";
    const caller = nidificate ? "option" : idFallback;

    duplicationError(logicObj, caller, errorMsg, index);
  }
};
