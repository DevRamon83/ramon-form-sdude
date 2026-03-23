const InputGroup = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, required, type, title, name } = dataField.config;
  const { value } = inputProps;
  const { onChange, onBlur, onFocus, onKeyDown } = eventHandlers;

  const funcOnChange = onChange ? onChange : () => {};
  const funcOnBlur = onBlur ? onBlur : () => {};
  const funcOnFocus = onFocus ? onFocus : () => {};
  const funcOnKeyDown = onKeyDown ? onKeyDown : () => {};
  const requiredCheckbox = type === "checkbox" && options.ids.length === 1;
  const checkboxHandler = requiredCheckbox ? required : null;
  const requiredHandler = type === "radio" ? required : checkboxHandler;

  return (
    <>
      {title && <div className={""}>{title}</div>}
      {options.ids.map((id, index) => (
        <div key={id}>
          <input
            type={type}
            id={id}
            required={requiredHandler}
            name={name}
            checked={type === "checkbox" ? value[id] : value === id}
            onBlur={funcOnBlur}
            onFocus={funcOnFocus}
            onKeyDown={funcOnKeyDown}
            onChange={funcOnChange}
            value={id}
          />
          <label htmlFor={id}>{options.labels[index]}</label>
        </div>
      ))}
    </>
  );
};

export default InputGroup;
