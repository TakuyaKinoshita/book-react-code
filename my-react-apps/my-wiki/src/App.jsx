import { ColoredMessage } from "./components/ColorMessage";

export const App = () => {
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

  const onClickButton = () => {
  };

  return (
    <>
      <h1 style={styles.title}>Welcome to My wiki what`s worked on React!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">Fine! thank you.</ColoredMessage>
      <button onClick={onClickButton}>Fine!</button>
    </>
  );
}