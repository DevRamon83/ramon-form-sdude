import { disalignmentCheck } from "../../guards/atomicGuards";
import { notAlign } from "../../errors/errorMessages";
import { optionsError } from "../../errors/errorHandlers";
import {
  arrayLimits,
  arraysChecker,
  invalidArrays,
  objChecker,
  optionsGuard,
} from "../../guards/optionsGuard";
import { optionsBlueprint } from "../../blueprints/blueprints";

export const optionsParser = (commons) => {
  const { options, customLogic, name, logicKey } = commons;

  optionsBlueprint(customLogic, logicKey, name);
  objChecker(options, name, commons);

  const keys = options ? Object.keys(options) : ["ids", "labels"];

  arrayLimits(keys, name, commons);

  arraysChecker(name, commons, keys, "labels");
  arraysChecker(name, commons, keys, "ids");

  const ids = options?.ids ? options.ids : ["invalid"];
  const labels = options?.labels ? options.labels : ["invalid"];

  invalidArrays(ids, labels, name, commons);

  disalignmentCheck(ids, labels)
    ? optionsGuard(ids, labels, commons)
    : optionsError(notAlign("ids", "labels", name), commons, "options");
};
