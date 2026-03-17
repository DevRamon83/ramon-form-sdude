import { basicError } from "../errors/errorHandlers";
import { isValidDate, isValidDateTimeLocal, isValidTime } from "ramon-vanilla";
import { invalidTime } from "../errors/errorMessages";

export const dateParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;

  const minDate = element.min ? isValidDate(element.min, "iso") : null;
  const maxDate = element.max ? isValidDate(element.max, "iso") : null;

  if (minDate && !minDate.isValid) {
    basicError(logicObj, "min", minDate.why, index);
  }

  if (maxDate && !maxDate.isValid) {
    basicError(logicObj, "max", maxDate.why, index);
  }
};

export const dateTimeParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;

  const minDate = element.min ? isValidDateTimeLocal(element.min, true) : null;
  const maxDate = element.max ? isValidDateTimeLocal(element.max, true) : null;

  if (minDate && !minDate.isValid) {
    basicError(logicObj, "min", minDate.why, index);
  }

  if (maxDate && !maxDate.isValid) {
    basicError(logicObj, "max", maxDate.why, index);
  }
};

export const timeParser = (element, logicObj) => {
  const index = logicObj.SSOT.length - 1;

  const minTime = element.min ? isValidTime(element.min) : null;
  const maxTime = element.max ? isValidTime(element.max) : null;

  if (element.min && !minTime) {
    basicError(logicObj, "min", invalidTime, index);
  }

  if (element.max && !maxTime) {
    basicError(logicObj, "max", invalidTime, index);
  }
};
