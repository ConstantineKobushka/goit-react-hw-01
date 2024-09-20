import styles from './Profile.module.css/';

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_img__box}>
        <img className={styles.profile_img} src={image} alt='User avatar' />
        <p className={styles.profile_name}>{name}</p>
        <p className={styles.profile_nikname}>@{tag}</p>
        <p className={styles.profile_location}>{location}</p>
      </div>

      <ul className={styles.profile_list}>
        <li className={styles.profile_item}>
          <span className={styles.profile_item__name}>Followers</span>
          <span className={styles.profile_item__value}>{stats.followers}</span>
        </li>
        <li className={styles.profile_item}>
          <span className={styles.profile_item__name}>Views</span>
          <span className={styles.profile_item__value}>{stats.views}</span>
        </li>
        <li className={styles.profile_item}>
          <span className={styles.profile_item__name}>Likes</span>
          <span className={styles.profile_item__value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
