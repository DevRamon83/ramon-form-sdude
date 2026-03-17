/**
 * DATA SYNCHRONIZATION HELPERS
 *
 * These functions perform an O(n) reference-based synchronization.
 * We deliberately use direct assignment to update the UI "projection" (configs)
 * with the latest React state values.
 */

const syncStates = (elements, config, state) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] === "invalid" || !config[elements[i]]) continue;
    config[elements[i]].state = { value: state[elements[i]] || "" };
  }
};

export const statesMirroring = (customLogic, SSOTS, configs, states) => {
  for (let key in configs) {
    const logicKey = key + "Logic";
    const logicObj = customLogic[logicKey];
    if (!logicObj) continue;

    const isControlled = logicObj.onChangeIndexes.length > 0;
    if (!isControlled) continue;

    const keySSOT = key + "SSOT";
    const SSOT = SSOTS[keySSOT];

    const stateKey = key + "State";
    // Trigger sync only for controlled inputs to minimize reconciliation work
    syncStates(SSOT, configs[key], states[stateKey]);
  }
};
