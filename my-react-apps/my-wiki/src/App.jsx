export const App = () => {
  const onClickButton = () => {
    alert("Click Button!");
  }

  return (
    <>
      <h1>Welcome to My wiki what`s worked on React!</h1>
      <p>you can to render dom Elements by empty tags</p>
      <button onClick={onClickButton}>サンプルボタン</button>
    </>
  )
}