import HandlersComments from "./HandlersComments";

export default function GroupsComments({ requiredGroups }) {
  return (
    <p className="ramon__ide ramon__ideComments">
      {"\n"}
      {"\n"}
      <span className="PRIparentheses">// required: Ids must be unique</span>
      {"\n"}
      <span className="PRIparentheses">
        // required: Labels and ids must be aligned
      </span>
      {"\n"}
      {"\n"}
      <span className="PRIparentheses">
        // Required: as in HTML, must be a string
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: UI title of your input (remove if not needed)
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Required: This name becomes the key in the 'groups' object
      </span>
      {"\n"}
      <HandlersComments requiredGroups={requiredGroups} />
    </p>
  );
}
