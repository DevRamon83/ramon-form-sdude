import { basicError } from "../errors/errorHandlers";
import { numChecker } from "../guards/atomicGuards";

// Textareas can enable a 'counter' feature to track either character or word counts.
// Defining a maxChars or maxWords key enables the corresponding counter;
// these two counter types are mutually exclusive.

/** @internal */
const counterHandler = (element, logicObj, index) => {
  const maxChars =
    element.maxChars && numChecker(element.maxChars, logicObj, "step");
  const maxWords =
    element.maxWords && numChecker(element.maxWords, logicObj, "step");

  let counterLabel = null;

  if (element.counterLabel) {
    counterLabel =
      typeof element.counterLabel === "string"
        ? element.counterLabel
        : "invalid";
  }

  counterLabel === "invalid" &&
    basicError(logicObj, "counterLabel", null, index, "string");

  return { maxChars, maxWords, counterLabel };
};

export const textareaParser = (element, logicObj) => {
  const SSOT = logicObj.SSOT;
  const index = logicObj.SSOT.length - 1;

  const id = SSOT[index] === "invalid" ? "invalid" : element.id;
  const rows = element.rows && numChecker(element.rows, logicObj, "max");
  const cols = element.cols && numChecker(element.cols, logicObj, "min");

  const { maxChars, maxWords, counterLabel } = counterHandler(
    element,
    logicObj,
    index,
  );

  logicObj.textareasConfig[id] = {
    rows,
    cols,
    counterLabel,
    maxChars,
    maxWords,
  };
};
