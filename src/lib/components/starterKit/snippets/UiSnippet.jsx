export default function UiSnippet() {
  return (
    <p className="ramon__ide">
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">username</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">config: </span>
      <span className="PRImarkup">{"{"}</span> {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">id: </span>
      <span className="strings">"username"</span>,{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">type: </span>
      <span className="strings">"text"</span>,{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">placeholder: </span>
      <span className="strings">"john.smith"</span>,{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">label: </span>
      <span className="strings">"Enter your username"</span>,{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">required: </span>
      <span className="PRIdeclare">true</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{"}"}</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">state: </span>
      <span className="PRImarkup">{"{"}</span> {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIdeclare">value: </span>
      <span className="PRIvar">yourState</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{"}"}</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">handlers: </span>
      <span className="PRImarkup">{"{"}</span> {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIfunc">
        onChange: func
      </span>, {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">onBlur: </span>
      <span className="PRIdeclare">false</span>, {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">onKeyDown: </span>
      <span className="PRIdeclare">false</span>, {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">onFocus: </span>
      <span className="PRIdeclare">false</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{"}"}</span>, {"\n"}
      <span className="PRIparentheses">{"}"}</span> {"\n"}
    </p>
  );
}
