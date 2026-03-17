export default function Hook() {
  return (
    <p className="ramon__ide">
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIparentheses">{"{"}</span>&nbsp;{"\n"}
      <span className="PRIvar">fields</span>,&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="PRIparentheses">
        // Contains the following input types: text, date, datetime-local,
        email, number, password, tel, time, url
      </span>
      {"\n"}
      <span className="PRIvar">groups</span>,&nbsp;&nbsp;&nbsp;&nbsp;
      <span className="PRIparentheses">
        // Contains the following input types: radio and checkbox
      </span>
      {"\n"}
      <span className="PRIvar">selects</span>,&nbsp;&nbsp;&nbsp;
      <span className="PRIparentheses">
        // Contains the following input types: select
      </span>
      {"\n"}
      <span className="PRIvar">textareas</span>&nbsp;{" "}
      <span className="PRIparentheses">
        // Contains the following input types: textarea
      </span>
      {"\n"}
      <span className="PRIparentheses">{"}"}</span>&nbsp; =&nbsp;
      <span className="PRIfunc">useRamonForms</span>
      <span className="PRIparentheses">(</span>
      <span className="PRIvar">configArray</span>
      <span className="PRIparentheses">)</span>
    </p>
  );
}
