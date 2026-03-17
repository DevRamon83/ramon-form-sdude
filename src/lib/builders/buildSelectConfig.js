export const buildSelectsConfig = (objConfig, logicObj, id, required) => {
  if (id === "invalid") return;
  const provider = logicObj.selectsConfig[id];
  objConfig.options = provider.options;
  objConfig.labels = provider.labels;

  if (required) {
    objConfig.options.unshift("");
    objConfig.labels.unshift("...");
  }
};
