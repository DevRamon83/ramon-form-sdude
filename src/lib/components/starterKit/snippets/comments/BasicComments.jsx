import CommonsComments from "./CommonsComments";
import HandlersComments from "./HandlersComments";

export default function BasicComments() {
  return (
    <p className="ramon__ide ramon__ideComments">
      {"\n"}
      <CommonsComments />
      <HandlersComments />
    </p>
  );
}
