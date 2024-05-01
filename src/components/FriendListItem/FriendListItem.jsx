// import { friends } from "react";

const FriendListItem = ({ avatar, name, isOnLine }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnLine ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
