export const error001a = (msg, position) => {
  return msg + " inside arrayConfig at index " + position;
};

export const notAFuncError = (id, mapCaller) => {
  return `Property ${mapCaller} of ${id} must be a function`;
};

export const notAnObj = (caller, id) => {
  return `The ${caller} property in ${id} must be an object`;
};

export const invalidLength = (caller, id, only) => {
  return `The ${caller} object in ${id} must contain only the ${only}`;
};

export const missingKey = (key, postion) => {
  return `The ${key} key in ${postion} is missing`;
};

export const notAnArray = (caller, id) => {
  return `The ${caller} field in ${id} options must be an array`;
};

export const notAlign = (firstArray, secondArray, caller) => {
  return `The ${firstArray} and ${secondArray} arrays in ${caller} must have the same length`;
};

export const notAString = (string, position) => {
  return `The ${string} in ${position} must be a string`;
};

export const invalidTime = "format is invalid";

export const fallbackIdErrorMessage = (position) => {
  if (position !== null || position !== undefined) {
    return `If you don't provide a valid ID, I can't identify the input. 
    However, the invalid ID is at position ${position} in the configuration array you provided`;
  }
  return false;
};
