import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Welcome to My wiki what`s worked on React!</h1>
      <p>you can to render dom Elements by empty tags</p>
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));