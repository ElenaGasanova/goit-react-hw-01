import s from "./Profile.module.css";

const Profile = ({
  image,
  location,
  name,
  tag,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <img className={s.image} src={image} alt="User avatar" />
        <h1 className={s.title}>{name}</h1>
        <p className={s.intro_text}>@{tag}</p>
        <p className={s.intro_text}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.text}>Followers</span>
          <span className={s.number}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Views</span>
          <span className={s.number}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Likes</span>
          <span className={s.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
