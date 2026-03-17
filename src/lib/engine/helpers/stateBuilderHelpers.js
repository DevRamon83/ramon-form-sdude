/**
 * STATE INITIALIZATION ENGINE
 * These helpers perform the initial O(n) mapping of the user schema
 * to generate the base state structure for React.
 */

const commonInitialization = (SSOT, indexes, initial) => {
  const obj = {};
  indexes.forEach((value) => {
    const key = SSOT[value];
    obj[key] = initial;
  });

  return obj;
};

const initializeCheckbox = (state, initial) => {
  const obj = {};
  state.forEach((value) => {
    obj[value] = initial;
  });

  return obj;
};

const initializeGroups = (logicObj, initial) => {
  const obj = {};
  if (!logicObj) return obj;
  const { types, SSOT } = logicObj;

  SSOT.forEach((key, index) => {
    if (types[index] === "radio") {
      obj[key] = initial;
    } else {
      const states = logicObj[key].options.ids;
      obj[key] = { ...initializeCheckbox(states, false) };
    }
  });

  return obj;
};

export const buildDispatcher = (logicObj, caller, initial) => {
  if (!logicObj) return {};
  if (caller === "groups") {
    return initializeGroups(logicObj, initial);
  } else {
    const { SSOT, onChangeIndexes } = logicObj;
    return onChangeIndexes.length > 0
      ? commonInitialization(SSOT, onChangeIndexes, initial)
      : {};
  }
};
