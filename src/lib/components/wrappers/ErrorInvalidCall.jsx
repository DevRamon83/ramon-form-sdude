import docMap from "../../docs/docMap";

export default function ErrorInvalidCall({ isAsync, dataField }) {
  if (isAsync) return;
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

  const docHandler = (e) => {
    e.preventDefault();
    const func = docMap["text"];
    func();
  };

  return (
    <div style={{ ...errorDivStyle }}>
      <p>
        "Invalid Component Call: Reference not found. Note: This type of error
        usually occurs in one of three cases:
      </p>
      <ol style={{ textAlign: "left" }}>
        <li>
          <strong>ID Mismatch</strong>: You are trying to call the input using a
          different ID than the one defined in your configuration object.
        </li>
        <li>
          <strong>Incorrect Destructuring</strong>: You are using the correct
          ID, but targeting the wrong logical group. For example, trying to
          render a select input using fields.myInput instead of selects.myInput.
        </li>
        <li>
          <strong>Invalid Type</strong>: You have assigned a non-existent type
          in the configuration object (e.g., a typo like type: 'selct' instead
          of 'select')."
        </li>
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
