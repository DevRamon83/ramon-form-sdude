import CommonConfig from "../snippets/CommonConfig";
import HandlersConfig from "../snippets/HandlersConfig";

export default function NumbersTypeInterface({
  id,
  label,
  type,
  placeholder,
  constName,
  min,
  max,
  step,
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
      &nbsp;&nbsp;<span className="PRIsub">min: </span>
      <span className="PRIparentheses">{min}</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">max: </span>
      <span className="PRIparentheses">{max}</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">step: </span>
      <span className="PRIparentheses">{step}</span>,{"\n"}
      <HandlersConfig />
    </>
  );
}
