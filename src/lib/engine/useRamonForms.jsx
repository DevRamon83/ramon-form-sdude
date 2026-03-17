import { useMemo, useRef } from "react";
import { parseConfig } from "../parsers/parseConfig";
import { configDispatcher } from "../builders/configDispatcher";
import { useStateBuilder } from "./useStateBuilder";
import { handlersBinder } from "./handlersBinder";
import { statesMirroring } from "./helpers/ramonHelpers";

/* 
 * PERFORMANCE-FIRST ENGINE: Handling 2000+ controlled inputs @ 60fps.
 * 
 * 1. CACHE RESILIENCE & IDEMPOTENCY: 
 *    The logic is strictly deterministic. If React purges useMemo cache (aggressive 
 *    memory management), the system remains 100% consistent. 
 *    within the 16ms frame budget. We trade "idiomatic purity" for raw throughput.
 * 
 * 2. 100% CLEAN & LEAN: 
 *    Minimal boilerplate for schema definitions.
 * 
 * 3. 100% AGNOSTIC: 
 *    Logic is decoupled from representation, making it
 *    a universal engine for massive configurations.
 * 
 * 4. 100% FAIL-SAFE: 
 *    Handles corrupted configuration objects by isolating
 *    the faulty element and displaying an on-screen error message
 *    that tells the user exactly where they went wrong and why.
 *    It prevents any ID collisions and always provides
 *    (via a dedicated on-screen button) the correct boilerplate
 *    in the console, ready for copy-pasting.

PLEASE NOTE: The hook can be set to asynchronous by simply
passing 'true' to the 'async' parameter (defaults to false if omitted).
This allows users to handle cases where configuration objects
are fetched; in this scenario, the absence of 'configArray' is
considered physiological (whereas the non-async version would trigger an error).
As long as 'configArray' stays within static bounds (0/n), the
parsing and memoization functions will consistently return the same data.
Should the user manipulate the length of 'configArray' during the
app lifecycle, and only then, data and pointer alignment would be lost.
*/

const useRamonForms = (configArray = [], isAsync) => {
  const cache = useRef({
    SSOTS: null,
    customLogic: null,
    configs: null,
    bound: false,
  });

  useMemo(() => {
    if (!cache.current.customLogic && (configArray.length > 0 || !isAsync)) {
      const { logic, SSOTS } = parseConfig(configArray, isAsync);
      cache.current.customLogic = logic;
      cache.current.SSOTS = SSOTS;
      cache.current.configs = configDispatcher(logic);
    }
  }, [configArray, isAsync]);

  const states = useStateBuilder(cache.current.customLogic);

  useMemo(() => {
    if (cache.current.configs && !cache.current.bound) {
      handlersBinder(
        cache.current.configs,
        cache.current.customLogic,
        states,
        cache.current.SSOTS,
      );
      cache.current.bound = true;
    }
  }, [configArray, isAsync]);

  if (cache.current.bound) {
    statesMirroring(
      cache.current.customLogic,
      cache.current.SSOTS,
      cache.current.configs,
      states,
    );
  }

  return cache.current.configs || {};
};

export default useRamonForms;
