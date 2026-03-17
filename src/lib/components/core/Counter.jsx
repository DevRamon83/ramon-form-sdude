export default function Counter({ label, value, max, charsType }) {
  let counter = null;
  if (charsType) {
    counter = value.trim() === "" ? 0 : value.length;
  } else {
    counter = value.trim() === "" ? 0 : value.trim().split(/\s+/).length;
  }

  return (
    <div className="">
      <span>{label}</span> <br />
      <span>
        {counter} / {max}
      </span>
    </div>
  );
}
