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
      &nbsp;&nbsp;<span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">isValid</span>&nbsp;=&nbsp;
      <span className="PRIsub">value.length</span>
      &nbsp;{"<"}&nbsp;
      <span className="PRIparentheses">50</span>;{"\n"}
      &nbsp;&nbsp;
      <span className="PRIparentheses">// the rest of your logic</span>
      {"\n"}
      <span className="PRIparentheses">{"}"}</span>
    </p>
  );
}
