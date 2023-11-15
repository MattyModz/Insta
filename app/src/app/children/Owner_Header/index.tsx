import React from "react";
import styles from "./styles";
// import Image from './children/image'
const AccountHeader = (props: any) => {
  const { data } = props;

  return (
    <section style={styles.AccountHeaderContainer}>
      <div>
        <img src={data.owner.profile_pic_url} style={styles.image} alt="alt" />
      </div>

      <div style={styles.NameAndLocationContainer}>
        <p style={styles.username}>{data.owner.username}</p>
        <p style={styles.location}>{data.location.name}</p>
      </div>
    </section>
  );
};

export default AccountHeader;
