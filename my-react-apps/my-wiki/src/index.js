import ReactDom from "react-dom";
import { Fragment } from "react";

const App = () => {
  // return null;
  return (
    <Fragment>
      <h1>Hellp My Wiki what`s working on React!</h1>
      <p>you can be enclosed dom elements by Fragment</p>
    </Fragment>
  );
}

ReactDom.render(<App />, document.getElementById("root"));