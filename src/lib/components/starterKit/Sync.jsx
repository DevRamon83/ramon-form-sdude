import FileSystem from "./FileSystem";
import Configurations from "./Configurations";
import Form from "./snippets/Form";
import Hook from "./snippets/Hook";
import Import from "./snippets/Import";
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
      <Import />
      <p className="ramon__p">
        {" "}
        and then pass the configuration object to the hook:
      </p>
      <Hook />
      <p className="ramon__p"></p>
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
        You are not required to attach a ref to the entire form. If you don't
        need it, don't do it. Usually, attaching a ref to the form is simply the
        best and fastest way to access all its constituent inputs. As for the
        rest, the rules to follow are very straightforward, and I will summarize
        them for you below:
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
      <h2 className="ramon__h2">Accessing state values</h2>
      <p className="ramon__p">
        As for accessing the values of controlled components, simply call them
        using standard JS syntax; for example, to conditionally show certain
        fields, you can do it like this:
      </p>
      <ConditionalForm />
      <p className="ramon__p">
        If you need functions to handle the supported events (onChange, onBlur,
        onFocus, and onKeyDown), you just have to map them in the configuration
        object; they will automatically receive the updated state:
      </p>
      <Validation />
      <p className="ramon__p">
        or whatever other validation logic you might need.{" "}
        <strong>
          <u>
            One thing you must be careful about is to never dynamically
            manipulate the configuration array, the one I called configArray in
            my examples
          </u>
        </strong>
        . The only case where configArray can be managed dynamically is if you
        need to fetch configuration objects; in that case, you'll just need to
        follow a couple of extra small steps, nothing complicated. So, what’s
        next? If you want one last piece of advice, do this: in the JSX where
        you are rendering the starter kit, right above that line, create your
        first form. Play around with it, make mistakes, and copy the
        configuration objects you find in the console. This way, you’ll see
        firsthand how simple it is to design a form with ramon-form-sdude.
      </p>
      <p className="ramon__p"></p>
    </>
  );
}
