export const App = () => {
  const styles = {
    title: {
      color: "red",
      fontSize: "2rem",
      textAlign: "center",
      display: "block"
    },
    text: {
      color: "#323232",
      fontSize: "1.1rem"
    }
  };

  const onClickButton = () => {
    alert("Click Button!");
  };

  return (
    <>
      <h1 style={styles.title}>Welcome to My wiki what`s worked on React!</h1>
      <p style={styles.text}>you can to render dom Elements by empty tags</p>
      <button onClick={onClickButton}>サンプルボタン</button>
    </>
  );
}