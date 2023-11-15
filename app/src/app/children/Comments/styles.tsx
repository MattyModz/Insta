type CommenttStyles = {
  CommentsContainer: React.CSSProperties;

  Comments: React.CSSProperties;
  Divider: React.CSSProperties;
  username: React.CSSProperties;
  postinfo: React.CSSProperties;
};

const styles: CommenttStyles = {
  CommentsContainer: {
    display: "flex",
    marginBottom: "1rem",
  },

  Divider: {
    borderTop: "1px solid #ccc",
  },

  username: {
    fontWeight: "bold",
    marginRight: "0.5rem",
  },

  Comments: {
    overflowY: "scroll",
    height: "18rem",
    padding: "1rem",
  },
  postinfo: {
    paddingBottom: "0.5rem",
  },
};

export default styles;
