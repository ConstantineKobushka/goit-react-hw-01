import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const className = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <img className={styles.img} src={avatar} alt={name} width="48" />
      <p className={styles.text}>{name}</p>
      <p className={className}>{isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};

export default FriendListItem;
