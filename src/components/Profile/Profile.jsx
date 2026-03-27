import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.img} src={image} alt={tag} />
        <p className={styles.name}>{name}</p>
        <p className={styles.nikname}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.itemName}>Followers</span>
          <span className={styles.itemValue}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Views</span>
          <span className={styles.itemValue}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.itemName}>Likes</span>
          <span className={styles.itemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
