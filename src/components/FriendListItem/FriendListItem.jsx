import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friend_item__box}>
      <img src={avatar} alt={name} width='48' />
      <p className={styles.friend_item__name}>{name}</p>
      {isOnline ? (
        <p className={styles.friend_item__online}>Online</p>
      ) : (
        <p className={styles.friend_item__offline}>Offline</p>
      )}
    </div>
  );
}

export default FriendListItem;
