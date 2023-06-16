import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const navListContent = isAuth ? (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <button onClick={loginHandler}>Login</button>
      </li>
    </ul>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>{navListContent}</nav>
    </header>
  );
};

export default Header;
