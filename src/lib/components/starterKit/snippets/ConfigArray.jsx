export default function ConfigArray() {
  return (
    <>
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">data</span>&nbsp;=&nbsp;
      <span className="PRIparentheses"> [</span>
      <span className="PRIvar">
        username, email, confirmEmail, password, confirmPassword
      </span>
      <span className="PRIparentheses">]</span>
      {"\n"}
      {"\n"}
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">objConfig</span>&nbsp;=&nbsp;
      <span className="PRIparentheses">{"{"}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">configArray:</span>&nbsp;
      <span className="PRIvar">data</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">isAsync:</span>&nbsp;
      <span className="PRIdeclare">false</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">i18n:</span>&nbsp;
      <span className="PRIvar">lang</span>,{"\n"}
      <span className="PRIparentheses">{"}"}</span>
    </>
  );
}
