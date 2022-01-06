import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside>
      <nav>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/search" activeClassName={s.active}>
            Search
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/bonus" activeClassName={s.active}>
            Bonus
          </NavLink>
        </div>
      </nav>
      <div className={s.asideFriends}>
        <div className={s.asideFriendsHeading}>Best Friends</div>
        <div className={s.asideFriendsItems}>
          <div>
            <NavLink
              to="/julie"
              className={s.asideFriendsItem}
              activeClassName={s.active}
            >
              <div className={s.asideFriendsAva}>
                <img src="https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg" />
              </div>
              <div>Julie</div>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/mila"
              className={s.asideFriendsItem}
              activeClassName={s.active}
            >
              <div className={s.asideFriendsAva}>
                <img src="https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg" />
              </div>
              <div>Mila</div>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/alla"
              className={s.asideFriendsItem}
              activeClassName={s.active}
            >
              <div className={s.asideFriendsAva}>
                <img src="https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg" />
              </div>
              <div>Alla</div>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Aside;
