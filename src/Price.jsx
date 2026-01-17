export default function Price({ price, oldprice }) {
  let oldStyle = {
    textDecorationLine: "line-through",
  };
  let newstyle = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    fontSize: "12px",
    height: "6vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: "19px",
    borderBottomRightRadius: "19px",
  };

  return (
    <div style={styles}>
      <span style={oldStyle}>{price}</span>
      &nbsp; &nbsp;
      <span style={newstyle}>{oldprice}</span>
      <span>hello world</span>
    </div>
  );
}
