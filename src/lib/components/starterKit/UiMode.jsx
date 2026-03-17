import UiSnippet from "./snippets/UiSnippet";

export default function UiMode() {
  return (
    <>
      <p className="ramon__p">
        As explained in the synchronous configuration tab, one of the main
        advantages of using the hook is the ability to create complex and heavy
        forms while maintaining high order within the component, all without
        having to manage states yourself. However, this does not mean you cannot
        use the input rendering components (TextInput, EmailInput, etc.) as
        simple UI components.
        <br />
        <strong>
          In this case, the configuration objects you create can no longer be
          flat
        </strong>
        ; they must mirror the shape of the objects returned by the hook (as
        shown in the snippet below).{" "}
        <strong>
          <u>Most importantly, you will lose the error-tracking tools</u>
        </strong>
        . This means, for example, that if you create two objects with colliding
        IDs, your form will stop working as expected, and you will no longer
        have the tool that precisely indicates the nature and location of the
        error.
        <br />
        You might still want to use the UI components to avoid rewriting JSX
        every time or to handle dynamic form creation while maintaining
        excellent performance.{" "}
        <u>
          Below is a simple example of how to structure your configuration
          objects for this case
        </u>
        , though a simple console.log is enough to analyze the structure of the
        configuration object that the various components receive.
      </p>
      <UiSnippet />
      <p className="ramon__p">
        Even in this case, the only mandatory fields are those related to id and
        type;{" "}
        <strong>
          <u>all other fields remain optional</u>
        </strong>
        , just as when you use the hook.
      </p>
    </>
  );
}
