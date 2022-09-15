export const Styledjsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">This is StyledJsx Component!</p>
        <button className="button">Button</button>
      </div>
      <style jsx>{`
        .container {
          max-width: 700px;
          border: solid 1px #aaa;
          border-radius: 20px;
          padding: 8px;
          margin; 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #aaa;
        }
        .button {
          background-color: #ddd;
          border: none;
          padding: 8px;
          border-radius: 8px
        }
      `}</style>
    </>

  )
  }