/**
 * STATE INITIALIZATION ENGINE
 * These helpers perform the initial O(n) mapping of the user schema
 * to generate the base state structure for React.
 */

const keysPopulator = (controlled, obj, initial, eventName) => {
  if (!obj.returns) obj.returns = {};

  if (controlled) {
    obj.value = initial;
  }
  obj.returns[eventName] = null;
};

const commonInitialization = (logicObj, initial) => {
  const obj = {};
  const { SSOT } = logicObj;

  for (let i = 0; i < SSOT.length; i++) {
    const currentSSOT = SSOT[i];
    obj[currentSSOT] = {};
    keysPopulator(true, obj[currentSSOT], initial, "onChange");
    keysPopulator(false, obj[currentSSOT], initial, "onBlur");
    keysPopulator(false, obj[currentSSOT], initial, "onFocus");
    keysPopulator(false, obj[currentSSOT], initial, "onKeyDown");
  }

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
      obj[key] = {
        value: initial,
        returns: {
          onChange: null,
          onFocus: null,
          onKeyDown: null,
          onBlur: null,
        },
      };
    } else {
      const states = logicObj[key].options.ids;
      obj[key] = { value: { ...initializeCheckbox(states, false) } };
      obj[key].returns = {
        onChange: null,
        onFocus: null,
        onKeyDown: null,
        onBlur: null,
      };
    }
  });

  return obj;
};

export const buildDispatcher = (logicObj, caller, initial) => {
  const obj = {};
  if (!logicObj) return obj;

  if (caller === "groups") {
    return initializeGroups(logicObj, initial);
  } else {
    return commonInitialization(logicObj, initial);
  }
};
