const assign = (index, logicObj, caller) => {
  logicObj[caller].push(index);
};

const map = (id, logicObj, caller, func) => {
  logicObj[caller][id] = func;
};

export const handlersDispatcher = (
  id,
  logicObj,
  mapCaller,
  arrayCaller,
  func,
) => {
  const index = logicObj.SSOT.length - 1;
  assign(index, logicObj, arrayCaller);
  map(id, logicObj, mapCaller, func);
};
