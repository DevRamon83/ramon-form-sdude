import HandlersConfig from "../snippets/HandlersConfig";

export default function GroupsTypeInterface({ type }) {
  return (
    <>
      <span className="PRIdeclare">const</span>&nbsp;
      <span className="PRIvar">hobbies</span> =&nbsp;
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">options: </span>
      <span className="PRIparentheses">{"{"}</span> {"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">ids: </span>
      <span className="PRImarkup">{"["}</span>
      <span className="PRIstrings">"music", "movie", "fitness"</span>
      <span className="PRImarkup">{"]"}</span>,{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="PRIsub">labels: </span>
      <span className="PRImarkup">{"["}</span>
      <span className="PRIstrings">"music", "movie", "fitness"</span>
      <span className="PRImarkup">{"]"}</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIparentheses">{"}"}</span>, {"\n"}
      &nbsp;&nbsp;<span className="PRIsub">type: </span>
      <span className="PRIstrings">"{type}"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">title: </span>
      <span className="PRIstrings">"What are your hobbies?"</span>,{"\n"}
      &nbsp;&nbsp;<span className="PRIsub">name: </span>
      <span className="PRIstrings">"hobbies"</span>,{"\n"}
      <HandlersConfig />
    </>
  );
}
