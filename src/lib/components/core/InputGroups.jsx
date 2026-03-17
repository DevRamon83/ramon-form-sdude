const InputGroup = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, required, type, title, name } = dataField.config;
  const { value } = inputProps;
  const { onChange } = eventHandlers;
  const funcOnChange = onChange ? onChange : () => {};
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
