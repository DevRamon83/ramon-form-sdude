import Counter from "./Counter";

export default function InputTextarea({ dataField }) {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};

  const { id, required, counterLabel, rows, cols, maxChars, maxWords, label } =
    dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;

  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};

  const counterRender = maxChars || maxWords;
  const charsType = maxChars || false;

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <textarea
        required={required}
        spellCheck="false"
        maxLength={maxChars}
        id={id}
        rows={rows}
        cols={cols}
        name={id}
        value={value}
        onChange={funcOnChange}
        onBlur={funcOnBlur}
        onFocus={funcOnFocus}
        onKeyDown={funcOnKeyDown}
      />

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
