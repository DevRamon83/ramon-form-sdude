import { isObjValid } from "ramon-vanilla";
import { eventsArray } from "../../constants/eventsArray";

/**
 * UI INJECTION ENGINE (Linker)
 *
 * This module acts as the "Linker" of the engine. It performs high-speed,
 * reference-based injection of handlers into the UI configuration objects.
 *
 * DESIGN CHOICE:
 * We use imperative loops (for) and direct property assignment to wire up
 * event listeners (onChange, onBlur, etc.). This ensures that even with
 * thousands of fields, the "wiring" phase remains O(n) and doesn't trigger
 * the massive overhead of functional object cloning.
 *
 * The 'configs' object is treated here as a mutable "Draft" that is
 * finalized just before being projected to the React View layer.
 */

const customLogicHandler = (map, indexes, SSOT, obj, key, handler, setter) => {
  for (let i = 0; i < indexes.length; i++) {
    const targetId = SSOT[indexes[i]];
    const func = map[targetId];
    obj[targetId].handlers[key] = handler(func, key, setter);
  }
};

const mapNIndexFinder = (caller, customLogic) => {
  const indexName = caller + "Indexes";
  const mapName = caller + "Funcs";
  const indexes = customLogic[indexName];
  const map = customLogic[mapName];
  return { map, indexes };
};

const customLogicInterface = (handler, caller, logicObj, configObj, setter) => {
  const { map, indexes } = mapNIndexFinder(caller, logicObj);
  if (indexes.length === 0) return;
  customLogicHandler(
    map,
    indexes,
    logicObj.SSOT,
    configObj,
    caller,
    handler,
    setter,
  );
};

export const customLogicDispatcher = (logic, configs, handler, states) => {
  const { fields, textareas, groups, selects } = configs;
  const { fieldsLogic, textareasLogic, groupsLogic, selectsLogic } = logic;

  const setF = states.setFieldsState;
  const setG = states.setGroupsState;
  const setS = states.setSelectsState;
  const setT = states.setTextareasState;

  eventsArray.forEach((event) => {
    isObjValid(fieldsLogic) &&
      customLogicInterface(handler, event, fieldsLogic, fields, setF);
    isObjValid(textareasLogic) &&
      customLogicInterface(handler, event, textareasLogic, textareas, setT);
    isObjValid(groupsLogic) &&
      customLogicInterface(handler, event, groupsLogic, groups, setG);
    isObjValid(selectsLogic) &&
      customLogicInterface(handler, event, selectsLogic, selects, setS);
  });
};

export const executeOnChangeLogic = (id, map, value) => {
  const isBoolean = typeof map[id] === "boolean";
  if (!map || Object.keys(map).length === 0 || isBoolean) return;
  const myFunc = map[id];
  const result = myFunc && myFunc(value);
  return result;
};

const populateOC = (SSOT, configObj, stateIndexes, handler) => {
  for (let i = 0; i < stateIndexes.length; i++) {
    const targetId = SSOT[stateIndexes[i]];
    if (configObj[targetId] && SSOT[i] !== "invalid") {
      configObj[targetId].handlers = { onChange: handler };
    }
  }
};

export const onChangeInterface = (customLogic, configs, handlers, SSOTS) => {
  for (let key in configs) {
    const logicKey = key + "Logic";
    const logicObj = customLogic[logicKey];
    const validLogic = isObjValid(logicObj);
    if (!validLogic) continue;
    const stateIndexes = logicObj.onChangeIndexes;
    const isControlled = stateIndexes.length > 0;
    if (!isControlled) continue;
    const SSOTKey = key + "SSOT";
    const SSOT = SSOTS[SSOTKey];
    const configObj = configs[key];
    const handler = handlers[key];
    populateOC(SSOT, configObj, stateIndexes, handler);
  }
};
