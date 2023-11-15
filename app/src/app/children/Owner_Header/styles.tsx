type AccountStyles = {
  AccountHeaderContainer: React.CSSProperties;
  image: React.CSSProperties;
  NameAndLocationContainer: React.CSSProperties;
  username: React.CSSProperties;
  location: React.CSSProperties;
};

const styles: AccountStyles = {
  AccountHeaderContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0 1.5rem 0rem 1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid rgba(221, 221, 221, 0.5)",
  },

  image: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    objectFit: "cover",
  },
  NameAndLocationContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "0.5rem",
  },
  username: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  location: {
    margin: "0",
    fontSize: "14px",
    color: "#555",
    fontWeight: "normal",
  },
};

export default styles;
