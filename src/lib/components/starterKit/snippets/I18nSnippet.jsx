import ConfigArray from "./ConfigArray";
import LangConfig from "./LangConfig";

export default function I18nSnippet() {
  return (
    <p className="ramon__ide">
      <LangConfig />
      {"\n"}
      {"\n"}
      <ConfigArray />
      {"\n"}
      {"\n"}
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIparentheses">{"{"}</span>
      <span className="PRIvar">fields</span>,&nbsp;
      <span className="PRIvar">groups</span>,&nbsp;
      <span className="PRIvar">selects</span>,&nbsp;
      <span className="PRIvar">textareas</span>,&nbsp;
      <span className="PRIvar">resets</span>
      <span className="PRIparentheses">{"}"}</span> =&nbsp;
      <span className="PRIfunc">useRamonForms</span>
      <span className="PRIparentheses">(</span>
      <span className="PRIvar">objConfig</span>
      <span className="PRIparentheses">)</span>
      {"\n"}
      {"\n"}
      <span className="PRImarkup">{`<form`}</span>&nbsp;
      <span className="PRIattribute">ref</span>=
      <span className="PRImarkup">{"{"}</span>
      {<span className="PRIvar">formRef</span>}
      <span className="PRImarkup">{"}"}</span>
      <span className="PRImarkup">{`>`}</span>
      {"\n"}
      <span className="PRIparentheses">
        {
          "{/* Passing i18n={lang} ensures the component re-renders when the language changes */}"
        }
      </span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">TextInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">username</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRIattribute">i18n</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">lang</span>
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
      <span className="PRIattribute">i18n</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">lang</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">EmailInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">confirmEmail</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRIattribute">i18n</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">lang</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      &nbsp;&nbsp;<span className="PRImarkup">{`<`}</span>
      <span className="PRIcomponents">PasswordInput</span>&nbsp;
      <span className="PRIattribute">dataField</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">fields</span>.
      <span className="PRIsub">password</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRIattribute">i18n</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">lang</span>
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
      <span className="PRIattribute">i18n</span>=
      <span className="PRImarkup">{"{"}</span>
      <span className="PRIvar">lang</span>
      <span className="PRImarkup">{"}"}</span>&nbsp;
      <span className="PRImarkup">{`/>`}</span>
      {"\n"}
      <span className="PRImarkup">{`</form>`}</span>
    </p>
  );
}
