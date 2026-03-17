import HandlersConfig from "../snippets/HandlersConfig";

export default function SelectsInterface() {
  return (
    <>
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">accountType</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">id: </span>
      <span className="PRIstrings">"accountType"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">type: </span>
      <span className="PRIstrings">"selects"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">options: </span>
      <span className="PRIparentheses">{"["}</span>
      <span className="PRIstrings">"teacher", "student"</span>
      <span className="PRIparentheses">{"]"}</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">labels: </span>
      <span className="PRIparentheses">{"["}</span>
      <span className="PRIstrings">"teacher", "student"</span>
      <span className="PRIparentheses">{"]"}</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">label: </span>
      <span className="PRIstrings">"Choose your account"</span>,{"\n"}
      <HandlersConfig />
    </>
  );
}
