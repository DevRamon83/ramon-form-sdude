import AsyncMode from "./AsyncMode";
import HowItWorks from "./HowItWorks";
import I18n from "./I18n";
import Sync from "./Sync";
import UiMode from "./UiMode";

export default function ViewManager({ toggle, page, setToggle }) {
  return (
    <>
      <div className="ramon__minimize" onClick={() => setToggle(!toggle)}>
        {toggle ? "HIDE" : "SHOW"} STARTER KIT
      </div>
      {toggle && <div>{page === "sync" && <Sync />}</div>}
      {toggle && <div>{page === "async" && <AsyncMode />}</div>}
      {toggle && <div>{page === "i18n" && <I18n />}</div>}
      {toggle && <div>{page === "uiMode" && <UiMode />}</div>}
      {toggle && <div>{page === "doc" && <HowItWorks />}</div>}
    </>
  );
}
