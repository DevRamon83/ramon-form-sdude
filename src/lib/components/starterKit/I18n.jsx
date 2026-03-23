import I18nSnippet from "./snippets/I18nSnippet";

export default function I18n() {
  return (
    <>
      <p className="ramon__p">
        If your application is multi-language, you likely already have a logic
        (a hook, a context, or a state) managing your translations. To make your
        forms reactive to language changes, you simply need to follow three
        steps:
      </p>
      <p className="ramon__p">
        1. <strong>Map the i18n key</strong>: Pass your language state (the one
        that triggers the update across the rest of your site) to the i18n
        property inside objConfig. This tells the Ramon engine exactly when it’s
        time to recalculate the labels.
        <br />
        2. <strong>Propagate the i18n prop</strong>: Pass that same variable as
        a prop to the components rendering your inputs. This "unlocks" the UI
        and forces an immediate visual update.
        <br /> 3. <strong>Use dynamic variables</strong>: Populate your labels
        (e.g., label or placeholder) using the variables that hold your
        translations, exactly as you would in any standard React component.
      </p>
      <I18nSnippet />
      <p className="ramon__p">
        Naturally, you can use any logic you prefer for these dynamic variables,
        including external libraries;{" "}
        <u>
          the key point is that as long as those variables are reactive, your
          input texts will change right along with them
        </u>
        . In other words when you develop a multi-language site, you might have
        a variable (e.g. title) that is itself reactive and changes whenever the
        global language state updates. Normally, you’d render that string in JSX
        like this: {"<h1>{title}</h1>"}. In Ramon’s configuration objects, you
        do exactly the same thing. No new syntax to learn.
      </p>
    </>
  );
}
