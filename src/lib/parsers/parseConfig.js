import { uniqueIdGuard } from "../guards/uniqueIdGuard";
import { SSOTS } from "../blueprints/blueprints";
import { dispatchParser } from "./dispatchParser";

export const parseConfig = (configArray, isAsync) => {
  const customLogic = {};
  const noConfigArray = !configArray || configArray.length === 0;

  if (noConfigArray && !isAsync) {
    return { logic: "invalid", SSOTS: null };
  }

  // Prevents ID collisions and tracks field coordinates for error reporting
  const ensureId = new Set();
  const coords = [];

  const checkers = { ensureId, SSOTS, coords };

  for (let i = 0; i < configArray.length; i++) {
    dispatchParser(configArray[i], customLogic, i, checkers);
  }

  uniqueIdGuard(coords, configArray, customLogic, SSOTS);
  return { logic: customLogic, SSOTS };
};
