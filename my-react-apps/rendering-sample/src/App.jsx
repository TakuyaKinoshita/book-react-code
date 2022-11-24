import { useCallback } from "react";
import { useState, memo } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = memo(() => {
  console.log("Rendering App Component");

  const [num, setNum] = useState(0);

  const sum = usememo(() => {
    return 1 + 3;
  });

  const onClickButton = () => {
    setNum(num + 1);
  };

  // const onClickReset = () => {
  //   setNum(0);
  // };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
      {/* <Child1 /> */}
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
