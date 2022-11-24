import { memo } from "react";

const style = {
  height: "200px",
  backgroundColor: "wheat",
  padding: "8px"
};

export const Child4 = memo(() => {
  console.log("Rendering Child4 Component");

  return (
    <div style={style}>
      <p>Child4 Component</p>
    </div>
  );
});