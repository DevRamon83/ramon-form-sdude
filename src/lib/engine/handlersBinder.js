import {
  customLogicDispatcher,
  executeOnChangeLogic,
  onChangeInterface,
} from "./helpers/handlersBinderHelpers";

export const handlersBinder = (configs, customLogic, states, SSOTS, cache) => {
  const fieldsMap = customLogic.fieldsLogic?.onChangeFuncs || {};
  const groupsMap = customLogic.groupsLogic?.onChangeFuncs || {};
  const selectsMap = customLogic.selectsLogic?.onChangeFuncs || {};
  const textareasMap = customLogic.textareasLogic?.onChangeFuncs || {};

  const { setFieldsState, setGroupsState, setSelectsState, setTextareasState } =
    states;

  /**
   * Unified handler for standard inputs.
   * Leverages functional updates to ensure state integrity during rapid typing.
   */
  const commonOnChangeHandler = (setter, map) => (e) => {
    const { id, value, type } = e.target;
    console.log("setter ", value);
    const onChangeResult = executeOnChangeLogic(id, map, value);
    cache.current.inputChanged = { id, type };
    setter((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        value: value,
        returns: {
          ...prev[id]?.returns,
          onChange: onChangeResult,
        },
      },
    }));
  };

  const mirrorUpdate = (name) => {
    const keys = Object.keys(states.groupsState[name].value);
    const obj = {};
    keys.forEach((key) => {
      obj[key] = document.getElementById(key).checked;
    });

    return obj;
  };

  /**
   * Specialized handler for Groups.
   * Manages the difference between exclusive (Radio) and multiple (Checkbox) selections.
   */
  const changeGroupsHandler = (setter, map) => (e) => {
    const { id, value, type, name, checked } = e.target;
    cache.current.inputChanged = { id: name, type };
    const finalValue = type === "radio" ? value : mirrorUpdate(name);
    const onChangeResult = executeOnChangeLogic(name, map, finalValue);
    if (type === "radio") {
      setter((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: value,
          returns: {
            ...prev[name]?.returns,
            onChange: onChangeResult,
          },
        },
      }));
    } else {
      setter((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          value: {
            ...prev[name].value,
            [id]: checked,
          },
          returns: {
            ...prev[name]?.returns,
            onChange: onChangeResult,
          },
        },
      }));
    }
  };

  const returnsHandler = (func, eventName, setter) => (e) => {
    const { id, value, type } = e.target;
    const ensureId =
      type === "radio" || type === "checkbox" ? e.target.name : id;
    cache.current.inputChanged = { id: ensureId, type };

    const customResult = func(ensureId, value);
    setter((prev) => ({
      ...prev,
      [ensureId]: {
        ...prev[ensureId],
        returns: {
          ...prev[ensureId]?.returns,
          [eventName]: customResult,
        },
      },
    }));
  };

  const handlers = {
    fields: commonOnChangeHandler(setFieldsState, fieldsMap),
    selects: commonOnChangeHandler(setSelectsState, selectsMap),
    textareas: commonOnChangeHandler(setTextareasState, textareasMap),
    groups: changeGroupsHandler(setGroupsState, groupsMap),
  };

  onChangeInterface(customLogic, configs, handlers, SSOTS);

  const { configFields, configGroups, configSelects, configTextareas } =
    configs;

  customLogicDispatcher(customLogic, configs, returnsHandler, states);

  return { configFields, configGroups, configSelects, configTextareas };
};
