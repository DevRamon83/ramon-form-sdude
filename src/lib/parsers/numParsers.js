import { numChecker } from "../guards/atomicGuards";
import { dateParser, timeParser, dateTimeParser } from "./dateParser";

export const numParser = (element, logicObj) => {
  const { id, type } = element;
  let min = null;
  let max = null;

  switch (type) {
    case "date":
      dateParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "time":
      timeParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "datetime-local":
      dateTimeParser(element, logicObj);
      min = element.min ? element.min : null;
      max = element.max ? element.max : null;
      break;
    case "number":
      min = element.min && numChecker(element.min, logicObj, "min");
      max = element.max && numChecker(element.max, logicObj, "max");
      break;
    default:
      break;
  }

  const step = element.step && numChecker(element.step, logicObj, "step");
  logicObj.fieldsConfig[id] = {
    max,
    min,
    step,
  };
};
