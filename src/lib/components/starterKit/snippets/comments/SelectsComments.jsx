import HandlersComments from "./HandlersComments";

export default function SelectsComments() {
  return (
    <p className="ramon__ide ramon__ideComments">
      {"\n"}
      <span className="PRIparentheses">
        // Required: This ID becomes the key in the 'fields' object, must be a
        string
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Required: as in HTML, must be a string
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Required: Must be unique among themselves
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Required: Labels and options must be aligned
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: UI label (remove if not needed)
      </span>
      {"\n"}
      <HandlersComments />
    </p>
  );
}
