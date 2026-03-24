const InputField = ({ dataField, async }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};

  const { id, label } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};
  const props = {
    required: dataField.config.required,
    type: dataField.config.type,
    placeholder: dataField.config.placeholder,
    id: dataField.config.id,
    name: dataField.config.id,
    min: dataField.config.min,
    max: dataField.config.max,
    step: dataField.config.step,
    autoComplete: dataField.config.autoComplete,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown,
  };

  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }

  return dataField.error && async ? null : (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </>
  );
};

export default InputField;
