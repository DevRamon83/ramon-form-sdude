export default function Interface({ props }) {
  return (
    <div className="ramon__panel">
      <p className="ramon__ide ramon__idePanel ramon__marginLeft">
        <props.component
          id={props.id}
          type={props.type}
          label={props.label}
          placeholder={props.placeholder}
          constName={props.constName}
          min={props?.min}
          max={props?.max}
          step={props?.step}
        />
      </p>
      <props.comments
        type={props.interfaceType}
        requiredGroups={props.requiredGroups}
      />
    </div>
  );
}
