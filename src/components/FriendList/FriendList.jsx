import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map((item) => (
        <li className={styles.friend_item} key={item.id}>
          <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
