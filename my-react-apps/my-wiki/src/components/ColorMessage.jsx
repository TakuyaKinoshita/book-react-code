export const ColoredMessage = ({ color, children }) => {
  // const { color, children } = props;

  const copntentStyle = {
    color,
    fontSize: "1.5rem"
  };

  return <p style={copntentStyle}>{children} : propsColor = {color}</p>
}