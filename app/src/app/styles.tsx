type MainStyles = {
  main: React.CSSProperties;
  image: React.CSSProperties;
  text: React.CSSProperties;
};

const styles: MainStyles = {
  main: {
    border: "1px solid #e6e6e6",
    borderBottomRightRadius: "3px",
    borderTopRightRadius: "3px",
    maxWidth: "935px",
    margin: "16px auto",
    width: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "flex-start",
    fontFamily: "Roboto",
  },
  image: {
    order: 1,
    flex: "1 0 60%",
    alignSelf: "flex-start",
  },
  text: {
    order: 2,
    flex: "1 0 40%",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },
};

export default styles;
