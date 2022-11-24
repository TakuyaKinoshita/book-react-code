import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray"
};

export const Child2 = memo(() => {
  console.log("Rendering Child2 Component");

  return (
    <div style={style}>
      <p>Child2 Component</p>
    </div>
  );
});