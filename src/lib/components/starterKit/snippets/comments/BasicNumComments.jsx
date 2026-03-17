import CommonsComments from "./CommonsComments";
import HandlersComments from "./HandlersComments";

export default function BasicNumComments({ type }) {
  const minAndMax = type === "number" ? "number" : "string";
  return (
    <p className="ramon__ide ramon__ideComments">
      {"\n"}
      <CommonsComments />
      <span className="PRIparentheses">// Optional: must be a {minAndMax}</span>
      {"\n"}
      <span className="PRIparentheses">// Optional: must be a {minAndMax}</span>
      {"\n"}
      <span className="PRIparentheses">// Optional: must be a number</span>
      {"\n"}
      <HandlersComments />
    </p>
  );
}
