import { invalidGroupsBlueprint } from "../blueprints/blueprints";
import { checkAndPopulate } from "./helpers";

export const buildGroupsConfig = (logicObj, id, index) => {
  if (logicObj.errors[index]) {
    return invalidGroupsBlueprint(logicObj, index, id);
  }

  const autoComplete = id;
  const objConfig = {
    name: id,
    required: logicObj.required[index],
    type: logicObj.types[index],
    autoComplete,
    options: {
      ids: logicObj[id].options.ids,
      labels: logicObj[id].options.labels,
    },
  };

  checkAndPopulate(objConfig, "title", logicObj.titles[index]);

  return { config: objConfig, state: {}, handlers: {} };
};
