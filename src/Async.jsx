import { useRamonForms } from "./lib/engine/useRamonForms";
import TextInput from "./lib/components/wrappers/TextInput";
import RadioInput from "./lib/components/wrappers/RadioInput";
import { useRef, useState, Profiler } from "react";

function App() {
  const userValidator = (value) => {
    console.log("value ", value);
    if (value === "dog") {
      return "woof";
    }
    return "ciao";
  };

  const errorRef = useRef("ciao");

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
    placeholder: "username",
    label: "enter your username",
    onChange: userValidator,
    onBlur: false,
    onKeyDown: false,
    onFocus: false,
  };

  const hobbies = {
    options: {
      ids: ["music", "movie", "username"],
      labels: ["music", "movie", "fitness"],
    },
    type: "radio",
    title: "What are your hobbies?",
    name: "hobbies",
    onChange: false,
    onBlur: userValidator,
    onKeyDown: false,
    onFocus: false,
  };

  const [data, setData] = useState({
    configArray: [],
    isAsync: true,
    i18n: false,
  });

  setTimeout(() => {
    if (data.configArray.length > 0) return;
    const myArray = [];
    for (let i = 0; i < 2000; i++) {
      const newObj = { ...username };
      newObj.id = username.id + i;
      newObj.placeholder = username.placeholder + i;
      newObj.label = username.label + i;
      myArray.push(newObj);
    }

    setData({
      configArray: myArray,
      isAsync: true,
      i18n: false,
    });
  }, 5000);

  const { fields, groups, selects, textareas } = useRamonForms(data, true);
  const style = { display: "flex", flexDirection: "column", gap: "2vh" };
  const formRef = useRef();

  const handler = () => {
    console.log("ciao");
  };
  console.log("ciao ", fields);

  return (
    <>
      <Profiler id="FormRamon" onRender={onRenderCallback}>
        {fields && (
          <form ref={formRef} onSubmit={handler} style={{ ...style }}>
            {Object.keys(fields).map((field) => (
              <TextInput key={field} dataField={fields[field]} isAsync={true} />
            ))}

            <button>invia</button>
          </form>
        )}
      </Profiler>
    </>
  );
}

export default App;

// <RadioInput dataField={groups.hobbies} />
