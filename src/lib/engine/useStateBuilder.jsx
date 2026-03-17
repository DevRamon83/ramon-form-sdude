import { useState } from "react";
import { buildDispatcher } from "./helpers/stateBuilderHelpers";

export const useStateBuilder = (customLogic) => {
  const { fieldsLogic, groupsLogic, selectsLogic, textareasLogic } = customLogic
    ? customLogic
    : {};
  const initial = "";
  const [fieldsState, setFieldState] = useState(() =>
    buildDispatcher(fieldsLogic, "fields", initial),
  );

  const [groupsState, setGroupsState] = useState(() =>
    buildDispatcher(groupsLogic, "groups", initial),
  );

  const [selectsState, setSelectsState] = useState(() =>
    buildDispatcher(selectsLogic, "selects", initial),
  );

  const [textareasState, setTextareasState] = useState(() =>
    buildDispatcher(textareasLogic, "textareas", initial),
  );

  return {
    fieldsState,
    setFieldState,
    groupsState,
    setGroupsState,
    selectsState,
    setSelectsState,
    textareasState,
    setTextareasState,
  };
};
