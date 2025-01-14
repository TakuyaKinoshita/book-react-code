import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px"
};

export const Child1 = memo((props) => {
  console.log("Rendering Child1 Component");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1 Component</p>
      <button onClick={onClickReset}>Reset Button</button>
      <Child2 />
      <Child3 />
    </div>
  );
});