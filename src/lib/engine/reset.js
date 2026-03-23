import { buildDispatcher } from "./helpers/stateBuilderHelpers";

export const reset = (customLogic, states, cache) => {
  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } =
    states;
  const { fieldsLogic, groupsLogic, selectsLogic, textareasLogic } = customLogic
    ? customLogic
    : {};

  const initial = "";
  setFieldsState(() => buildDispatcher(fieldsLogic, "fields", initial));
  setGroupsState(() => buildDispatcher(groupsLogic, "groups", initial));
  setSelectsState(() => buildDispatcher(selectsLogic, "selects", initial));
  setTextareasState(() =>
    buildDispatcher(textareasLogic, "textareas", initial),
  );

  cache.current = {
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: false,
  };
};

const resetOne = (setter, id) => {
  setter((prev) => ({
    ...prev,
    [id]: {
      ...prev[id],
      value: "",
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null,
      },
    },
  }));

  return true;
};

const resetCheckbox = (setter, id, value) => {
  const resetObj = {};

  const ids = Object.keys(value);
  for (let i = 0; i < ids.length; i++) {
    resetObj[ids[i]] = false;
  }

  setter((prev) => ({
    ...prev,
    [id]: {
      ...prev[id],
      value: resetObj,
      returns: {
        onChange: null,
        onBlur: null,
        onFocus: null,
      },
    },
  }));

  return true;
};

export const singleReset = (states, id) => {
  if (!id) {
    console.error("A valid ID parameter is required to reset a single input.");
  }
  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } =
    states;

  let resetted = false;

  const { fieldsState, groupsState, selectsState, textareasState } = states;
  resetted = fieldsState[id] ? resetOne(setFieldsState, id) : resetted;

  if (groupsState[id]) {
    typeof states.groupsState[id].value === "string"
      ? resetOne(setGroupsState, id)
      : resetCheckbox(setGroupsState, id, states.groupsState[id].value);
    resetted = true;
  }

  resetted = selectsState[id] ? resetOne(setSelectsState, id) : resetted;

  resetted = textareasState[id] ? resetOne(setTextareasState, id) : resetted;

  if (!resetted) {
    console.error("The ID provided as a parameter is invalid");
  }
};
