export default function AsyncFetchData() {
  return (
    <p className="ramon__ide">
      <span className="PRIfunc">useEffect</span>
      <span className="PRIparentheses">(</span>
      <span className="PRIfunc">(</span>
      <span className="PRIfunc">)</span>&nbsp;
      <span className="PRIdeclare">{"=>"}</span>
      <span className="PRIparentheses"> {"{"}</span>
      {"\n"}
      <span className="PRIparentheses">
        &nbsp; &nbsp;// 1. Fetch your data from an API or DB
        <br />
        &nbsp; &nbsp;// 2. Map it to your configuration objects
      </span>
      {"\n"}
      &nbsp; &nbsp;<span className="PRIdeclare">const </span>
      <span className="PRIvar">fetchedConfigs </span>=&nbsp;
      <span className="PRIparentheses">[</span>
      <span className="PRIvar">username</span>,&nbsp;
      <span className="PRIvar">email</span>,&nbsp;
      <span className="PRIvar">password</span>
      <span className="PRIparentheses">]</span>
      {"\n"}
      &nbsp; &nbsp;<span className="PRIfunc">setData</span>
      <span className="PRIparentheses">(</span>
      <span className="PRIfunc">[</span>
      <span className="PRIvar">fetchedConfigs</span>
      <span className="PRIfunc">]</span>
      <span className="PRIparentheses">)</span>
      {"\n"}
      <span className="PRIparentheses"> {"}"}</span>,&nbsp;
      <span className="PRIfunc">[</span>
      <span className="PRIfunc">]</span>
      <span className="PRIparentheses">)</span>
    </p>
  );
}
