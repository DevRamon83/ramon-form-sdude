import FileSystem from "./FileSystem";
import Configurations from "./Configurations";
import Form from "./snippets/Form";
import Hook from "./snippets/Hook";
import ConfigArray from "./snippets/ConfigArray";
import FakeCheckbox from "./snippets/FakeCheckbox";
import FakeCheckboxRender from "./snippets/FakeCheckboxRender";
import ConditionalForm from "./snippets/ConditionalForm";
import Validation from "./snippets/Validation";

export default function Sync() {
  return (
    <>
      <p className="ramon__p">
        The purpose of this library is to let you design any type of form while
        keeping your components clean and organized, without sacrificing
        performance or giving up any of React's native features.{" "}
        <strong>
          No matter how complex your form is or how many controlled inputs you
          render
        </strong>
        : as long as you stay within the browser's limits, your inputs will
        never lag.
      </p>
      <h2 className="ramon__h2">Keeping your component organized</h2>
      <p className="ramon__p">
        Regarding your file system organization, there are no constraints. You
        are, of course, free to manage it as you see fit; however, I’d like to
        suggest a structure below that will not only keep your components clean
        and organized, but also help you manage your files intuitively and
        easily.
        <FileSystem />
        This way,{" "}
        <u>
          you can keep the files containing all the configuration objects for a
          specific form in the "configs" folder, while storing the functions
          written for different input types in the "funcs" folder
        </u>
        . By giving these files the same name as the form (for example,
        "signup.js"), it will be extremely easy to find everything you need for
        any future updates.
      </p>

      <h2 className="ramon__h2">Using the hook</h2>
      <p className="ramon__p">
        Once you've decided on your file system organization, simply create an
        array containing all your configuration objects by importing them from
        the "configs" folder (the order in which you insert them is irrelevant);
        for example:
      </p>
      <p className="ramon__ide">
        <ConfigArray />
      </p>
      <p className="ramon__p">
        <strong>Be precise with your configuration keys</strong>; the engine
        expects exactly configArray, isAsync, and i18n. If you misspell
        configArray, the system will catch the error and show you a generic
        alert.{" "}
        <u>
          However, since the other two keys are optional, I can't help you if
          you get them wrong
        </u>
        : the orchestrator will simply ignore the misspelled key and fall back
        to its default internal values without warning.
        <br />
        Having clarified this, all you have to do is pass objConfig as a
        parameter to the hook:
      </p>
      <Hook />
      <p className="ramon__p">
        To use the reset functions, you'll need to wrap them in a handler to
        integrate them with your UI.
        <br />
        The resetAll function can be called as-is and requires no parameters.
        <br />
        In contrast, the resetOne function requires a single string parameter:
        the id of the specific field you wish to reset.
        <br />I recommend attaching a ref to the entire form (as shown in the
        following example).{" "}
        <strong>
          <u>
            This way, if your form contains a mix of controlled and uncontrolled
            inputs, you can achieve a complete reset
          </u>
        </strong>
        :<br />
        use the native browser function formRef.current.reset() to clear
        uncontrolled inputs, while the resetAll() function will handle resetting
        the React states.
      </p>
      <h2 className="ramon__h2">Rendering the inputs</h2>
      <p className="ramon__p">
        To render the inputs, simply import the relevant components from the
        library; you can arrange them as you see fit and apply conditional
        logic. Keep in mind that, just as you would in React, you need a
        reactive state to leverage conditional rendering. To achieve this, you
        must set the "onChange" key in the configuration object to either true
        (if no validation logic is required) or to a function:
      </p>
      <Form />
      <p className="ramon__p">
        <u>
          You are not required to attach a ref to the entire form, but I highly
          recommend doing so for two main reasons
        </u>
        : mass resets and the submission process. Regarding resets even though
        you could handle every single input as controlled without any lag, it is
        still preferable to use a granular approach, employing controlled inputs
        only where strictly necessary.
        <br />
        In this scenario,{" "}
        <strong>
          you will have a mix of controlled and uncontrolled inputs
        </strong>
        ; by using a form ref, you can easily reset the entire form using the
        browser's native Reset API. Regarding submission{" "}
        <strong>
          it is best practice to re-validate your data from scratch before
          sending it
        </strong>
        , rather than relying solely on real-time error tracking (which is meant
        only for providing immediate user feedback). While you could easily
        write a recursive function to access the returns values from your
        states,{" "}
        <u>
          my advice is to use the browser API to collect the data and repeat the
          entire validation process before the final submission
        </u>
        .<br />
        As for the rest, the rules to follow are very straightforward, and I
        will summarize them for you below:
      </p>
      <p className="ramon__p">
        1. <strong>The "dataField" prop is mandatory and binding</strong>; you
        cannot change its name, and if you forget to pass it to the components,
        they will not be able to render.
      </p>
      <p className="ramon__p">
        2.{" "}
        <strong>
          Components (TextInput, EmailInput, etc.) must be imported from the
          library
        </strong>
        . They simply follow standard HTML markup naming: use the type you
        defined in your configuration object plus the "Input" suffix (remember
        to use PascalCase, for example: "NumberInput").
      </p>
      <p className="ramon__p">
        3. The hook returns objects that each contain three keys (config, state,
        handlers).{" "}
        <strong>
          Use the input id set in your configuration object to access that
          specific component
        </strong>{" "}
        (for example: "fields.username").
      </p>
      <h2 className="ramon__h2">Configuration object boilerplate</h2>
      <p className="ramon__p">
        Take a close look at the structure of the configuration objects below:
        you will notice that all the keys and naming conventions follow standard
        HTML. There is nothing new or different to learn, if you know HTML
        writing these configuration objects will be extremely intuitive.
      </p>
      <Configurations />
      <p className="ramon__p">
        In any case, if you make a mistake while structuring a configuration
        object, it's not the end of the world. The hook will simply display a
        box (instead of the input you were trying to render) listing the errors
        you made and a brief explanation of how to fix them. In fact, I'll go
        even further:{" "}
        <strong>
          don't waste time studying how configuration objects are
          structured;{" "}
        </strong>
        <u>instead, create them intentionally malformed</u>. My advice is this:
        if you want to try rendering a checkbox, for example, import the
        "CheckboxInput" component and purposely create a malformed object,
        simply by doing this:
      </p>
      <FakeCheckbox />
      <p className="ramon__p">And then, of course, include it in your JSX:</p>
      <FakeCheckboxRender />
      <p className="ramon__p">
        <strong>
          This will render the error on your screen along with a button that,
          when clicked, provides a boilerplate configuration object (including
          comments) ready to be copied and pasted
        </strong>
        . Just remember that for radios and checkboxes, everything revolves
        around the name attribute rather than the id, since we follow standard
        HTML (as mentioned before).{" "}
        <u>For everything else, you already know what to do</u>. Want to change
        the input design? Use the IDs and handle it via CSS. Need a full form
        reset? You can use the browser's native method if you've attached a ref
        to the form (formRef.current.reset()) or just go with a good old, brutal
        page refresh.
      </p>
      <h2 className="ramon__h2">Accessing state and returns values</h2>
      <p className="ramon__p">
        As for accessing the values of controlled components, simply call them
        using standard JS syntax; for example, to conditionally show certain
        fields, you can do it like this:
      </p>
      <ConditionalForm />
      <p className="ramon__p">
        Similarly, to access the return values of your validation functions, you
        can use "<strong>fields.username.returns.onChange</strong>" (or onBlur,
        or any other event you are working with).
        <br />
        If you need functions to handle the supported events (onChange, onBlur,
        onFocus, and onKeyDown), you just have to map them in the configuration
        object; they will automatically receive the updated state value, along
        with any specific return value you have defined within your validation
        logic:
      </p>
      <Validation />
      <p className="ramon__p">
        or whatever other validation logic you might need.
        <br />
        One thing to keep in mind:{" "}
        <u>
          the configArray should remain static during the component's lifecycle
          to preserve the deterministic alignment of the engine
        </u>
        .<br />
        <strong>
          The only exceptions are when you need to fetch configuration objects
          asynchronously or handle i18n (language changes)
        </strong>
        . For these scenarios, you'll find a dedicated, simple workflow
        explained in the specific tabs of this documentation.The only case where
        configArray can be managed dynamically is if you need to fetch
        configuration objects; in that case, you'll just need to follow a couple
        of extra small steps, nothing complicated. So, what’s next? If you want
        one last piece of advice, do this: in the JSX where you are rendering
        the starter kit, right above that line, create your first form. Play
        around with it, make mistakes, and copy the configuration objects you
        find in the console. This way, you’ll see firsthand how simple it is to
        design a form with ramon-form-sdude.
      </p>
      <p className="ramon__p"></p>
    </>
  );
}
