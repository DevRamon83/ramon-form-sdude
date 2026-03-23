export default function AsyncSetState() {
  return (
    <p className="ramon__ide">
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIparentheses"> [</span>
      <span className="PRIvar">data</span>,&nbsp;
      <span className="PRIfunc">setData</span>
      <span className="PRIparentheses">]</span> =&nbsp;
      <span className="PRIfunc">useState</span>
      <span className="PRIparentheses">(</span>
      <span className="PRIfunc">{"{"}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">configArray</span>:&nbsp;
      <span className="PRIdeclare">[]</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">isAsync</span>:&nbsp;
      <span className="PRIdeclare">true</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">i18n</span>:&nbsp;
      <span className="PRIdeclare">false</span>,{"\n"}
      <span className="PRIfunc">{"}"}</span>
      <span className="PRIparentheses">)</span>
    </p>
  );
}
