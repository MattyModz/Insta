type LikesPanel = {
  container: React.CSSProperties;
  heartStyle: React.CSSProperties;
  timeTextStyle: React.CSSProperties;
  likesTextStyle: React.CSSProperties;
};

const styles: LikesPanel = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 0 0 1rem",
  },

  heartStyle: {
    padding: "0 1rem 0 0",
  },

  timeTextStyle: {
    color: "grey",
    margin: "0",
    fontSize: "12px",
    fontWeight: "normal",
    paddingBottom: "5px",
    paddingTop: "5px",
  },

  likesTextStyle: {
    margin: "0",
    fontWeight: "bold",
  },
};

export default styles;
