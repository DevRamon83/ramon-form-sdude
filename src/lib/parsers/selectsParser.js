import { selectsError } from "../errors/errorHandlers";
import { notAlign } from "../errors/errorMessages";
import { disalignmentCheck } from "../guards/atomicGuards";
import { selectsGuard } from "../guards/selectsGuard";
import { selectsBlueprint } from "../blueprints/blueprints";

export const selectsParser = (element, logicObj) => {
  const id = element.id;
  selectsBlueprint(logicObj.selectsConfig, id);

  const { options, labels } = element;
  const invalidOptions = !options || !Array.isArray(options);
  const optionError = "Options must be an array";
  invalidOptions && selectsError(optionError, logicObj, id, "options");

  const invalidLabels = !labels || !Array.isArray(labels);
  const labelsError = "Labels must be an array";
  invalidLabels && selectsError(labelsError, logicObj, id, "labels");

  const aligned = disalignmentCheck(options, labels);

  if (!aligned) {
    const msg = notAlign("options", "labels", id);
    selectsError(msg, logicObj, id, "options");
  }

  selectsGuard(options, labels, logicObj, id);
};
