import { useEffect, useState } from "react";
import ViewManager from "./ViewManager";
import { styles } from "./css";

export default function StarterKit() {
  const [toggle, setToggle] = useState(true);
  const [page, setPage] = useState("sync");
  const pageArray = ["sync", "async", "i18n", "uiMode", "doc"];
  const titlesArray = [
    "Synchronous configuration",
    "Asynchronous configuration",
    "I18n",
    "Ui mode: standalone",
    "How it works",
  ];

  useEffect(() => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styles);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

    return () => {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (s) => s !== sheet,
      );
    };
  }, []);

  return (
    <div className="ramonContainer">
      {toggle && (
        <div className="ramon__starterKit">
          <h1 className="ramon__h1">
            Thank you for choosing ramon-form-sdude!
          </h1>

          <div className="ramon__pagesContainer">
            {pageArray.map((p, index) => (
              <div
                key={p}
                className={`ramon__pages ${page === p ? "ramon__activePage" : ""}`}
                onClick={() => setPage(p)}
              >
                {titlesArray[index]}
              </div>
            ))}
          </div>
        </div>
      )}
      <ViewManager page={page} toggle={toggle} setToggle={setToggle} />
    </div>
  );
}
