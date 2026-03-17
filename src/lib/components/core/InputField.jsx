const InputField = ({ dataField, async }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};

  const {
    id,
    required,
    label,
    type,
    placeholder,
    autoComplete,
    min,
    max,
    step,
  } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;

  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};

  return dataField.error && async ? null : (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        type={type}
        id={id}
        placeholder={placeholder}
        name={id}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={funcOnChange}
        onBlur={funcOnBlur}
        onFocus={funcOnFocus}
        onKeyDown={funcOnKeyDown}
        autoComplete={autoComplete}
      />
    </>
  );
};

export default InputField;
