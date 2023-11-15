import * as React from "react";
import styles from "./styles";
import Image from "./children/image";
import Comments from "./children/Comments";
import LikesPanel from "./children/Likes_panel";
import AccountHeader from "./children/Owner_Header";

// type for data

const App = (props: any) => {
  const { data } = props;

  return (
    <>
      <head>
        {/* <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Description of your page" />
        <meta property="og:image" content={graphImage} />
     */}
      </head>
      <main style={styles.main}>
        <div style={styles.image}>
          <Image data={data} />
        </div>
        <div style={styles.text}>
          <AccountHeader data={data} />
          <Comments data={data} />
          <LikesPanel data={data} />
        </div>
      </main>
    </>
  );
};

export default App;
