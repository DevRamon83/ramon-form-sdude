export const basicBlueprint = (customLogic, logicKey, configKey) => {
  customLogic[logicKey] = {
    SSOT: [],
    types: [], // must be alligned with SSOT
    placeholders: [], // must be alligned with SSOT
    onChangeFuncs: {},
    onChangeIndexes: [], // track the position in SSOT
    onBlurFuncs: {},
    onBlurIndexes: [], // track the position in SSOT
    onFocusFuncs: {},
    onFocusIndexes: [], // track the position in SSOT
    onKeyDownFuncs: {},
    onKeyDownIndexes: [],
    errors: [], // must be aligned with SSOT
    errorData: [], // must be aligned with SSOT
    required: [], // must be aligned with SSOT
  };

  if (configKey !== "groupsConfig") {
    customLogic[logicKey].labels = [];
    customLogic[logicKey][configKey] = {
      targetKeys: [],
      originalObjects: [],
    };
  } else {
    customLogic[logicKey].titles = [];
    customLogic[logicKey][configKey] = {};
  }
};
