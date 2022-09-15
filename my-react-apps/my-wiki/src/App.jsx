import { ColoredMessage } from "./components/ColorMessage";
import { useState } from "react";
import { useEffect } from "react";
import { Cssmodules } from "./components/CssModules";
import { Styledjsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export const App = () => {
  const [num, setNum] = useState(0);

  const styles = {
    title: {
      fontSize: "2rem",
      textAlign: "center",
      display: "block"
    },
    text: {
      fontSize: "1.1rem",
      padding: "5rem 0 0 5rem"
    }
  };

  useEffect(() => {
    alert("update Num!");
  }, [num]);

  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      {/* <h1 style={styles.title}>Welcome to My wiki what`s worked on React!</h1> */}
      {/* <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">Fine! thank you.</ColoredMessage>
      <button onClick={onClickButton}>counter</button>
      <p>{num}</p> */}

      {/* <Cssmodules /> */}
      {/* <Styledjsx /> */}
      {/* <StyledComponents /> */}
      <Emotion />
    </>
  );
}