import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray"
};

export const Child3 = memo(() => {
  console.log("Rendering Child3 Component");

  return (
    <div style={style}>
      <p>Child3 Component</p>
    </div>
  );
});