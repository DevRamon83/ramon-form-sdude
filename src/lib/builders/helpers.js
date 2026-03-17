export const checkAndPopulate = (objConfig, key, value) => {
  if (value) objConfig[key] = value;
};

export const populateObjConfig = (logicObj, index, id, configKey) => {
  const autoComplete = id === "password" ? "new-password" : id;

  const objConfig = {
    id,
    type: logicObj.types[index],
    required: logicObj.required[index],
    autoComplete,
  };

  checkAndPopulate(objConfig, "label", logicObj.labels[index]);
  checkAndPopulate(objConfig, "placeholder", logicObj.placeholders[index]);
  checkAndPopulate(objConfig, "min", logicObj[configKey][id]?.min);
  checkAndPopulate(objConfig, "max", logicObj[configKey][id]?.max);
  checkAndPopulate(objConfig, "step", logicObj[configKey][id]?.step);
  return objConfig;
};

export const configErrorHandler = (error, configObj, id, logicObj, index) => {
  configObj[id].error = error;
  const callers = logicObj.errorData[index].callers;
  const errorType = logicObj.errorData[index].errorType;
  configObj[id].errorData = { callers, errorType };
};
