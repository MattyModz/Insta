import React from "react";
import styles from "./styles";
import { getCaptionFromEdges } from "./helpers";

const Image = (props: any) => {
  const { data } = props;
  return (
    <img
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
      loading="lazy"
      title="Image Title"
    />
  );
};

export default Image;
