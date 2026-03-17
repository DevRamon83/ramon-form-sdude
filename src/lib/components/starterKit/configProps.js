import BasicComments from "./snippets/comments/BasicComments";
import BasicNumComments from "./snippets/comments/BasicNumComments";
import NumbersTypeInterface from "./interfaces/NumbersTypeInterface";
import TextsTypeInterface from "./interfaces/TextsTypeInterface";
import DatesTypesInterface from "./interfaces/DatesTypesInterface";
import GroupsTypeInterface from "./interfaces/GroupsTypeInterface";
import GroupsComments from "./snippets/comments/GroupsComments";
import SelectsInterface from "./interfaces/SelectsInterface";
import SelectsComments from "./snippets/comments/SelectsComments";
import TextareaInterface from "./interfaces/TextareaInterface";
import TextareasComments from "./snippets/comments/TextareasComments";

export const configTextProps = {
  id: "username",
  type: "text",
  label: "Enter your username",
  placeholder: "john.smith",
  constName: "username",
  component: TextsTypeInterface,
  comments: BasicComments,
};

export const configEmailProps = {
  id: "email",
  type: "email",
  label: "Enter your email",
  placeholder: "john.smith@gmail.com",
  constName: "email",
  component: TextsTypeInterface,
  comments: BasicComments,
};

export const configTelProps = {
  id: "phone",
  type: "tel",
  label: "Enter your phone number",
  placeholder: "+39 12345678",
  constName: "phone",
  component: TextsTypeInterface,
  comments: BasicComments,
};

export const configUrlProps = {
  id: "website",
  type: "url",
  label: "Enter your website url",
  placeholder: "mywebsite.com",
  constName: "website",
  component: TextsTypeInterface,
  comments: BasicComments,
};

export const configPswProps = {
  id: "password",
  type: "password",
  label: "Enter your password",
  placeholder: "myStr0ngPassw0rd!",
  constName: "password",
  component: TextsTypeInterface,
  comments: BasicComments,
};

export const configNumberProps = {
  id: "age",
  type: "number",
  label: "Enter your age",
  placeholder: "43",
  constName: "age",
  min: 21,
  max: 67,
  step: 1,
  interfaceType: "number",
  component: NumbersTypeInterface,
  comments: BasicNumComments,
};

export const configDateProps = {
  id: "birthday",
  type: "date",
  label: "When is your birthday?",
  placeholder: "1980-01-01",
  constName: "birthday",
  min: "1920-01-01",
  max: "1990-01-01",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments,
};

export const configTimeProps = {
  id: "time",
  type: "time",
  label: "What time is it?",
  placeholder: "09:00",
  constName: "time",
  min: "06:00",
  max: "20:00",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments,
};

export const configDateTimeProps = {
  id: "leave",
  type: "datetime-local",
  label: "When do you want to leave?",
  placeholder: "2028-01-01T00:00",
  constName: "leave",
  min: "2027-01-01T09:00",
  max: "2030-01-01T20:30",
  step: 60,
  interfaceType: "date",
  component: DatesTypesInterface,
  comments: BasicNumComments,
};

export const configRadioProps = {
  type: "radio",
  component: GroupsTypeInterface,
  comments: GroupsComments,
};

export const configCheckboxProps = {
  type: "checkbox",
  component: GroupsTypeInterface,
  comments: GroupsComments,
  requiredGroups:
    "// Optional: true (native) only for single checkbox. Multiple options need custom logic",
};

export const configSelectProps = {
  component: SelectsInterface,
  comments: SelectsComments,
  requiredGroups:
    "// Optional: true to require one selection from the group (native)",
};

export const configTextareaProps = {
  id: "message",
  type: "textarea",
  label: "Your message",
  placeholder: "Dear John, hello",
  constName: "message",
  component: TextareaInterface,
  comments: TextareasComments,
};
