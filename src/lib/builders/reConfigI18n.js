const iterate = (keys, newConfig, oldConfig) => {
  for (let i = 0; i < keys.length; i++) {
    oldConfig[keys[i]].config = newConfig[keys[i]].config;
  }
};

export const reConfigI18n = (newConfigs, oldConfigs) => {
  const newfields = newConfigs.fields;
  const oldFields = oldConfigs.fields;
  const fieldsKeys = Object.keys(newfields);
  iterate(fieldsKeys, newfields, oldFields);

  const newGroups = newConfigs.groups;
  const oldGroups = oldConfigs.groups;
  const groupsKeys = Object.keys(newGroups);
  iterate(groupsKeys, newGroups, oldGroups);

  const newSelects = newConfigs.selects;
  const oldSelects = oldConfigs.selects;
  const selectsKeys = Object.keys(newSelects);
  iterate(selectsKeys, newSelects, oldSelects);

  const newTextareas = newConfigs.textareas;
  const oldTextareas = oldConfigs.textareas;
  const textareasKeys = Object.keys(newTextareas);
  iterate(textareasKeys, newTextareas, oldTextareas);
};
