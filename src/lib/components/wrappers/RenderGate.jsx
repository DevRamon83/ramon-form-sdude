import ErrorInput from "./ErrorInput";

export default function RenderGate({ component, dataField }) {
  return dataField.error ? <ErrorInput dataField={dataField} /> : component;
}
