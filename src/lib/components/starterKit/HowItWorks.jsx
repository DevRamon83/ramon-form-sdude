import wrapper from "../../../assets/wrapper.png";
import renderGate from "../../../assets/renderGate.png";
import ramonHook from "../../../assets/ramonHook.png";

export default function HowItWorks() {
  return (
    <>
      <p className="ramon__p">
        For those who want to understand how this library works (and not just
        settle for the fact that it does) this section explains the choices made
        during development.{" "}
        <u>You will discover that many of these decisions are non-idiomatic</u>;
        they represent an inevitable trade-off necessary to guarantee high
        performance and ease of use in extreme cases that are not, by nature,
        natively supported by React or other libraries.{" "}
        <strong>
          I am well aware that many of these solutions may appear unorthodox, or
          even "dirty," compared to standard React techniques
        </strong>
        . However, in building this library, whenever a strategic choice was
        required, I systematically prioritized pragmatism over common standards.
      </p>
      <h2 className="ramon__h2">Why it never lags</h2>
      <p className="ramon__p">
        The reason these inputs never produce lag, despite intensive use of
        controlled components, is so simple it might seem trivial:{" "}
        <u>
          instead of using React.memo to tell the framework what to re-render,
          we memoized the entire component
        </u>
        . This allowed us to bypass the systematic reconciliation process that
        React would otherwise perform, focusing the analysis solely on the state
        value; a value that, as you will see later, is actually a copy of the
        real state managed by the library.
        <img className="ramon__snap" src={wrapper} alt="wrapper" />
      </p>
      <h2 className="ramon__h2">Error Handling and the Dual-Wrapper System</h2>
      <p className="ramon__p">
        Every UI component is essentially wrapped in two layers. The first one,
        which you saw earlier, simply evaluates whether a missing configuration
        object is due to asynchronous management or if it is an actual error.
        The second layer is the RenderGate. As shown in the image below, it
        checks for errors within the configuration object. If errors are found,
        it triggers the component responsible for rendering them; otherwise, it
        launches the UI component that handles the requested input.
        <img className="ramon__snap" src={renderGate} alt="renderGate" />
      </p>
      <h2 className="ramon__h2">
        Deterministic Parsing, a Hybrid Caching Approach with Hooks and Refs
      </h2>
      <p className="ramon__p">
        While the wrapper system was essential to prevent constant re-renders of
        individual form inputs, the next challenge was ensuring that every new
        trigger wouldn't restart the entire parsing process. To address this, I
        implemented a dual approach:{" "}
        <strong>
          using a ref as a cache for the parsed data, and two useMemo hooks to
          incorporate conditional logic without violating the rules of hook
          order
        </strong>
        . As shown in the image below, the process follows a strict sequence:
        first parsing the data, then utilizing a custom hook to generate the
        actual states, and finally connecting those states to their respective
        handlers. Without the conditional logic enabled by these useMemo hooks,
        I wouldn't have been able to 'lock' the parsing once completed, nor
        divide it into two consecutive stages separated by the state creation
        logic.
      </p>
      <h2 className="ramon__h2">The Dual-Stage Parsing System</h2>
      <p className="ramon__p">
        Choosing how to organize data parsing to ensure high performance was the
        true challenge in creating this library. The decision to use only four
        states (one for each reference input category: fields, groups, selects,
        and textareas) was a logical consequence of the fact that only four UI
        components abstractly manage the different inputs behind the multiple
        wrappers. In other words, you find the bulk of the inputs within the
        fields object simply because, behind the scenes, the UI component
        rendering them is always the same: "InputField."{" "}
        <u>
          Initially, the choice to use wrappers was driven by the desire to
          maintain recognizable semantics for different input types, preventing
          users from getting lost in a sea of components with nearly identical
          names
        </u>
        . It only later became clear that these wrappers also served as a tool
        to further improve both performance and Developer Experience (DX).
        Regarding the Dual-Stage Parsing, this approach was born from necessity:
        <br />
        <strong>
          handling everything in a single step would have made debugging
          extremely complicated
        </strong>
        .<br /> By separating the actual parsing from the process of creating
        the configuration objects returned to the caller, we were able to
        concentrate the bulk of the abstraction and complexity in the first
        stage, leaving the second stage much simpler, more readable, and easier
        to manage.
        <img className="ramon__snap" src={ramonHook} alt="hook" />
      </p>
      <h2 className="ramon__h2">The Error Tracking System</h2>
      <p className="ramon__p">
        Once the decision was made to separate the actual parsing from the
        creation of configuration objects for the calling component, building an
        error tracking system became a logical necessity.{" "}
        <strong>
          To prevent the processes managed by configDispatcher from collapsing
          unpredictably due to malformed objects, it was essential to catch
          every potential user error during the initial parsing phase
        </strong>
        . Given this requirement, tracking them to provide precise feedback was
        the most obvious and straightforward next step. The parseConfig function
        does more than just decompose user configuration objects to populate the
        customLogic object (
        <u>
          which is based on parallel arrays and pointers, following the
          Data-Oriented Design paradigm
        </u>
        ); it analyzes the data as it processes it. Whenever it encounters
        malformed data, it tracks it contextually. This allows the system to
        return precise feedback, making error correction easy and immediate for
        the user. Finally, to prevent the analysis logic from proliferating
        uncontrollably and to maintain a strict separation of concerns, the
        tracking system was entrusted to a Guard System.
      </p>
      <h2 className="ramon__h2">State Mirroring</h2>
      <p className="ramon__p">
        The library's reactivity is guaranteed by an idiomatic use of React
        states.{" "}
        <u>
          The decision to return a copy of the state to the user was driven by
          the need to wire the handlers and ensure constant alignment between
          the values recorded in the states and those managed by the individual
          inputs
        </u>
        . The system ensures data alignment and focus stability by syncing
        states during the render cycle. When a state update triggers a
        re-render, the statesMirroring function generates a complete copy of all
        state values before the component finishes rendering. This provides the
        calling component with a fresh and updated version of the data without
        ever touching other parts of the object, such as configuration data or
        handlers. In this way, I wanted to demonstrate that through a pragmatic
        approach and a deep understanding of React’s internals,{" "}
        <strong>
          it is possible to overcome the framework's known limitations by
          leveraging React for its primary function: the efficient rendering of
          interfaces
        </strong>
        .
      </p>
    </>
  );
}
