import { selectsError } from "../errors/errorHandlers";
import { duplicatedSelectOptions, pushTheString } from "./atomicGuards";

const populate = (logicObj, id, caller, string) => {
  const element = logicObj.selectsConfig[id][caller];
  const invalidMsg = pushTheString(string, element, caller);

  if (invalidMsg) selectsError(invalidMsg, logicObj, id, caller);
};

export const selectsGuard = (options, labels, logicObj, id) => {
  if (!options || !labels) return;
  const duplicates = [];
  let seen = new Set();

  for (let i = 0; i < options.length; i++) {
    populate(logicObj, id, "options", options[i]);
    populate(logicObj, id, "labels", labels[i]);
    const isDuplicate = seen.has(options[i]);
    seen.add(options[i]);
    isDuplicate && duplicates.push(options[i]);
  }

  const handlerArgs = { logicObj, id, caller: "options" };

  duplicatedSelectOptions(duplicates, handlerArgs);
};
