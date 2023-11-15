import React from "react";
import styles from "./styles";
import LikeButton from "../../like_button";
import highlightHashtags from "../../../utils/ParseHashtagFromString";
const Comment = (props: any) => {
  const { comment } = props;

  function ToggleisLikedCallback() {
    /// mutation of data would happen here
  }

  return (
    <div className="textStyle" style={styles.containerStyle}>
      <div style={styles.textStyle}>
        <span style={styles.username}>{comment.node.owner.username}</span>
        <span>{highlightHashtags(comment.node.text)}</span>
      </div>
      <LikeButton
        likecallback={ToggleisLikedCallback}
        height="15px"
        width="15px"
        liked={comment.node.viewer_has_liked}
      />
    </div>
  );
};

export default Comment;
