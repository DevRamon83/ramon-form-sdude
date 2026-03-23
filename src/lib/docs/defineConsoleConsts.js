export const defineConsoleConsts = (input) => {
  switch (input) {
    case "myTextField":
      return { title: "TEXT INPUT CONFIGURATION", input: "TextInput" };
    case "myRadioGroup":
      return { title: "RADIO INPUT CONFIGURATION", input: "RadioInput" };
    case "myCheckboxGroup":
      return { title: "CHECKBOX INPUT CONFIGURATION", input: "CheckboxInput" };
    case "myDatetimeField":
      return {
        title: "DATETIME-LOCAL INPUT CONFIGURATION",
        input: "DateTimeInput",
      };
    case "myEmailField":
      return { title: "EMAIL INPUT CONFIGURATION", input: "EmailInput" };
    case "myNumberField":
      return { title: "NUMBER INPUT CONFIGURATION", input: "NumberInput" };
    case "myPasswordField":
      return { title: "PASSWORD INPUT CONFIGURATION", input: "PasswordInput" };
    case "mySelect":
      return { title: "SELECT INPUT CONFIGURATION", input: "SelectInput" };
    case "myTelField":
      return { title: "TEL INPUT CONFIGURATION", input: "TelInput" };
    case "myTextarea":
      return { title: "TEXTAREA INPUT CONFIGURATION", input: "TextareaInput" };
    case "myDateField":
      return { title: "Date INPUT CONFIGURATION", input: "DateInput" };
    case "myUrlField":
      return { title: "URL INPUT CONFIGURATION", input: "UrlInput" };
    case "myTimeField":
      return { title: "TIME INPUT CONFIGURATION", input: "TimeInput" };
    default:
      break;
  }
};
