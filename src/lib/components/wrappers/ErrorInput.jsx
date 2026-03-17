import docMap from "../../docs/docMap";

export default function ErrorInput({ dataField }) {
  const { id, type, name } = dataField.config;
  const rightId = id ? id : name;
  const { callers, errorType } = dataField.errorData;
  const singular = callers.length === 1;
  const errorGram = singular ? "an error" : "errors";
  const keyGram = singular ? "key" : "keys";

  const voidMessage = "You sent an empty array configuration:";
  const isVoid = rightId === "noLogicArray" ? true : false;

  const errorDivStyle = {
    border: "2px solid red",
    borderRadius: "5px",
    padding: "15px 25px 10px 25px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    display: "inline",
    color: "white",
    border: "1px solid black",
    padding: "5px 10px",
    margin: "0 5px 0 10px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const errorTitle = (
    <>
      The configuration object for <strong>{rightId.toUpperCase()}</strong>{" "}
      input is invalid and contains {errorGram} in the following {keyGram}:
    </>
  );

  const docHandler = (e) => {
    e.preventDefault();
    const func = docMap[type];
    func();
  };

  return (
    <div style={{ ...errorDivStyle }}>
      {isVoid ? voidMessage : errorTitle}
      <ol style={{ textAlign: "left" }}>
        {callers.map((caller, index) => (
          <li key={`${caller}-${index}`}>
            <strong>{caller.toUpperCase()}</strong>: {errorType[index]}
          </li>
        ))}
      </ol>
      <p>
        <strong style={{ color: "red" }}>
          <u>Need help with the configuration</u>?
        </strong>
        <span style={{ ...buttonStyle }} onClick={docHandler}>
          Click here
        </span>
        and check the console
      </p>
    </div>
  );
}
