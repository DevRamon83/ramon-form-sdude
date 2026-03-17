export default function HandlersComments({ requiredGroups }) {
  const standard = `// Optional: Set 'true' for required field (remove if not needed)`;
  const required = requiredGroups ? requiredGroups : standard;
  return (
    <>
      <span className="PRIparentheses">{required}</span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: function (custom), true (default), false || missing
        (uncontrolled)
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: Event handler function (remove if not needed)
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: Event handler function (remove if not needed)
      </span>
      {"\n"}
      <span className="PRIparentheses">
        // Optional: Event handler function (remove if not needed)
      </span>
      {"\n"}
    </>
  );
}
