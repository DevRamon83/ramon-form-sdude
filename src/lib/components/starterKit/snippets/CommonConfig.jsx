export default function CommonConfig({
  constName,
  id,
  type,
  placeholder,
  label,
}) {
  return (
    <>
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">{constName}</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">id: </span>
      <span className="PRIstrings">"{id}"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">type: </span>
      <span className="PRIstrings">"{type}"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">placeholder: </span>
      <span className="PRIstrings">"{placeholder}"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">label: </span>
      <span className="PRIstrings">"{label}"</span>,{"\n"}
    </>
  );
}
