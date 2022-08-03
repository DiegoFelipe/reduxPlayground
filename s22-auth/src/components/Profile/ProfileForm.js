import classes from "./ProfileForm.module.css";
import { useContext, useRef } from "react";
import AuthCtx from "../../store/auth-context";
import { FIREBASE_KEY } from "../../consts/firebase";

const ProfileForm = () => {
  const authContext = useContext(AuthCtx);
  const newPassRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPassRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => console.log(data));
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          minLength="7"
          ref={newPassRef}
          type="password"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
