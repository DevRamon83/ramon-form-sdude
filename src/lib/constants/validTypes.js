export const fieldType = ["text", "email", "tel", "url", "password"];
export const pseudoFieldType = ["number", "date", "time", "datetime-local"];
export const groupType = ["radio", "checkbox"];
const selectsType = "select";
const textareasType = "textarea";
export const validTypes = [
  ...fieldType,
  ...pseudoFieldType,
  ...groupType,
  selectsType,
  textareasType,
];
