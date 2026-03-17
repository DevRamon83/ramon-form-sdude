import HandlersConfig from "../snippets/HandlersConfig";
import CommonConfig from "../snippets/CommonConfig";

export default function TextareaInterface({
  id,
  label,
  type,
  placeholder,
  constName,
}) {
  return (
    <>
      <CommonConfig
        constName={constName}
        id={id}
        type={type}
        placeholder={placeholder}
        label={label}
      />
      &nbsp;&nbsp;<span className="PRIsub">rows: </span>
      <span className="PRIparentheses">25</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">cols: </span>
      <span className="PRIparentheses">50</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">counterLabel: </span>
      <span className="PRIstrings">"Max word"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">maxChars: </span>
      <span className="PRIparentheses">500</span>,{"\n"}
      <HandlersConfig />
    </>
  );
}
