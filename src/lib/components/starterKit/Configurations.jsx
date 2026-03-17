import { useState } from "react";
import { validTypes } from "../../constants/validTypes";
import {
  configCheckboxProps,
  configDateProps,
  configDateTimeProps,
  configEmailProps,
  configNumberProps,
  configPswProps,
  configRadioProps,
  configSelectProps,
  configTelProps,
  configTextareaProps,
  configTextProps,
  configTimeProps,
  configUrlProps,
} from "./configProps";
import Interface from "./interfaces/Interface";

export default function Configurations() {
  const [activeTab, setActiveTab] = useState("text");

  return (
    <div className="ramon__tabContainer">
      <div className="ramon__tabMenu">
        {validTypes.map((name) => (
          <div
            key={name}
            className={`ramon__tabBtn ${activeTab === name ? "ramon__active" : ""}`}
            onClick={() => setActiveTab(name)}
          >
            {name.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="ramon__tabContent">
        {activeTab === "text" && <Interface props={configTextProps} />}
        {activeTab === "email" && <Interface props={configEmailProps} />}
        {activeTab === "tel" && <Interface props={configTelProps} />}
        {activeTab === "url" && <Interface props={configUrlProps} />}
        {activeTab === "password" && <Interface props={configPswProps} />}
        {activeTab === "number" && <Interface props={configNumberProps} />}
        {activeTab === "date" && <Interface props={configDateProps} />}
        {activeTab === "time" && <Interface props={configTimeProps} />}
        {activeTab === "datetime-local" && (
          <Interface props={configDateTimeProps} />
        )}
        {activeTab === "radio" && <Interface props={configRadioProps} />}
        {activeTab === "checkbox" && <Interface props={configCheckboxProps} />}
        {activeTab === "select" && <Interface props={configSelectProps} />}
        {activeTab === "textarea" && <Interface props={configTextareaProps} />}
      </div>
    </div>
  );
}
