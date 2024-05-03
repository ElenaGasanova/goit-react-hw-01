import s from "./FriendListItem.module.css";
import clsx from "clsx";

console.log(clsx);
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={avatar} alt={name} width="48" />
      <span className={s.title}>{name}</span>
      <span
        className={clsx(s.sub_title, isOnline ? s.is_online : s.is_offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default FriendListItem;
