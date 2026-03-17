import { isObjValid } from "ramon-vanilla";
import { optionsError } from "../errors/errorHandlers";
import { pushTheString } from "./atomicGuards";
import {
  invalidLength,
  missingKey,
  notAnArray,
  notAnObj,
} from "../errors/errorMessages";

const populate = (string, position, commons) => {
  const { customLogic, logicKey, name } = commons;
  const element = customLogic[logicKey][name].options[position];
  const invalidMsg = pushTheString(string, element, position);
  const errorMsg = invalidMsg + " of " + position + " array";

  invalidMsg && optionsError(errorMsg, commons, position);
};

export const optionsGuard = (ids, labels, commons) => {
  for (let i = 0; i < ids.length; i++) {
    populate(ids[i], "ids", commons);
    populate(labels[i], "labels", commons);
  }
};

export const objChecker = (options, name, commons) => {
  const validObj = isObjValid(options);

  if (!validObj) {
    const errorMessage = notAnObj("options", name);
    optionsError(errorMessage, commons, "options");
  }
};

export const arraysChecker = (name, commons, keys, arrayName) => {
  const invalid = !keys.includes(arrayName);
  const errorMessage = invalid && missingKey(arrayName, name);
  invalid && optionsError(errorMessage, commons, arrayName);
};

export const arrayLimits = (keys, name, commons) => {
  const error = `"labels" and "ids" keys`;
  const invalid = keys.length !== 2;
  const errorMessage = invalid && invalidLength("options", name, error);
  invalid && optionsError(errorMessage, commons, "options");
};

export const invalidArrays = (ids, labels, name, commons) => {
  const invalidIds = !ids || !Array.isArray(ids);
  invalidIds && optionsError(notAnArray("ids", name), commons, "ids");

  const invalidLabels = !labels || !Array.isArray(labels);
  invalidLabels && optionsError(notAnArray("labels", name), commons, "labels");
};
