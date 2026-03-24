/**
 * DATA SYNCHRONIZATION HELPERS
 *
 * These functions perform an O(n) reference-based synchronization.
 * We deliberately use direct assignment to update the UI "projection" (configs)
 * with the latest React state values.
 */

import { reset, singleReset } from "../reset";

const syncStates = (elements, config, state) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "invalid" || !config[elements[i]]) continue;
    config[elements[i]].state = { value: state[elements[i]]?.value || "" };
    config[elements[i]].returns = {
      onChange: state[elements[i]]?.returns?.onChange || null,
      onBlur: state[elements[i]]?.returns?.onBlur || null,
      onFocus: state[elements[i]]?.returns?.onFocus || null,
      onKeyDown: state[elements[i]]?.returns?.onKeyDown || null,
    };
  }
};

const firstRender = (configs, SSOTS, states, customLogic) => {
  for (let key in configs) {
    const logicKey = key + "Logic";
    const logicObj = customLogic[logicKey];
    if (!logicObj) continue;
    const keySSOT = key + "SSOT";
    const SSOT = SSOTS[keySSOT];

    const stateKey = key + "State";
    // Trigger sync only for controlled inputs to minimize reconciliation work
    syncStates(SSOT, configs[key], states[stateKey]);
  }
};

const configDefiner = (type) => {
  if (type === "select") return "selects";
  if (type === "textarea") return "textareas";
  if (type === "radio") return "groups";
  if (type === "checkbox") return "groups";

  return "fields";
};

const update = (configs, states, customLogic, cache) => {
  const { type, id } = cache.current.inputChanged;
  const key = configDefiner(type);
  const logicKey = key + "Logic";
  const logicObj = customLogic[logicKey];
  if (!logicObj) return;
  const stateKey = key + "State";
  const config = configs[key][id];
  const state = states[stateKey];
  console.log("update ", state[id]?.value);
  config.state = { value: state[id]?.value || "" };
  config.returns = {
    onChange: state[id]?.returns?.onChange || null,
    onBlur: state[id]?.returns?.onBlur || null,
    onFocus: state[id]?.returns?.onFocus || null,
    onKeyDown: state[id]?.returns?.onKeyDown || null,
  };
};

export const statesMirroring = (states, cache) => {
  const { customLogic, SSOTS, configs } = cache.current;

  if (!cache.current.inputChanged) {
    firstRender(configs, SSOTS, states, customLogic);
  } else {
    update(configs, states, customLogic, cache);
  }

  if (configs.resets && Object.keys(configs.resets).length === 0) {
    configs.resets.resetAll = () => reset(customLogic, states, cache);
    configs.resets.resetOne = (obj) => singleReset(states, obj);
  }
};
