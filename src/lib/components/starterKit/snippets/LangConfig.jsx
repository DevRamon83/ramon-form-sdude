export default function LangConfig() {
  return (
    <>
      <span className="PRIparentheses">
        // lang is your reactive state (e.g., from a Context or a simple
        useState)
      </span>
      {"\n"}
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">placeholder</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">eng: </span>
      <span className="PRIstrings">"username"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">spa: </span>
      <span className="PRIstrings">"usuario"</span>,{"\n"}
      <span className="PRIparentheses">{"}"}</span> {"\n"}
      {"\n"}
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">username</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">id: </span>
      <span className="PRIstrings">"username"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">type: </span>
      <span className="PRIstrings">"text"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">placeholder: </span>
      <span className="PRIvar">placeholder</span>
      <span className="PRImarkup">[</span>
      <span className="PRIvar">lang</span>
      <span className="PRImarkup">]</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">label: </span>
      <span className="PRIvar">label</span>
      <span className="PRImarkup">[</span>
      <span className="PRIvar">lang</span>
      <span className="PRImarkup">]</span>,{"\n"}
      <span className="PRIparentheses">{"}"}</span>
    </>
  );
}
