import logo from "../../uniswap-uni-logo.png";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img className={s.headerImg} src={logo} />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <div>
              <button onClick={props.logOut}>Log Out</button>
            </div>
            <div>{props.login}</div>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
