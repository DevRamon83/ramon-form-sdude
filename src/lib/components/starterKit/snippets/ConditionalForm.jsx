export default function ConditionalForm() {
  return (
    <p className="ramon__ide">
      <span className="PRImarkup">{`<form`}</span>&nbsp;
      <span className="PRIattribute">ref</span>=
      <span className="PRImarkup">{"{"}</span>
      {<span className="PRIvar">formRef</span>}
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRIattribute">onSubmit</span>=
      <span className="PRImarkup">{`{`}</span>
      <span className="PRIfunc">handler</span>
      <span className="PRImarkup">{`}`}</span>
      <span className="PRImarkup">{`>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">TextInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">username</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">EmailInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">email</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">email</span>.
      <span className="PRIsub">state</span>.
      <span className="PRIsub">value</span>
      &nbsp;!==&nbsp;
      <span className="PRIstrings">""</span> &&&nbsp;
      <span className="PRIsub">{"("}</span>
      {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">EmailInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">confirmEmail</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">{")"}</span>
      <span className="PRImarkup">{"}"}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">PasswordInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">password</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">PasswordInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">confirmPassword</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<button>`}</span>
      send
      <span className="PRImarkup">{`</button>`}</span>
      {"\n"}
      <span className="PRImarkup">{`</form>`}</span>
    </p>
  );
}
