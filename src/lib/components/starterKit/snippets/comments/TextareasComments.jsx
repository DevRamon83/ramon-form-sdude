import CommonsComments from "./CommonsComments";
import HandlersComments from "./HandlersComments";

export default function TextareasComments() {
  return (
    <p className="ramon__ide ramon__ideComments">
      {"\n"}
      <CommonsComments />
      <span className="PRIparentheses">
        // Optional: Number of visible text lines
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: Number of average characters per line
      </span>
      {"\n"}
      <span className="PRIparentheses">// Optional: UI label for counter</span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: Set a char limit and counter (Mutually exclusive with
        maxWords)
      </span>
      {"\n"}
      <HandlersComments />
    </p>
  );
}
