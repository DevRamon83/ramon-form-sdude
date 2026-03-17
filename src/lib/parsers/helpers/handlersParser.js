import { funcCheck, funcGuard } from "../../guards/atomicGuards";

const processHandlers = (commons, caller, func) => {
  const { element, id, logicObj } = commons;
  const index = logicObj.SSOT.length - 1;
  const isAFunc = funcCheck(func, element, caller);
  const mapCaller = caller + "Funcs";
  const arrayCaller = caller + "Indexes";
  funcGuard(isAFunc, id, logicObj, mapCaller, arrayCaller, func, index);
};

const isControlled = (element) => {
  return (
    element.onChange ||
    element.type === "textarea" ||
    element.type === "radio" ||
    element.type === "checkbox"
  );
};

export const handlersParser = (element, logicObj, id, SSOT) => {
  const commons = { element, id, logicObj, SSOT };

  if (isControlled(element)) {
    processHandlers(commons, "onChange", element.onChange);
  }

  element.onBlur && processHandlers(commons, "onBlur", element.onBlur);

  element.onFocus && processHandlers(commons, "onFocus", element.onFocus);

  element.onKeyDown && processHandlers(commons, "onKeyDown", element.onKeyDown);
};
