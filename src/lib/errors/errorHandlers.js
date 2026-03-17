export const initializeErrorData = (logicObj) => {
  logicObj.errorData.push("clean");
};

const errorDataHandler = (errorObj, index) => {
  if (errorObj[index] !== "clean") return;
  errorObj[index] = {
    callers: [],
    errorType: [],
  };
};

export const funcsError = (logicObj, caller, index) => {
  const callBy = caller.replace("Funcs", "");

  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);

  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(callBy);
  logicObj.errorData[index].errorType.push("must be a function");
};

export const basicError = (logicObj, caller, errorMsg, index, type) => {
  const msg = errorMsg ? errorMsg : `must be ${type}`;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);

  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(msg);
};

export const optionsError = (msg, commons, key) => {
  const { customLogic, logicKey, index } = commons;
  const logicObj = customLogic[logicKey];
  logicObj.errors[index] = true;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errorData[index].callers.push(key);
  logicObj.errorData[index].errorType.push(msg);
};

export const selectsError = (errorMsg, logicObj, id, caller) => {
  const index = logicObj.SSOT.length - 1;
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(errorMsg);
};

export const duplicationError = (logicObj, caller, errorMsg, index) => {
  initializeErrorData(logicObj);
  errorDataHandler(logicObj.errorData, index);
  logicObj.errors[index] = true;
  logicObj.errorData[index].callers.push(caller);
  logicObj.errorData[index].errorType.push(errorMsg);
};
