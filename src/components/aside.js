import userInfo from "../props/user";

import userPhoto from "./../img/user-photo.png";
import AsideMenu from "./aside-menu";

const Aside = () => {
  return (
    <aside className="aside">
      <section className="aside__navigation">
        <AsideMenu />
        <div className="aside__user">
          <img className="aside__user-photo" alt="img" src={userPhoto}></img>
          <p className="aside__user-name">{userInfo.name}</p>
          <p className="aside__user-position">{userInfo.position}</p>
        </div>
      </section>
    </aside>
  );
};

export default Aside;
