import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import useForm from "../hooks/useForm";

const Auth = () => {
  const dispatch = useDispatch();

  const {
    value: emailValue,
    hasError: emailHasError,
    valueIsValid: emailValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useForm((value) => value.includes("@"));

  const {
    value: passwordValue,
    hasError: passwordHasError,
    valueIsValid: passwordValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useForm((value) => value.length >= 8);

  const emailInputClasses = emailHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const passwordInputClasses = passwordHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  let formIsValid = false;

  if (emailValid && passwordValid) {
    formIsValid = true;
  }

  const loginHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    emailReset();
    passwordReset();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={emailInputClasses}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={emailValue}
            />
            {emailHasError && (
              <p className={classes.errorText}>Enter valid email!</p>
            )}
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={passwordValue}
            />
            {passwordHasError && (
              <p className={classes.errorText}>Password must be at least 8 characters!</p>
            )}
          </div>
          <button className={classes.button} disabled={!formIsValid}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
