export default function Validation() {
  return (
    <p className="ramon__ide">
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIfunc">validateUsername</span>&nbsp;=&nbsp;
      <span className="PRIparentheses">{"("}</span>
      <span className="PRIsub">value</span>
      <span className="PRIparentheses">{")"}</span>&nbsp;{"=>"}&nbsp;
      <span className="PRIparentheses">{"{"}</span>
      {"\n"}
      <span className="PRIparentheses">
        // Your logic here: e.g., length check or regex
      </span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">isValid</span>&nbsp;=&nbsp;
      <span className="PRIsub">value.length</span>
      &nbsp;{"<"}&nbsp;
      <span className="PRIparentheses">50</span>;{"\n"}
      &nbsp;&nbsp;
      <span className="PRIreturn">return</span>&nbsp;&nbsp;
      <span className="PRIvar">isValid</span> ?&nbsp;
      <span className="PRIstrings">"success" </span>:&nbsp;
      <span className="PRIstrings">"Username too long"</span>;{"\n"}
      <span className="PRIparentheses">{"}"}</span>
      <span className="PRIparentheses">
        {"\n"}
        {"\n"}
        // updated value in: fields.username.state.value <br />
        // updated return in: fields.username.returns <br />
        // the returns object has for key: onChange, onBlur, onFocus and
        onKeyDown
      </span>
    </p>
  );
}
