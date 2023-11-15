import { useState } from "react";
import React from "react";
import styles from "./styles";
import LikeButton from "../like_button";
import useTimeAgo from "./children/TimestampHelper";
const LikesPanel = (props: any) => {
  const { data } = props;
  const [likeCount, setLikeCount] = useState(
    data.edge_media_preview_like.count
  );

  const timeAgo = useTimeAgo(data.taken_at_timestamp);

  function ToggleisLikedCallback(isLiked: Boolean) {
    isLiked === true
      ? setLikeCount(likeCount + 1)
      : setLikeCount(likeCount - 1);
    // in full scale aplication i would mutate the data based on this action
  }

  return (
    <div style={styles.container}>
      <div>
        <p style={styles.likesTextStyle}>{likeCount.toLocaleString()} likes</p>
        <p style={styles.timeTextStyle}>{timeAgo}</p>
      </div>

      <div style={styles.heartStyle}>
        <LikeButton
          likecallback={ToggleisLikedCallback}
          height="25px"
          width="25px"
          liked={data.viewer_has_liked}
        />
      </div>
    </div>
  );
};

export default LikesPanel;
