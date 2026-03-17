import AsyncFetchData from "./snippets/AsyncFetchData";
import AsyncFormSnippet from "./snippets/AsyncFromSnippet";
import AsyncHookParams from "./snippets/AsyncHookParams";
import AsyncSetState from "./snippets/AsyncSetState";

export default function AsyncMode() {
  return (
    <>
      <p className="ramon__p">
        In most cases, forms are static and synchronous by nature, so we design
        them directly within our components without needing to manage any side
        effects. However, there are scenarios where you might need to fetch data
        from a database or a global state, for instance in a multi-language
        website.{" "}
        <strong>
          ramon-form-sdude also supports these cases, as long as the
          configuration structure changes only once
        </strong>
        . Essentially, the hook handles an empty array while it waits to be
        populated (asynchronous state). However, once populated, the array must
        remain static;{" "}
        <strong>
          <u>you cannot dynamically change its shape afterward</u>
        </strong>
        . Setting up the asynchronous mode is very simple and takes just a few
        steps, which I will summarize below:
      </p>
      <p className="ramon__p">
        1. Create a React state and initialize it with an empty array
      </p>
      <AsyncSetState />
      <p className="ramon__p">
        2. Pass the state to the hook as the first parameter and a value of true
        as the second parameter to notify it that you are in asynchronous mode.
      </p>
      <AsyncHookParams />
      <p className="ramon__p">
        3. Execute the effect or the logic needed to populate the state with
        your configuration objects. Keep in mind, however, that once the state
        is populated, you cannot change it again.
        <br />
        In the following example,{" "}
        <strong>
          I used an effect to handle the fetch logic, but you are not required
          to do so
        </strong>
        . You can use any logic you prefer; you can even write it directly
        within the component body. The reactivity is driven by the state itself.
      </p>
      <AsyncFetchData />
      <p className="ramon__p">
        4.{" "}
        <strong>
          <u>
            You must pass an isAsync prop with a value of true to every
            individual component you render
          </u>
        </strong>
        . This notifies them that you are in asynchronous mode. Additionally,
        ensure you use conditional logic for the form rendering to prevent the
        app from crashing in the absence of data.
      </p>
      <AsyncFormSnippet />

      <p className="ramon__p">
        As you can see, the setup is straightforward. You will have no issues as
        long as the state array remains immutable after being populated. In
        fact,{" "}
        <strong>
          <u>
            if you try to add a new configuration object to the array after the
            initial population, the corresponding input will never be rendered
          </u>
        </strong>
        . For this reason, if you need to manage inputs dynamically, do not
        attempt to add configuration objects to the original array while the
        form lifecycle is active; simply use conditional logic.
        <br />
        If you absolutely must create inputs dynamically (e.g., a variable list
        of fields), you can adopt a hybrid approach.{" "}
        <strong>
          Nothing prevents you from using the hook for the main form structure
          while managing a few dynamic fields with standard React logic
        </strong>
        . The hook will remain isolated and performant, giving you the freedom
        to manually add what you need without conflicts.
      </p>
    </>
  );
}
