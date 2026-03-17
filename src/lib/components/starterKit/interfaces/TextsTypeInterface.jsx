import CommonConfig from "../snippets/CommonConfig";
import HandlersConfig from "../snippets/HandlersConfig";

export default function TextsTypeInterface({
  id,
  label,
  type,
  placeholder,
  constName,
}) {
  return (
    <>
      <CommonConfig
        constName={constName}
        id={id}
        type={type}
        placeholder={placeholder}
        label={label}
      />
      <HandlersConfig />
    </>
  );
}
