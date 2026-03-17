export const SSOTS = {
  fieldsSSOT: [],
  groupsSSOT: [],
  selectsSSOT: [],
  textareasSSOT: [],
};

export const optionsBlueprint = (customLogic, logicKey, name) => {
  customLogic[logicKey][name] = {
    options: {
      ids: [],
      labels: [],
    },
  };
};

export const selectsBlueprint = (logicObject, id) => {
  logicObject[id] = {
    options: [],
    labels: [],
  };
};

export const invalidGroupsBlueprint = (logicObj, index, id) => {
  const objConfig = {
    name: id,
    type: logicObj.types[index],
    autoComplete: "invalid",
    title: "invalid",
    options: {
      ids: "invalid",
      labels: "invalid",
    },
  };
  return { config: objConfig, state: {}, handlers: {} };
};
