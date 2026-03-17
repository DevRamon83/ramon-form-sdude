import {
  customLogicDispatcher,
  executeOnChangeLogic,
  onChangeInterface,
} from "./helpers/handlersBinderHelpers";

export const handlersBinder = (configs, customLogic, states, SSOTS) => {
  const fieldsMap = customLogic.fieldsLogic?.onChangeFuncs || {};
  const groupsMap = customLogic.groupsLogic?.onChangeFuncs || {};
  const selectsMap = customLogic.selectsLogic?.onChangeFuncs || {};
  const textareasMap = customLogic.textareasLogic?.onChangeFuncs || {};

  const { setFieldState, setGroupsState, setSelectsState, setTextareasState } =
    states;

  /**
   * Unified handler for standard inputs.
   * Leverages functional updates to ensure state integrity during rapid typing.
   */
  const commonOnChangeHandler = (setter, map) => (e) => {
    const { id, value } = e.target;
    setter((prev) => ({
      ...prev,
      [id]: value,
    }));

    executeOnChangeLogic(id, map, value);
  };

  /**
   * Specialized handler for Groups.
   * Manages the difference between exclusive (Radio) and multiple (Checkbox) selections.
   */
  const changeGroupsHandler = (setter) => (e) => {
    const { id, value, type, name, checked } = e.target;
    const finalValue = type === "checkbox" ? checked : value;
    if (type === "radio") {
      setter((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setter((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          [id]: checked,
        },
      }));
    }

    executeOnChangeLogic(id, groupsMap, finalValue);
  };

  const handlers = {
    fields: commonOnChangeHandler(setFieldState, fieldsMap),
    selects: commonOnChangeHandler(setSelectsState, selectsMap),
    textareas: commonOnChangeHandler(setTextareasState, textareasMap),
    groups: changeGroupsHandler(setGroupsState),
  };

  onChangeInterface(customLogic, configs, handlers, SSOTS);

  const { configFields, configGroups, configSelects, configTextareas } =
    configs;

  customLogicDispatcher(customLogic, configs);

  return { configFields, configGroups, configSelects, configTextareas };
};
