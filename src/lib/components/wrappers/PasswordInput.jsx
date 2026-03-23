import InputField from "../core/InputField";
import ErrorInvalidCall from "./ErrorInvalidCall";
import RenderGate from "./RenderGate";
import { useMemo } from "react";

/*
We prioritize useMemo over React.memo because, in ultra-intensive scenarios 
with 3000+ controlled inputs, the overhead of React's high-level reconciliation 
is slower than our targeted reference-based memoization.
*/
function PasswordInput({ dataField, isAsync, i18n }) {
  console.log("PasswordInput ", dataField?.state?.value);

  return useMemo(() => {
    const component = <InputField dataField={dataField} />;

    return !dataField ? (
      <ErrorInvalidCall isAsync={isAsync} />
    ) : (
      <RenderGate component={component} dataField={dataField} />
    );
  }, [dataField?.state?.value, i18n]);
}

export default PasswordInput;
