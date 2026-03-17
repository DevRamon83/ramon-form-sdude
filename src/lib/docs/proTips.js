import { multipleInputs } from "./tips/multipleInputs";
import { dynamicRendering } from "./tips/dynamicRendering";
import { dataAccess } from "./tips/dataAccess";

/**
 * SDUDE TIPS ORCHESTRATOR
 *
 * Organizza i suggerimenti tecnici in gruppi collassabili.
 * L'utente vede solo i titoli e clicca per espandere il contenuto.
 */
export const proTips = () => {
  console.group(
    "%c 💡 SDUDE PROFESSIONAL TIPS ",
    "background: #FF9800; color: white; padding: 2px; border-radius: 2px;",
  );

  // Cartella: Come gestire più input
  console.groupCollapsed(
    "%c1) Handling Multiple Inputs",
    "color: #2196F3; font-weight: bold;",
  );
  console.log(`%c${multipleInputs}`, "color: #555; font-family: monospace;");
  console.groupEnd();

  // Cartella: Rendering Dinamico
  console.groupCollapsed(
    "%c2) Dynamic Form Generation (Mapping)",
    "color: #2196F3; font-weight: bold;",
  );
  console.log(`%c${dynamicRendering}`, "color: #555; font-family: monospace;");
  console.groupEnd();

  // Cartella: Accesso ai Dati
  console.groupCollapsed(
    "%c3) Data Access & State Retrieval",
    "color: #2196F3; font-weight: bold;",
  );
  console.log(`%c${dataAccess}`, "color: #555; font-family: monospace;");
  console.groupEnd();

  console.groupEnd(); // Chiude il gruppo principale "SDUDE PROFESSIONAL TIPS"
};
