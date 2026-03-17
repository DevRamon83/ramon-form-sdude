const InputSelect = ({ dataField }) => {
  const inputProps = dataField.state || {};
  const eventHandlers = dataField.handlers || {};
  const { options, id, labels, label, required } = dataField.config;

  const { value } = inputProps;
  const { onChange } = eventHandlers;

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <select
        required={required}
        name={id}
        id={id}
        onChange={onChange}
        value={value}
      >
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
