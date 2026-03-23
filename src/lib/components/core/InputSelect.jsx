const InputSelect = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, id, labels, label, required } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;

  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};

  const props = {
    required,
    name: id,
    id,
    onBlur: funcOnBlur,
    onFocus: funcOnFocus,
    onKeyDown: funcOnKeyDown,
  };

  if (onChange) {
    props.onChange = funcOnChange;
    props.value = value || "";
  }
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <select {...props}>
        {options.map((option, index) => (
          <option key={option} value={option}>
            {labels[index]}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputSelect;
