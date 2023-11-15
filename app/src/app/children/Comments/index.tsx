import React from "react";
import styles from "./styles";
import highlightHashtags from "../../utils/ParseHashtagFromString";
// import Image from './children/image'
import Comment from "./Single_comment";
const Comments = (props: any) => {
  const { data } = props;

  return (
    <section style={styles.CommentsContainer}>
      <div style={styles.Comments}>
        <div style={styles.postinfo}>
          {" "}
          <span style={styles.username}>{data.owner.username} </span>
          <span>
            {highlightHashtags(data.edge_media_to_caption.edges[0].node.text)}
          </span>
        </div>
        <section>
          {data.edge_media_to_comment.edges.map((comment: any, index: any) => (
            <Comment key={index} comment={comment} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Comments;
