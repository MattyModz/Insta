type SingleCommenttStyles = {
  containerStyle: React.CSSProperties;
  heartStyle: React.CSSProperties;
  username: React.CSSProperties;
  textStyle: React.CSSProperties;
};

const styles: SingleCommenttStyles = {
  containerStyle: {
    display: "flex",
    paddingBottom: "0.3rem",
    alignContent: "center",
  },
  heartStyle: {
    alignSelf: "center",
  },
  username: {
    fontWeight: "bold",
    paddingRight: "5px",
  },
  textStyle: {
    flex: 1,
    fontFamily: "Roboto",
  },
};

export default styles;
