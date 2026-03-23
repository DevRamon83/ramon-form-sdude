import Counter from "./Counter";

export default function InputTextarea({ dataField }) {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};

  const { id, counterLabel, maxChars, maxWords, label } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;

  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};

  const counterRender = maxChars || maxWords;
  const charsType = maxChars || false;

  const props = {
    required: dataField.config.required,
    placeholder: dataField.config.placeholder,
    rows: dataField.config.rows,
    cols: dataField.config.cols,
    id: dataField.config.id,
    name: dataField.config.id,
    autoComplete: dataField.config.autoComplete,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown,
    spellCheck: false,
    maxLength: maxChars,
  };

  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <textarea {...props} />

      {counterRender && (
        <Counter
          max={maxChars || maxWords}
          value={value}
          label={counterLabel}
          charsType={charsType}
        />
      )}
    </>
  );
}
