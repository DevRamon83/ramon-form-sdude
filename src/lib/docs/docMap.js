import inputCheckboxDoc from "./inputCheckboxDoc";
import inputDateDoc from "./inputDateDoc";
import inputDatetimeDoc from "./inputDatetimeDoc";
import inputEmailDoc from "./inputEmailDoc";
import inputNumberDoc from "./inputNumberDoc";
import inputPasswordDoc from "./inputPasswordDoc";
import inputRadioDoc from "./inputRadioDoc";
import inputSelectDoc from "./inputSelectDoc";
import inputTelDoc from "./inputTelDoc";
import inputTextareaDoc from "./inputTextareaDoc";
import inputTextDoc from "./inputTextDoc";
import inputTimeDoc from "./inputTimeDoc";
import inputUrlDoc from "./inputUrlDoc";

const docMap = {
  checkbox: inputCheckboxDoc,
  date: inputDateDoc,
  "dateTime-local": inputDatetimeDoc,
  email: inputEmailDoc,
  number: inputNumberDoc,
  password: inputPasswordDoc,
  radio: inputRadioDoc,
  select: inputSelectDoc,
  tel: inputTelDoc,
  text: inputTextDoc,
  textarea: inputTextareaDoc,
  time: inputTimeDoc,
  url: inputUrlDoc,
};

export default docMap;
