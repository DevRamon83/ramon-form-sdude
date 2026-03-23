export default function Handlers() {
  return (
    <>
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIfunc">submitHandler</span> =&nbsp;
      <span className="PRIparentheses">{"("}</span>
      <span className="PRIsub">e</span>
      <span className="PRIparentheses">{")"}</span> {"=>"}&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">e.</span>
      <span className="PRIfunc">preventDefault()</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">myData</span> =&nbsp;
      <span className="PRInew">new</span>&nbsp;
      <span className="PRIcomponents">FormData</span>
      <span className="PRImarkup">(</span>
      <span className="PRIvar">formRef</span>.
      <span className="PRIsub">current</span>
      <span className="PRImarkup">)</span>;{"\n"}
      <span className="PRIparentheses">{"}"}</span>
      {"\n"}
      {"\n"}
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIfunc">resetHandler</span> =&nbsp;
      <span className="PRIparentheses">{"("}</span>
      <span className="PRIparentheses">{")"}</span> {"=>"}&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIvar">formRef.</span>
      <span className="PRIsub">current.</span>
      <span className="PRIfunc">reset()</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIvar">resets.</span>
      <span className="PRIfunc">resetAll()</span>
      {"\n"}
      <span className="PRIparentheses">{"}"}</span>
      {"\n"}
      {"\n"}
    </>
  );
}
