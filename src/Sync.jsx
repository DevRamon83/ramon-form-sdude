import { useRamonForms } from "./lib/engine/useRamonForms";
import TextInput from "./lib/components/wrappers/TextInput";
import SelectInput from "./lib/components/wrappers/SelectInput";
import RadioInput from "./lib/components/wrappers/RadioInput";
import CheckboxInput from "./lib/components/wrappers/CheckboxInput";
import TextareaInput from "./lib/components/wrappers/TextareaInput";
import DateInput from "./lib/components/wrappers/DateInput";
import StarterKit from "./lib/components/starterKit/StarterKit";
import { useRef, useState, Profiler, useTransition } from "react";

function App() {
  const userValidator = (value) => {
    console.log("value ", value);
    if (value === "dog") {
      return "woof";
    }
    return "ciao";
  };

  const [lang, setLang] = useState("ita");

  const onRenderCallback = (
    id, // l'id della prop "id" del Profiler appena sottoposto a commit
    phase, // "mount" (primo caricamento) o "update" (cambiamenti successivi)
    actualDuration, // tempo speso per il rendering dell'aggiornamento corrente
    baseDuration, // tempo stimato per renderizzare l'intero sotto-albero senza memoizzazione
    startTime, // quando React ha iniziato a renderizzare questo aggiornamento
    commitTime, // quando React ha completato l'aggiornamento
  ) => {
    console.log(
      `Componente: ${id} | Fase: ${phase} | Durata effettiva: ${actualDuration.toFixed(2)}ms`,
    );
  };

  const test = (value) => {
    console.log("scattato");
    return "success";
  };

  const username = {
    id: "username",
    type: "text",
    placeholder: lang === "ita" ? "username" : "usuario",
    label:
      lang === "ita" ? "enter your username" : "Ingrese su nombre de usuario",
    onChange: userValidator,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const password = {
    id: "password",
    type: "text",
    placeholder: lang === "ita" ? "password" : "contraseña",
    label: lang === "ita" ? "enter your password" : "introduce tu contraseña",
    onChange: userValidator,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const accountType = {
    id: "accountType",
    type: "select",
    options: ["teacher", "student"],
    labels:
      lang === "ita" ? ["insegnante", "studente"] : ["teacher", "student"],
    label: lang === "ita" ? "scegli il tuo account" : "Choose account type",
    required: false,
    onChange: false,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const accountTypes = {
    id: "second",
    type: "select",
    options: ["prova", "tenta"],
    labels: ["prova", "tenta"],
    label: "Choose account type",
    required: false,
    onChange: userValidator,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const hobbies = {
    options: {
      ids: ["music", "movie", "fitness"],
      labels:
        lang === "ita"
          ? ["musica", "cinema", "sport"]
          : ["music", "movie", "fitness"],
    },
    type: "radio",
    title: "What are your hobbies?",
    name: "hobbies",
    onChange: false,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const data = [hobbies, username, password];

  const [isPending, startTransition] = useTransition(); // Se vuoi testarlo dal chiamante

  // Inserisci questo "mattone" prima dello statesMirroring
  const start = performance.now();
  while (performance.now() - start < 10) {
    // Blocca il thread per 100ms
  }

  const langHandler = () => {
    startTransition(() => {
      setLang(lang === "ita" ? "spa" : "ita");
    });
  };

  const objConfig = {
    configArray: data,
    isAsync: false,
    i18n: lang,
  };

  const { fields, groups, selects, textareas, resets } =
    useRamonForms(objConfig);
  const style = { display: "flex", flexDirection: "column", gap: "2vh" };
  const formRef = useRef();
  const handler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log("ciao ", formData);
  };

  console.log(fields);

  const resetHandler = () => {
    // resets.resetAll();
    resets.resetAll();
    formRef.current.reset();
  };
  // ;

  return (
    <>
      <Profiler id="FormRamon" onRender={onRenderCallback}>
        <div onClick={langHandler}>{lang}</div>
        <form ref={formRef} onSubmit={handler} style={{ ...style }}>
          <TextInput dataField={fields.password} i18n={lang} />
          <TextInput dataField={fields.username} i18n={lang} />
          <RadioInput dataField={groups.hobbies} i18n={lang} />
          <button>invia</button>
        </form>
        <button onClick={resetHandler}>reset</button>
      </Profiler>
    </>
  );
}

export default App;

//
// <RadioInput dataField={groups.hobbies} />
//<TextInput dataField={fields.username} />
//          <SelectInput dataField={selects.accountType} />
//      <TextareaInput dataField={textareas.accountType} />
// <StarterKit />
